from sqlalchemy import create_engine
from sqlalchemy.orm import Session, sessionmaker

engine = create_engine('sqlite:///mydatabase.db')
Session = sessionmaker(bind = engine)
def get_db():
    db = Session()
    try:
        yield db #yields generator -> special type of object/function that returns data in parts instead of returning them fully
    finally:
        db.close()