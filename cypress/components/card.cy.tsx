import Card from "~components/ui/card";

describe("Card", () => {
  it("Should display card component and test it", () => {
    cy.mount(<Card />);

    cy.get(`[data-cy="card"]`).should("be.visible");
  });
});
