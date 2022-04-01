import { combineReducers } from 'redux';
import { gamesReducer } from './gameStoreReducers';

const reducers = combineReducers({
  gamesReducer
});

export default reducers;
