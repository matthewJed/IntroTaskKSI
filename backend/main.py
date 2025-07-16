from fastapi import FastAPI
from backend.routers import task_router

api = FastAPI()
api.include_router(task_router.router)