from sqlalchemy import create_engine, Integer, String, Column
from sqlalchemy.orm import declarative_base, Session
from models.todo_model import Todo
from database import get_db
class todoRepository:
    def get_all(self, db: Session):
        return db.query(Todo).all()

    def create(self, db: Session, name: str, description: str=None):
        new_todo = Todo(name=name, description=description)
        db.add(new_todo)
        db.commit()
        return new_todo
    
    def delete(self, db: Session, todo_id: int):
        todo = db.query(Todo).filter(Todo.id == todo_id).first()
        if todo:
            db.delete(todo)
            db.commit()
        return todo


#Global repository for imports
todo_repository = todoRepository()