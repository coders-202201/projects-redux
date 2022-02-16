import actionsTypes from "../actions/actionsTypes";

const currentProjectReducer = (project = {}, action = {}) => {
  let newCurrentProject;

  if (action.type === actionsTypes.loadCurrentProject) {
    newCurrentProject = { ...action.project };
  } else {
    newCurrentProject = { ...project };
  }

  return newCurrentProject;
};

export default currentProjectReducer;
