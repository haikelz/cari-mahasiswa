import SwitchTheme from "~components/switch-theme";

describe("Switch Theme ", () => {
  it("Should display switch theme component and test it", () => {
    cy.mount(<SwitchTheme />);

    cy.get(`[aria-label="switch theme"]`).should("be.visible");
  });
});
