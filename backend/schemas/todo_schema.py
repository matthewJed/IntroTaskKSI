from typing import Optional
from pydantic import BaseModel, Field

class TodoBase(BaseModel):
    name: str=Field(..., description='Task name')
    description: Optional[str]=Field(None, description='description of the task')

class TodoCreate(TodoBase):
    pass

class Todo(TodoBase):
    id: int=Field(..., description='Unique id number for the task')

