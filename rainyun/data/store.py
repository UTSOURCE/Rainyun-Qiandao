"""数据层读写与基础校验。"""

from __future__ import annotations

import json
import logging
from pathlib import Path
from typing import Iterable

from .models import Account, ConfigData, DEFAULT_DATA_PATH, Settings

logger = logging.getLogger(__name__)


class DataStore:
    """JSON 数据文件的读写入口。"""

    def __init__(self, path: str | Path = DEFAULT_DATA_PATH) -> None:
        self.path = Path(path)
        self.data: ConfigData | None = None

    def load(self) -> ConfigData:
        """加载数据文件，不存在则生成默认空配置。"""

        if not self.path.exists():
            logger.info("数据文件不存在，初始化默认空配置: %s", self.path)
            data = ConfigData()
            self._atomic_write(data)
            self.data = data
            return data

        try:
            raw_text = self.path.read_text(encoding="utf-8").strip()
            raw = json.loads(raw_text) if raw_text else {}
        except json.JSONDecodeError as exc:
            logger.error("数据文件不是有效 JSON: %s", self.path)
            raise ValueError(f"数据文件不是有效 JSON: {self.path}") from exc

        data = ConfigData.from_dict(raw)
        self._validate_unique_ids(data.accounts)
        self.data = data
        return data

    def save(self) -> None:
        """保存当前内存数据（原子写入）。"""

        data = self._require_loaded()
        self._validate_unique_ids(data.accounts)
        self._atomic_write(data)

    def list_accounts(self) -> list[Account]:
        data = self._require_loaded()
        return list(data.accounts)

    def get_account(self, account_id: str) -> Account | None:
        data = self._require_loaded()
        for account in data.accounts:
            if account.id == account_id:
                return account
        return None

    def add_account(self, account: Account, save: bool = True) -> None:
        data = self._require_loaded()
        if not account.id:
            raise ValueError("账户 id 不能为空")
        if self.get_account(account.id):
            raise ValueError(f"账户 id 重复: {account.id}")
        data.accounts.append(account)
        if save:
            self.save()

    def update_account(self, account: Account, save: bool = True) -> None:
        data = self._require_loaded()
        for index, item in enumerate(data.accounts):
            if item.id == account.id:
                data.accounts[index] = account
                if save:
                    self.save()
                return
        raise KeyError(f"账户不存在: {account.id}")

    def delete_account(self, account_id: str, save: bool = True) -> bool:
        data = self._require_loaded()
        for index, item in enumerate(data.accounts):
            if item.id == account_id:
                del data.accounts[index]
                if save:
                    self.save()
                return True
        return False

    def get_settings(self) -> Settings:
        data = self._require_loaded()
        return data.settings

    def update_settings(self, settings: Settings, save: bool = True) -> None:
        data = self._require_loaded()
        data.settings = settings
        if save:
            self.save()

    def _require_loaded(self) -> ConfigData:
        if self.data is None:
            raise RuntimeError("数据尚未加载，请先调用 load()")
        return self.data

    def _validate_unique_ids(self, accounts: Iterable[Account]) -> None:
        seen: set[str] = set()
        duplicates: set[str] = set()
        for account in accounts:
            if not account.id:
                continue
            if account.id in seen:
                duplicates.add(account.id)
            else:
                seen.add(account.id)
        if duplicates:
            dup_text = ", ".join(sorted(duplicates))
            logger.error("账户 id 重复: %s", dup_text)
            raise ValueError(f"账户 id 重复: {dup_text}")

    def _atomic_write(self, data: ConfigData) -> None:
        self.path.parent.mkdir(parents=True, exist_ok=True)
        tmp_path = self.path.with_name(f"{self.path.name}.tmp")
        payload = json.dumps(data.to_dict(), ensure_ascii=False, indent=2)
        tmp_path.write_text(payload, encoding="utf-8")
        tmp_path.replace(self.path)
