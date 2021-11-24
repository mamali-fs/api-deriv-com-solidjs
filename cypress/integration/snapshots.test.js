context("Snapshots", () => {
  const testPlans = cy.testsModel('home').getShortestPathPlans();
  testPlans.forEach((plan) => {
    describe(plan.description, () => {
      plan.paths.forEach(cy.itTests('/'));
      afterEach(() => {
        cy.matchImageSnapshot();
      });
    });
  });
});
