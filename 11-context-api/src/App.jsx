import { useContext, useState } from "react";
import "./App.css";
import { CountContext } from "./context";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CountContext.Provider value={{ count, setCount }}>
        <Count />
      </CountContext.Provider>
    </>
  );
}
function Count() {
  return (
    <div>
      <CountRenderer />
      <Button />
    </div>
  );
}
function CountRenderer() {
  const { count } = useContext(CountContext);
  return <div>{count}</div>;
}
function Button() {
  const { count, setCount } = useContext(CountContext);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>INCREMENT</button>
      <button onClick={() => setCount(count - 1)}>DECREMENT</button>
    </div>
  );
}
export default App;
