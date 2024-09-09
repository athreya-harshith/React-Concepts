const Drawer = (props) => {
  function handleClick() {
    props.setVisible(false);
  }
  return (
    <div id="drawer">
      <button onClick={handleClick}>Close</button>
    </div>
  );
};

export default Drawer;
