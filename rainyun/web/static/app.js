const tokenKey = "rainyun_token";
const loginPanel = document.getElementById("login-panel");
const dashboard = document.getElementById("dashboard");
const loginBtn = document.getElementById("login-btn");
const loginPassword = document.getElementById("login-password");
const logoutBtn = document.getElementById("logout-btn");
const toast = document.getElementById("toast");

const accountsBody = document.getElementById("accounts-body");
const refreshAccountsBtn = document.getElementById("refresh-accounts");
const checkinBtn = document.getElementById("checkin-btn");
const renewBtn = document.getElementById("renew-btn");
const resetFormBtn = document.getElementById("reset-form");
const saveAccountBtn = document.getElementById("save-account");
const accountFormTitle = document.getElementById("account-form-title");
const toggleAccountFormBtn = document.getElementById("toggle-account-form");
const accountFormBody = document.getElementById("account-form-body");

const tabButtons = document.querySelectorAll(".tab-btn");
const tabMain = document.getElementById("tab-main");
const tabLogs = document.getElementById("tab-logs");
const logOutput = document.getElementById("log-output");
const logAutoRefresh = document.getElementById("log-auto-refresh");
const refreshLogsBtn = document.getElementById("refresh-logs");

const accountName = document.getElementById("account-name");
const accountUsername = document.getElementById("account-username");
const accountPassword = document.getElementById("account-password");
const accountApiKey = document.getElementById("account-api-key");
const accountRenew = document.getElementById("account-renew");
const accountEnabled = document.getElementById("account-enabled");

const settingAutoRenew = document.getElementById("setting-auto-renew");
const settingRenewDays = document.getElementById("setting-renew-days");
const settingCron = document.getElementById("setting-cron");
const cronMode = document.getElementById("cron-mode");
const cronHour = document.getElementById("cron-hour");
const cronMinute = document.getElementById("cron-minute");
const cronWeekday = document.getElementById("cron-weekday");
const cronMonthday = document.getElementById("cron-monthday");
const cronPreview = document.getElementById("cron-preview");
const cronNext = document.getElementById("cron-next");
const settingTimeout = document.getElementById("setting-timeout");
const settingMaxDelay = document.getElementById("setting-max-delay");
const settingDebug = document.getElementById("setting-debug");
const settingRequestTimeout = document.getElementById("setting-request-timeout");
const settingMaxRetries = document.getElementById("setting-max-retries");
const settingRetryDelay = document.getElementById("setting-retry-delay");
const settingDownloadTimeout = document.getElementById("setting-download-timeout");
const settingDownloadMaxRetries = document.getElementById("setting-download-max-retries");
const settingDownloadRetryDelay = document.getElementById("setting-download-retry-delay");
const settingCaptchaRetryLimit = document.getElementById("setting-captcha-retry-limit");
const settingCaptchaRetryUnlimited = document.getElementById("setting-captcha-retry-unlimited");
const settingCaptchaSaveSamples = document.getElementById("setting-captcha-save-samples");
const settingSkipPushTitle = document.getElementById("setting-skip-push-title");
const settingNotifyConfig = document.getElementById("setting-notify-config");
const saveSettingsBtn = document.getElementById("save-settings");

let editingId = null;
let logTimer = null;

function getToken() {
  return localStorage.getItem(tokenKey);
}

function setToken(token) {
  if (token) {
    localStorage.setItem(tokenKey, token);
  } else {
    localStorage.removeItem(tokenKey);
  }
}

function showToast(message, type = "success") {
  toast.textContent = message;
  toast.className = `toast ${type}`;
  toast.classList.remove("hidden");
  setTimeout(() => toast.classList.add("hidden"), 2800);
}

function readNumberValue(input, fallback) {
  const raw = input.value.trim();
  if (!raw) {
    return fallback;
  }
  const value = Number(raw);
  return Number.isFinite(value) ? value : fallback;
}

function fillSelect(select, start, end, labelFn) {
  select.innerHTML = "";
  for (let i = start; i <= end; i += 1) {
    const option = document.createElement("option");
    option.value = String(i);
    option.textContent = labelFn ? labelFn(i) : String(i);
    select.appendChild(option);
  }
}

