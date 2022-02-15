import { screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import renderWithProviders from "../../setupTests";
import FormPage from "./FormPage";

describe("Given a FormPage component", () => {
  describe("When it's rendered", () => {
    test("Then it should display a heading with 'New project'", () => {
      renderWithProviders(
        <BrowserRouter>
          <FormPage />
        </BrowserRouter>
      );

      const heading = screen.getByRole("heading", { name: /new project/i });

      expect(heading).toBeInTheDocument();
    });
  });
});
