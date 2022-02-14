import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const { createStore, applyMiddleware } = require("redux");
const { default: rootReducer } = require("../reducers");

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
