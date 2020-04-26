import React from "react";
import "./navbar.css";
import List from "../list/list";
import Logo from "../logo.png";

function Nav() {
  return (
    <div className="navbar">
      <img src={Logo} className="log" />
      <List />
    </div>
  );
}

export default Nav;
