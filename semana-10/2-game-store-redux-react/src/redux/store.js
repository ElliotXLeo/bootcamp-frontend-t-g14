import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducers from "./reducers/reducers";

const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(thunk)
));

export default store;
