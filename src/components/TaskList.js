import React from "react";
import Task from "./Task";
import { v4 as uuid } from "uuid";

function TaskList({ tasks, setTasks, filteredCategory }) {
  function removeTask(index) {
    const updatedTasks = tasks.filter((task, i) => i !== index);
    setTasks(updatedTasks);
  }

  const filteredTaskList = tasks.filter(task => {
    return filteredCategory === 'All' || task.category === filteredCategory
  });

  const displayTaskList = filteredTaskList.map((task, index) => (
    <Task
      key={uuid()}
      handleClickDeleteItem={() => removeTask(index)}
      task={task}
    />
  ));

  return (
    <div className="tasks">
      {displayTaskList}
    </div>
  );
}

export default TaskList;
