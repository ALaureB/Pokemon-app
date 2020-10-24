import React from "react";

import "./Header.scss";

import Menu from "../../components/Menu/Menu";

const Header: React.FC = () => { 
  return (
    <div id="pokemon-app-header">
        <Menu />
    </div>
  );
};

export default Header;
