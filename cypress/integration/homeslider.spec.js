import { homeSliderTestsModel } from './cypressStates'
import { itTests } from "./itVisitsAndRunsPathTests";

context("Homepage slider", () => {
const testPlans = homeSliderTestsModel().getSimplePathPlans();
    testPlans.forEach((plan) => {
        describe(plan.description, () => {
        plan.paths.forEach(itTests('/'));
        });
    });
});
  
context("Deriv API mobile", () => {
const testPlans = homeSliderTestsModel().getShortestPathPlans();
    beforeEach(() => {
        // run these tests as if in a mobile browser
        // and ensure our responsive UI is correct
        cy.viewport('iphone-x')
    })
    testPlans.forEach((plan) => {
        describe(plan.description, () => {
        plan.paths.forEach(itTests('/'));
        });
    });
});