import React from "react";
import Loader from "../../image/pokeball-800x600.gif";
import "./Loading.css";

export const Loading = () => {
  return (
    <>
      <img className="loading" src={Loader} alt="Cargando..." />
    </>
  );
};
