import actionsTypes from "../actions/actionsTypes";

const projectsReducer = (projects = [], action = {}) => {
  let newProjects;

  switch (action.type) {
    case actionsTypes.loadProjects:
      newProjects = [...action.projects];
      break;
    case actionsTypes.deleteProject:
      newProjects = projects.filter((project) => project.id !== action.id);
      break;
    default:
      newProjects = [...projects];
  }

  return newProjects;
};

export default projectsReducer;
