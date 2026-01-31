"""内存日志缓冲。"""

from __future__ import annotations

import logging
import os
from collections import deque
from threading import Lock

_MAX_LOG_LINES = 1000
_LOG_FILE_PATH = os.environ.get("LOG_FILE", "data/logs/rainyun.log")
_buffer: deque[str] = deque(maxlen=_MAX_LOG_LINES)
_lock = Lock()


class InMemoryLogHandler(logging.Handler):
    def filter(self, record: logging.LogRecord) -> bool:
        return not record.name.startswith("uvicorn.access")

    def emit(self, record: logging.LogRecord) -> None:
        if not self.filter(record):
            return
        message = self.format(record)
        with _lock:
            _buffer.append(message)


class _AccessLogFilter(logging.Filter):
    def filter(self, record: logging.LogRecord) -> bool:
        return not record.name.startswith("uvicorn.access")


def ensure_file_handler() -> None:
    root = logging.getLogger()
    for handler in root.handlers:
        if isinstance(handler, logging.FileHandler) and getattr(handler, "baseFilename", ""):
            if os.path.abspath(handler.baseFilename) == os.path.abspath(_LOG_FILE_PATH):
                return
    try:
        os.makedirs(os.path.dirname(_LOG_FILE_PATH), exist_ok=True)
    except Exception:
        return
    handler = logging.FileHandler(_LOG_FILE_PATH, encoding="utf-8")
    handler.setLevel(logging.INFO)
    handler.setFormatter(logging.Formatter("%(asctime)s - %(levelname)s - %(message)s"))
    handler.addFilter(_AccessLogFilter())
    root.addHandler(handler)


def init_log_buffer() -> None:
    root = logging.getLogger()
    if root.level > logging.INFO:
        root.setLevel(logging.INFO)
    for handler in root.handlers:
        if isinstance(handler, InMemoryLogHandler):
            ensure_file_handler()
            return
    handler = InMemoryLogHandler()
    handler.setLevel(logging.INFO)
    handler.setFormatter(logging.Formatter("%(asctime)s - %(levelname)s - %(message)s"))
    root.addHandler(handler)
    for name in ("uvicorn", "uvicorn.error", "uvicorn.access"):
        logging.getLogger(name).propagate = True
    ensure_file_handler()


def _read_file_tail(limit: int) -> list[str]:
    safe_limit = min(max(limit, 1), _MAX_LOG_LINES)
    if not os.path.exists(_LOG_FILE_PATH):
        return []
    lines = deque(maxlen=safe_limit)
    try:
        with open(_LOG_FILE_PATH, "r", encoding="utf-8", errors="ignore") as handle:
            for line in handle:
                lines.append(line.rstrip())
    except OSError:
        return []
    return list(lines)


def get_logs(limit: int = 200) -> list[str]:
    file_lines = _read_file_tail(limit)
    if file_lines:
        return file_lines
    safe_limit = min(max(limit, 1), _MAX_LOG_LINES)
    with _lock:
        return list(_buffer)[-safe_limit:]
