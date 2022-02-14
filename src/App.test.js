import { screen } from "@testing-library/react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import App from "./App";
import renderWithProviders from "./setupTests";

describe("Given an App component", () => {
  describe("When it's rendered", () => {
    test("Then it should display a nav element", () => {
      renderWithProviders(
        <BrowserRouter>
          <App />
        </BrowserRouter>
      );

      const nav = screen.getByRole("navigation", { name: /main navigation/i });

      expect(nav).toBeInTheDocument();
    });
  });

  describe("When it's rendered under the URL '/chachacha'", () => {
    test("Then it should display a heading with 'Resource not found'", () => {
      renderWithProviders(
        <MemoryRouter initialEntries={["/chachacha"]}>
          <App />
        </MemoryRouter>
      );

      const heading = screen.getByRole("heading", {
        name: /resource not found/i,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
