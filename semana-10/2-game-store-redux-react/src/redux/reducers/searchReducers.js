import { searchFetchPokemonRequest, searchFetchPokemonSuccess, searchFetchPokemonFailure } from "../actions/searchActions";

const initialState = {
  loading: false,
  pokemon: {},
  error: ''
};

const searchReducers = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case searchFetchPokemonRequest:
      return {
        ...state,
        loading: true,
        pokemon: {},
        error: ''
      }
    case searchFetchPokemonSuccess:
      return {
        ...state,
        loading: false,
        pokemon: payload,
        error: ''
      }
    case searchFetchPokemonFailure:
      return {
        ...state,
        loading: false,
        pokemon: {},
        error: payload
      }
    default:
      return state;
  }
}

export default searchReducers;