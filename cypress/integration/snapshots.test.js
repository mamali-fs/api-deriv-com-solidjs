import { testsModel } from "./cypressStates";
import { itTests } from "./itVisitsAndRunsPathTests";

context("Snapshots", () => {
  const testPlans = testsModel('home').getShortestPathPlans();
  testPlans.forEach((plan) => {
    describe(plan.description, () => {
      plan.paths.forEach(itTests('https://api.deriv.com/'));
      afterEach(() => {
        cy.matchImageSnapshot();
      });
    });
  });
});
