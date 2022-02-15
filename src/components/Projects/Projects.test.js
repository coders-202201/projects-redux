import { screen, waitForElementToBeRemoved } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderWithProviders from "../../setupTests";
import Projects from "./Projects";

describe("Given a Projects component", () => {
  describe("When it's rendered", () => {
    test("Then it should display 'Cocktails 4 All' and 'WeeklyMenu'", async () => {
      renderWithProviders(<Projects />);

      const starFightersText = await screen.findByRole("heading", {
        name: /cocktails 4 all/i,
      });
      const magicWorldText = await screen.findByRole("heading", {
        name: /weeklymenu/i,
      });

      expect(starFightersText).toBeInTheDocument();
      expect(magicWorldText).toBeInTheDocument();
    });
  });

  describe("When the user clicks on delete button from project 'Cocktails 4 All'", () => {
    test("Then it should not display the heading 'Cocktails 4 All'", async () => {
      renderWithProviders(<Projects />);

      const deleteButtons = screen.getAllByRole("button", { name: /delete/i });
      const cocktailsDeleteButton = deleteButtons[0];

      const heading = screen.getByRole("heading", {
        name: /cocktails 4 all/i,
      });

      userEvent.click(cocktailsDeleteButton);

      await waitForElementToBeRemoved(() =>
        screen.queryByRole("heading", {
          name: /cocktails 4 all/i,
        })
      );

      expect(heading).not.toBeInTheDocument();
    });
  });
});
