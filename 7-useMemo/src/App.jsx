import { useMemo, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [range, setRange] = useState(0);
  // let sum = 0;
  // for (let i = 0; i <= range; i++) sum += i;
  let sum = useMemo(() => {
    console.log("Called");
    let cnt = 0;
    for (let i = 0; i < range; i++) cnt += i;
    return cnt;
  }, [range]);
  function incrementCount() {
    setCount(count + 1);
  }
  function handleChange(e) {
    console.log(e.target.value);
    setRange(Number(e.target.value));
  }
  return (
    <>
      <input
        onChange={handleChange}
        placeholder="Enter Number to get sum of 1 to n"
      ></input>
      <br />
      Sum from 1 to {range} is {sum}
      <br />
      <button onClick={incrementCount}>Counter {count}</button>
    </>
  );
}

export default App;
