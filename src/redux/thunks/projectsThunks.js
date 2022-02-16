import {
  createProjectAction,
  deleteProjectAction,
  loadCurrentProjectAction,
  loadProjectsAction,
  updateProjectAction,
} from "../actions/actionsCreators";

export const loadProjectsThunk = async (dispatch) => {
  const response = await fetch(process.env.REACT_APP_API_URL);
  const projects = await response.json();

  dispatch(loadProjectsAction(projects));
};

export const loadCurrentProjectThunk = (id) => async (dispatch) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}${id}`);
  const currentProject = await response.json();

  dispatch(loadCurrentProjectAction(currentProject));
};

export const deleteProjectThunk = (id) => async (dispatch) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}${id}`, {
    method: "DELETE",
  });
  if (response.ok) {
    dispatch(deleteProjectAction(id));
  }
};

export const createProjectThunk = (project) => async (dispatch) => {
  const response = await fetch(process.env.REACT_APP_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(project),
  });
  const newProject = await response.json();

  dispatch(createProjectAction(newProject));
};

export const updateProjectThunk = (project) => async (dispatch) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}${project.id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    }
  );
  const updatedProject = await response.json();

  dispatch(updateProjectAction(updatedProject));
};
