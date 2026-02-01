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
const clearLogsBtn = document.getElementById("clear-logs");

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
const saveSettingsBtn = document.getElementById("save-settings");

const notifyBody = document.getElementById("notify-body");
const addNotifyBtn = document.getElementById("add-notify");
const notifyForm = document.getElementById("notify-form");
const notifyName = document.getElementById("notify-name");
const notifyType = document.getElementById("notify-type");
const notifyEnabled = document.getElementById("notify-enabled");
const notifyPushKey = document.getElementById("notify-push-key");
const notifyTgToken = document.getElementById("notify-tg-token");
const notifyTgUser = document.getElementById("notify-tg-user");
const notifyTgHost = document.getElementById("notify-tg-host");
const notifyPushPlusToken = document.getElementById("notify-pushplus-token");
const notifyPushPlusUser = document.getElementById("notify-pushplus-user");
const notifyPushPlusTemplate = document.getElementById("notify-pushplus-template");
const notifyPushPlusChannel = document.getElementById("notify-pushplus-channel");
const notifyPushPlusWebhook = document.getElementById("notify-pushplus-webhook");
const notifyPushPlusCallback = document.getElementById("notify-pushplus-callback");
const notifyPushPlusTo = document.getElementById("notify-pushplus-to");
const notifyBarkPush = document.getElementById("notify-bark-push");
const notifyBarkArchive = document.getElementById("notify-bark-archive");
const notifyBarkGroup = document.getElementById("notify-bark-group");
const notifyBarkSound = document.getElementById("notify-bark-sound");
const notifyBarkIcon = document.getElementById("notify-bark-icon");
const notifyBarkLevel = document.getElementById("notify-bark-level");
const notifyBarkUrl = document.getElementById("notify-bark-url");
const notifyTgProxyHost = document.getElementById("notify-tg-proxy-host");
const notifyTgProxyPort = document.getElementById("notify-tg-proxy-port");
const notifyTgProxyAuth = document.getElementById("notify-tg-proxy-auth");
const notifyDdToken = document.getElementById("notify-dd-token");
const notifyDdSecret = document.getElementById("notify-dd-secret");
const notifyFsKey = document.getElementById("notify-fs-key");
const notifyFsSecret = document.getElementById("notify-fs-secret");
const notifyGobotUrl = document.getElementById("notify-gobot-url");
const notifyGobotQq = document.getElementById("notify-gobot-qq");
const notifyGobotToken = document.getElementById("notify-gobot-token");
const notifyGotifyUrl = document.getElementById("notify-gotify-url");
const notifyGotifyToken = document.getElementById("notify-gotify-token");
const notifyGotifyPriority = document.getElementById("notify-gotify-priority");
const notifyIgotKey = document.getElementById("notify-igot-key");
const notifyDeerKey = document.getElementById("notify-deer-key");
const notifyDeerUrl = document.getElementById("notify-deer-url");
const notifyChatUrl = document.getElementById("notify-chat-url");
const notifyChatToken = document.getElementById("notify-chat-token");
const notifyWeplusToken = document.getElementById("notify-weplus-token");
const notifyWeplusReceiver = document.getElementById("notify-weplus-receiver");
const notifyWeplusVersion = document.getElementById("notify-weplus-version");
const notifyQmsgKey = document.getElementById("notify-qmsg-key");
const notifyQmsgType = document.getElementById("notify-qmsg-type");
const notifyWecomAm = document.getElementById("notify-wecom-am");
const notifyWecomOrigin = document.getElementById("notify-wecom-origin");
const notifyWecomKey = document.getElementById("notify-wecom-key");
const notifyWecomBotOrigin = document.getElementById("notify-wecom-bot-origin");
const notifyAibotkKey = document.getElementById("notify-aibotk-key");
const notifyAibotkType = document.getElementById("notify-aibotk-type");
const notifyAibotkName = document.getElementById("notify-aibotk-name");
const notifySmtpServer = document.getElementById("notify-smtp-server");
const notifySmtpSsl = document.getElementById("notify-smtp-ssl");
const notifySmtpEmail = document.getElementById("notify-smtp-email");
const notifySmtpPassword = document.getElementById("notify-smtp-password");
const notifySmtpName = document.getElementById("notify-smtp-name");
const notifyPushmeKey = document.getElementById("notify-pushme-key");
const notifyPushmeUrl = document.getElementById("notify-pushme-url");
const notifyPushmeDate = document.getElementById("notify-pushme-date");
const notifyPushmeType = document.getElementById("notify-pushme-type");
const notifyChronocatUrl = document.getElementById("notify-chronocat-url");
const notifyChronocatToken = document.getElementById("notify-chronocat-token");
const notifyChronocatQq = document.getElementById("notify-chronocat-qq");
const notifyNtfyUrl = document.getElementById("notify-ntfy-url");
const notifyNtfyTopic = document.getElementById("notify-ntfy-topic");
const notifyNtfyPriority = document.getElementById("notify-ntfy-priority");
const notifyNtfyToken = document.getElementById("notify-ntfy-token");
const notifyNtfyUsername = document.getElementById("notify-ntfy-username");
const notifyNtfyPassword = document.getElementById("notify-ntfy-password");
const notifyNtfyActions = document.getElementById("notify-ntfy-actions");
const notifyWxpusherToken = document.getElementById("notify-wxpusher-token");
const notifyWxpusherTopic = document.getElementById("notify-wxpusher-topic");
const notifyWxpusherUids = document.getElementById("notify-wxpusher-uids");
const notifyWebhookUrl = document.getElementById("notify-webhook-url");
const notifyWebhookMethod = document.getElementById("notify-webhook-method");
const notifyWebhookContentType = document.getElementById("notify-webhook-content-type");
const notifyWebhookHeaders = document.getElementById("notify-webhook-headers");
const notifyWebhookBody = document.getElementById("notify-webhook-body");
const notifyCustomConfig = document.getElementById("notify-custom-config");
const saveNotifyBtn = document.getElementById("save-notify");
const cancelNotifyBtn = document.getElementById("cancel-notify");

let editingId = null;
let editingNotifyId = null;
let notifyChannels = [];
let savingSettings = false;
let logTimer = null;
let accountsCache = [];

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

function maskValue(raw) {
  if (!raw) return "";
  if (raw.length <= 6) return raw;
  return `${raw.slice(0, 3)}***${raw.slice(-3)}`;
}

function normalizeNotifyChannels(settings) {
  const raw = settings.notify_channels;
  if (Array.isArray(raw) && raw.length) {
    return raw.map((item) => ({
      id: item.id || `notify_${Date.now()}_${Math.random().toString(16).slice(2, 8)}`,
      name: item.name || "",
      type: item.type || "custom",
      enabled: item.enabled !== false,
      config: typeof item.config === "object" && item.config ? item.config : {},
    }));
  }
  return buildChannelsFromLegacy(settings.notify_config || {});
}

