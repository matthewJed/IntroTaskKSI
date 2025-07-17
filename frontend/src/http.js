const API_BASE_URL = "http://localhost:8080";

export async function fetchTodos() {
  const response = await fetch(`${API_BASE_URL}/`, {
    method: "GET",
  });
  if (!response.ok) {
    throw new Error(`Fetching error, ${response.status}`);
  }

  return response.json();
}

export async function fetchAddTodo(enteredTaskName, enteredTaskDescription) {
  const taskData = {
    taskName: enteredTaskName,
    taskDescription: enteredTaskDescription,
  };
  const response = await fetch(`${API_BASE_URL}/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(taskData),
  });
  const resData = await response.json();
  if (resData.email) {
    taskData.taskName = resData.email;
  }
  if (resData.taskDescription) {
    taskData.taskDescription = resData.taskDescription;
  }

  return taskData;
}

export async function fetchDeleteTodo(todoID) {
  const response = await fetch(`${API_BASE_URL}/${todoID}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error(`Deleting task failed: ${response.status}`);
  }
  return response.status;
}
