const initialGameState = {
  pokemon: 10
};

export const gamesReducer = (state = initialGameState, action) => {
  const { pokemon } = state;
  const { type, payload } = action;

  switch (type) {
    case 'games/pokemon-buy':
      return {
        ...state,
        pokemon: pokemon - payload
      }
    case 'games/pokemon-return':
      return {
        ...state,
        pokemon: pokemon + payload
      }
    default:
      return state;
  }
}