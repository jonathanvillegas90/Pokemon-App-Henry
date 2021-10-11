import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterByType, OrderByID, orderByName } from "../../actions";
import Pokemons from "../Pokemons/Pokemons";
import "./Home.css";

export const Home = () => {
  let types = useSelector((state) => state.types);
  const dispatch = useDispatch();
  const [selectionType, setselectionType] = useState();
  const handleChangeType = (e) => {
    setselectionType(e.target.value);
  };
  const handleSubmitType = (e) => {
    e.preventDefault();
    dispatch(filterByType(selectionType));
    setselectionType((selectiontype) => [...selectionType, " "]);
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
      </div>
      <Pokemons />
    </>
  );
};
