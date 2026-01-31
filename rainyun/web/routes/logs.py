"""日志路由。"""

from fastapi import APIRouter, Depends, Query

from rainyun.web.deps import require_auth
from rainyun.web.logs import get_logs
from rainyun.web.responses import success_response

router = APIRouter(prefix="/api/logs", tags=["logs"], dependencies=[Depends(require_auth)])


@router.get("")
def list_logs(limit: int = Query(200, ge=1, le=1000)) -> dict:
    return success_response(get_logs(limit))
