import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="dropMenu">
        <div className="lineButton"></div>
        <div className="lineButton"></div>
        <div className="lineButton"></div>
      </div>

      <div className="menuItem drop">1</div>
      <div className="menuItem drop">2</div>
      <div className="menuItem drop">3</div>
    </div>
  );
};

export default Header;
