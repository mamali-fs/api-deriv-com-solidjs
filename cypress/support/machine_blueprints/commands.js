import { createTestModel } from "./createTestModel.js";
import { derivApiMachine } from "./derivApiMachine";
import { homeSliderMachine } from "./homeSliderMachine.js";
import { hamburgerMachine } from "./hamburgerMachine.js"

const cypressStates = {
  home: () => {
    cy.contains(/deriv api/i).should('be.visible');
    cy.contains(/ways to earn with deriv api/i).should('be.visible');
    cy.contains(/register your app with deriv/i).should('be.visible');
    cy.contains(/sign up as an affiliate, build your app/i).should('be.visible');
    cy.contains(/sign up as a payment agent/i).should('be.visible');
  },
  documentation: () => {
    cy.contains(/quickstart to deriv/i).should('be.visible');
  },
  playground: () => {
    cy.contains(/select api call/i).should('be.visible');
  },
  registration: () => {
    cy.contains(/Authenticate your API/i).should('be.visible');
  },
  documetnation: () => {
    cy.contains(/Quickstart to Deriv API/i).should('be.visible');
  },
  faq: () => {
    cy.get('.doc-main-title').contains(/FAQ/i).should('be.visible');
  },
  jsonSchemas: () => {
    cy.get('.doc-main-title').contains(/JSON Schemas/i).should('be.visible');
  },
  bugBountry: () => {
    cy.get('.doc-main-title').contains(/Bug Bounty/i).should('be.visible');
  },
  guide: () => {
    cy.get('.doc-main-title').contains(/API guide/i).should('be.visible');
  },  
};

const cypressEvents = {
  CLICK_PLAYGROUND: function () {
    cy.contains(/playground/i).click();
    //user clicks
  },
  CLICK_HOME: function () {
    cy.contains(/home/i).click();
  },
  CLICK_APP_REGISTRATION: function () {
    cy.get("#sidebar > #app-registration")
      .contains(/app registration/i)
      .click();
  },
  CLICK_DOCUMENTATION: function () {
    cy.contains(/documentation/i).click();
  },
  CLICK_FAQ: function () {
    cy.get("#sidebar > #faq").contains(/faq/i).click();
  },
  CLICK_JSON_SCHEMAS: function () {
    cy.get("#sidebar > #json-schemas").contains(/json schemas/i).click();
  },
  CLICK_BUG_BOUNTY: function () {
    cy.get("#sidebar > #bug-bounty").contains(/bug bounty/i).click();
  },
  CLICK_GUIDE: function () {
    cy.get("#sidebar > #api-guide").contains(/guide/i).click();
  },
};

const cypressMobileStates = {
  home: () => {
    cy.contains(/deriv api/i).should('be.visible');
    cy.contains(/ways to earn with deriv api/i).should('be.visible');
    cy.contains(/register your app with deriv/i).should('be.visible');
    cy.contains(/sign up as an affiliate, build your app/i).should('be.visible');
    cy.contains(/sign up as a payment agent/i).should('be.visible');
  },
  documentation: () => {
    cy.contains(/quickstart to deriv/i).should('be.visible');
  },
  playground: () => {
    cy.contains(/select api call/i).should('be.visible');
  },
  registration: () => {
    cy.contains(/Authenticate your API/i).should('be.visible');
  },
  documetnation: () => {
    cy.contains(/Quickstart to Deriv API/i).should('be.visible');
  },
  faq: () => {
    cy.get('.doc-main-title').contains(/FAQ/i).should('be.visible');
  },
  jsonSchemas: () => {
    cy.get('.doc-main-title').contains(/JSON Schemas/i).should('be.visible');
  },
  bugBountry: () => {
    cy.get('.doc-main-title').contains(/Bug Bounty/i).should('be.visible');
  },
  guide: () => {
    cy.get('.doc-main-title').contains(/API guide/i).should('be.visible');
  },
}

const cypressMobileEvents = {
  CLICK_PLAYGROUND: function () {
    cy.contains(/playground/i).click();
    //user clicks
  },
  CLICK_HOME: function () {
    cy.contains(/home/i).click();
  },
  CLICK_APP_REGISTRATION: function () {
    cy.get("#sidebar > #app-registration")
      .contains(/app registration/i)
      .click();
  },
  CLICK_DOCUMENTATION: function () {
    cy.contains(/documentation/i).click();
  },
  CLICK_FAQ: function () {
    cy.get("#sidebar > #faq").contains(/faq/i).click();
  },
  CLICK_JSON_SCHEMAS: function () {
    cy.get("#sidebar > #json-schemas").contains(/json schemas/i).click();
  },
  CLICK_BUG_BOUNTY: function () {
    cy.get("#sidebar > #bug-bounty").contains(/bug bounty/i).click();
  },
  CLICK_GUIDE: function () {
    cy.get("#sidebar > #api-guide").contains(/guide/i).click();
  },
};

const homeSliderStates = {
  alessandro: () => {
    cy.get(`[aria-label="slider-content"]`).contains(/alessandro/i)
  },
  thiago: () => {
    cy.get(`[aria-label="slider-content"]`).contains(/thiago/i)
  },
  josh: () => {
    cy.get(`[aria-label="slider-content"]`).contains(/josh/i)
  },
}

