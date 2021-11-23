/// <reference types="cypress" />

import { testsModel, testsMobileModel, homeSliderTestsModel } from "./cypressStates";
import { itTests } from "./itVisitsAndRunsPathTests";

// context("Deriv API full run", () => {
//   const testPlans = testsModel('home').getShortestPathPlans();
//   testPlans.forEach((plan) => {
//     describe(plan.description, () => {
//       plan.paths.forEach(itTests('/'));
//     });
//   });
// });

// context("Deriv API mobile", () => {
//   const testPlans = testsMobileModel('home').getShortestPathPlans();
//   beforeEach(() => {
//     // run these tests as if in a mobile browser
//     // and ensure our responsive UI is correct
//     cy.viewport('iphone-x')
//   })
// });

context("Homepage slider", () => {
  const testPlans = homeSliderTestsModel().getSimplePathPlans();
  testPlans.forEach((plan) => {
    describe(plan.description, () => {
      plan.paths.forEach(itTests('/'));
    });
  });
});

