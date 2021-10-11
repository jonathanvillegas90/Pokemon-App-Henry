import React from "react";
import Logo from "../../image/Logo.png";
import { Link } from "react-router-dom";
import "./Nav.css";
import { SearchBar } from "../SearchBar/SearchBar";

export const Nav = () => {
  return (
    <div className="NavBar">
      <Link to="/home">
        <img className="home" src={Logo} alt="home" />
      </Link>
      <SearchBar />
      <Link to="/create">
        <button className="boton">Crear</button>
      </Link>
    </div>
  );
};
