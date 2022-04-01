import { combineReducers } from "redux";
import { gamesReducer } from "./gameStoreReducers";

const reducer = combineReducers({
  gamesReducer
});

export default reducer;