export const gamesPokemonBuy = 'games/pokemon-buy';
export const gamesPokemonReturn = 'games/pokemon-return';

export const gamesPokemonBuyAction = (amount) => {
  return ({
    type: gamesPokemonBuy,
    payload: amount
  })
};

export const gamesPokemonReturnAction = (amount) => {
  return ({
    type: gamesPokemonReturn,
    payload: amount
  })
};