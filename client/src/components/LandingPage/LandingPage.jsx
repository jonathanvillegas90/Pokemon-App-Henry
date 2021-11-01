import React from "react";
import Video from "../../video/pokemon-intro.ogv";
import Logo from "../../image/Logo.png";
import "./LandingPage.css";
import { Link } from "react-router-dom";
import { getAll } from "../../actions";
import { useDispatch } from "react-redux";

export const LandingPage = () => {
  const dispatch = useDispatch();
  return (
    <>
      <img className="logo" src={Logo} alt="Pokémon" />
      <Link to="/home">
        <button className="BB">BIENVENIDO</button>
      </Link>
      <div className="vid">
        <video autoPlay loop>
          <source src={Video} type="video/mp4" />
        </video>
      </div>
    </>
  );
};
