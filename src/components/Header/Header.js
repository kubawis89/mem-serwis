import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <header>
      <NavLink to="/memes" style={{ textDecoration: "none" }}>
        <h1 className="logo">MEM serwis</h1>
      </NavLink>
    </header>
  );
}

export default Header;
