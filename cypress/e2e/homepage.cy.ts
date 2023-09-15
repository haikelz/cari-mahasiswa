describe("Homepage", () => {
  it("Should display homepage and test it", () => {
    cy.visit("http://localhost:3000/");

    // test heading
    cy.get("h1").should("be.visible").contains("Cari Mahasiswa");

    // test description
    cy.get(`[data-cy="description"]`)
      .should("be.visible")
      .contains(
        "Sebuah Website untuk mencari data Mahasiswa dari berbagai perguruan tinggi di Indonesia."
      );

    // test switch theme button
    cy.get(`[data-cy="switch-theme"]`).should("be.visible").click("center");

    cy.wait(1000);

    // test back to top button
    cy.scrollTo("center")
      .get(`[data-cy="back-to-top"]`)
      .should("be.visible")
      .click("center");

    // test form input if user's input is only alphabet or number
    cy.get("form")
      .should("be.visible")
      .type("Andi", { delay: 100 })
      .submit()
      .get(`[data-cy="card"]`)
      .should("be.visible");

    cy.get("input").clear();

    // test form input if user's input is other than alphabet or number
    cy.get("form")
      .type("!@#$%^", { delay: 100 })
      .get(`[data-cy="error-message"]`)
      .should("be.visible")
      .contains("The characters must be alphabet, or number!");
  });
});
