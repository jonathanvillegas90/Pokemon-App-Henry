import React, { Component, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getByName } from "../../actions/index.js";
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
            <Link
              to={`/pokemon/${pokemon.name}`}
              onClick={() => dispatch(getByName(pokemon.name))}
            >
              <Pokemon
                key={pokemon.id}
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
          );
        })}
      </div>
    </>
  );
}
