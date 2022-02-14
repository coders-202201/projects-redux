import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store";
import ProjectsPage from "./ProjectsPage";

describe("Given a ProjectsPage component", () => {
  describe("When it's rendered", () => {
    test("Then it should display a heading with 'Projects list'", () => {
      render(
        <Provider store={store}>
          <ProjectsPage />
        </Provider>
      );

      const heading = screen.getByRole("heading", { name: /projects list/i });

      expect(heading).toBeInTheDocument();
    });
  });
});
