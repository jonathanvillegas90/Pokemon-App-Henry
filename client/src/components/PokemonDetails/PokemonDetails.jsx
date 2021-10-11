import React, { useEffect } from "react";
import { useSelector } from "react-redux";

export const PokemonDetails = () => {
  const pokemonDetail = useSelector((state) => state.pokemonDetail);

  return (
    <div className="cont-pokemon">
      <div className="cont-img">
        <img src={pokemonDetail.photo} alt={pokemonDetail.name} />
      </div>
      <div className="cont-leyend">
        <h2>ID: {pokemonDetail.id}</h2>
        <h3>Name: {pokemonDetail.name}</h3>
        <h2>Type: {pokemonDetail.type}</h2>
      </div>
      <div className="cont-stats">
        <p>Hp: {pokemonDetail.hp}</p>
        <p>Attack: {pokemonDetail.attack}</p>
        <p>Defense: {pokemonDetail.defense}</p>
        <p>Speed: {pokemonDetail.speed}</p>
        <p>Heigth: {pokemonDetail.height}</p>
        <p>Weigth: {pokemonDetail.weight}</p>
      </div>
    </div>
  );
};
