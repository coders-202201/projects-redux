import {
  deleteProjectAction,
  loadProjectsAction,
} from "../actions/actionsCreators";

export const loadProjectsThunk = async (dispatch) => {
  const response = await fetch(process.env.REACT_APP_API_URL);
  const projects = await response.json();

  dispatch(loadProjectsAction(projects));
};

export const deleteProjectThunk = (id) => async (dispatch) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}${id}`, {
    method: "DELETE",
  });
  if (response.ok) {
    dispatch(deleteProjectAction(id));
  }
};
