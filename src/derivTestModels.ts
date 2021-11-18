// import react-testing methods
import { screen } from 'solid-testing-library';
import { createTestModel } from "./createTestModel";

const documentationNavigationEvents = {
  CLICK_APP_REGISTRATION: "registration",
  CLICK_GUIDE: "guide",
  CLICK_DOCUMENTATION: "documentation",
  CLICK_PLAYGROUND: "playground",
  CLICK_HOME: "home",
  CLICK_FAQ: "faq",
  CLICK_JSON_SCHEMAS: "jsonSchemas",
  CLICK_BUG_BOUNTY: "bugBounty",
};

export const derivApiTestMachine = {
  id: "current_api_deriv_com",
  initial: 'home',
  on: { CLICK_PLAYGROUND: "playground", CLICK_DOCUMENTATION: "documentation" },
  states: {
    documentation: {
      on: { ...documentationNavigationEvents },
    },
    registration: {
      on: { ...documentationNavigationEvents },
    },
    guide: {
      on: { ...documentationNavigationEvents },
    },
    playground: {
      on: { CLICK_HOME: "home", CLICK_DOCUMENTATION: "documentation" },
    },
    home: {
      on: { CLICK_PLAYGROUND: "playground", CLICK_DOCUMENTATION: "documentation" },
    },
    faq: {
      on: { ...documentationNavigationEvents },
    },
    jsonSchemas: {
      on: { ...documentationNavigationEvents },
    },
    bugBounty: {
      on: { ...documentationNavigationEvents },
    },
  },
};

const derivTestModels = {
  home: () => {
    const component = screen.queryByText('cssonsole.log');
    expect(component).toBeInTheDocument()
  },
  documentation: () => {
    const component = screen.queryByText('cssonsole.log');
    expect(component).toBeInTheDocument()
  },
  playground: () => {
    const component = screen.queryByText('cssonsole.log');
    expect(component).toBeInTheDocument()
  },
  registration: () => {
    const component = screen.queryByText('cssonsole.log');
    expect(component).toBeInTheDocument()
  },
  documetnation: () => {
    const component = screen.queryByText('cssonsole.log');
    expect(component).toBeInTheDocument()
  },
  faq: () => {
    const component = screen.queryByText('cssonsole.log');
    expect(component).toBeInTheDocument()
  },
  jsonSchemas: () => {
    const component = screen.queryByText('cssonsole.log');
    expect(component).toBeInTheDocument()
  },
  bugBountry: () => {
    const component = screen.queryByText('cssonsole.log');
    expect(component).toBeInTheDocument()
  },
  guide: () => {
    const component = screen.queryByText('cssonsole.log');
    expect(component).toBeInTheDocument()
  },
};

const cypressEvents = {
  CLICK_PLAYGROUND: function () {
    
    //user clicks
  },
  CLICK_HOME: function () {
    
  },
  CLICK_APP_REGISTRATION: function () {
    
  },
  CLICK_DOCUMENTATION: function () {
    
  },
  CLICK_FAQ: function () {
    
  },
  CLICK_JSON_SCHEMAS: function () {
    
  },
  CLICK_BUG_BOUNTY: function () {
    
  },
  CLICK_GUIDE: function () {
    
  },
};

export const appTestsModel = createTestModel(derivApiTestMachine, derivTestModels, cypressEvents);



const headerEvents = {
  CLICK_HEADER_DOCUMENTATION: "documentationHighlight",
  CLICK_HEADER_PLAYGROUND: "playgroundHighligh",
  CLICK_HEADER_HOME: "homeHighlight",
  CLICK_HEADER_DERIV_IMAGE: "homeHighlight",
};

export const derivHeaderTestMachine = {
  id: "current_api_deriv_com",
  initial: 'homeHighlight',
  on: { ...headerEvents},
  states: {
    documentationHighlight: {
      on: { ...headerEvents },
    },
    playgroundHighligh: {
      on: { ...headerEvents },
    },
    homeHighlight: {
      on: { ...headerEvents },
    },
  },
};

const cypressHeaderStates = {
  homeHighlight: () => {},
  documentationHighlight: () => {},
  playgroundHighligh: () => {},
};

const cypressHeaderEvents = {
  CLICK_HEADER_DOCUMENTATION: function () {
    
  },
  CLICK_HEADER_PLAYGROUND: function () {
    
  },
  CLICK_HEADER_HOME: function () {
    
  },
  CLICK_HEADER_DERIV_IMAGE: function () {
    
  },
};

export const headerTestModel = createTestModel(derivHeaderTestMachine, cypressHeaderStates, cypressHeaderEvents);

