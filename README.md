# About the project
It's a simple todo-list app that allows user to add, delete and view tasks.
Built as a introduction task for KSI Projects

## Built With
-Python(Pydantic, SQLAlchemy, FastAPI)
-SQLite
-Docker

## Getting Started
### Prerequisites
-Python 3.x
-pip3

#### **Without docker**
Install dependecies    
```bash
   pip3 install -r requirements.txt
```
Then run the backend server
  ```bash
  python3 -m uvicorn main:app --reload
  ```

### **With docker**
Build the image
```bash 
docker build -t simple-todo-app:latest .
```
Run the container
```bash
docker run -d \
  --name simple-todo \
  -p 8080:8080 \
  simple-todo-app:latest
```
Stop the container
```bash
 docker stop simple-todo
```
Remove the container
```bash
  docker rm simple-todo
```

## API Endpoints

| Method | Path           | Description               |
| ------ | -------------- | ------------------------- |
| GET    | `/`            | Retrieve all todos        |
| POST   | `/`            | Create a new todo         |
| DELETE | `/{todo_id}`   | Delete a todo by its ID   |
