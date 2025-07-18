"use client";
import "./HomePageStyles.css";
import TaskCard from "../components/TaskCard.jsx";
import { useEffect, useRef, useState } from "react";
import React from "react";
import { fetchAddTodo, fetchDeleteTodo, fetchTodos } from "../../http.js";
export default function HomePage() {
  const dialogRef = useRef(null);
  const [enteredTaskName, setEnteredTaskName] = useState("");
  const [enteredTaskDescription, setEnteredTaskDescription] = useState("");
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchTodos();
        setTasks(data);
      } catch (error) {
        setError({ message: error.message });
      }
    };
    fetchData();
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
    <div className="homePageWrapper">
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
        Add TODO
      </button>
      <div className="dialogWrapper">
        <dialog ref={dialogRef}>
          <h2>Create TODO</h2>
          {error && <p className="error">{error.message}</p>}
          <div>
            <p>TODO Name:</p>
            <input
              className="inputBoxName"
              value={enteredTaskName}
              onChange={handleChangeTaskName}
              type="text"
            ></input>
          </div>
          <div>
            <p>TODO Description:</p>
            <textarea
              className="inputBoxDesc"
              value={enteredTaskDescription}
              onChange={handleChangeTaskDescription}
              type="text"
            ></textarea>
          </div>
          <div className="submitButtonWrapper">
            <button className="submitButton" onClick={handleSubmitTask}>
              Submit
            </button>
          </div>
        </dialog>
      </div>
    </div>
  );
}