function initCronOptions() {
  if (!cronMode) return;
  const modes = [
    { value: "daily", label: "每天" },
    { value: "weekly", label: "每周" },
    { value: "monthly", label: "每月" },
    { value: "custom", label: "自定义" },
  ];
  cronMode.innerHTML = "";
  modes.forEach((item) => {
    const option = document.createElement("option");
    option.value = item.value;
    option.textContent = item.label;
    cronMode.appendChild(option);
  });
  fillSelect(cronHour, 0, 23, (v) => `${v}点`);
  fillSelect(cronMinute, 0, 59, (v) => `${v}分`);
  cronWeekday.innerHTML = "";
  const weekdays = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
  weekdays.forEach((label, index) => {
    const option = document.createElement("option");
    option.value = String(index);
    option.textContent = label;
    cronWeekday.appendChild(option);
  });
  fillSelect(cronMonthday, 1, 31, (v) => `${v}号`);
}

function updateCronModeUI() {
  if (!cronMode) return;
  const mode = cronMode.value;
  const isCustom = mode === "custom";
  cronHour.classList.toggle("hidden", isCustom);
  cronMinute.classList.toggle("hidden", isCustom);
  cronWeekday.classList.toggle("hidden", mode !== "weekly");
  cronMonthday.classList.toggle("hidden", mode !== "monthly");
  settingCron.classList.toggle("hidden", !isCustom);
}

function buildCronFromUI() {
  if (!cronMode) return settingCron.value.trim() || "0 8 * * *";
  const mode = cronMode.value;
  if (mode === "custom") {
    return settingCron.value.trim() || "0 8 * * *";
  }
  const minute = cronMinute.value || "0";
  const hour = cronHour.value || "8";
  if (mode === "weekly") {
    const weekday = cronWeekday.value || "0";
    return `${minute} ${hour} * * ${weekday}`;
  }
  if (mode === "monthly") {
    const monthday = cronMonthday.value || "1";
    return `${minute} ${hour} ${monthday} * *`;
  }
  return `${minute} ${hour} * * *`;
}

function parseCronToUI(cronText) {
  if (!cronMode) return;
  const raw = (cronText || "").trim();
  const parts = raw.split(/\s+/);
  if (parts.length < 5) {
    cronMode.value = "custom";
    settingCron.value = raw || "0 8 * * *";
    updateCronModeUI();
    return;
  }
  const [minute, hour, monthday, month, weekday] = parts;
  if (monthday !== "*" && month === "*" && (weekday === "*" || weekday === "?")) {
    cronMode.value = "monthly";
    cronMinute.value = minute;
    cronHour.value = hour;
    cronMonthday.value = monthday;
  } else if (weekday !== "*" && (monthday === "*" || monthday === "?")) {
    cronMode.value = "weekly";
    cronMinute.value = minute;
    cronHour.value = hour;
    cronWeekday.value = weekday === "7" ? "0" : weekday;
  } else if (monthday === "*" && weekday === "*") {
    cronMode.value = "daily";
    cronMinute.value = minute;
    cronHour.value = hour;
  } else {
    cronMode.value = "custom";
    settingCron.value = raw;
  }
  updateCronModeUI();
}

