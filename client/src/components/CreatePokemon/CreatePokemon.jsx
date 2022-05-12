import React, { useState } from "react";
import { addPokemon } from "../../funcionalidad/actions";
import { useDispatch, useSelector } from "react-redux";
import "./CreatePokemon.css";

export function validate(input) {
  let errors = {};
  if (!input.name) {
    errors.name = "Name is required";
  } else if (!/\S+\S+/.test(input.name)) {
    errors.name = "Name is invalid";
  }
  return errors;
}

function CreatePokemon() {
  const [input, setInput] = useState();
  const [errors, setErrors] = useState({});
  let types = useSelector((state) => state.types);
  const dispatch = useDispatch();

  const handleSelectionChange = function (e) {
    setInput({
      ...input,
      type: e.target.value,
    });
  };

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
    if (!errors.hasOwnProperty("name")) {
      dispatch(addPokemon(input));
      setInput({});
      alert("pokemon creado correctamente");
      window.location = "https://effulgent-phoenix-3f4532.netlify.app/home";
    } else {
      alert("no se están colocando los valores correctos");
    }
  }
  return (
    <form className="formulario" onSubmit={handleSubmit}>
      <h1>Create Pokémon</h1>
      <label>Name</label>
      <input name="name" required onChange={handleChange}></input>
      {errors.name && <p className="danger">{errors.name}</p>}
      <legend>Select Type:</legend>
      <select onChange={handleSelectionChange}>
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
      {/* <Link to="/home"> */}
      <button className="btn_submit" type="submit" act>
        Create
      </button>
      {/* </Link> */}
    </form>
  );
}

export default CreatePokemon;
