const axios = require("axios");

export function addPokemon(pokemon) {
  return function (dispatch) {
    return axios
      .post("http://localhost:3001/pokemon", pokemon)
      .catch({ msg: "algo fallo" });
  };
}

export function getAll() {
  return function (dispatch) {
    return axios
      .get("http://localhost:3001/pokemon")
      .then((response) => {
        dispatch({ type: "GET_ALL_POKEMONS", payload: response.data });
      })
      .catch({ msg: "algo fallo" });
  };
}

export function getByName(name) {
  return function (dispatch) {
    return axios
      .get(`http://localhost:3001/pokemon?name=${name}`)
      .then((response) => {
        dispatch({ type: "GET_BY_NAME", payload: response.data });
      })
      .catch({ msg: "algo fallo" });
  };
}
export function getByNameSearch(name) {
  return function (dispatch) {
    return dispatch({ type: "GET_BY_NAME_SEARCH", payload: name });
  };
}

export function getByID(id) {
  return function (dispatch) {
    return axios
      .get(`http://localhost:3001/pokemon/${id}`)
      .then((response) => {
        dispatch({ type: "GET_BY_ID", payload: response.data });
      })
      .catch({ msg: "algo fallo" });
  };
}
export function getType() {
  return function (dispatch) {
    return axios.get("http://localhost:3001/type").then((response) => {
      dispatch({ type: "GET_ALL_TYPE", payload: response.data });
    });
  };
}

export function filterByType(type) {
  return function (dispatch) {
    return dispatch({ type: "GET_BY_TYPE", payload: type });
  };
}

export function OrderByID(order) {
  if (order === "asc") {
    return { type: "ORDER_BY_ID_ASC" };
  } else if (order === "des") return { type: "ORDER_BY_ID_DES" };
}

export function orderByName(order) {
  if (order === "asc") {
    return { type: "ORDER_BY_NAME_ASC" };
  } else if (order === "des") return { type: "ORDER_BY_NAME_DES" };
}
export function cleanDetail() {
  return function (dispatch) {
    return dispatch({ type: "RESET_DETAILS" });
  };
}
export function cleanPokemons() {
  return function (dispatch) {
    return dispatch({ type: "RESET_POKEMONS" });
  };
}