function formatDate(date) {
  return date.toLocaleString("zh-CN", {
    hour12: false,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function getNextDaily(hour, minute) {
  const now = new Date();
  const next = new Date(now);
  next.setHours(hour, minute, 0, 0);
  if (next <= now) {
    next.setDate(next.getDate() + 1);
  }
  return next;
}

function getNextWeekly(hour, minute, weekday) {
  const now = new Date();
  const next = new Date(now);
  next.setHours(hour, minute, 0, 0);
  const target = Number(weekday);
  let diff = (target - next.getDay() + 7) % 7;
  if (diff === 0 && next <= now) {
    diff = 7;
  }
  next.setDate(next.getDate() + diff);
  return next;
}

function getNextMonthly(base, hour, minute, day) {
  let year = base.getFullYear();
  let month = base.getMonth();
  for (let i = 0; i < 24; i += 1) {
    const candidate = new Date(year, month, day, hour, minute, 0, 0);
    if (candidate.getMonth() !== month) {
      month += 1;
      if (month > 11) {
        month = 0;
        year += 1;
      }
      continue;
    }
    if (candidate > base) {
      return candidate;
    }
    month += 1;
    if (month > 11) {
      month = 0;
      year += 1;
    }
  }
  return null;
}

function updateCronPreview() {
  if (!cronMode) return;
  const cron = buildCronFromUI();
  cronPreview.textContent = cron;
  if (cronMode.value === "custom") {
    cronNext.textContent = "自定义模式不计算执行时间";
    return;
  }
  const hour = Number(cronHour.value || 0);
  const minute = Number(cronMinute.value || 0);
  let first = null;
  let second = null;
  if (cronMode.value === "daily") {
    first = getNextDaily(hour, minute);
    second = new Date(first);
    second.setDate(first.getDate() + 1);
  } else if (cronMode.value === "weekly") {
    first = getNextWeekly(hour, minute, cronWeekday.value || "0");
    second = new Date(first);
    second.setDate(first.getDate() + 7);
  } else if (cronMode.value === "monthly") {
    const day = Number(cronMonthday.value || 1);
    first = getNextMonthly(new Date(), hour, minute, day);
    if (first) {
      second = getNextMonthly(first, hour, minute, day);
    }
  }
  if (first && second) {
    cronNext.textContent = `下一次: ${formatDate(first)} | 下下次: ${formatDate(second)}`;
  } else if (first) {
    cronNext.textContent = `下一次: ${formatDate(first)}`;
  } else {
    cronNext.textContent = "未能计算执行时间";
  }
}

async function apiFetch(path, options = {}) {
  const headers = options.headers || {};
  const token = getToken();
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }
  headers["Content-Type"] = "application/json";
  const response = await fetch(path, { ...options, headers });
  const payload = await response.json().catch(() => ({}));
  if (response.status === 401) {
    setToken(null);
    showLogin();
    throw new Error(payload.message || "未授权");
  }
  if (!response.ok || payload.code !== 0) {
    throw new Error(payload.message || "请求失败");
  }
  return payload.data;
}

function showLogin() {
  loginPanel.classList.remove("hidden");
  dashboard.classList.add("hidden");
  logoutBtn.classList.add("hidden");
}

function showDashboard() {
  loginPanel.classList.add("hidden");
  dashboard.classList.remove("hidden");
  logoutBtn.classList.remove("hidden");
}

async function handleLogin() {
  const password = loginPassword.value.trim();
  if (!password) {
    showToast("请输入密码", "error");
    return;
  }
  try {
    const data = await apiFetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ password }),
    });
    setToken(data.token);
    showToast("登录成功");
    loginPassword.value = "";
    await loadAll();
    showDashboard();
  } catch (err) {
    showToast(err.message || "登录失败", "error");
  }
}

async function loadAccounts() {
  const accounts = await apiFetch("/api/accounts");
  accountsBody.innerHTML = "";
  accounts.forEach((account) => {
    const row = document.createElement("tr");
    const canRenew = !!account.api_key;
    row.innerHTML = `
      <td>${account.name || account.id}</td>
      <td>${account.enabled ? "是" : "否"}</td>
      <td>${account.last_status || "-"}</td>
      <td>${account.last_checkin || "-"}</td>
      <td>
        <button class="ghost-btn" data-action="checkin" data-id="${account.id}">签到</button>
        <button class="ghost-btn" data-action="renew" data-id="${account.id}" ${canRenew ? "" : "disabled"}>续费</button>
        <button class="ghost-btn" data-action="edit" data-id="${account.id}">编辑</button>
        <button class="ghost-btn" data-action="delete" data-id="${account.id}">删除</button>
      </td>
    `;
    accountsBody.appendChild(row);
  });
}

async function loadSettings() {
  const settings = await apiFetch("/api/system/settings");
  settingAutoRenew.checked = !!settings.auto_renew;
  settingRenewDays.value = settings.renew_threshold_days || 7;
  const cronValue = settings.cron_schedule || "0 8 * * *";
  settingCron.value = cronValue;
  parseCronToUI(cronValue);
  updateCronPreview();
  settingTimeout.value = settings.timeout ?? 15;
  settingMaxDelay.value = settings.max_delay ?? 90;
  settingDebug.checked = !!settings.debug;
  settingRequestTimeout.value = settings.request_timeout ?? 15;
  settingMaxRetries.value = settings.max_retries ?? 3;
  settingRetryDelay.value = settings.retry_delay ?? 2;
  settingDownloadTimeout.value = settings.download_timeout ?? 10;
  settingDownloadMaxRetries.value = settings.download_max_retries ?? 3;
  settingDownloadRetryDelay.value = settings.download_retry_delay ?? 2;
  settingCaptchaRetryLimit.value = settings.captcha_retry_limit ?? 5;
  settingCaptchaRetryUnlimited.checked = !!settings.captcha_retry_unlimited;
  settingCaptchaSaveSamples.checked = !!settings.captcha_save_samples;
  settingSkipPushTitle.value = settings.skip_push_title || "";
  const notifyConfig = settings.notify_config || {};
  settingNotifyConfig.value = JSON.stringify(notifyConfig, null, 2);
}

