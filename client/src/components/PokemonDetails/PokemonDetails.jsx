import React from "react";
import { useSelector } from "react-redux";
import "./PokemonDetails.css";
import { Loading } from "../Loading/Loading";
import pokeball from "../../image/pokeball.png";

export const PokemonDetails = () => {
  const pokemonDetail = useSelector((state) => state.pokemonDetail);

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
          <div className="card-details">
            <p>
              Hp:<span> {pokemonDetail.hp}</span>
            </p>
            <p>
              Attack: <span>{pokemonDetail.attack}</span>
            </p>
            <p>
              Defense: <span>{pokemonDetail.defense}</span>
            </p>

            <p>
              Speed: <span>{pokemonDetail.speed}</span>
            </p>
            <p>
              Heigth:<span> {pokemonDetail.height}</span>
            </p>
            <p>
              Weigth: <span>{pokemonDetail.weight}</span>
            </p>
          </div>
        </div>
      </>
    );
  }
};