const homeSliderEvents = {
  DRAG_LEFT: () => {
    cy.get(`[role="slider"][aria-label="home"]`)
    .trigger("mousedown", { button: 0 })
    .trigger("mousemove", { clientX: -275, clientY: 0 })
  },
  DRAG_RIGHT: () => {
    cy.get(`[role="slider"][aria-label="home"]`)
    .trigger("mousedown", { button: 0 })
    .trigger("mousemove", { clientX: 275, clientY: 0 })
  },
  CLICK_LEFT: () => {
    cy.get(`[role="button"][aria-label="left"]`).click();
    cy.wait(1000);
  },
  CLICK_RIGHT: () => {
    cy.get(`[role="button"][aria-label="right"]`).click();
    cy.wait(1000);
  },
}

const hamburgerStates = {
  open_hamburger: () => {
    cy.get(`[aria-label="hamburger-dropdown"]`).contains(/api playground/i).should('be.visible')
  },
  home_active: () => {
    cy.get(`[aria-label="hamburger-dropdown"] .menu-wrapper > :nth-child(2)::before`)
  },
  documentation_closed: () => {
    cy.get(`[aria-label="hamburger-dropdown"]`).contains(/quickstart/i).should('not.be.visible')
  },
  documentation_open: () => {
    cy.get(`[aria-label="hamburger-dropdown"]`).contains(/quickstart/i).should('be.visible')
  },
  documentation_closed: () => {
    cy.get(`[aria-label="hamburger-dropdown"]`).contains(/quickstart/i).should('not.be.visible')
  },
  quickstart: () => {
    cy.get(`[aria-label="hamburger-dropdown"]`).contains(/quickstart/i).should('be.visible')
  },
  app_registration: () => {
    cy.get(`[aria-label="hamburger-dropdown"]`).contains(/app registration/i).should('be.visible')
  },
  api_guide: () => {
    cy.get(`[aria-label="hamburger-dropdown"]`).contains(/api guide/i).should('be.visible')
  },
  faq: () => {
    cy.get(`[aria-label="hamburger-dropdown"]`).contains(/faq/i).should('be.visible')
  },
  json_schemas: () => {
    cy.get(`[aria-label="hamburger-dropdown"]`).contains(/json schemas/i).should('be.visible')
  },
  bug_bounty: () => {
    cy.get(`[aria-label="hamburger-dropdown"]`).contains(/bug bounty/i).should('be.visible')
  },
  api_playground: () => {
    cy.get(`[aria-label="hamburger-dropdown"]`).contains(/home/i).should('be.visible')
  },
  closed_hamburger: () => {
    cy.get(`[aria-label="hamburger-dropdown"]`).contains(/api playground/i).should('not.be.visible')
  }
}

const hamburgerEvents = {
  CLICK_HAMBURGER: () => {
    cy.get(`[role="menu"]`).click();
    cy.wait(500);
  },
  CLICK_HOME: () => {
    cy.get(`[aria-label="hamburger-dropdown"]`).contains(/home/i).click()
  },
  TOGGLE_DOCUMENTATION: () => {
    cy.get(`[aria-label="hamburger-dropdown"]`).contains(/documentation/i).click()
  },
  CLICK_QUICKSTART: () => {
    cy.get(`[aria-label="hamburger-dropdown"]`).contains(/documentation/i).click()
    cy.wait(250)
    cy.get(`[aria-label="hamburger-dropdown"]`).contains(/quickstart/i).click()
  },
  CLICK_APP_REGISTRATION: () => {
    cy.get(`[aria-label="hamburger-dropdown"]`).contains(/documentation/i).click()
    cy.wait(250)
    cy.get(`[aria-label="hamburger-dropdown"]`).contains(/app registration/i).click()
  },
  CLICK_API_GUIDE: () => {
    cy.get(`[aria-label="hamburger-dropdown"]`).contains(/documentation/i).click()
    cy.wait(250)
    cy.get(`[aria-label="hamburger-dropdown"]`).contains(/api guide/i).click()
  },
  CLICK_FAQ: () => {
    cy.get(`[aria-label="hamburger-dropdown"]`).contains(/documentation/i).click()
    cy.wait(250)
    cy.get(`[aria-label="hamburger-dropdown"]`).contains(/faq/i).click()
  },
  CLICK_JSON_SCHEMAS: () => {
    cy.get(`[aria-label="hamburger-dropdown"]`).contains(/documentation/i).click()
    cy.wait(250)
    cy.get(`[aria-label="hamburger-dropdown"]`).contains(/json schemas/i).click()
  },
  CLICK_BUG_BOUNTY: () => {
    cy.get(`[aria-label="hamburger-dropdown"]`).contains(/documentation/i).click()
    cy.wait(250)
    cy.get(`[aria-label="hamburger-dropdown"]`).contains(/bug bounty/i).click()
  },
  CLICK_PLAYGROUND: () => {
    cy.get(`[aria-label="hamburger-dropdown"]`).contains(/api playground/i).click()
  },
  CLOSE_HAMBURGER: () => {
    cy.get(`.desktop\:hidden[role="menu"]`).click();
    cy.wait(500);
  },
}

const itVisitsAndRunsPathTests = (url) => (path) => {
  it(path.description, function () {
    cy.visit(url).then(path.test);
  });
};

cy.itTests = (appAddress) => itVisitsAndRunsPathTests(appAddress);
cy.testsModel = (initialState) => createTestModel(derivApiMachine(initialState), cypressStates, cypressEvents);
cy.testsMobileModel = (initialState) => createTestModel(derivApiMachine(initialState), cypressMobileStates, cypressMobileEvents);
cy.homeSliderTestsModel = () => createTestModel(homeSliderMachine(), homeSliderStates, homeSliderEvents);
cy.hamburgerTestModel = () => createTestModel(hamburgerMachine(), hamburgerStates, hamburgerEvents);
