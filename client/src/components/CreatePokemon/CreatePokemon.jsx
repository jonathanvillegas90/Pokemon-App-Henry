import React, { useState } from "react";
import { addPokemon } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import "./CreatePokemon.css";
import { Link } from "react-router-dom";

export function validate(input) {
  let errors = {};
  if (!input.name) {
    errors.name = "Name is required";
  } else if (RegExp("[a-zA-Z ]{2,254}").test(input.name)) {
    errors.name = "Name is invalid";
  }
  return errors;
}

function CreatePokemon() {
  const [input, setInput] = useState();
  const [errors, setErrors] = useState({});
  let types = useSelector((state) => state.types);
  const dispatch = useDispatch();

  const handleChange = function (e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addPokemon(input));
    setInput(" ");
  }
  return (
    <form className="formulario" onSubmit={handleSubmit}>
      <h1>Create Pokémon</h1>
      <label>Name</label>
      <input name="name" onChange={handleChange}></input>
      {errors.name && <p className="danger">{errors.name}</p>}
      <legend>Select Type:</legend>
      <select onChange={handleChange}>
        <option defaultValue>Seleccione una opción</option>
        {types.map((type) => {
          return (
            <option key={type.id} value={type.name}>
              {type.name}
            </option>
          );
        })}
      </select>

      <label>HP</label>
      <input
        name="hp"
        type="number"
        min="0"
        max="9999"
        onChange={handleChange}
      ></input>

      <label>Attack</label>
      <input
        name="attack"
        type="number"
        min="0"
        max="9999"
        onChange={handleChange}
      ></input>

      <label>Defense</label>
      <input
        name="defense"
        type="number"
        min="0"
        max="9999"
        onChange={handleChange}
      ></input>

      <label>Speed</label>
      <input
        name="speed"
        type="number"
        min="0"
        max="9999"
        onChange={handleChange}
      ></input>

      <label>Weight</label>
      <input
        name="weight"
        type="number"
        min="0"
        max="9999"
        onChange={handleChange}
      ></input>

      <label>Height</label>
      <input
        name="height"
        type="number"
        min="0"
        max="9999"
        onChange={handleChange}
      ></input>
      <Link to="/home">
        <button className="btn_submit" type="submit">
          Create
        </button>
      </Link>
    </form>
  );
}

export default CreatePokemon;
