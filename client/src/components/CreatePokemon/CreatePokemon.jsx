import React, { useState } from "react";
import { addPokemon } from "../../actions";
import { useDispatch } from "react-redux";

function CreatePokemon() {
  const [input, setInput] = useState();

  const dispatch = useDispatch();

  const handleChange = function (e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addPokemon(input));
    setInput("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <h1>Create Pokémon</h1>
      <label>Name</label>
      <input name="name" onChange={handleChange}></input>

      <label>Type</label>
      <textarea name="type" onChange={handleChange}></textarea>

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

      <button type="submit">Create</button>
    </form>
  );
}

export default CreatePokemon;
