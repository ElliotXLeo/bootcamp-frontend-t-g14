'use strict';
const { createStore, combineReducers } = require('redux');

// actions
const gamesPokemonBuy = 'games/pokemon-buy';
const gamesPokemonReturn = 'games/pokemon-return';
const gamesYoshiBuy = 'games/yoshi-buy';
const gamesYoshiReturn = 'games/yoshi-return';
const consolesPs5Buy = 'consoles/ps5-buy';
const consolesPs5Return = 'consoles/ps5-return';
const consolesNSwitchBuy = 'consoles/nSwitch-buy';
const consolesNSwitchReturn = 'consoles/nSwitch-return';

const gamesPokemonBuyAction = (amount) => {
  return ({
    type: gamesPokemonBuy,
    payload: amount
  })
}

const gamesPokemonReturnAction = (amount) => {
  return ({
    type: gamesPokemonReturn,
    payload: amount
  })
}

const gamesYoshiBuyAction = (amount) => {
  return ({
    type: gamesYoshiBuy,
    payload: amount
  })
}

const gamesYoshiReturnAction = (amount) => {
  return ({
    type: gamesYoshiReturn,
    payload: amount
  })
}

const consolesPs5BuyAction = (amount) => {
  return ({
    type: consolesPs5Buy,
    payload: amount
  })
}

const consolesPs5ReturnAction = (amount) => {
  return ({
    type: consolesPs5Return,
    payload: amount
  })
}

const consolesNSwitchBuyAction = (amount) => {
  return ({
    type: consolesNSwitchBuy,
    payload: amount
  })
}

const consolesNSwitchReturnAction = (amount) => {
  return ({
    type: consolesNSwitchReturn,
    payload: amount
  })
}

// reducers
const initialGamesState = {
  pokemon: 10,
  yoshi: 10
}

const gamesReducer = (state = initialGamesState, action) => {
  const { pokemon, yoshi } = state;
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
    case 'games/yoshi-buy':
      return {
        ...state,
        yoshi: yoshi - payload
      }
    case 'games/yoshi-return':
      return {
        ...state,
        yoshi: yoshi + payload
      }
    default:
      return state;
  }
}

const initialConsolesState = {
  ps5: 5,
  nSwitch: 5
}

const consolesReducer = (state = initialConsolesState, action) => {
  const { ps5, nSwitch } = state;
  const { type, payload } = action;
  switch (type) {
    case 'consoles/ps5-buy':
      return {
        ...state,
        ps5: ps5 - payload
      }
    case 'consoles/ps5-return':
      return {
        ...state,
        ps5: ps5 + payload
      }
    case 'consoles/nSwitch-buy':
      return {
        ...state,
        nSwitch: nSwitch - payload
      }
    case 'consoles/nSwitch-return':
      return {
        ...state,
        nSwitch: nSwitch + payload
      }
    default:
      return state;
  }
}

const reducers = combineReducers({
  gamesReducer,
  consolesReducer
});

// store
const store = createStore(reducers);
console.log(store.getState());

store.subscribe(() => {
  console.log(store.getState().gamesReducer);
  console.log(store.getState().consolesReducer);
});

store.dispatch(gamesPokemonBuyAction(2));
store.dispatch(gamesPokemonReturnAction(4));
store.dispatch(gamesYoshiBuyAction(4));
store.dispatch(gamesYoshiReturnAction(8));

store.dispatch(consolesPs5BuyAction(1));
store.dispatch(consolesPs5ReturnAction(2));
store.dispatch(consolesNSwitchBuyAction(2));
store.dispatch(consolesNSwitchReturnAction(4));