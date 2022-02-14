import { deleteProjectAction, loadProjectsAction } from "./actionsCreators";
import actionsTypes from "./actionsTypes";

describe("Given a loadProjectsAction function", () => {
  describe("When it receives projects 'Project 1' and 'Project 2'", () => {
    test("Then it should return a load action with these projects inside", () => {
      const projects = [
        {
          id: 1,
          name: "Project 1",
        },
        {
          id: 2,
          name: "Project 2",
        },
      ];
      const expectedAction = {
        type: actionsTypes.loadProjects,
        projects,
      };

      const action = loadProjectsAction(projects);

      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given a deleteProjectAction function", () => {
  describe("When it receives an id 3", () => {
    test("Then it should return an action with delete type and id 3", () => {
      const id = 3;
      const expectedAction = {
        type: actionsTypes.deleteProject,
        id,
      };

      const action = deleteProjectAction(id);

      expect(action).toEqual(expectedAction);
    });
  });
});
