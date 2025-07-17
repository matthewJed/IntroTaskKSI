from fastapi import FastAPI
from backend.routers import task_router

app = FastAPI()
app.include_router(task_router.router)