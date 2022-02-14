import actionsTypes from "../actions/actionsTypes";
import projectsReducer from "./projectsReducer";

describe("Given a projectsReducer function", () => {
  describe("When it receives two projects and a load action with three projects", () => {
    test("Then it should return the three projects in the action", () => {
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
      const newProjects = [
        {
          id: 3,
          name: "Project 3",
        },
        {
          id: 4,
          name: "Project 4",
        },
        {
          id: 5,
          name: "Project 5",
        },
      ];
      const action = {
        type: actionsTypes.loadProjects,
        projects: newProjects,
      };

      const newProjectsResults = projectsReducer(projects, action);

      expect(newProjectsResults).toEqual(newProjects);
    });
  });

  describe("When it receives two projects and an unknown action type", () => {
    test("Then it should return the same two projects", () => {
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
      const action = {
        type: "chachacha",
      };

      const newProjects = projectsReducer(projects, action);

      expect(newProjects).toEqual(projects);
    });
  });

  describe("When it doesn't receive neither state nor action", () => {
    test("Then it should return an empty projects list", () => {
      const newProjects = projectsReducer();

      expect(newProjects).toHaveLength(0);
    });
  });

  describe("When it receives two projects with id 1 & 2, and a delete action with id 2", () => {
    test("Then it should return a list with just one project with id 1", () => {
      const idDelete = 2;
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
      const action = {
        type: actionsTypes.deleteProject,
        id: idDelete,
      };
      const expectedNewProjects = [
        {
          id: 1,
          name: "Project 1",
        },
      ];

      const newProjects = projectsReducer(projects, action);

      expect(newProjects).toEqual(expectedNewProjects);
    });
  });
});
