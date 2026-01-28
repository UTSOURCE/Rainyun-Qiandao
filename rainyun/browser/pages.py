"""页面对象封装。"""

import logging
import re
import time
from typing import Callable

from selenium.common.exceptions import TimeoutException
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC

from rainyun.browser.cookies import save_cookies
from rainyun.browser.locators import XPATH_CONFIG
from rainyun.browser.session import RuntimeContext
from rainyun.browser.urls import build_app_url

logger = logging.getLogger(__name__)
CaptchaHandler = Callable[[RuntimeContext], bool]


class LoginPage:
    def __init__(self, ctx: RuntimeContext, captcha_handler: CaptchaHandler) -> None:
        self.ctx = ctx
        self.captcha_handler = captcha_handler

    def check_login_status(self) -> bool:
        """检查是否已登录。"""
        self.ctx.driver.get(build_app_url(self.ctx.config, "/dashboard"))
        time.sleep(3)
        # 如果跳转到登录页面，说明 cookie 失效
        if "login" in self.ctx.driver.current_url:
            logger.info("Cookie 已失效，需要重新登录")
            return False
        # 检查是否成功加载 dashboard
        if self.ctx.driver.current_url == build_app_url(self.ctx.config, "/dashboard"):
            logger.info("Cookie 有效，已登录")
            return True
        return False

    def login(self, user: str, pwd: str) -> bool:
        """执行登录流程。"""
        logger.info("发起登录请求")
        self.ctx.driver.get(build_app_url(self.ctx.config, "/auth/login"))
        try:
            username = self.ctx.wait.until(EC.visibility_of_element_located((By.NAME, "login-field")))
            password = self.ctx.wait.until(EC.visibility_of_element_located((By.NAME, "login-password")))
            # 优化：使用文本和类型定位登录按钮，增强稳定性
            login_button = self.ctx.wait.until(
                EC.visibility_of_element_located((By.XPATH, XPATH_CONFIG["LOGIN_BTN"]))
            )
            username.send_keys(user)
            password.send_keys(pwd)
            login_button.click()
        except TimeoutException:
            logger.error("页面加载超时，请尝试延长超时时间或切换到国内网络环境！")
            return False
        try:
            self.ctx.wait.until(EC.visibility_of_element_located((By.ID, "tcaptcha_iframe_dy")))
            logger.warning("触发验证码！")
            self.ctx.driver.switch_to.frame("tcaptcha_iframe_dy")
            if not self.captcha_handler(self.ctx):
                logger.error("登录验证码识别失败")
                return False
        except TimeoutException:
            logger.info("未触发验证码")
        time.sleep(2)  # 给页面一点点缓冲时间
        self.ctx.driver.switch_to.default_content()
        try:
            # 使用显式等待检测登录是否成功（通过判断 URL 变化）
            self.ctx.wait.until(EC.url_contains("dashboard"))
            logger.info("登录成功！")
            save_cookies(self.ctx.driver, self.ctx.config)
            return True
        except TimeoutException:
            logger.error(f"登录超时或失败！当前 URL: {self.ctx.driver.current_url}")
            return False


class RewardPage:
    def __init__(self, ctx: RuntimeContext, captcha_handler: CaptchaHandler) -> None:
        self.ctx = ctx
        self.captcha_handler = captcha_handler

    def open(self) -> None:
        self.ctx.driver.get(build_app_url(self.ctx.config, "/account/reward/earn"))

    def handle_daily_reward(self, start_points: int) -> None:
        self.open()
        try:
            # 使用显示等待寻找按钮
            earn = self.ctx.wait.until(
                EC.presence_of_element_located((By.XPATH, XPATH_CONFIG["SIGN_IN_BTN"]))
            )
            logger.info("点击赚取积分")
            earn.click()
        except TimeoutException:
            already_signed_patterns = ["已领取", "已完成", "已签到", "明日再来"]
            page_source = self.ctx.driver.page_source
            for pattern in already_signed_patterns:
                if pattern in page_source:
                    logger.info(f"今日已签到（检测到：{pattern}），跳过签到流程")
                    self._log_points(start_points)
                    return
            raise Exception("未找到签到按钮，且未检测到已签到状态，可能页面结构已变更")

        logger.info("处理验证码")
        self.ctx.driver.switch_to.frame("tcaptcha_iframe_dy")
        if not self.captcha_handler(self.ctx):
            logger.error(f"验证码重试次数过多，任务失败。当前页面状态: {self.ctx.driver.current_url}")
            raise Exception("验证码识别重试次数过多，签到失败")
        self.ctx.driver.switch_to.default_content()
        self._log_points(start_points)

    def _log_points(self, start_points: int) -> None:
        try:
            current_points = self.ctx.api.get_user_points()
            earned = current_points - start_points
            logger.info(
                f"当前剩余积分: {current_points} (本次获得 {earned} 分) | 约为 {current_points / self.ctx.config.points_to_cny_rate:.2f} 元"
            )
        except Exception:
            logger.info("无法通过 API 获取当前积分信息")
