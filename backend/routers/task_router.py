from fastapi import APIRouter, Depends, HTTPException
from backend.schemas.todo_schema import Todo, TodoCreate
from sqlalchemy.orm import Session
from backend.database import get_db
from backend.repositories.todo_repository import todo_repository
from typing import List

router = APIRouter()

#without Depends i would get only a generator not a session
#FastAPI will call this for me and will call get_db().next() that creates session and will pass it to the db parameter to my function
#after my code finishes FastAPI will close this session
@router.get("/", response_model=List[Todo])

def get_todos(db: Session = Depends(get_db)):
      return todo_repository.get_all(db)

@router.post("/", response_model=Todo)
def create_todo(todo_data: TodoCreate,db: Session = Depends(get_db)):
      return todo_repository.create(db, name=todo_data.name, description=todo_data.description)

@router.delete("/{todo_id}", response_model=Todo)
def remove_todo(todo_id: int,db: Session = Depends(get_db)):
      todo = todo_repository.delete(db, todo_id=todo_id)
      if todo:
            return todo
      raise HTTPException(status_code=404, detail='Todo not found')
       