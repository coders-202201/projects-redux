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
    case actionsTypes.createProject:
      newProjects = [...projects, action.project];
      break;
    case actionsTypes.updateProject:
      newProjects = projects.map((project) =>
        project.id === action.project.id
          ? { ...action.project }
          : { ...project }
      );
      break;
    default:
      newProjects = [...projects];
  }

  return newProjects;
};

export default projectsReducer;
