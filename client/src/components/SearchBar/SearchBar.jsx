import React, { Component, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { getByNameSearch } from "../../actions";

export const SearchBar = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getByNameSearch(input));
    setInput((Input) => [...input, " "]);
  };

  return (
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
  );
};
