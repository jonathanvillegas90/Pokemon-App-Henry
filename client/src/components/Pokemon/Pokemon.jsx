import React from "react";
import "./Pokemon.css";
import pokeball from "../../image/pokeball.png";

const Pokemon = (params) => {
  return (
    <div className="cont-pokemon">
      <img src={params.photo ? params.photo : pokeball} alt={params.name} />
      <div className="details">
        <h3>{params.name}</h3>

        <h4>{params.type}</h4>
      </div>
    </div>
  );
};

export default Pokemon;
