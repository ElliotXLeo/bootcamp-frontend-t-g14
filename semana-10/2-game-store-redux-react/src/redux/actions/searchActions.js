import axios from 'axios';

export const searchFetchPokemonRequest = 'search/fetch-pokemon-request';
export const searchFetchPokemonSuccess = 'search/fetch-pokemon-success';
export const searchFetchPokemonFailure = 'search/fetch-pokemon-failure';

export const searchFetchPokemonRequestAction = () => {
  return ({
    type: searchFetchPokemonRequest
  });
};

export const searchFetchPokemonSuccessAction = (pokemon) => {
  return ({
    type: searchFetchPokemonSuccess,
    payload: pokemon
  });
};

export const searchFetchPokemonFailureAction = (error) => {
  return ({
    type: searchFetchPokemonSuccess,
    payload: error
  });
};

const fetchPokemon = (valor) => {
  const endpoint = `https://pokeapi.co/api/v2/pokemon/${valor}`;
  return (async (dispatch) => {
    try {
      dispatch(searchFetchPokemonRequestAction());
      const response = await axios.get(endpoint);
      const data = response.data;
      dispatch(searchFetchPokemonSuccessAction(data));
    } catch (error) {
      dispatch(searchFetchPokemonFailureAction(error));
    } finally {
      console.log('Se consultó al API');
    }
  });
};

export default fetchPokemon;