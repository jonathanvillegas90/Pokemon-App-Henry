const initialState = {
  pokemons: [],
  types: [],
  pokemonDetail: {},
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_BY_ID": {
      return {
        ...state,
        pokemonDetail: action.payload,
      };
    }
    case "GET_ALL_POKEMONS": {
      return {
        ...state,
        pokemons: action.payload,
      };
    }
    case "GET_BY_NAME": {
      return {
        ...state,
        pokemonDetail: action.payload,
      };
    }
    case "ADD_POKEMON": {
      return {
        ...state,
        pokemons: state.pokemons.concat(action.payload),
      };
    }

    default:
      return state;
  }
}

export default rootReducer;
