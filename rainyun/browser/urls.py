"""URL 构建工具。"""

from rainyun.config import Config


def build_app_url(config: Config, path: str) -> str:
    return f"{config.app_base_url}/{path.lstrip('/')}"
