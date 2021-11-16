import { createTestModel } from "./createTestModel.js";
import { derivApiMachine } from "./derivApiMachine";

const cypressStates = {
  home: () => {
    cy.contains(/deriv api/i);
  },
  documentation: () => {
    cy.contains(/quickstart to deriv/i);
  },
  playground: () => {
    cy.contains(/select api call/i);
  },
  registration: () => {
    cy.contains(/Authenticate your API/i);
  },
  documetnation: () => {
    cy.contains(/Quickstart to Deriv API/i);
  },
  faq: () => {
    cy.get('.doc-main-title').contains(/FAQ/i);
  },
  jsonSchemas: () => {
    cy.get('.doc-main-title').contains(/JSON Schemas/i);
  },
  bugBountry: () => {
    cy.get('.doc-main-title').contains(/Bug Bounty/i);
  },
  guide: () => {
    cy.get('.doc-main-title').contains(/API guide/i);
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
export const testsModel = (initialState) => createTestModel(derivApiMachine(initialState), cypressStates, cypressEvents);
