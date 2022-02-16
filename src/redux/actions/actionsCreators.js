import actionsTypes from "./actionsTypes";

export const loadProjectsAction = (projects) => ({
  type: actionsTypes.loadProjects,
  projects,
});

export const loadCurrentProjectAction = (project) => ({
  type: actionsTypes.loadCurrentProject,
  project,
});

export const deleteProjectAction = (id) => ({
  type: actionsTypes.deleteProject,
  id,
});

export const createProjectAction = (project) => ({
  type: actionsTypes.createProject,
  project,
});

export const updateProjectAction = (project) => ({
  type: actionsTypes.updateProject,
  project,
});
