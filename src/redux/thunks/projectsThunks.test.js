import actionsTypes from "../actions/actionsTypes";
import {
  createProjectThunk,
  deleteProjectThunk,
  loadProjectsThunk,
  updateProjectThunk,
} from "./projectsThunks";

describe("Given a loadProjectsThunk function", () => {
  describe("When it receives a dispatch function", () => {
    test("Then it should invoke the dispatch function with an load action & a projects list from API", async () => {
      const dispatch = jest.fn();
      const action = {
        type: actionsTypes.loadProjects,
        projects: [
          {
            id: 1,
            name: "Cocktails 4 All",
            group: "API Coders",
            stats: {
              coverage: 91.5,
              technicalDebtMinutes: 0,
            },
          },
          {
            id: 2,
            name: "WeeklyMenu",
            group: "WeeklyMenuIng",
            stats: {
              coverage: 94.2,
              technicalDebtMinutes: 2,
            },
          },
        ],
      };

      await loadProjectsThunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(action);
    });
  });
});

describe("Given a deleteProjectThunk inner function", () => {
  describe("When it receives a dispatch function", () => {
    test("Then it should invoke the dispatch function with a delete action & an id 3", async () => {
      const dispatch = jest.fn();
      const id = 3;
      const action = {
        type: actionsTypes.deleteProject,
        id,
      };
      const thunkFunction = deleteProjectThunk(id);

      await thunkFunction(dispatch);

      expect(dispatch).toHaveBeenCalledWith(action);
    });
  });

  describe("When it receives a dispatch function and wants to delete the unexisting item with id 10", () => {
    test("Then it should not invoke the dispatch function", async () => {
      const id = 10;
      const dispatch = jest.fn();
      const thunkFunction = deleteProjectThunk(id);

      await thunkFunction(dispatch);

      expect(dispatch).not.toHaveBeenCalled();
    });
  });
});

describe("Given a createProjectThunk inner function", () => {
  describe("When it receives a dispatch function", () => {
    test("Then it should invoke dispatch with a create action and a new project", async () => {
      const project = {
        name: "Marta's project",
        group: "Marta crew",
      };
      const dispatch = jest.fn();

      const thunkFunction = createProjectThunk(project);

      await thunkFunction(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe("Given a updateProjectThunk inner function", () => {
  describe("When it receives a dispatch function", () => {
    test("Then it should invoke dispatch with a update action and a new project", async () => {
      const project = {
        name: "Marta's project",
        group: "Marta crew",
      };
      const dispatch = jest.fn();

      const thunkFunction = updateProjectThunk(project);

      await thunkFunction(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
