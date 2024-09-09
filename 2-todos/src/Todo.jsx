import React from "react";

const Todo = (props) => {
  return (
    <div className="todo-container">
      <h1>{props.name}</h1>
      <h3>{props.description}</h3>
      <h6>{props.status}</h6>
    </div>
  );
};

export default Todo;
