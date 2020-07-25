// https://docs.cypress.io/api/introduction/api.html

describe("Login", () => {
  it("Makes an error at login", () => {
    cy.visit("/login");
    cy.get("[data-cy=input-userEmail]").type("bad@user.com");
    cy.get("[data-cy=input-userPass]").type("WWWWWWWWWWWWWWW");
    cy.get('[data-cy="send-form"').click();
    cy.get('[data-cy="error-message');
  });
  it("Makes the login", () => {
    cy.visit("/login");
    cy.get("[data-cy=input-userEmail]").type("amparo@cucumail.com");
    cy.get("[data-cy=input-userPass]").type("123");
    cy.get('[data-cy="send-form"')
      .click()
      .should(() => {
        expect(localStorage.getItem("karumi_user_token")).to.eq(
          "Fake_token_for_amparo"
        );
      });
  });
});
