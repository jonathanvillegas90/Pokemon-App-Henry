import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  cleanPokemons,
  filterByType,
  getAll,
  getType,
  OrderByID,
  orderByName,
  getByName,
} from "../../actions";
import Pokemons from "../Pokemons/Pokemons";
import { Loading } from "../Loading/Loading";
import { SearchBar } from "../SearchBar/SearchBar";
import "./Home.css";

export const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getType());
    dispatch(getAll());
  }, [dispatch]);
  const types = useSelector((state) => state.types);
  const pokemons = useSelector((state) => state.pokemons);
  const pokemonsSearch = useSelector((state) => state.pokemonsSearch);

  const [input, setInput] = useState("");
  const [selectionType, setselectionType] = useState();
  const [page, setpage] = useState(0);
  const [current, setcurrent] = useState(0);
  const [maxPorPagina] = useState(9);
  const [data, setData] = useState();
  const maxPaginas = Math.ceil(pokemons.length / maxPorPagina);
  const [selectionOrder, setselectionOrder] = useState();

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getByName(input));
    setData(() => [...data, pokemonsSearch]);
    setInput("");
  };
  const handleChangeType = (e) => {
    setselectionType(e.target.value);
  };
  const handleSubmitType = (e) => {
    e.preventDefault();
    if (selectionType === "getAll") {
      setcurrent(0);
      paginar();
    } else {
      let tipoSeleccionado = pokemons.filter(
        (pokemon) => pokemon.typePokemon === selectionType
      );
      setData(tipoSeleccionado);
    }
  };
  const handleChangeOrder = (e) => {
    setselectionOrder(e.target.value);
  };
  const handleSubmitOrder = (e) => {
    e.preventDefault();
    switch (selectionOrder) {
      case "Name A-Z": {
        dispatch(orderByName("asc"));
        paginar();
        break;
      }
      case "Name Z-A": {
        dispatch(orderByName("des"));
        paginar();
        break;
      }
      case "ID asc": {
        dispatch(OrderByID("asc"));
        paginar();
        break;
      }
      case "ID des": {
        dispatch(OrderByID("des"));
        paginar();
        break;
      }

      default:
        break;
    }
  };

  useEffect(() => {
    paginar();
  }, [current]);
  let aux = [];
  for (let i = 1; i < maxPaginas + 1; i++) {
    aux.push(i);
  }
  let slice = [];
  function paginar() {
    slice = pokemons.slice(current, current + maxPorPagina);
    setData(slice);
  }

  const handleClickNext = (e) => {
    if (page < maxPaginas - 1) {
      setpage(page + 1);
      setcurrent(current + maxPorPagina);
    }
  };
  const handleClickPrev = (e) => {
    if (page > 0) {
      setpage(page - 1);
      setcurrent(current - maxPorPagina);
    }
  };
  const handleClickNum = (e) => {
    setpage(e.target.value);
    if (e.target.value === "1") {
      setcurrent(0);
    } else {
      setcurrent((page - 1) * maxPorPagina);
    }
  };

  return (
    <>
      <div className="orderby">
        <form onSubmit={handleSubmitType}>
          <legend>Order by Type:</legend>
          <select onChange={handleChangeType}>
            <option value hidden>
              Seleccione una opción
            </option>
            <option defaultvalue="getAll">All types</option>
            {types.map((type) => {
              return (
                <option key={type.id} value={type.name}>
                  {type.name}
                </option>
              );
            })}
          </select>
          <input type="submit" value="Select" />
        </form>
        <form onSubmit={handleSubmitOrder}>
          <legend>Order by:</legend>
          <select onChange={handleChangeOrder}>
            <option defaultValue>Seleccione una opción</option>
            <option value="Name A-Z">Name A-Z</option>
            <option value="Name Z-A">Name Z-A</option>
            <option value="ID asc">ID asc</option>
            <option value="ID des">ID desc</option>
          </select>
          <input type="submit" value="Select" />
        </form>

        <div>
          <input type="button" onClick={handleClickPrev} value="Prev" />
          {aux.map((num) => {
            return <input type="button" onClick={handleClickNum} value={num} />;
          })}
          <input type="button" onClick={handleClickNext} value="Next" />
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Pokémon search: </span>
        </label>
        <input
          type="text"
          placeholder="Pokémon search"
          name="name"
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
      {pokemons.length === 0 ? <Loading /> : <Pokemons params={data} />}
    </>
  );
};