function buildChannelsFromLegacy(config) {
  const channels = [];
  if (!config || typeof config !== "object") {
    return channels;
  }
  const legacy = { ...config };
  const take = (keys) => {
    const cfg = {};
    keys.forEach((key) => {
      if (legacy[key] !== undefined && legacy[key] !== "") {
        cfg[key] = String(legacy[key]);
        delete legacy[key];
      }
    });
    return cfg;
  };
  if (legacy.CONSOLE && ["true", true, 1, "1"].includes(legacy.CONSOLE)) {
    channels.push({
      id: `notify_${Date.now()}_console`,
      name: "控制台",
      type: "console",
      enabled: true,
      config: { CONSOLE: "true" },
    });
    delete legacy.CONSOLE;
  }
  if (legacy.PUSH_KEY) {
    channels.push({
      id: `notify_${Date.now()}_serverj`,
      name: "Server酱",
      type: "serverj",
      enabled: true,
      config: { PUSH_KEY: String(legacy.PUSH_KEY) },
    });
    delete legacy.PUSH_KEY;
  }
  if (legacy.TG_BOT_TOKEN && legacy.TG_USER_ID) {
    const tgConfig = take([
      "TG_BOT_TOKEN",
      "TG_USER_ID",
      "TG_API_HOST",
      "TG_PROXY_HOST",
      "TG_PROXY_PORT",
      "TG_PROXY_AUTH",
    ]);
    channels.push({
      id: `notify_${Date.now()}_telegram`,
      name: "Telegram",
      type: "telegram",
      enabled: true,
      config: tgConfig,
    });
  }
  if (legacy.PUSH_PLUS_TOKEN) {
    const pushPlusConfig = take([
      "PUSH_PLUS_TOKEN",
      "PUSH_PLUS_USER",
      "PUSH_PLUS_TEMPLATE",
      "PUSH_PLUS_CHANNEL",
      "PUSH_PLUS_WEBHOOK",
      "PUSH_PLUS_CALLBACKURL",
      "PUSH_PLUS_TO",
    ]);
    channels.push({
      id: `notify_${Date.now()}_pushplus`,
      name: "PushPlus",
      type: "pushplus",
      enabled: true,
      config: pushPlusConfig,
    });
  }
  if (legacy.BARK_PUSH) {
    const barkConfig = take([
      "BARK_PUSH",
      "BARK_ARCHIVE",
      "BARK_GROUP",
      "BARK_SOUND",
      "BARK_ICON",
      "BARK_LEVEL",
      "BARK_URL",
    ]);
    channels.push({
      id: `notify_${Date.now()}_bark`,
      name: "Bark",
      type: "bark",
      enabled: true,
      config: barkConfig,
    });
  }
  if (legacy.DD_BOT_TOKEN && legacy.DD_BOT_SECRET) {
    channels.push({
      id: `notify_${Date.now()}_dingding`,
      name: "钉钉机器人",
      type: "dingding_bot",
      enabled: true,
      config: take(["DD_BOT_TOKEN", "DD_BOT_SECRET"]),
    });
  }
  if (legacy.FSKEY) {
    channels.push({
      id: `notify_${Date.now()}_feishu`,
      name: "飞书机器人",
      type: "feishu_bot",
      enabled: true,
      config: take(["FSKEY", "FSSECRET"]),
    });
  }
  if (legacy.GOBOT_URL && legacy.GOBOT_QQ) {
    channels.push({
      id: `notify_${Date.now()}_gobot`,
      name: "Go-CQHTTP",
      type: "go_cqhttp",
      enabled: true,
      config: take(["GOBOT_URL", "GOBOT_QQ", "GOBOT_TOKEN"]),
    });
  }
  if (legacy.GOTIFY_URL && legacy.GOTIFY_TOKEN) {
    channels.push({
      id: `notify_${Date.now()}_gotify`,
      name: "Gotify",
      type: "gotify",
      enabled: true,
      config: take(["GOTIFY_URL", "GOTIFY_TOKEN", "GOTIFY_PRIORITY"]),
    });
  }
  if (legacy.IGOT_PUSH_KEY) {
    channels.push({
      id: `notify_${Date.now()}_igot`,
      name: "iGot",
      type: "igot",
      enabled: true,
      config: take(["IGOT_PUSH_KEY"]),
    });
  }
  if (legacy.DEER_KEY) {
    channels.push({
      id: `notify_${Date.now()}_pushdeer`,
      name: "PushDeer",
      type: "pushdeer",
      enabled: true,
      config: take(["DEER_KEY", "DEER_URL"]),
    });
  }
  if (legacy.CHAT_URL && legacy.CHAT_TOKEN) {
    channels.push({
      id: `notify_${Date.now()}_chat`,
      name: "群晖 Chat",
      type: "chat",
      enabled: true,
      config: take(["CHAT_URL", "CHAT_TOKEN"]),
    });
  }
  if (legacy.WE_PLUS_BOT_TOKEN) {
    channels.push({
      id: `notify_${Date.now()}_weplus`,
      name: "微加机器人",
      type: "weplus_bot",
      enabled: true,
      config: take([
        "WE_PLUS_BOT_TOKEN",
        "WE_PLUS_BOT_RECEIVER",
        "WE_PLUS_BOT_VERSION",
      ]),
    });
  }
  if (legacy.QMSG_KEY && legacy.QMSG_TYPE) {
    channels.push({
      id: `notify_${Date.now()}_qmsg`,
      name: "Qmsg 酱",
      type: "qmsg_bot",
      enabled: true,
      config: take(["QMSG_KEY", "QMSG_TYPE"]),
    });
  }
  if (legacy.QYWX_AM) {
    channels.push({
      id: `notify_${Date.now()}_wecom_app`,
      name: "企业微信应用",
      type: "wecom_app",
      enabled: true,
      config: take(["QYWX_AM", "QYWX_ORIGIN"]),
    });
  }
  if (legacy.QYWX_KEY) {
    channels.push({
      id: `notify_${Date.now()}_wecom_bot`,
      name: "企业微信机器人",
      type: "wecom_bot",
      enabled: true,
      config: take(["QYWX_KEY", "QYWX_ORIGIN"]),
    });
  }
  if (legacy.AIBOTK_KEY && legacy.AIBOTK_TYPE && legacy.AIBOTK_NAME) {
    channels.push({
      id: `notify_${Date.now()}_aibotk`,
      name: "智能微秘书",
      type: "aibotk",
      enabled: true,
      config: take(["AIBOTK_KEY", "AIBOTK_TYPE", "AIBOTK_NAME"]),
    });
  }
  if (
    legacy.SMTP_SERVER &&
    legacy.SMTP_SSL &&
    legacy.SMTP_EMAIL &&
    legacy.SMTP_PASSWORD &&
    legacy.SMTP_NAME
  ) {
    channels.push({
      id: `notify_${Date.now()}_smtp`,
      name: "SMTP 邮件",
      type: "smtp",
      enabled: true,
      config: take([
        "SMTP_SERVER",
        "SMTP_SSL",
        "SMTP_EMAIL",
        "SMTP_PASSWORD",
        "SMTP_NAME",
      ]),
    });
  }
  if (legacy.PUSHME_KEY) {
    const cfg = take(["PUSHME_KEY", "PUSHME_URL"]);
    if (legacy.date !== undefined && legacy.date !== "") {
      cfg.date = String(legacy.date);
      delete legacy.date;
    }
    if (legacy.type !== undefined && legacy.type !== "") {
      cfg.type = String(legacy.type);
      delete legacy.type;
    }
    channels.push({
      id: `notify_${Date.now()}_pushme`,
      name: "PushMe",
      type: "pushme",
      enabled: true,
      config: cfg,
    });
  }
  if (legacy.CHRONOCAT_URL && legacy.CHRONOCAT_QQ && legacy.CHRONOCAT_TOKEN) {
    channels.push({
      id: `notify_${Date.now()}_chronocat`,
      name: "Chronocat",
      type: "chronocat",
      enabled: true,
      config: take(["CHRONOCAT_URL", "CHRONOCAT_QQ", "CHRONOCAT_TOKEN"]),
    });
  }
  if (legacy.WEBHOOK_URL && legacy.WEBHOOK_METHOD) {
    channels.push({
      id: `notify_${Date.now()}_webhook`,
      name: "Webhook",
      type: "custom_notify",
      enabled: true,
      config: take([
        "WEBHOOK_URL",
        "WEBHOOK_METHOD",
        "WEBHOOK_CONTENT_TYPE",
        "WEBHOOK_BODY",
        "WEBHOOK_HEADERS",
      ]),
    });
  }
  if (legacy.NTFY_TOPIC) {
    channels.push({
      id: `notify_${Date.now()}_ntfy`,
      name: "Ntfy",
      type: "ntfy",
      enabled: true,
      config: take([
        "NTFY_URL",
        "NTFY_TOPIC",
        "NTFY_PRIORITY",
        "NTFY_TOKEN",
        "NTFY_USERNAME",
        "NTFY_PASSWORD",
        "NTFY_ACTIONS",
      ]),
    });
  }
  if (
    legacy.WXPUSHER_APP_TOKEN &&
    (legacy.WXPUSHER_TOPIC_IDS || legacy.WXPUSHER_UIDS)
  ) {
    channels.push({
      id: `notify_${Date.now()}_wxpusher`,
      name: "WxPusher",
      type: "wxpusher_bot",
      enabled: true,
      config: take([
        "WXPUSHER_APP_TOKEN",
        "WXPUSHER_TOPIC_IDS",
        "WXPUSHER_UIDS",
      ]),
    });
  }
  const leftoverKeys = Object.keys(legacy);
  if (leftoverKeys.length) {
    channels.push({
      id: `notify_${Date.now()}_custom`,
      name: "高级 JSON",
      type: "custom",
      enabled: true,
      config: legacy,
    });
  }
  return channels;
}

