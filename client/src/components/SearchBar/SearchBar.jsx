import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";

import { getByName } from "../../actions";

export const SearchBar = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getByName(input));
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Pokémon..."
        value={input}
        onChange={handleChange}
      />
      <input type="submit" value="Search" />
    </form>
  );
};
