const initialState = {
  pokemons: [],
  types: [],
  pokemonDetail: {},
  pokemonCreate: {},
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
        pokemonCreate: action.payload,
      };
    }
    case "GET_ALL_TYPE": {
      return {
        ...state,
        types: action.payload,
      };
    }
    case "GET_BY_TYPE": {
      return {
        ...state,
        pokemons: state.pokemons.filter(
          (pokemon) => pokemon.typePokemon === action.payload
        ),
      };
    }

    case "ORDER_BY_ID_ASC": {
      return {
        ...state,
        pokemons: state.pokemons.sort(function (a, b) {
          if (a.id > b.id) {
            return 1;
          }
          if (a.id < b.id) {
            return -1;
          }
          return 0;
        }),
      };
    }
    case "ORDER_BY_ID_DES": {
      return {
        ...state,
        pokemons: state.pokemons.sort(function (a, b) {
          if (a.id < b.id) {
            return 1;
          }
          if (a.id > b.id) {
            return -1;
          }
          return 0;
        }),
      };
    }
    case "ORDER_BY_NAME_ASC": {
      return {
        ...state,
        pokemons: state.pokemons.sort(function (a, b) {
          if (a.name > b.name) {
            return 1;
          }
          if (a.name < b.name) {
            return -1;
          }
          return 0;
        }),
      };
    }
    case "ORDER_BY_NAME_DES": {
      return {
        ...state,
        pokemons: state.pokemons.sort(function (a, b) {
          if (a.name < b.name) {
            return 1;
          }
          if (a.name > b.name) {
            return -1;
          }
          return 0;
        }),
      };
    }
    default:
      return state;
  }
}

export default rootReducer;
