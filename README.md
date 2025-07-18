# About the project
It's a simple todo-list app that allows user to add, delete and view tasks.
Built as a introduction task for KSI Projects

## Built With
- React
- Python(Pydantic, SQLAlchemy, FastAPI)
- SQLite
- Docker

## Getting Started
### Prerequisites
- Python 3.x
- pip3
- 
**Clone this repository**
```bash
git clone https://github.com/matthewJed/IntroTaskKSI
cd IntroTaskKsi
```

**Build and run containers with Docker**
```bash 
docker-compose up --build
```
this will build and run React frontend on http://localhost:3000
and FastAPI backend on http://localhost:8000

**Stop the app**
```bash
docker-compose down
```


## API Endpoints

| Method | Path           | Description               |
| ------ | -------------- | ------------------------- |
| GET    | `/`            | Retrieve all todos        |
| POST   | `/`            | Create a new todo         |
| DELETE | `/{todo_id}`   | Delete a todo by its ID   |
