import { homeSliderTestsModel } from "./cypressStates";
import { itTests } from "./itVisitsAndRunsPathTests";

context("Snapshots", () => {
  const testPlans = homeSliderTestsModel('home').getSimplePathPlans();
  testPlans.forEach((plan) => {
    describe(plan.description, () => {
      plan.paths.forEach(itTests('/'));
      afterEach(() => {
        cy.get("[aria-label='slider-component']");
      });
    });
  });
});
