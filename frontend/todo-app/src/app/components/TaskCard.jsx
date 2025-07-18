import "./TaskCardStyles.css";
export default function TaskCard({ task, onDelete }) {
  return (
    <div className="taskWrapper">
      <div className="taskName">{task.name}</div>
      <p className="taskDescription">{task.description}</p>
      <button onClick={() => onDelete(task.id)}>remove</button>
    </div>
  );
}