function buildNotifyTypeOptions() {
  if (!notifyType) return;
  const options = [
    { value: "serverj", label: "Server酱" },
    { value: "telegram", label: "Telegram" },
    { value: "pushplus", label: "PushPlus" },
    { value: "bark", label: "Bark" },
    { value: "dingding_bot", label: "钉钉机器人" },
    { value: "feishu_bot", label: "飞书机器人" },
    { value: "go_cqhttp", label: "Go-CQHTTP" },
    { value: "gotify", label: "Gotify" },
    { value: "igot", label: "iGot" },
    { value: "pushdeer", label: "PushDeer" },
    { value: "chat", label: "群晖 Chat" },
    { value: "weplus_bot", label: "微加机器人" },
    { value: "qmsg_bot", label: "Qmsg 酱" },
    { value: "wecom_app", label: "企业微信应用" },
    { value: "wecom_bot", label: "企业微信机器人" },
    { value: "aibotk", label: "智能微秘书" },
    { value: "smtp", label: "SMTP 邮件" },
    { value: "pushme", label: "PushMe" },
    { value: "chronocat", label: "Chronocat" },
    { value: "ntfy", label: "Ntfy" },
    { value: "wxpusher_bot", label: "WxPusher" },
    { value: "console", label: "控制台" },
    { value: "custom_notify", label: "Webhook" },
    { value: "custom", label: "自定义 JSON" },
  ];
  notifyType.innerHTML = "";
  options.forEach((item) => {
    const option = document.createElement("option");
    option.value = item.value;
    option.textContent = item.label;
    notifyType.appendChild(option);
  });
}

const notifyTypeLabels = {
  serverj: "Server酱",
  telegram: "Telegram",
  pushplus: "PushPlus",
  bark: "Bark",
  dingding_bot: "钉钉机器人",
  feishu_bot: "飞书机器人",
  go_cqhttp: "Go-CQHTTP",
  gotify: "Gotify",
  igot: "iGot",
  pushdeer: "PushDeer",
  chat: "群晖 Chat",
  weplus_bot: "微加机器人",
  qmsg_bot: "Qmsg 酱",
  wecom_app: "企业微信应用",
  wecom_bot: "企业微信机器人",
  aibotk: "智能微秘书",
  smtp: "SMTP 邮件",
  pushme: "PushMe",
  chronocat: "Chronocat",
  ntfy: "Ntfy",
  wxpusher_bot: "WxPusher",
  console: "控制台",
  custom_notify: "Webhook",
  custom: "自定义 JSON",
};

function setNotifyFormVisible(visible) {
  if (!notifyForm) return;
  notifyForm.classList.toggle("hidden", !visible);
}