async function loadAll() {
  await Promise.all([loadAccounts(), loadSettings()]);
}

function setAccountFormVisible(visible) {
  if (!accountFormBody) return;
  accountFormBody.classList.toggle("hidden", !visible);
  resetFormBtn.classList.toggle("hidden", !visible);
  toggleAccountFormBtn.textContent = visible ? "收起" : "添加新账户";
}

function resetForm() {
  editingId = null;
  accountFormTitle.textContent = "新增账户";
  accountName.value = "";
  accountUsername.value = "";
  accountPassword.value = "";
  accountApiKey.value = "";
  accountRenew.value = "";
  accountEnabled.checked = true;
}

function fillForm(account) {
  editingId = account.id;
  accountFormTitle.textContent = `编辑账户 ${account.name || account.id}`;
  accountName.value = account.name || "";
  accountUsername.value = account.username || "";
  accountPassword.value = account.password || "";
  accountApiKey.value = account.api_key || "";
  accountRenew.value = (account.renew_products || []).join(",");
  accountEnabled.checked = !!account.enabled;
  setAccountFormVisible(true);
}

async function saveAccount() {
  const payload = {
    name: accountName.value.trim(),
    username: accountUsername.value.trim(),
    password: accountPassword.value.trim(),
    api_key: accountApiKey.value.trim(),
    renew_products: accountRenew.value
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean)
      .map((item) => Number(item)),
    enabled: accountEnabled.checked,
  };
  try {
    if (editingId) {
      await apiFetch(`/api/accounts/${editingId}`, {
        method: "PUT",
        body: JSON.stringify(payload),
      });
      showToast("账户已更新");
    } else {
      await apiFetch("/api/accounts", {
        method: "POST",
        body: JSON.stringify(payload),
      });
      showToast("账户已新增");
    }
    resetForm();
    setAccountFormVisible(false);
    await loadAccounts();
  } catch (err) {
    showToast(err.message || "保存失败", "error");
  }
}

async function deleteAccount(id) {
  if (!confirm("确认删除该账户吗？")) {
    return;
  }
  try {
    await apiFetch(`/api/accounts/${id}`, { method: "DELETE" });
    showToast("账户已删除");
    await loadAccounts();
  } catch (err) {
    showToast(err.message || "删除失败", "error");
  }
}

async function runCheckin() {
  try {
    const results = await apiFetch("/api/actions/checkin", { method: "POST" });
    showToast(`执行完成，共${results.length}个账户`);
    await loadAccounts();
  } catch (err) {
    showToast(err.message || "签到失败", "error");
  }
}

async function runCheckinForAccount(id) {
  try {
    await apiFetch(`/api/actions/checkin/${id}`, { method: "POST" });
    showToast("签到已触发");
    await loadAccounts();
  } catch (err) {
    showToast(err.message || "签到失败", "error");
  }
}

async function runRenewAll() {
  if (!confirm("确认对所有有 API Key 的账号执行续费吗？")) {
    return;
  }
  try {
    const results = await apiFetch("/api/actions/renew", { method: "POST" });
    showToast(`续费已触发，共${results.length}个账号`);
  } catch (err) {
    showToast(err.message || "续费失败", "error");
  }
}

async function runRenewForAccount(id) {
  if (!confirm("确认对该账号执行续费吗？")) {
    return;
  }
  try {
    await apiFetch(`/api/actions/renew/${id}`, { method: "POST" });
    showToast("续费已触发");
  } catch (err) {
    showToast(err.message || "续费失败", "error");
  }
}

async function loadLogs() {
  if (!logOutput) return;
  try {
    const lines = await apiFetch("/api/logs?limit=200");
    logOutput.textContent = lines.join("\n");
    logOutput.scrollTop = logOutput.scrollHeight;
  } catch (err) {
    showToast(err.message || "日志获取失败", "error");
  }
}

function startLogPolling() {
  if (logTimer) return;
  logTimer = setInterval(loadLogs, 2000);
}

function stopLogPolling() {
  if (!logTimer) return;
  clearInterval(logTimer);
  logTimer = null;
}

function switchTab(tabName) {
  if (!tabMain || !tabLogs) return;
  tabButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.tab === tabName);
  });
  tabMain.classList.toggle("hidden", tabName !== "main");
  tabLogs.classList.toggle("hidden", tabName !== "logs");
  if (tabName === "logs") {
    loadLogs();
    if (logAutoRefresh && logAutoRefresh.checked) {
      startLogPolling();
    }
  } else {
    stopLogPolling();
  }
}

