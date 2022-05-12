import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getByName } from "../../funcionalidad/actions/index.js";
import Pokemon from "../Pokemon/Pokemon.jsx";
import "./Pokemons.css";

export default function Pokemons(params) {
  const dispatch = useDispatch();
  let data = params.params;

  return (
    <>
      <div className="multi">
        {data?.map((pokemon) => {
          return (
            <div key={pokemon.id}>
              <Link
                to={`/pokemon/${pokemon.name}`}
                onClick={() => dispatch(getByName(pokemon.name))}
              >
                <Pokemon
                  id={pokemon.id}
                  name={pokemon.name}
                  photo={pokemon.photo}
                  type={
                    pokemon.typePokemon
                      ? pokemon.typePokemon
                      : pokemon.pokemonType
                  }
                />
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
