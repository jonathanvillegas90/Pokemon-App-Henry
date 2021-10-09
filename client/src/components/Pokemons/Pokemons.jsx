import React from "react";
import { useSelector } from "react-redux";
import Pokemon from "../Pokemon/Pokemon.jsx";
import "./Pokemons.css";

const Pokemons = () => {
  const pokemons = useSelector((state) => state.pokemons);
  console.log(pokemons);
  return (
    <div className="multi">
      {pokemons?.map((pokemon) => {
        return (
          <Pokemon
            key={pokemon.id}
            name={pokemon.name}
            photo={pokemon.photo}
            type={pokemon.typePokemon}
          />
        );
      })}
    </div>
  );
};

export default Pokemons;
