import React from "react";
import "./Pokemon.css";

const Pokemon = (params) => {
  return (
    <div className="cont-pokemon">
      <img src={params.photo} alt={params.name} />
      <div className="details">
        <h3>{params.name}</h3>
        <h4>{params.type}</h4>
      </div>
    </div>
  );
};

export default Pokemon;
