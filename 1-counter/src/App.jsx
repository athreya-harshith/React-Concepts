import { useState } from "react";
import NavBar from "./NavBar";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <NavBar />
      <Button count={count} setCount={setCount}></Button>
    </>
  );
}

function Button(props) {
  function onClickHandler() {
    props.setCount(props.count + 1);
  }
  return <button onClick={onClickHandler}>Counter {props.count} value</button>;
}
export default App;
