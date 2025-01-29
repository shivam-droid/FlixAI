import React from "react";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="absolute z-30  w-72 py-4 px-8 ml-20">
      <img
        src={logo}
        alt="FlixAI Logo"
      />
    </div>
  );
};

export default Header;
