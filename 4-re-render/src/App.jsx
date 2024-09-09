import React from "react";
import { useState } from "react";

// this is not optimal as if name is changed the app is rerendered and so the childrens are
// function App() {
//   const [name, setName] = useState("Harshith");
//   function handleClick() {
//     setName(Math.random());
//   }
//   return (
//     <>
//       <button onClick={handleClick}>Click Here To Change Name</button>
//       <Header title={name} />
//       <Header title={"Athreya"} />
//     </>
//   );
// }

// there are two ways to fix this

// this is by pushing the state down

// function App() {
//   return (
//     <>
//       <HeaderWithButton />
//       <Header title={"Athreya"} />
//     </>
//   );
// }
// function HeaderWithButton() {
//   const [name, setName] = useState("Harshith");
//   function handleClick() {
//     setName(Math.random());
//   }

//   return (
//     <>
//       <button onClick={handleClick}>Click to change Name</button>
//       <Header title={name} />
//     </>
//   );
// }
// function Header({ title }) {
//   return (
//     <>
//       <div>My Name is {title}</div>
//     </>
//   );
// }

// Another way is by React.memo()

function App() {
  const [name, setName] = useState("Harshith");
  function handleClick() {
    setName(Math.random());
  }
  return (
    <div>
      <button onClick={handleClick}>Click Here To Change Name</button>
      <Header title={name} />
      <Header title="Athreya" />
      <Header title="Athreya" />
      <Header title="Athreya" />
    </div>
    // it works only if the parent is <div> not works for <>
  );
}

const Header = React.memo(function Head({ title }) {
  return (
    <>
      <div>My Name is {title}</div>
    </>
  );
});
export default App;
