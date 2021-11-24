context("Deriv API mobile", () => {
const testPlans = cy.hamburgerTestModel().getSimplePathPlans();
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