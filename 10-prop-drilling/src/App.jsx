import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Count count={count} setCount={setCount} />
    </>
  );
}
function Count({ count, setCount }) {
  // here even though Count component doesn't need setCount state variable, its has got it
  // as a prop because to pass it down to the Button component!!
  // here prop is being drilled down !!
  return (
    <div>
      {count}
      <Button count={count} setCount={setCount} />
    </div>
  );
}
function Button({ count, setCount }) {
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>INCREMENT</button>
      <button onClick={() => setCount(count - 1)}>DECREMENT</button>
    </div>
  );
}
export default App;
