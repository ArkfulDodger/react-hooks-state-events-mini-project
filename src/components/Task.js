import React from "react";

function Task({ handleClickDeleteItem, task: { text, category }}) {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleClickDeleteItem}>X</button>
    </div>
  );
}

export default Task;
