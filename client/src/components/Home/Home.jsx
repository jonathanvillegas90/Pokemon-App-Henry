import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  filterByType,
  getAll,
  getType,
  OrderByID,
  orderByName,
} from "../../actions";
import { Loading } from "../Loading/Loading";
import Pokemons from "../Pokemons/Pokemons";
import { SearchBar } from "../SearchBar/SearchBar";
import "./Home.css";

export const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAll());
    dispatch(getType());
  }, [dispatch]);

  const types = useSelector((state) => state.types);

  const pokemons = useSelector((state) => state.pokemons);

  const [selectionType, setselectionType] = useState();
  const handleChangeType = (e) => {
    setselectionType(e.target.value);
  };
  const handleSubmitType = (e) => {
    e.preventDefault();
    if (selectionType === "getAll") {
      dispatch(getAll());
      setselectionType((setselectionType) => [...selectionType, " "]);
    } else {
      dispatch(filterByType(selectionType));
      setselectionType((setselectionType) => [...selectionType, " "]);
    }
  };
  const [selectionOrder, setselectionOrder] = useState();
  const handleChangeOrder = (e) => {
    setselectionOrder(e.target.value);
  };
  const handleSubmitOrder = (e) => {
    e.preventDefault();
    switch (selectionOrder) {
      case "Name A-Z": {
        dispatch(orderByName("asc"));
        setselectionOrder((setselectionOrder) => [...selectionOrder, " "]);
        break;
      }
      case "Name Z-A": {
        dispatch(orderByName("des"));
        setselectionOrder((setselectionOrder) => [...selectionOrder, " "]);
        break;
      }
      case "ID asc": {
        dispatch(OrderByID("asc"));
        setselectionOrder((setselectionOrder) => [...selectionOrder, " "]);
        break;
      }
      case "ID des": {
        dispatch(OrderByID("des"));
        setselectionOrder((setselectionOrder) => [...selectionOrder, " "]);
        break;
      }

      default:
        break;
    }
  };
  return (
    <>
      <div className="orderby">
        <form onSubmit={handleSubmitType}>
          <legend>Order by Type:</legend>
          <select onChange={handleChangeType}>
            <option defaultValue>Seleccione una opción</option>
            <option value="getAll">All types</option>
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
        <SearchBar />
      </div>
      {!pokemons.length ? <Loading /> : <Pokemons />}
    </>
  );
};
