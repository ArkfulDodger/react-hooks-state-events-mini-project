import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [currentFilter, setCurrentFilter] = useState(CATEGORIES[0]);

  function onTaskFormSubmit(task) {
    const updatedTasks = [...tasks, task];
    setTasks(updatedTasks);
  }

  console.log(tasks);
  console.log(currentFilter);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        CATEGORIES={CATEGORIES}
        currentFilter={currentFilter}
        setCurrentFilter={setCurrentFilter}
      />
      <NewTaskForm CATEGORIES={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit} />
      <TaskList
        tasks={tasks}
        setTasks={setTasks}
        filteredCategory={currentFilter}
      />
    </div>
  );
}

export default App;
