describe("homepage", () => {
  it("Should display homepage and test it", () => {
    cy.visit("http://localhost:3000/");

    // test heading
    cy.get("h1").should("be.visible").contains("Cari Mahasiswa");

    // test description
    cy.get("#description")
      .should("be.visible")
      .contains(
        "Sebuah Website untuk mencari data Mahasiswa dari berbagai perguruan tinggi di Indonesia."
      );

    // test switch theme button
    cy.get("#switch-theme").should("be.visible");

    // test form input
    cy.get("form")
      .should("be.visible")
      .type("Andi", { delay: 100 })
      .submit()
      .get("#card")
      .should("be.visible");

    // test back to top button
    cy.scrollTo("center")
      .get("#back-to-top")
      .should("be.visible")
      .click("center");
  });
});
