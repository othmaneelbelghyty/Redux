import { useContext } from "react";
import {TaskPovider} from "react"
const Task = ({ task }) => {
  const { updateTask, deleteTask } = useContext(TaskPovider);

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
