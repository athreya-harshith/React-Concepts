import { useEffect, useState } from "react";
import axios from "axios";
function UEB({ id }) {
  return (
    <div>
      <Todo id={id} />
    </div>
  );
}
function Todo({ id }) {
  const [todo, setTodo] = useState("");
  async function fetchTodById() {
    const res = await axios.get(`https://dummyjson.com/todos/${id}`);
    console.log(res.data);
    setTodo(res.data);
  }
  useEffect(() => {
    fetchTodById();
  }, []);

  return (
    <>
      <h1>{todo.todo}</h1>
    </>
  );
}
export default UEB;
