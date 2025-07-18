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
    name: enteredTaskName,
    description: enteredTaskDescription,
  };
  const response = await fetch(`${API_BASE_URL}/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(taskData),
  });
  const resData = await response.json();

  return resData;
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
