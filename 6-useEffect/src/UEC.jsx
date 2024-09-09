import { useEffect, useState } from "react";
import axios from "axios";
function UEC() {
  const [item, setItem] = useState(1);
  const updateTodoSelected = (e) => {
    console.log(e.target.innerText);
    setItem(Number(e.target.innerText));
  };
  return (
    <div>
      <button onClick={updateTodoSelected}>1</button>
      <button onClick={updateTodoSelected}>2</button>
      <button onClick={updateTodoSelected}>3</button>
      <Todo item={item} />
    </div>
  );
}
function Todo({ item }) {
  const [todo, setTodo] = useState("");
  async function fetchTodById() {
    const res = await axios.get(`https://dummyjson.com/todos/${item}`);
    console.log(res.data);
    setTodo(res.data);
  }
  useEffect(() => {
    fetchTodById();
  }, [item]);

  return (
    <>
      <h1>{todo.todo}</h1>
    </>
  );
}
export default UEC;
