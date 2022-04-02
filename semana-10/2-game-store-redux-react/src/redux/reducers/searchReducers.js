const initialState = {
  loading: false,
  pokemon: {},
  error: ''
};

const searchReducers = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'search/fetch-pokemon-request':
      return {
        ...state,
        loading: true
      }
    case 'search/fetch-pokemon-success':
      return {
        ...state,
        loading: false,
        pokemon: payload
      }
    case 'search/fetch-pokemon-failure':
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