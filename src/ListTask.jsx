import React, { useContext } from "react";
import { TaskContext } from "./TaskContext";
import Task from "./Task";

const ListTask = () => {
  const { tasks } = useContext(TaskContext);

  return (
    <div>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default ListTask;
