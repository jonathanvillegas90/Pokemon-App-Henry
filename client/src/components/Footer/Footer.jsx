import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <h1>Jonathan Villegas - &copy; {new Date().getFullYear()} </h1>
      </div>
    </nav>
  );
};

export default Footer;
