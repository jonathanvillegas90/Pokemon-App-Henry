import React from "react";
import Logo from "../../image/Logo.png";
import { Link } from "react-router-dom";
import "./Nav.css";
import { useDispatch } from "react-redux";
import { cleanDetail } from "../../actions";

export const Nav = () => {
  const dispatch = useDispatch();
  return (
    <div className="NavBar">
      <Link to="/home" onClick={() => dispatch(cleanDetail())}>
        <img className="home" src={Logo} alt="home" />
      </Link>

      <Link to="/create">
        <button className="boton">Crear</button>
      </Link>
    </div>
  );
};
