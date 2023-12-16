import React, { useContext } from "react";
import { TaskContext } from "./TaskContext";

const Task = ({ task }) => {
  const { updateTask, deleteTask } = useContext(TaskContext);

  const handleCheck = () => {
    updateTask({ ...task, isDone: !task.isDone });
  };

  const handleDelete = () => {
    deleteTask(task.id);
  };

  return (
    <div>
      <input type="checkbox" checked={task.isDone} onChange={handleCheck} />
      <span>{task.description}</span>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Task;
