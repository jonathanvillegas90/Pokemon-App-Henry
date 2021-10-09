import React from "react";
import Video from "../../video/pokemon intro.mp4";
import Logo from "../../image/Logo.png";
import "./LandingPage.css";

export const LandingPage = () => {
  return (
    <>
      <img src={Logo} alt="Pokémon" />

      <button className="BB">BIENVENIDO</button>
      <div className="vid">
        <video autoPlay loop muted>
          <source src={Video} type="video/mp4" />
        </video>
      </div>
    </>
  );
};
