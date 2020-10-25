import React from "react";
import { Link } from "react-router-dom";

import "./NavBar.scss";
import { Navbar } from "react-bootstrap";

const Menu: React.FC = () => {
  return (
    <Navbar sticky="top">
      <Navbar.Brand>
        <Link to="/">Pokemon App</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar>
  );
};

export default Menu;
