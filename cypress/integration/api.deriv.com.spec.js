/// <reference types="cypress" />
context("Deriv API full run", () => {
  const testPlans = cy.testsModel('home').getShortestPathPlans();
  testPlans.forEach((plan) => {
    describe(plan.description, () => {
      plan.paths.forEach(cy.itTests('/'));
    });
  });
});

context("Deriv API mobile", () => {
  const testPlans = cy.testsMobileModel('home').getShortestPathPlans();
  beforeEach(() => {
    // run these tests as if in a mobile browser
    // and ensure our responsive UI is correct
    cy.viewport('iphone-x')
  })
  testPlans.forEach((plan) => {
    describe(plan.description, () => {
      plan.paths.forEach(cy.itTests('/'));
    });
  });
});
