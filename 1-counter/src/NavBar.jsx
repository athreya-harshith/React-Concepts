import { useState } from "react";
import Drawer from "./Drawer";

const NavBar = () => {
  const [visible, setVisible] = useState(false);
  function handleClick() {
    setVisible(true);
  }
  return (
    <div id="nav">
      <button onClick={handleClick}>Open</button>
      {visible && <Drawer setVisible={setVisible} />}
    </div>
  );
};

export default NavBar;
