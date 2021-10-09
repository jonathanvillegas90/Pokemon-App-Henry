import React from "react";
import Logo from "../../image/Logo.png";
import { Link, NavLink } from "react-router-dom";

export const Nav = () => {
  return (
    <div className="NavBar">
      <Link to="/home">
        <img src={Logo} alt="" />
      </Link>
      <Link to="/create">
        <button className="BB">Crear</button>
      </Link>
    </div>
  );
};
