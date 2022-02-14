const { combineReducers } = require("redux");
const { default: projectsReducer } = require("./projectsReducer");

const rootReducer = combineReducers({
  projects: projectsReducer,
});

export default rootReducer;
