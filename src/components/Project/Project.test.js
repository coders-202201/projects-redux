import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import Project from "./Project";

describe("Given a Project component", () => {
  describe("When it receives a project named 'Luis'", () => {
    test("Then it should display a heading with 'Luis'", () => {
      const project = {
        name: "Luis",
      };

      render(
        <BrowserRouter>
          <Project project={project} />
        </BrowserRouter>
      );

      const heading = screen.getByRole("heading", { name: project.name });

      expect(heading).toBeInTheDocument();
    });
  });

  describe("When it receives a project with id 3 and a function", () => {
    test("Then it should invoke the function with a 3 when the user clicks on delete button", () => {
      const project = {
        id: 3,
        name: "Luis",
      };
      const fakeDelete = jest.fn();

      render(
        <BrowserRouter>
          <Project project={project} onDelete={fakeDelete} />
        </BrowserRouter>
      );

      const button = screen.getByRole("button", { name: /delete/i });
      userEvent.click(button);

      expect(fakeDelete).toHaveBeenCalledWith(project.id);
    });
  });
});
