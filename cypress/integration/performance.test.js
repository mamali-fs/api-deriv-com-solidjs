context("Perormance and Accessibility", () => {
  it("should pass the audits", function () {
    cy.visit('/').then(() => {
      cy.lighthouse();
      cy.pa11y();
    })
  });
});
