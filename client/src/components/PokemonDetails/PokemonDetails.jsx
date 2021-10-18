import React from "react";
import { useSelector } from "react-redux";
import "./PokemonDetails.css";
import { Loading } from "../Loading/Loading";
import pokeball from "../../image/pokeball.png";

export const PokemonDetails = () => {
  const pokemonDetail = useSelector((state) => state.pokemonDetail);
  console.log(pokemonDetail);
  if (!pokemonDetail.name) {
    return <Loading />;
  } else {
    return (
      <>
        <div className="pokemon">
          <div className="cont-img">
            <img
              classname="photo"
              src={pokemonDetail.photo ? pokemonDetail.photo : pokeball}
              alt={pokemonDetail.name}
            />
          </div>
          <div className="cont-leyend">
            <h2>ID: {pokemonDetail.id}</h2>
            <h1>Name: {pokemonDetail.name}</h1>
            <h2>
              Type:{" "}
              {pokemonDetail.type
                ? pokemonDetail.type
                : pokemonDetail.pokemonType}
            </h2>
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
      </>
    );
  }
};
