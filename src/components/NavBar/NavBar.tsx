import React from "react";

import "./NavBar.scss";
import { Navbar } from "react-bootstrap";

const Menu: React.FC = () => {
  return (
    <Navbar sticky="top">
      <Navbar.Brand href="#">Pokemon App</Navbar.Brand>
      <Navbar.Toggle />
    </Navbar>
  );
};

export default Menu;
