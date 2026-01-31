"""操作类路由。"""

from dataclasses import replace

from fastapi import APIRouter, Depends

from rainyun.config import Config
from rainyun.data.store import DataStore
from rainyun.scheduler import MultiAccountRunner
from rainyun.server.manager import ServerManager
from rainyun.web.deps import get_store, require_auth
from rainyun.web.errors import ApiError
from rainyun.web.responses import success_response

router = APIRouter(prefix="/api/actions", tags=["actions"], dependencies=[Depends(require_auth)])


@router.post("/checkin")
def run_checkin(store: DataStore = Depends(get_store)) -> dict:
    runner = MultiAccountRunner(store)
    results = runner.run()
    payload = [
        {"account_id": item.account_id, "success": item.success, "message": item.message}
        for item in results
    ]
    return success_response(payload)


@router.post("/checkin/{account_id}")
def run_checkin_for_account(account_id: str, store: DataStore = Depends(get_store)) -> dict:
    runner = MultiAccountRunner(store)
    result = runner.run_for_account(account_id)
    if result is None:
        raise ApiError("账户不存在", status_code=404)
    payload = {"account_id": result.account_id, "success": result.success, "message": result.message}
    return success_response(payload)


def _renew_single_account(account, settings) -> dict:
    if not getattr(account, "api_key", ""):
        return {
            "account_id": getattr(account, "id", ""),
            "success": False,
            "message": "未配置 API_KEY",
        }
    config = Config.from_account(account, settings)
    config = replace(config, auto_renew=True)
    manager = ServerManager(account.api_key, config=config)
    data = manager.check_and_renew()
    return {
        "account_id": getattr(account, "id", ""),
        "success": True,
        "message": "ok",
        "data": data,
    }


@router.post("/renew")
def run_renew_all(store: DataStore = Depends(get_store)) -> dict:
    data = store.load() if store.data is None else store.data
    payload = []
    for account in data.accounts:
        if not getattr(account, "api_key", ""):
            continue
        try:
            payload.append(_renew_single_account(account, data.settings))
        except Exception as exc:
            payload.append(
                {
                    "account_id": getattr(account, "id", ""),
                    "success": False,
                    "message": str(exc),
                }
            )
    return success_response(payload)


@router.post("/renew/{account_id}")
def run_renew_for_account(account_id: str, store: DataStore = Depends(get_store)) -> dict:
    data = store.load() if store.data is None else store.data
    account = next((item for item in data.accounts if item.id == account_id), None)
    if not account:
        raise ApiError("账户不存在", status_code=404)
    if not getattr(account, "api_key", ""):
        raise ApiError("未配置 API_KEY", status_code=400)
    try:
        payload = _renew_single_account(account, data.settings)
    except Exception as exc:
        raise ApiError(str(exc), status_code=500) from exc
    return success_response(payload)
