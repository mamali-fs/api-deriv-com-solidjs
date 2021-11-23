import { createTestModel } from "./createTestModel.js";
import { derivApiMachine } from "./derivApiMachine";
import { homeSliderMachine } from "./homeSliderMachine.js";

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

export const testsModel = (initialState) => createTestModel(derivApiMachine(initialState), cypressStates, cypressEvents);
export const testsMobileModel = (initialState) => createTestModel(derivApiMachine(initialState), cypressMobileStates, cypressMobileEvents);
export const homeSliderTestsModel = () => createTestModel(homeSliderMachine(), homeSliderStates, homeSliderEvents);
