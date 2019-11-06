import React from "react";

const Header = () => {
  return <header className="Header">
    <ul id="navbar" className="navbar">
      <a id="navButton" href="#home">Home</a>
      <a id="navButton" href="#about">About</a>
      <a id="navButton" href="#resume">Resume</a>
      <a id="navButton" href="#portfolio">Portfolio</a>
      <a id="navButton" href="#contact">Contact</a>
    </ul>
  </header>
};

export default Header;
