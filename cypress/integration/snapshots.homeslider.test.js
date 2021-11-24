context("Snapshots", () => {
const testPlans = cy.homeSliderTestsModel().getSimplePathPlans();
    testPlans.forEach((plan) => {
            describe(plan.description, () => {
            plan.paths.forEach(cy.itTests('/'));
            afterEach(() => {
                cy.get("[aria-label='slider-component']").matchImageSnapshot();
            });
        });
    });
});

context("Snapshots mobile", () => {
const testPlans = cy.homeSliderTestsModel().getShortestPathPlans();
    beforeEach(() => {
        // run these tests as if in a mobile browser
        // and ensure our responsive UI is correct
        cy.viewport('iphone-x')
    })
    testPlans.forEach((plan) => {
            describe(plan.description, () => {
            plan.paths.forEach(cy.itTests('/'));
            afterEach(() => {
                cy.get("[aria-label='slider-component']").matchImageSnapshot();
            });
        });
    });
});
  