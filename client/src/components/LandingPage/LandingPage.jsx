import React from "react";
import Video from "../../video/pokemon-intro.ogv";
import Logo from "../../image/Logo.png";
import "./LandingPage.css";
import { Link } from "react-router-dom";

export const LandingPage = () => {
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
