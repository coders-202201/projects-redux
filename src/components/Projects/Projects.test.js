import { screen } from "@testing-library/react";
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
});
