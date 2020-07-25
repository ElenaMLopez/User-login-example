describe("Home page & log out", () => {
  it("Should have content", () => {
    localStorage.setItem("karumi_user_token", "Fake_token_for_amparo");
    cy.visit("/");
    cy.get('[data-cy="home-title"]');
    cy.get("[data-cy=home-loged]");
    cy.get('[data-cy="home-logout-info');
    cy.get('[data-cy="log-out-button"')
      .click()
      .should(() => {
        cy.clearLocalStorage();
      });
  });
});
