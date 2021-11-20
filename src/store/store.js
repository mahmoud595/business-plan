import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "../store/reducers/rootReducer";

const initialstate = {};

const store = createStore(rootReducer, initialstate, composeWithDevTools());

export default store;
