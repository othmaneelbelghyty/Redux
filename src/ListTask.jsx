import React from "react";
import { useTasks } from "./TaskContext";
import Task from "./Task";

const ListTask = () => {
  const { tasks, toggleTaskDone, editTask } = useTasks();

  return (
    <div>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          toggleTaskDone={toggleTaskDone}
          editTask={editTask}
        />
      ))}
    </div>
  );
};

export default ListTask;