async function saveSettings() {
  let notifyConfig = {};
  const notifyRaw = settingNotifyConfig.value.trim();
  if (notifyRaw) {
    try {
      notifyConfig = JSON.parse(notifyRaw);
    } catch (err) {
      showToast("通知配置 JSON 无效", "error");
      return;
    }
    if (typeof notifyConfig !== "object" || Array.isArray(notifyConfig)) {
      showToast("通知配置需为对象", "error");
      return;
    }
  }
  const cronSchedule = buildCronFromUI();
  settingCron.value = cronSchedule;
  updateCronPreview();
  const payload = {
    auto_renew: settingAutoRenew.checked,
    renew_threshold_days: readNumberValue(settingRenewDays, 7),
    cron_schedule: cronSchedule || "0 8 * * *",
    timeout: readNumberValue(settingTimeout, 15),
    max_delay: readNumberValue(settingMaxDelay, 90),
    debug: settingDebug.checked,
    request_timeout: readNumberValue(settingRequestTimeout, 15),
    max_retries: readNumberValue(settingMaxRetries, 3),
    retry_delay: readNumberValue(settingRetryDelay, 2),
    download_timeout: readNumberValue(settingDownloadTimeout, 10),
    download_max_retries: readNumberValue(settingDownloadMaxRetries, 3),
    download_retry_delay: readNumberValue(settingDownloadRetryDelay, 2),
    captcha_retry_limit: readNumberValue(settingCaptchaRetryLimit, 5),
    captcha_retry_unlimited: settingCaptchaRetryUnlimited.checked,
    captcha_save_samples: settingCaptchaSaveSamples.checked,
    skip_push_title: settingSkipPushTitle.value.trim(),
    notify_config: notifyConfig,
  };
  try {
    await apiFetch("/api/system/settings", {
      method: "PUT",
      body: JSON.stringify(payload),
    });
    showToast("设置已保存");
  } catch (err) {
    showToast(err.message || "保存失败", "error");
  }
}

accountsBody.addEventListener("click", async (event) => {
  const action = event.target.getAttribute("data-action");
  const id = event.target.getAttribute("data-id");
  if (!action || !id) return;
  if (event.target.disabled) return;
  if (action === "edit") {
    const accounts = await apiFetch("/api/accounts");
    const account = accounts.find((item) => item.id === id);
    if (account) {
      fillForm(account);
    }
  }
  if (action === "delete") {
    await deleteAccount(id);
  }
  if (action === "checkin") {
    await runCheckinForAccount(id);
  }
  if (action === "renew") {
    await runRenewForAccount(id);
  }
});

loginBtn.addEventListener("click", handleLogin);
logoutBtn.addEventListener("click", () => {
  setToken(null);
  showLogin();
});
refreshAccountsBtn.addEventListener("click", loadAccounts);
checkinBtn.addEventListener("click", runCheckin);
renewBtn.addEventListener("click", runRenewAll);
resetFormBtn.addEventListener("click", resetForm);
saveAccountBtn.addEventListener("click", saveAccount);
saveSettingsBtn.addEventListener("click", saveSettings);

toggleAccountFormBtn.addEventListener("click", () => {
  const isHidden = accountFormBody.classList.contains("hidden");
  if (isHidden) {
    resetForm();
    setAccountFormVisible(true);
  } else {
    setAccountFormVisible(false);
  }
});

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    switchTab(button.dataset.tab);
  });
});

if (refreshLogsBtn) {
  refreshLogsBtn.addEventListener("click", loadLogs);
}
if (logAutoRefresh) {
  logAutoRefresh.addEventListener("change", () => {
    if (logAutoRefresh.checked && !tabLogs.classList.contains("hidden")) {
      startLogPolling();
    } else {
      stopLogPolling();
    }
  });
}

if (cronMode) {
  cronMode.addEventListener("change", () => {
    updateCronModeUI();
    updateCronPreview();
  });
  [cronHour, cronMinute, cronWeekday, cronMonthday].forEach((item) => {
    item.addEventListener("change", updateCronPreview);
  });
  settingCron.addEventListener("input", updateCronPreview);
}

initCronOptions();
updateCronModeUI();
setAccountFormVisible(false);
switchTab("main");

if (getToken()) {
  loadAll()
    .then(showDashboard)
    .catch(() => showLogin());
} else {
  showLogin();
}
