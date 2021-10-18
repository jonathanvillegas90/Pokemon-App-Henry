import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getByName } from "../../actions/index.js";
import Pokemon from "../Pokemon/Pokemon.jsx";
import "./Pokemons.css";

export default function Pokemons() {
  const dispatch = useDispatch();

  let pokemonsStore = useSelector((state) => state.pokemons);

  // const [page, setpage] = useState(0);
  // const [current, setcurrent] = useState(0);
  // const [maxPorPagina] = useState(9);
  // const [data, setdata] = useState();
  // const [pokemons, setpokemons] = useState(pokemonsStore);
  // const maxPaginas = Math.ceil(pokemons.length / maxPorPagina);

  // let aux = [];
  // for (let i = 1; i < maxPaginas + 1; i++) {
  //   aux.push(i);
  // }
  // const paginar = () => {
  //   let slice = pokemons.slice(current, current + maxPorPagina);
  //   setdata(slice);
  // };
  // useEffect(() => {
  //   paginar();
  // }, []);
  // useEffect(() => {
  //   paginar();
  // }, [current]);

  // const handleClickNext = (e) => {
  //   if (page < maxPaginas - 1) {
  //     setpage(page + 1);
  //     setcurrent(current + maxPorPagina);
  //   }
  // };
  // const handleClickPrev = (e) => {
  //   if (page > 0) {
  //     setpage(page - 1);
  //     setcurrent(current - maxPorPagina);
  //   }
  // };
  // const handleClickNum = (e) => {
  //   setpage(e.target.value);
  //   if (e.target.value === "1") {
  //     setcurrent(0);
  //   } else {
  //     setcurrent((page - 1) * maxPorPagina);
  //   }
  // };
  return (
    <>
      {/* <div>
        <input type="button" onClick={handleClickPrev} value="Prev" />
        {aux.map((num) => {
          return <input type="button" onClick={handleClickNum} value={num} />;
        })}
        <input type="button" onClick={handleClickNext} value="Next" />
      </div> */}
      <div className="multi">
        {pokemonsStore?.map((pokemon) => {
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
