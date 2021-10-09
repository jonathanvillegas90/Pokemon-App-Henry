const axios = require("axios");

export function addPokemon(pokemon) {
  return function (dispatch) {
    return axios({
      method: "post",
      url: "http://localhost:3001/pokemon",
      headers: {},
      data: {
        pokemon,
      },
    }).then((response) => {
      dispatch({ type: "ADD_POKEMON", payload: pokemon });
    });
  };
}

export function getAll() {
  return function (dispatch) {
    return axios.get("http://localhost:3001/pokemon").then((response) => {
      dispatch({ type: "GET_ALL_POKEMONS", payload: response.data });
    });
  };
}

export function getByName(name) {
  return function (dispatch) {
    return axios
      .get(`http://localhost:3001/pokemon?name${name}`)
      .then((response) => {
        dispatch({ type: "GET_BY_NAME", payload: response.data });
      });
  };
}

export function getByID(id) {
  return function (dispatch) {
    return axios.get(`http://localhost:3001/pokemon/${id}`).then((response) => {
      dispatch({ type: "GET_BY_ID", payload: response.data });
    });
  };
}
