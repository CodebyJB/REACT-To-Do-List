import { useState } from "react";
import Task from "./Task";

export default function TaskList({
  tasks,
  onDeleteTask,
  onToggleTask,
  onClearList,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedTasks;

  if (sortBy === "input") sortedTasks = tasks;

  if (sortBy === "priority")
    sortedTasks = tasks.slice().sort((a, b) => a.taskPriority - b.taskPriority);

  if (sortBy === "description")
    sortedTasks = tasks
      .slice()
      .sort((a, b) => a.taskDescription.localeCompare(b.taskDescription));

  if (sortBy === "done")
    sortedTasks = tasks.slice().sort((a, b) => a.done - b.done);

  return (
    <div>
      <ul className="text-center my-5">
        {sortedTasks.map((task) => (
          <Task
            task={task}
            key={task.id}
            onDeleteTask={onDeleteTask}
            onToggleTask={onToggleTask}
          />
        ))}
      </ul>

      <div className="d-flex align-items-end justify-content-center">
        <select
          className="p-1 mx-3 border-primary rounded"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="input">Sort by input order</option>
          <option value="priority">Sort by priority</option>
          <option value="description">Sort by description</option>
          <option value="done">Sort by done status</option>
        </select>
        <button className="btn btn-primary" onClick={onClearList}>
          Clear List
        </button>
      </div>
    </div>
  );
}
