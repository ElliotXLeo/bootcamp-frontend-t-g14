import { combineReducers } from 'redux';
import { gamesReducer } from './gameStoreReducers';
import searchReducers from './searchReducers';

const reducers = combineReducers({
  gamesReducer,
  searchReducers
});

export default reducers;
