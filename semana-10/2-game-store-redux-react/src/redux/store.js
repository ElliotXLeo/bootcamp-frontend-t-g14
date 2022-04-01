import { createStore } from "redux";
import reducer from "./reducers/reducers";

const store = createStore(reducer);

export default store;