import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAll, getByName } from "../../actions/index.js";
import Pokemon from "../Pokemon/Pokemon.jsx";
import "./Pokemons.css";

const Pokemons = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAll());
  }, []);

  const pokemons = useSelector((state) => state.pokemons);

  return (
    <div className="multi">
      {pokemons?.map((pokemon) => {
        return (
          <Link
            to={`/pokemon/${pokemon.name}`}
            onClick={() => dispatch(getByName(pokemon.name))}
          >
            <Pokemon
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.name}
              photo={pokemon.photo}
              type={pokemon.typePokemon}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default Pokemons;
