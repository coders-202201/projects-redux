import actionsTypes from "./actionsTypes";

export const loadProjectsAction = (projects) => ({
  type: actionsTypes.loadProjects,
  projects,
});

export const deleteProjectAction = (id) => ({
  type: actionsTypes.deleteProject,
  id,
});
