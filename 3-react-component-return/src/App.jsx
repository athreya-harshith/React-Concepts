function App() {
  // return (
  //   <div>
  //     <Header title={"some string 1"} />
  //     <Header title={"some string 2"} />
  //   </div>
  // ); Inspect it we can see Header is wrapped inside a div element
  // return (
  //   <Header title={"some string 1"} />
  //   <Header title={"some string 1"} />
  // ); Causes error as a component should return only a single child Adjacent JSX elements must be wrapped in an enclosing tag.

  return (
    <>
      <Header title={"some string 1"} />
      <Header title={"some string 2"} />
    </>
    // on inspect the header component is not wrapped inside a div element
    // these are called as fragments
  );
}

function Header({ title }) {
  return <h1>{title}</h1>;
}
export default App;
