import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import renderWithProviders from "../../setupTests";
import FormProject from "./FormProject";

let mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Given a FormProject component", () => {
  describe("When the user enters a group but doesn't enter a name", () => {
    test("Then the submit button should be disabled", () => {
      renderWithProviders(
        <BrowserRouter>
          <FormProject />
        </BrowserRouter>
      );

      const groupsList = screen.getByLabelText("Group:");

      userEvent.selectOptions(groupsList, "API Coders");

      const submitButton = screen.getByRole("button", { name: /create/i });

      expect(submitButton).toBeDisabled();
    });
  });

  describe("When the user enters 'Luis' as name and 'API Coders' as group", () => {
    test("Then the submit button should be enabled", () => {
      const name = "Luis";
      const group = "API Coders";

      renderWithProviders(
        <BrowserRouter>
          <FormProject />
        </BrowserRouter>
      );

      const nameInput = screen.getByLabelText("Name:");
      const groupsList = screen.getByLabelText("Group:");

      userEvent.type(nameInput, name);
      userEvent.selectOptions(groupsList, group);

      const submitButton = screen.getByRole("button", { name: /create/i });

      expect(submitButton).not.toBeDisabled();
    });
  });

  describe("When the user enters name 'Marta' and group 'API Coders' and submits the form", () => {
    test("Then it should invoke dispatch with a new project with name 'Marta' and group 'API Coders'", () => {
      const name = "Marta";
      const group = "API Coders";

      renderWithProviders(
        <BrowserRouter>
          <FormProject />
        </BrowserRouter>
      );

      const nameInput = screen.getByLabelText("Name:");
      const groupsList = screen.getByLabelText("Group:");

      userEvent.type(nameInput, name);
      userEvent.selectOptions(groupsList, group);

      const submitButton = screen.getByRole("button", { name: /create/i });

      userEvent.click(submitButton);

      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});
