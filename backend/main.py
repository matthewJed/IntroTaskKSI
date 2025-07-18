from fastapi import FastAPI
from routers import task_router
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()
app.include_router(task_router.router)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # lub ["http://localhost:3000"]
    allow_credentials=True,
    allow_methods=["*"],  # lub ["GET", "POST", "PUT", "DELETE"]
    allow_headers=["*"],
)