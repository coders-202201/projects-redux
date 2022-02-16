import currentProjectReducer from "./currentProjectReducer";

const { combineReducers } = require("redux");
const { default: projectsReducer } = require("./projectsReducer");

const rootReducer = combineReducers({
  projects: projectsReducer,
  currentProject: currentProjectReducer,
});

export default rootReducer;
