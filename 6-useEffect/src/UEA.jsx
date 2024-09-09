import axios from "axios";
import { useEffect, useState } from "react";

const UEA = () => {
  const [todos, setTodos] = useState([]);
  async function fetchTodos() {
    const res = await axios.get("https://dummyjson.com/todos");
    console.log(res.data);
    setTodos(res.data.todos);
    // return res.data;
  }
  useEffect(() => {
    fetchTodos();
    // the below dont works
    // const data = fetchTodos();
    // setTodos(data.todos);
  }, []);
  return (
    <>
      {todos &&
        todos.map((todo) => <Todo key={todo.id} name={todo.todo}></Todo>)}
    </>
  );
};
function Todo({ name }) {
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
}
export default UEA;
