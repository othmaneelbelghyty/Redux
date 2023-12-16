import React from "react";
import { TaskProvider } from "./TaskContext";
import AddTask from "./AddTask";
import ListTask from "./ListTask";

const App = () => {
  return (
    <TaskProvider>
      <h1>To-Do List</h1>
      <AddTask />
      <ListTask />
    </TaskProvider>
  );
};

export default App;
