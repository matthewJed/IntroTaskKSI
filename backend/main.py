from fastapi import FastAPI
from routers import task_router

api = FastAPI()
api.include_router(task_router.router)