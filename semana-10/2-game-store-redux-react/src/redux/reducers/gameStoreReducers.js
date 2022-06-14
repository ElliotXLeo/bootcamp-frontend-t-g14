import { gamesPokemonBuy, gamesPokemonReturn } from "../actions/gameStoreActions";

const initialGameState = {
  pokemon: 10
};

export const gamesReducer = (state = initialGameState, action) => {
  const { pokemon } = state;
  const { type, payload } = action;

  switch (type) {
    case gamesPokemonBuy:
      return {
        ...state,
        pokemon: pokemon - payload
      }
    case gamesPokemonReturn:
      return {
        ...state,
        pokemon: pokemon + payload
      }
    default:
      return state;
  }
}