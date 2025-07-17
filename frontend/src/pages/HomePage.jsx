import TaskCard from "../components/TaskCard.jsx";
import "./HomePageStyles.css";
import { useEffect, useRef, useState } from "react";
import React from "react";
import { fetchAddTodo, fetchDeleteTodo, fetchTodos } from "../http.js";
export default function HomePage() {
  const dialogRef = useRef(null);
  const [enteredTaskName, setEnteredTaskName] = useState("");
  const [enteredTaskDescription, setEnteredTaskDescription] = useState("");
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    async () => {
      try {
        const data = await fetchTodos();
        setTasks(data);
      } catch (error) {
        setError({ message: error.message });
      }
    };
  }, []);

  function openDialog() {
    dialogRef.current.showModal();
  }
  function closeDialog() {
    dialogRef.current.close();
  }
  function handleAddTask() {
    openDialog();
  }

  function handleChangeTaskDescription(event) {
    setEnteredTaskDescription(event.target.value);
  }

  function handleChangeTaskName(event) {
    setEnteredTaskName(event.target.value);
  }

  async function handleSubmitTask() {
    try {
      if (enteredTaskName.length == 0) {
        setError({ message: "TODO Name is empty. Please provide TODO Name" });
        return;
      }
      const taskData = await fetchAddTodo(
        enteredTaskName,
        enteredTaskDescription
      );

      setTasks((prev) => [...prev, taskData]);

      closeDialog();

      setEnteredTaskDescription("");
      setEnteredTaskName("");
    } catch (error) {
      setError({ message: error.message });
    }
  }

  async function handleDeleteTodo(todoID) {
    try {
      await fetchDeleteTodo(todoID);
      setTasks((prev) => prev.filter((todo) => todo.id !== todoID));
    } catch (error) {
      setError({ message: error.message });
    }
  }

  return (
    <>
      <h1>TODO LIST </h1>
      <div className="listOfTasks"></div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <TaskCard task={task} onDelete={handleDeleteTodo} />
          </li>
        ))}
      </ul>
      <button onClick={handleAddTask} className="addButton">
        Add Task
      </button>
      <dialog ref={dialogRef}>
        <h2>Create TODO</h2>
        <div className="inputBox">
          <p>TASK Name:</p>
          <input
            value={enteredTaskName}
            onChange={handleChangeTaskName}
            type="text"
          ></input>
        </div>
        <div className="inputBox">
          <p>TASK Description:</p>
          <input
            value={enteredTaskDescription}
            onChange={handleChangeTaskDescription}
            type="text"
          ></input>
        </div>
        <button onClick={handleSubmitTask}>Submit</button>
      </dialog>
      {error && <div className="error">{error.message}</div>}
    </>
  );
}
