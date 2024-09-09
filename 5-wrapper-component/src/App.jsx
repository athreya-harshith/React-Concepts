// This is not the right way
// function App() {
//   return (
//     <>
//       <WrapperComponent
//         innerComponent={<TextComponent content={"First Card"} />}
//       />
//       <WrapperComponent
//         innerComponent={<TextComponent content={"Second Card"} />}
//       />
//     </>
//   );
// }

// function TextComponent({ content }) {
//   return (
//     <div>
//       <h1>{content}</h1>
//     </div>
//   );
// }
// function WrapperComponent({ innerComponent }) {
//   return <div style={{ border: "2px solid black" }}>{innerComponent}</div>;
// }

// The right way is

function App() {
  return (
    <>
      <WrapperComponent>
        <h2>Welcome to the new way</h2>
      </WrapperComponent>
      <WrapperComponent>
        <div>
          Hello Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Ducimus, dolor?
        </div>
      </WrapperComponent>
    </>
  );
}

function WrapperComponent({ children }) {
  return (
    <div style={{ border: "1px solid black", margin: 10, padding: 3 }}>
      {children}
    </div>
  );
}
export default App;
