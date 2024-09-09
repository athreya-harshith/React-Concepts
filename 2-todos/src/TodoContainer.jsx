import React, { useState } from "react";
import Todo from "./Todo";
const TodoContainer = () => {
  const [todo, setTodo] = useState([
    {
      name: "Smaple Todo 1",
      description: "Some description that contains the sample todo",
      status: "pending",
    },
    {
      name: "Smaple Todo 2",
      description: "Some description that contains the sample todo",
      status: "pending",
    },
    {
      name: "Smaple Todo 3",
      description: "Some description that contains the sample todo",
      status: "pending",
    },
  ]);
  function handleClick() {
    setTodo([
      ...todo,
      {
        name: `Smaple Todo ${todo.length + 1}`,
        description: "Some description that contains the sample todo",
        status: "pending",
      },
    ]);
  }
  return (
    <div className="center-display">
      <button onClick={handleClick}>Add Todo</button>
      {todo &&
        todo.map((t, j) => (
          <Todo
            key={j}
            name={t.name}
            description={t.description}
            status={t.status}
          ></Todo>
        ))}
    </div>
  );
};

export default TodoContainer;
