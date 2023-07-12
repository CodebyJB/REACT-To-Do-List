import { useState } from "react";

export default function Form({ onAddTasks }) {
  const [taskDescription, setTaskDescription] = useState("");
  const [taskPriority, setTaskPriority] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!taskDescription) return;

    const newTask = {
      taskDescription,
      taskPriority,
      done: false,
      id: Date.now(),
    };

    onAddTasks(newTask);

    setTaskDescription("");
    setTaskPriority("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row align-items-center d-flex justify-content-around flex-wrap">
        <div className="col-auto my-1">
          <label className="mr-sm-2 px-3" for="inlineFormCustomSelect">
            Priority
          </label>
          <select
            className="custom-select p-1 mx-3 border-primary rounded"
            id="inlineFormCustomSelect"
            value={taskPriority}
            onChange={(e) => setTaskPriority(e.target.value)}
          >
            <option selected>Choose...</option>
            <option value="1" className="bg-success">
              low
            </option>
            <option value="2" className="bg-warning">
              medium
            </option>
            <option value="3" className="bg-danger">
              high
            </option>
          </select>
        </div>
        <div className="col-auto my-1">
          <div className="custom-control custom-checkbox mr-sm-2">
            <input
              className="form-control px-5 border-primary"
              type="text"
              placeholder="What's your task?"
              onChange={(e) => setTaskDescription(e.target.value)}
              value={taskDescription}
            />
          </div>
        </div>
        <div className="col-auto my-1">
          <button className="btn btn-primary">Add Task</button>
        </div>
      </div>
    </form>
  );
}
