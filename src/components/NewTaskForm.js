import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function NewTaskForm({ CATEGORIES, onTaskFormSubmit }) {
  const defaultFormData = { text: "", category: CATEGORIES[0]}
  const [formData, setFormData] = useState(defaultFormData);

  const categoryOptions = CATEGORIES.map( category => (
    <option key={uuid()}>{category}</option>
  ))

  function onFormChange({ target: {name, value} }) {
    const updatedFormData = {...formData, [name]: value};
    setFormData(updatedFormData);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onTaskFormSubmit(formData);
    setFormData(defaultFormData);
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={formData.text}
          onChange={onFormChange}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={formData.category}
          onChange={onFormChange}
        >
          {categoryOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
