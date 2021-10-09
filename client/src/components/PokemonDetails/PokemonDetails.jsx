import React from "react";

export const PokemonDetails = (params) => {
  return (
    <div className="cont-pokemon">
      <div className="cont-img">
        <img src={params.photo} alt={params.name} />
      </div>
      <div className="cont-leyend">
        <h2>{params.id}</h2>
        <h3>{params.name}</h3>
        <h2>{params.type}</h2>
      </div>
      <div className="cont-stats">
        <p>{params.hp}</p>
        <p>{params.attack}</p>
        <p>{params.defense}</p>
        <p>{params.speed}</p>
        <p>{params.heigth}</p>
        <p>{params.weigth}</p>
      </div>
    </div>
  );
};
