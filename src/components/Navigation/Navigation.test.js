import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./Navigation";

describe("Given a Navigation component", () => {
  describe("When it's rendered", () => {
    test("Then it should display two links: 'Projects list' and 'New project'", () => {
      render(
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>
      );

      const listLink = screen.getByRole("link", { name: /projects list/i });
      const newLink = screen.getByRole("link", { name: /new project/i });

      expect(listLink).toBeInTheDocument();
      expect(newLink).toBeInTheDocument();
    });
  });
});
