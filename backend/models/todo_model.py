from sqlalchemy import create_engine, Integer, String, Column
from sqlalchemy.orm import declarative_base

engine = create_engine('sqlite:///myDatabase.db')

Base = declarative_base()
class Todo(Base):
    __tablename__ = 'todos'
    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    description = Column(String, nullable=True)