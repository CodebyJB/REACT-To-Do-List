export default function Task({ task, onDeleteTask, onToggleTask }) {
  let styles;
  if (task.taskPriority === "1") styles = "text-success";
  else if (task.taskPriority === "2") styles = "text-warning";
  else if (task.taskPriority === "3") styles = "text-danger";

  return (
    <li className="list-unstyled fs-1">
      <input
        className="form-check-input"
        type="checkbox"
        value={task.done}
        onChange={(e) => onToggleTask(task.id)}
      />
      <span
        className={`${styles} px-3`}
        style={task.done ? { textDecoration: "line-through" } : {}}
      >
        {task.taskDescription}
      </span>
      <button
        className="border-0 bg-transparent"
        onClick={() => onDeleteTask(task.id)}
      >
        ❌
      </button>
    </li>
  );
}
