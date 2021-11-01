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
  const [page, setpage] = useState(0);
  const [current, setcurrent] = useState(0);
  const [maxPorPagina] = useState(9);
  const [data, setData] = useState([]);
  const maxPaginas = Math.ceil(pokemons.length / maxPorPagina);
  const [selectionOrder, setselectionOrder] = useState();

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  let history = useHistory();
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
      <div className="orderby top-button-group">
        <form onSubmit={handleSubmitType}>
          <select
            className="retro-button blue-button"
            onChange={handleChangeType}
          >
            <option value hidden>
              Order by Type:
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
            <option defaultvalue="ID asc">ID asc</option>
            <option value="ID des">ID desc</option>
          </select>
          <input className="retro-button" type="submit" value="Select" />
        </form>

        <div>
          <input
            className="retro-button red-button"
            type="button"
            onClick={handleClickPrev}
            value="Prev"
          />
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
          <input
            className="retro-button green-button"
            type="button"
            onClick={handleClickNext}
            value="Next"
          />
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
