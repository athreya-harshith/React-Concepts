import { memo, useCallback, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  // const printLog = () => {
  //   console.log("Printing logs");
  // };
  const printLog = useCallback(() => {
    console.log("Printing logs");
  }, []);
  return (
    <div>
      <Child inputFunction={printLog} />
      <Child inputFunction={printLog} />
      <Child inputFunction={printLog} />
      <Child inputFunction={printLog} />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Counter {count}
      </button>
    </div>
  );
}
const Child = memo(({ inputFunction }) => {
  console.log("child redered");
  return (
    <div>
      <h1>Child Component</h1>
    </div>
  );
});
export default App;
