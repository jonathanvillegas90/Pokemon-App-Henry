import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getAll,
  getType,
  OrderByID,
  orderByName,
  getByName,
} from "../../funcionalidad/actions";
import Pokemons from "../Pokemons/Pokemons";
import { Loading } from "../Loading/Loading";
import "./Home.css";
import { useHistory } from "react-router-dom";

export const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getType());
    dispatch(getAll());
  }, [dispatch]);

  const types = useSelector((state) => state.types);
  const pokemons = useSelector((state) => state.pokemons);

  const [input, setInput] = useState("");
  const [selectionType, setselectionType] = useState();
  let page = useRef(0);
  let current = useRef(0);
  const [maxPorPagina] = useState(9);
  const [data, setData] = useState([]); //aca esta el problema
  const maxPaginas = Math.ceil(pokemons.length / maxPorPagina);
  const [selectionOrder, setselectionOrder] = useState();
  let history = useHistory();

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getByName(input));
    history.push(`/pokemon/${input}`);
  };
  const handleChangeType = (e) => {
    setselectionType(e.target.value);
  };
  const handleSubmitType = (e) => {
    e.preventDefault();
    if (selectionType === "getAll") {
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

  let aux = [];
  for (let i = 1; i < maxPaginas + 1; i++) {
    aux.push(i);
  }

  function paginar() {
    setData(() => pokemons.slice(current, current + maxPorPagina));
  }

  /*  const handleClickNext = (e) => {
    if (page < maxPaginas - 1) {
      page = page + 1;
      current = current + 1;
    }
  };
  const handleClickPrev = (e) => {
    if (page > 0) {
      page = page - 1;
      current = current - maxPorPagina;
    }
  }; */
  const handleClickNum = (e) => {
    page = e.target.value;
    if (e.target.value === "1") {
      current = 0;
      paginar();
    } else {
      current = (page - 1) * maxPorPagina;
      paginar();
    }
  };

  return (
    <>
      <div className="orderby top-button-group">
        <form onSubmit={handleSubmitType}>
          <select
            className="retro-button blue-button"
            onChange={handleChangeType}
          >
            <option defaultValue="getAll">All types</option>
            {types.map((type) => {
              return (
                <option key={type.id} value={type.name}>
                  {type.name}
                </option>
              );
            })}
          </select>
          <input
            className="retro-button yellow-button"
            type="submit"
            value="Select"
          />
        </form>
        <form onSubmit={handleSubmitOrder}>
          <select
            className="retro-button blue-button"
            onChange={handleChangeOrder}
          >
            <option value hidden>
              Order by:
            </option>
            <option value="Name A-Z">Name A-Z</option>
            <option value="Name Z-A">Name Z-A</option>
            <option defaultValue="ID asc">ID asc</option>
            <option value="ID des">ID desc</option>
          </select>
          <input className="retro-button" type="submit" value="Select" />
        </form>

        <div>
          {/* <input
            className="retro-button red-button"
            type="button"
            onClick={handleClickPrev}
            value="Prev"
          /> */}
          {aux.map((num) => {
            return (
              <input
                key={num}
                className="retro-button"
                type="button"
                onClick={handleClickNum}
                value={num}
              />
            );
          })}
          {/*  <input
            className="retro-button green-button"
            type="button"
            onClick={handleClickNext}
            value="Next"
          /> */}
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          className="retro-button"
          type="text"
          placeholder="Pokémon search"
          name="name"
          onChange={handleChange}
        />
        <button className="retro-button" type="submit">
          Search
        </button>
      </form>
      {pokemons.length === 0 ? <Loading /> : <Pokemons params={data} />}
    </>
  );
};
