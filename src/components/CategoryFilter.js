import React from "react";
import { v4 as uuid } from "uuid";

function CategoryFilter({ CATEGORIES, currentFilter, setCurrentFilter }) {
  const categoryButtons = CATEGORIES.map( category => (
    <button
      key={uuid()}
      onClick={() => setCurrentFilter(category)}
      className={currentFilter === category ? "selected" : ""}
    >
      {category}
    </button>
  ));
    
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
