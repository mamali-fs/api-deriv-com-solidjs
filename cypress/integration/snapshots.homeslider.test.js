import { homeSliderTestsModel, homeSliderMobileTestsModel } from "./cypressStates";
import { itTests } from "./itVisitsAndRunsPathTests";

context("Snapshots", () => {
const testPlans = homeSliderTestsModel().getSimplePathPlans();
    testPlans.forEach((plan) => {
            describe(plan.description, () => {
            plan.paths.forEach(itTests('/'));
            afterEach(() => {
                cy.get("[aria-label='slider-component']").matchImageSnapshot();
            });
        });
    });
});

context("Snapshots mobile", () => {
const testPlans = homeSliderTestsModel().getShortestPathPlans();
    beforeEach(() => {
        // run these tests as if in a mobile browser
        // and ensure our responsive UI is correct
        cy.viewport('iphone-x')
    })
    testPlans.forEach((plan) => {
            describe(plan.description, () => {
            plan.paths.forEach(itTests('/'));
            afterEach(() => {
                cy.get("[aria-label='slider-component']").matchImageSnapshot();
            });
        });
    });
});
  