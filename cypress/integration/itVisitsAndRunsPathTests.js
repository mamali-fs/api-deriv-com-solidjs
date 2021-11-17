const itVisitsAndRunsPathTests = (url) => (path) => {
  it(path.description, function () {
    cy.visit(url).then(path.test);
  });
};
export const itTests = (appAddress) => itVisitsAndRunsPathTests(appAddress);