function resetNotifyForm() {
  editingNotifyId = null;
  if (notifyName) notifyName.value = "";
  if (notifyType) notifyType.value = "serverj";
  if (notifyEnabled) notifyEnabled.checked = true;
  if (notifyPushKey) notifyPushKey.value = "";
  if (notifyTgToken) notifyTgToken.value = "";
  if (notifyTgUser) notifyTgUser.value = "";
  if (notifyTgHost) notifyTgHost.value = "";
  if (notifyTgProxyHost) notifyTgProxyHost.value = "";
  if (notifyTgProxyPort) notifyTgProxyPort.value = "";
  if (notifyTgProxyAuth) notifyTgProxyAuth.value = "";
  if (notifyPushPlusToken) notifyPushPlusToken.value = "";
  if (notifyPushPlusUser) notifyPushPlusUser.value = "";
  if (notifyPushPlusTemplate) notifyPushPlusTemplate.value = "";
  if (notifyPushPlusChannel) notifyPushPlusChannel.value = "";
  if (notifyPushPlusWebhook) notifyPushPlusWebhook.value = "";
  if (notifyPushPlusCallback) notifyPushPlusCallback.value = "";
  if (notifyPushPlusTo) notifyPushPlusTo.value = "";
  if (notifyBarkPush) notifyBarkPush.value = "";
  if (notifyBarkArchive) notifyBarkArchive.value = "";
  if (notifyBarkGroup) notifyBarkGroup.value = "";
  if (notifyBarkSound) notifyBarkSound.value = "";
  if (notifyBarkIcon) notifyBarkIcon.value = "";
  if (notifyBarkLevel) notifyBarkLevel.value = "";
  if (notifyBarkUrl) notifyBarkUrl.value = "";
  if (notifyDdToken) notifyDdToken.value = "";
  if (notifyDdSecret) notifyDdSecret.value = "";
  if (notifyFsKey) notifyFsKey.value = "";
  if (notifyFsSecret) notifyFsSecret.value = "";
  if (notifyGobotUrl) notifyGobotUrl.value = "";
  if (notifyGobotQq) notifyGobotQq.value = "";
  if (notifyGobotToken) notifyGobotToken.value = "";
  if (notifyGotifyUrl) notifyGotifyUrl.value = "";
  if (notifyGotifyToken) notifyGotifyToken.value = "";
  if (notifyGotifyPriority) notifyGotifyPriority.value = "";
  if (notifyIgotKey) notifyIgotKey.value = "";
  if (notifyDeerKey) notifyDeerKey.value = "";
  if (notifyDeerUrl) notifyDeerUrl.value = "";
  if (notifyChatUrl) notifyChatUrl.value = "";
  if (notifyChatToken) notifyChatToken.value = "";
  if (notifyWeplusToken) notifyWeplusToken.value = "";
  if (notifyWeplusReceiver) notifyWeplusReceiver.value = "";
  if (notifyWeplusVersion) notifyWeplusVersion.value = "";
  if (notifyQmsgKey) notifyQmsgKey.value = "";
  if (notifyQmsgType) notifyQmsgType.value = "";
  if (notifyWecomAm) notifyWecomAm.value = "";
  if (notifyWecomOrigin) notifyWecomOrigin.value = "";
  if (notifyWecomKey) notifyWecomKey.value = "";
  if (notifyWecomBotOrigin) notifyWecomBotOrigin.value = "";
  if (notifyAibotkKey) notifyAibotkKey.value = "";
  if (notifyAibotkType) notifyAibotkType.value = "";
  if (notifyAibotkName) notifyAibotkName.value = "";
  if (notifySmtpServer) notifySmtpServer.value = "";
  if (notifySmtpSsl) notifySmtpSsl.value = "";
  if (notifySmtpEmail) notifySmtpEmail.value = "";
  if (notifySmtpPassword) notifySmtpPassword.value = "";
  if (notifySmtpName) notifySmtpName.value = "";
  if (notifyPushmeKey) notifyPushmeKey.value = "";
  if (notifyPushmeUrl) notifyPushmeUrl.value = "";
  if (notifyPushmeDate) notifyPushmeDate.value = "";
  if (notifyPushmeType) notifyPushmeType.value = "";
  if (notifyChronocatUrl) notifyChronocatUrl.value = "";
  if (notifyChronocatToken) notifyChronocatToken.value = "";
  if (notifyChronocatQq) notifyChronocatQq.value = "";
  if (notifyNtfyUrl) notifyNtfyUrl.value = "";
  if (notifyNtfyTopic) notifyNtfyTopic.value = "";
  if (notifyNtfyPriority) notifyNtfyPriority.value = "";
  if (notifyNtfyToken) notifyNtfyToken.value = "";
  if (notifyNtfyUsername) notifyNtfyUsername.value = "";
  if (notifyNtfyPassword) notifyNtfyPassword.value = "";
  if (notifyNtfyActions) notifyNtfyActions.value = "";
  if (notifyWxpusherToken) notifyWxpusherToken.value = "";
  if (notifyWxpusherTopic) notifyWxpusherTopic.value = "";
  if (notifyWxpusherUids) notifyWxpusherUids.value = "";
  if (notifyWebhookUrl) notifyWebhookUrl.value = "";
  if (notifyWebhookMethod) notifyWebhookMethod.value = "";
  if (notifyWebhookContentType) notifyWebhookContentType.value = "";
  if (notifyWebhookHeaders) notifyWebhookHeaders.value = "";
  if (notifyWebhookBody) notifyWebhookBody.value = "";
  if (notifyCustomConfig) notifyCustomConfig.value = "";
  toggleNotifyFields("serverj");
}

function toggleNotifyFields(type) {
  const fieldIds = [
    "notify-fields-console",
    "notify-fields-serverj",
    "notify-fields-telegram",
    "notify-fields-pushplus",
    "notify-fields-bark",
    "notify-fields-dingding_bot",
    "notify-fields-feishu_bot",
    "notify-fields-go_cqhttp",
    "notify-fields-gotify",
    "notify-fields-igot",
    "notify-fields-pushdeer",
    "notify-fields-chat",
    "notify-fields-weplus_bot",
    "notify-fields-qmsg_bot",
    "notify-fields-wecom_app",
    "notify-fields-wecom_bot",
    "notify-fields-aibotk",
    "notify-fields-smtp",
    "notify-fields-pushme",
    "notify-fields-chronocat",
    "notify-fields-ntfy",
    "notify-fields-wxpusher_bot",
    "notify-fields-custom_notify",
    "notify-fields-custom",
  ];
  fieldIds.forEach((id) => {
    const block = document.getElementById(id);
    if (!block) return;
    block.classList.toggle("hidden", id !== `notify-fields-${type}`);
  });
}

function summarizeNotifyChannel(channel) {
  const type = channel.type;
  const cfg = channel.config || {};
  if (type === "serverj") return maskValue(cfg.PUSH_KEY || "");
  if (type === "telegram") return `用户 ${cfg.TG_USER_ID || "-"}`;
  if (type === "pushplus")
    return `Token ${maskValue(cfg.PUSH_PLUS_TOKEN || "")}`;
  if (type === "bark") return (cfg.BARK_PUSH || "").replace(/https?:\/\//, "");
  if (type === "dingding_bot") return maskValue(cfg.DD_BOT_TOKEN || "");
  if (type === "feishu_bot") return maskValue(cfg.FSKEY || "");
  if (type === "go_cqhttp") return cfg.GOBOT_QQ || "-";
  if (type === "gotify") return cfg.GOTIFY_URL || "-";
  if (type === "igot") return maskValue(cfg.IGOT_PUSH_KEY || "");
  if (type === "pushdeer") return maskValue(cfg.DEER_KEY || "");
  if (type === "chat") return cfg.CHAT_URL || "-";
  if (type === "weplus_bot") return maskValue(cfg.WE_PLUS_BOT_TOKEN || "");
  if (type === "qmsg_bot") return cfg.QMSG_TYPE || "-";
  if (type === "wecom_app") return cfg.QYWX_AM || "-";
  if (type === "wecom_bot") return maskValue(cfg.QYWX_KEY || "");
  if (type === "aibotk") return `${cfg.AIBOTK_TYPE || "-"}:${cfg.AIBOTK_NAME || "-"}`;
  if (type === "smtp") return cfg.SMTP_EMAIL || "-";
  if (type === "pushme") return maskValue(cfg.PUSHME_KEY || "");
  if (type === "chronocat") return cfg.CHRONOCAT_QQ || "-";
  if (type === "ntfy") return cfg.NTFY_TOPIC || "-";
  if (type === "wxpusher_bot") return cfg.WXPUSHER_TOPIC_IDS || cfg.WXPUSHER_UIDS || "-";
  if (type === "console") return "控制台输出";
  if (type === "custom_notify") return cfg.WEBHOOK_URL || "Webhook";
  if (type === "custom") return "自定义 JSON";
  return "-";
}

function renderNotifyList() {
  if (!notifyBody) return;
  notifyBody.innerHTML = "";
  notifyChannels.forEach((channel) => {
    const typeLabel = notifyTypeLabels[channel.type] || channel.type || "-";
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${channel.name || "-"}</td>
      <td>${typeLabel}</td>
      <td>${channel.enabled ? "是" : "否"}</td>
      <td>${summarizeNotifyChannel(channel)}</td>
      <td>
        <button class="ghost-btn" data-action="edit" data-id="${channel.id}">编辑</button>
        <button class="ghost-btn" data-action="test" data-id="${channel.id}">测试</button>
        <button class="ghost-btn" data-action="delete" data-id="${channel.id}">删除</button>
      </td>
    `;
    notifyBody.appendChild(row);
  });
}

function buildNotifyConfigFromForm(type) {
  if (type === "console") {
    return { CONSOLE: "true" };
  }
  if (type === "serverj") {
    const key = notifyPushKey.value.trim();
    if (!key) {
      throw new Error("请填写 Server酱 PUSH_KEY");
    }
    return { PUSH_KEY: key };
  }
  if (type === "telegram") {
    const token = notifyTgToken.value.trim();
    const user = notifyTgUser.value.trim();
    if (!token || !user) {
      throw new Error("Telegram 需要同时填写 Bot Token 与用户ID");
    }
    const config = { TG_BOT_TOKEN: token, TG_USER_ID: user };
    const host = notifyTgHost.value.trim();
    if (host) {
      config.TG_API_HOST = host;
    }
    const proxyHost = notifyTgProxyHost.value.trim();
    const proxyPort = notifyTgProxyPort.value.trim();
    const proxyAuth = notifyTgProxyAuth.value.trim();
    if (proxyHost) config.TG_PROXY_HOST = proxyHost;
    if (proxyPort) config.TG_PROXY_PORT = proxyPort;
    if (proxyAuth) config.TG_PROXY_AUTH = proxyAuth;
    return config;
  }
  if (type === "pushplus") {
    const token = notifyPushPlusToken.value.trim();
    if (!token) {
      throw new Error("PushPlus 需要填写 Token");
    }
    const config = { PUSH_PLUS_TOKEN: token };
    const user = notifyPushPlusUser.value.trim();
    if (user) {
      config.PUSH_PLUS_USER = user;
    }
    const template = notifyPushPlusTemplate.value.trim();
    if (template) config.PUSH_PLUS_TEMPLATE = template;
    const channel = notifyPushPlusChannel.value.trim();
    if (channel) config.PUSH_PLUS_CHANNEL = channel;
    const webhook = notifyPushPlusWebhook.value.trim();
    if (webhook) config.PUSH_PLUS_WEBHOOK = webhook;
    const callback = notifyPushPlusCallback.value.trim();
    if (callback) config.PUSH_PLUS_CALLBACKURL = callback;
    const to = notifyPushPlusTo.value.trim();
    if (to) config.PUSH_PLUS_TO = to;
    return config;
  }
  if (type === "bark") {
    const push = notifyBarkPush.value.trim();
    if (!push) {
      throw new Error("请填写 Bark 推送地址");
    }
    const config = { BARK_PUSH: push };
    const archive = notifyBarkArchive.value.trim();
    if (archive) config.BARK_ARCHIVE = archive;
    const group = notifyBarkGroup.value.trim();
    if (group) config.BARK_GROUP = group;
    const sound = notifyBarkSound.value.trim();
    if (sound) config.BARK_SOUND = sound;
    const icon = notifyBarkIcon.value.trim();
    if (icon) config.BARK_ICON = icon;
    const level = notifyBarkLevel.value.trim();
    if (level) config.BARK_LEVEL = level;
    const url = notifyBarkUrl.value.trim();
    if (url) config.BARK_URL = url;
    return config;
  }
  if (type === "dingding_bot") {
    const token = notifyDdToken.value.trim();
    const secret = notifyDdSecret.value.trim();
    if (!token || !secret) {
      throw new Error("钉钉机器人需要填写 Token 与 Secret");
    }
    return { DD_BOT_TOKEN: token, DD_BOT_SECRET: secret };
  }
  if (type === "feishu_bot") {
    const key = notifyFsKey.value.trim();
    if (!key) {
      throw new Error("飞书机器人需要填写 Webhook Key");
    }
    const config = { FSKEY: key };
    const secret = notifyFsSecret.value.trim();
    if (secret) config.FSSECRET = secret;
    return config;
  }
  if (type === "go_cqhttp") {
    const url = notifyGobotUrl.value.trim();
    const qq = notifyGobotQq.value.trim();
    if (!url || !qq) {
      throw new Error("Go-CQHTTP 需要填写地址与目标");
    }
    const config = { GOBOT_URL: url, GOBOT_QQ: qq };
    const token = notifyGobotToken.value.trim();
    if (token) config.GOBOT_TOKEN = token;
    return config;
  }
  if (type === "gotify") {
    const url = notifyGotifyUrl.value.trim();
    const token = notifyGotifyToken.value.trim();
    if (!url || !token) {
      throw new Error("Gotify 需要填写地址与 Token");
    }
    const config = { GOTIFY_URL: url, GOTIFY_TOKEN: token };
    const priority = notifyGotifyPriority.value.trim();
    if (priority) config.GOTIFY_PRIORITY = priority;
    return config;
  }
  if (type === "igot") {
    const key = notifyIgotKey.value.trim();
    if (!key) {
      throw new Error("iGot 需要填写 PUSH_KEY");
    }
    return { IGOT_PUSH_KEY: key };
  }
  if (type === "pushdeer") {
    const key = notifyDeerKey.value.trim();
    if (!key) {
      throw new Error("PushDeer 需要填写 Key");
    }
    const config = { DEER_KEY: key };
    const url = notifyDeerUrl.value.trim();
    if (url) config.DEER_URL = url;
    return config;
  }
  if (type === "chat") {
    const url = notifyChatUrl.value.trim();
    const token = notifyChatToken.value.trim();
    if (!url || !token) {
      throw new Error("群晖 Chat 需要填写 URL 与 Token");
    }
    return { CHAT_URL: url, CHAT_TOKEN: token };
  }
  if (type === "weplus_bot") {
    const token = notifyWeplusToken.value.trim();
    if (!token) {
      throw new Error("微加机器人需要填写 Token");
    }
    const config = { WE_PLUS_BOT_TOKEN: token };
    const receiver = notifyWeplusReceiver.value.trim();
    if (receiver) config.WE_PLUS_BOT_RECEIVER = receiver;
    const version = notifyWeplusVersion.value.trim();
    if (version) config.WE_PLUS_BOT_VERSION = version;
    return config;
  }
  if (type === "qmsg_bot") {
    const key = notifyQmsgKey.value.trim();
    const qtype = notifyQmsgType.value.trim();
    if (!key || !qtype) {
      throw new Error("Qmsg 需要填写 Key 与 Type");
    }
    return { QMSG_KEY: key, QMSG_TYPE: qtype };
  }
  if (type === "wecom_app") {
    const am = notifyWecomAm.value.trim();
    if (!am) {
      throw new Error("企业微信应用需要填写配置信息");
    }
    const config = { QYWX_AM: am };
    const origin = notifyWecomOrigin.value.trim();
    if (origin) config.QYWX_ORIGIN = origin;
    return config;
  }
  if (type === "wecom_bot") {
    const key = notifyWecomKey.value.trim();
    if (!key) {
      throw new Error("企业微信机器人需要填写 Key");
    }
    const config = { QYWX_KEY: key };
    const origin = notifyWecomBotOrigin.value.trim();
    if (origin) config.QYWX_ORIGIN = origin;
    return config;
  }
  if (type === "aibotk") {
    const key = notifyAibotkKey.value.trim();
    const atype = notifyAibotkType.value.trim();
    const name = notifyAibotkName.value.trim();
    if (!key || !atype || !name) {
      throw new Error("智能微秘书需要填写 Key、类型与目标名称");
    }
    return { AIBOTK_KEY: key, AIBOTK_TYPE: atype, AIBOTK_NAME: name };
  }
  if (type === "smtp") {
    const server = notifySmtpServer.value.trim();
    const ssl = notifySmtpSsl.value.trim();
    const email = notifySmtpEmail.value.trim();
    const password = notifySmtpPassword.value.trim();
    const name = notifySmtpName.value.trim();
    if (!server || !ssl || !email || !password || !name) {
      throw new Error("SMTP 需要填写服务器、SSL、邮箱、密码与发件人");
    }
    return {
      SMTP_SERVER: server,
      SMTP_SSL: ssl,
      SMTP_EMAIL: email,
      SMTP_PASSWORD: password,
      SMTP_NAME: name,
    };
  }
  if (type === "pushme") {
    const key = notifyPushmeKey.value.trim();
    if (!key) {
      throw new Error("PushMe 需要填写 Key");
    }
    const config = { PUSHME_KEY: key };
    const url = notifyPushmeUrl.value.trim();
    if (url) config.PUSHME_URL = url;
    const date = notifyPushmeDate.value.trim();
    if (date) config.date = date;
    const ptype = notifyPushmeType.value.trim();
    if (ptype) config.type = ptype;
    return config;
  }
  if (type === "chronocat") {
    const url = notifyChronocatUrl.value.trim();
    const token = notifyChronocatToken.value.trim();
    const qq = notifyChronocatQq.value.trim();
    if (!url || !token || !qq) {
      throw new Error("Chronocat 需要填写 URL、Token 与目标QQ");
    }
    return { CHRONOCAT_URL: url, CHRONOCAT_TOKEN: token, CHRONOCAT_QQ: qq };
  }
  if (type === "ntfy") {
    const topic = notifyNtfyTopic.value.trim();
    if (!topic) {
      throw new Error("Ntfy 需要填写 Topic");
    }
    const url = notifyNtfyUrl.value.trim() || "https://ntfy.sh";
    const config = { NTFY_URL: url, NTFY_TOPIC: topic };
    const priority = notifyNtfyPriority.value.trim();
    if (priority) config.NTFY_PRIORITY = priority;
    const token = notifyNtfyToken.value.trim();
    if (token) config.NTFY_TOKEN = token;
    const username = notifyNtfyUsername.value.trim();
    if (username) config.NTFY_USERNAME = username;
    const password = notifyNtfyPassword.value.trim();
    if (password) config.NTFY_PASSWORD = password;
    const actions = notifyNtfyActions.value.trim();
    if (actions) config.NTFY_ACTIONS = actions;
    return config;
  }
  if (type === "wxpusher_bot") {
    const token = notifyWxpusherToken.value.trim();
    const topic = notifyWxpusherTopic.value.trim();
    const uids = notifyWxpusherUids.value.trim();
    if (!token) {
      throw new Error("WxPusher 需要填写 AppToken");
    }
    if (!topic && !uids) {
      throw new Error("WxPusher 需要填写 Topic IDs 或 UIDs");
    }
    const config = { WXPUSHER_APP_TOKEN: token };
    if (topic) config.WXPUSHER_TOPIC_IDS = topic;
    if (uids) config.WXPUSHER_UIDS = uids;
    return config;
  }
  if (type === "custom_notify") {
    const url = notifyWebhookUrl.value.trim();
    const method = notifyWebhookMethod.value.trim();
    if (!url || !method) {
      throw new Error("Webhook 需要填写 URL 与方法");
    }
    const body = notifyWebhookBody.value.trim();
    if (!url.includes("$title") && !body.includes("$title")) {
      throw new Error("Webhook URL 或 Body 需包含 $title");
    }
    if (!url.includes("$content") && !body.includes("$content")) {
      throw new Error("Webhook URL 或 Body 需包含 $content");
    }
    const config = {
      WEBHOOK_URL: url,
      WEBHOOK_METHOD: method,
    };
    const contentType = notifyWebhookContentType.value.trim();
    if (contentType) config.WEBHOOK_CONTENT_TYPE = contentType;
    const headers = notifyWebhookHeaders.value.trim();
    if (headers) config.WEBHOOK_HEADERS = headers;
    if (body) config.WEBHOOK_BODY = body;
    return config;
  }
  if (type === "custom") {
    const raw = notifyCustomConfig.value.trim();
    if (!raw) {
      throw new Error("请填写自定义 JSON");
    }
    const parsed = JSON.parse(raw);
    if (typeof parsed !== "object" || Array.isArray(parsed)) {
      throw new Error("自定义 JSON 需为对象");
    }
    return parsed;
  }
  return {};
}

function saveNotifyChannel() {
  const type = notifyType.value;
  const name = notifyName.value.trim();
  const enabled = notifyEnabled.checked;
  const config = buildNotifyConfigFromForm(type);
  const payload = {
    id:
      editingNotifyId ||
      `notify_${Date.now()}_${Math.random().toString(16).slice(2, 8)}`,
    name: name || type,
    type,
    enabled,
    config,
  };
  if (editingNotifyId) {
    notifyChannels = notifyChannels.map((item) =>
      item.id === editingNotifyId ? payload : item
    );
  } else {
    notifyChannels.push(payload);
  }
  renderNotifyList();
  resetNotifyForm();
  setNotifyFormVisible(false);
}

function fillNotifyForm(channel) {
  editingNotifyId = channel.id;
  notifyName.value = channel.name || "";
  notifyType.value = channel.type || "serverj";
  notifyEnabled.checked = channel.enabled !== false;
  const cfg = channel.config || {};
  notifyPushKey.value = cfg.PUSH_KEY || "";
  notifyTgToken.value = cfg.TG_BOT_TOKEN || "";
  notifyTgUser.value = cfg.TG_USER_ID || "";
  notifyTgHost.value = cfg.TG_API_HOST || "";
  notifyPushPlusToken.value = cfg.PUSH_PLUS_TOKEN || "";
  notifyPushPlusUser.value = cfg.PUSH_PLUS_USER || "";
  notifyPushPlusTemplate.value = cfg.PUSH_PLUS_TEMPLATE || "";
  notifyPushPlusChannel.value = cfg.PUSH_PLUS_CHANNEL || "";
  notifyPushPlusWebhook.value = cfg.PUSH_PLUS_WEBHOOK || "";
  notifyPushPlusCallback.value = cfg.PUSH_PLUS_CALLBACKURL || "";
  notifyPushPlusTo.value = cfg.PUSH_PLUS_TO || "";
  notifyBarkPush.value = cfg.BARK_PUSH || "";
  notifyBarkArchive.value = cfg.BARK_ARCHIVE || "";
  notifyBarkGroup.value = cfg.BARK_GROUP || "";
  notifyBarkSound.value = cfg.BARK_SOUND || "";
  notifyBarkIcon.value = cfg.BARK_ICON || "";
  notifyBarkLevel.value = cfg.BARK_LEVEL || "";
  notifyBarkUrl.value = cfg.BARK_URL || "";
  notifyTgProxyHost.value = cfg.TG_PROXY_HOST || "";
  notifyTgProxyPort.value = cfg.TG_PROXY_PORT || "";
  notifyTgProxyAuth.value = cfg.TG_PROXY_AUTH || "";
  notifyDdToken.value = cfg.DD_BOT_TOKEN || "";
  notifyDdSecret.value = cfg.DD_BOT_SECRET || "";
  notifyFsKey.value = cfg.FSKEY || "";
  notifyFsSecret.value = cfg.FSSECRET || "";
  notifyGobotUrl.value = cfg.GOBOT_URL || "";
  notifyGobotQq.value = cfg.GOBOT_QQ || "";
  notifyGobotToken.value = cfg.GOBOT_TOKEN || "";
  notifyGotifyUrl.value = cfg.GOTIFY_URL || "";
  notifyGotifyToken.value = cfg.GOTIFY_TOKEN || "";
  notifyGotifyPriority.value = cfg.GOTIFY_PRIORITY || "";
  notifyIgotKey.value = cfg.IGOT_PUSH_KEY || "";
  notifyDeerKey.value = cfg.DEER_KEY || "";
  notifyDeerUrl.value = cfg.DEER_URL || "";
  notifyChatUrl.value = cfg.CHAT_URL || "";
  notifyChatToken.value = cfg.CHAT_TOKEN || "";
  notifyWeplusToken.value = cfg.WE_PLUS_BOT_TOKEN || "";
  notifyWeplusReceiver.value = cfg.WE_PLUS_BOT_RECEIVER || "";
  notifyWeplusVersion.value = cfg.WE_PLUS_BOT_VERSION || "";
  notifyQmsgKey.value = cfg.QMSG_KEY || "";
  notifyQmsgType.value = cfg.QMSG_TYPE || "";
  notifyWecomAm.value = cfg.QYWX_AM || "";
  notifyWecomOrigin.value = cfg.QYWX_ORIGIN || "";
  notifyWecomKey.value = cfg.QYWX_KEY || "";
  notifyWecomBotOrigin.value = cfg.QYWX_ORIGIN || "";
  notifyAibotkKey.value = cfg.AIBOTK_KEY || "";
  notifyAibotkType.value = cfg.AIBOTK_TYPE || "";
  notifyAibotkName.value = cfg.AIBOTK_NAME || "";
  notifySmtpServer.value = cfg.SMTP_SERVER || "";
  notifySmtpSsl.value = cfg.SMTP_SSL || "";
  notifySmtpEmail.value = cfg.SMTP_EMAIL || "";
  notifySmtpPassword.value = cfg.SMTP_PASSWORD || "";
  notifySmtpName.value = cfg.SMTP_NAME || "";
  notifyPushmeKey.value = cfg.PUSHME_KEY || "";
  notifyPushmeUrl.value = cfg.PUSHME_URL || "";
  notifyPushmeDate.value = cfg.date || "";
  notifyPushmeType.value = cfg.type || "";
  notifyChronocatUrl.value = cfg.CHRONOCAT_URL || "";
  notifyChronocatToken.value = cfg.CHRONOCAT_TOKEN || "";
  notifyChronocatQq.value = cfg.CHRONOCAT_QQ || "";
  notifyNtfyUrl.value = cfg.NTFY_URL || "";
  notifyNtfyTopic.value = cfg.NTFY_TOPIC || "";
  notifyNtfyPriority.value = cfg.NTFY_PRIORITY || "";
  notifyNtfyToken.value = cfg.NTFY_TOKEN || "";
  notifyNtfyUsername.value = cfg.NTFY_USERNAME || "";
  notifyNtfyPassword.value = cfg.NTFY_PASSWORD || "";
  notifyNtfyActions.value = cfg.NTFY_ACTIONS || "";
  notifyWxpusherToken.value = cfg.WXPUSHER_APP_TOKEN || "";
  notifyWxpusherTopic.value = cfg.WXPUSHER_TOPIC_IDS || "";
  notifyWxpusherUids.value = cfg.WXPUSHER_UIDS || "";
  notifyWebhookUrl.value = cfg.WEBHOOK_URL || "";
  notifyWebhookMethod.value = cfg.WEBHOOK_METHOD || "";
  notifyWebhookContentType.value = cfg.WEBHOOK_CONTENT_TYPE || "";
  notifyWebhookHeaders.value = cfg.WEBHOOK_HEADERS || "";
  notifyWebhookBody.value = cfg.WEBHOOK_BODY || "";
  notifyCustomConfig.value = JSON.stringify(cfg, null, 2);
  toggleNotifyFields(notifyType.value);
  setNotifyFormVisible(true);
}

function setCellLines(cell, lines, muted = false) {
  if (!cell) return;
  cell.innerHTML = "";
  const wrap = document.createElement("div");
  wrap.className = "cell-lines";
  lines.forEach((text) => {
    const line = document.createElement("span");
    line.textContent = text;
    if (muted) {
      line.classList.add("cell-muted");
    }
    wrap.appendChild(line);
  });
  cell.appendChild(wrap);
}

function formatServerLine(server) {
  const name = server.name || `服务器${server.id || ""}`.trim();
  const days =
    typeof server.days_remaining === "number"
      ? `${server.days_remaining} 天`
      : "未知";
  const expired = server.expired || "未知";
  return `${name} (${server.id}) ${days} (${expired})`;
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
  accountsCache = Array.isArray(accounts) ? accounts : [];
  accountsBody.innerHTML = "";
  const rowMap = new Map();
  accountsCache.forEach((account) => {
    const row = document.createElement("tr");
    const canRenew = !!account.api_key;
    row.innerHTML = `
      <td>${account.name || account.id}</td>
      <td>${account.enabled ? "是" : "否"}</td>
      <td>${account.last_status || "-"}</td>
      <td>${account.last_checkin || "-"}</td>
      <td data-field="points">-</td>
      <td data-field="whitelist">-</td>
      <td data-field="expiry">-</td>
      <td>
        <button class="ghost-btn" data-action="checkin" data-id="${account.id}">签到</button>
        <button class="ghost-btn" data-action="renew" data-id="${account.id}" ${canRenew ? "" : "disabled"}>续费</button>
        <button class="ghost-btn" data-action="edit" data-id="${account.id}">编辑</button>
        <button class="ghost-btn" data-action="delete" data-id="${account.id}">删除</button>
      </td>
    `;
    accountsBody.appendChild(row);
    rowMap.set(account.id, row);
  });
  await Promise.all(
    accountsCache.map(async (account) => {
      const row = rowMap.get(account.id);
      if (!row) return;
      const pointsCell = row.querySelector("[data-field='points']");
      const whitelistCell = row.querySelector("[data-field='whitelist']");
      const expiryCell = row.querySelector("[data-field='expiry']");
      const whitelistIds = Array.isArray(account.renew_products)
        ? account.renew_products
        : [];
      if (whitelistCell) {
        whitelistCell.textContent = whitelistIds.length
          ? whitelistIds.join(", ")
          : "全部";
      }
      if (!account.api_key) {
        if (pointsCell) {
          pointsCell.textContent = "无 API Key";
        }
        setCellLines(expiryCell, ["无 API Key"], true);
        return;
      }
      if (pointsCell) {
        pointsCell.textContent = "加载中";
      }
      setCellLines(expiryCell, ["加载中"]);
      try {
        const result = await apiFetch(`/api/servers/summary/${account.id}`);
        if (pointsCell) {
          pointsCell.textContent =
            typeof result.points === "number" ? result.points : "未知";
        }
        const servers = Array.isArray(result.servers) ? result.servers : [];
        const filtered =
          whitelistIds.length > 0
            ? servers.filter((item) => whitelistIds.includes(Number(item.id)))
            : servers;
        if (filtered.length === 0) {
          setCellLines(
            expiryCell,
            [whitelistIds.length ? "白名单无匹配服务器" : "无服务器"],
            true
          );
        } else {
          setCellLines(expiryCell, filtered.map(formatServerLine));
        }
      } catch (err) {
        if (pointsCell) {
          pointsCell.textContent = "获取失败";
        }
        setCellLines(expiryCell, ["获取失败"], true);
      }
    })
  );
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
  notifyChannels = normalizeNotifyChannels(settings);
  renderNotifyList();
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

async function testNotifyChannel(id) {
  try {
    await apiFetch("/api/system/notify/test", {
      method: "POST",
      body: JSON.stringify({ channel_id: id }),
    });
    showToast("测试通知已发送");
  } catch (err) {
    showToast(err.message || "测试发送失败", "error");
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

async function clearLogs() {
  if (!logOutput) return;
  if (!confirm("确认清空实时日志吗？")) {
    return;
  }
  if (!confirm("清空后无法恢复，确定继续？")) {
    return;
  }
  try {
    await apiFetch("/api/logs/clear", { method: "POST" });
    logOutput.textContent = "";
    showToast("日志已清空");
  } catch (err) {
    showToast(err.message || "清空日志失败", "error");
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
  if (savingSettings) return;
  savingSettings = true;
  if (saveSettingsBtn) {
    saveSettingsBtn.disabled = true;
  }
  const notifyChannelsPayload = notifyChannels.map((item) => ({
    id: item.id,
    name: item.name,
    type: item.type,
    enabled: item.enabled !== false,
    config: typeof item.config === "object" && item.config ? item.config : {},
  }));
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
    notify_config: {},
    notify_channels: notifyChannelsPayload,
  };
  try {
    await apiFetch("/api/system/settings", {
      method: "PUT",
      body: JSON.stringify(payload),
    });
    showToast("设置已保存");
  } catch (err) {
    showToast(err.message || "保存失败", "error");
  } finally {
    savingSettings = false;
    if (saveSettingsBtn) {
      saveSettingsBtn.disabled = false;
    }
  }
}

accountsBody.addEventListener("click", async (event) => {
  const action = event.target.getAttribute("data-action");
  const id = event.target.getAttribute("data-id");
  if (!action || !id) return;
  if (event.target.disabled) return;
  if (action === "edit") {
    let account = accountsCache.find((item) => String(item.id) === id);
    if (!account) {
      const accounts = await apiFetch("/api/accounts");
      accountsCache = Array.isArray(accounts) ? accounts : [];
      account = accountsCache.find((item) => String(item.id) === id);
    }
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

if (notifyBody) {
  notifyBody.addEventListener("click", (event) => {
    const action = event.target.getAttribute("data-action");
    const id = event.target.getAttribute("data-id");
    if (!action || !id) return;
    if (action === "edit") {
      const channel = notifyChannels.find((item) => item.id === id);
      if (channel) {
        fillNotifyForm(channel);
      }
    }
    if (action === "delete") {
      notifyChannels = notifyChannels.filter((item) => item.id !== id);
      renderNotifyList();
    }
    if (action === "test") {
      testNotifyChannel(id);
    }
  });
}

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

if (addNotifyBtn) {
  addNotifyBtn.addEventListener("click", () => {
    resetNotifyForm();
    setNotifyFormVisible(true);
  });
}
if (saveNotifyBtn) {
  saveNotifyBtn.addEventListener("click", () => {
    try {
      saveNotifyChannel();
    } catch (err) {
      showToast(err.message || "保存渠道失败", "error");
    }
  });
}
if (cancelNotifyBtn) {
  cancelNotifyBtn.addEventListener("click", () => {
    resetNotifyForm();
    setNotifyFormVisible(false);
  });
}
if (notifyType) {
  notifyType.addEventListener("change", () => {
    toggleNotifyFields(notifyType.value);
  });
}

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

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    stopLogPolling();
    return;
  }
  if (logAutoRefresh && logAutoRefresh.checked && !tabLogs.classList.contains("hidden")) {
    loadLogs();
    startLogPolling();
  }
});

window.addEventListener("beforeunload", () => {
  stopLogPolling();
});

if (refreshLogsBtn) {
  refreshLogsBtn.addEventListener("click", loadLogs);
}
if (clearLogsBtn) {
  clearLogsBtn.addEventListener("click", clearLogs);
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
buildNotifyTypeOptions();
resetNotifyForm();
switchTab("main");

if (getToken()) {
  loadAll()
    .then(showDashboard)
    .catch(() => showLogin());
} else {
  showLogin();
}
