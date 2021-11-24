import { assign, sendParent } from "xstate";

export const hamburgerMachine = () => ({
    id: 'navigation',
    initial: 'closed_hamburger',
    context: { 
        highlight: 'home',
        is_documentation_open: false,
    },
    on: {
        CLICK_HAMBURGER: 'open_hamburger',
    },
    states: {
        open_hamburger: {
            initial: 'home_active',
            on: { CLICK_HOME: 'home_active' },
            states: {
                home_active: {
                    onEntry: () => {
                        sendParent('CLOSE_HAMBURGER')
                        assign({ highlight: 'home'})
                    },
                    on: {
                        CLICK_HAMBURGER: { target: 'closed_hamburger' },
                        CLOSE_HAMBURGER: 'closed_hamburger',
                        CLICK_HOME: 'home_active',
                        TOGGLE_DOCUMENTATION: 'open_documentation',
                        CLICK_APP_REGISTRATION: 'closed_hamburger',
                        CLICK_API_GUIDE: 'closed_hamburger',
                        CLICK_FAQ: 'closed_hamburger',
                        CLICK_JSON_SCHEMAS: 'closed_hamburger',
                        CLICK_BUG_BOUNTY: 'closed_hamburger',
                        CLICK_API_PLAYGROUND: 'closed_hamburger',
                    }
                },
                documentation_closed: {
                    onEntry: () => { 
                        assign({ is_documentation_open: false })
                    },
                    actions: { set_highlight: assign({ highlight: 'quickstart' })},
                    on: {
                       TOGGLE_DOCUMENTATION: 'documentation_open'
                    },
                },
                documentation_open: {
                    onEntry: () => { 
                        assign({ is_documentation_open: true })
                    },
                    on: {
                        CLICK_QUICKSTART: 'quickstart',
                        CLICK_APP_REGISTRATION: 'app_registration',
                        CLICK_API_GUIDE: 'api_guide',
                        CLICK_FAQ: 'faq',
                        CLICK_JSON_SCHEMAS: 'json_schemas',
                        CLICK_BUG_BOUNTY: 'bug_bounty',
                    },
                    states: {
                        quickstart: {
                            onEntry: () => { 
                                assign({ highlight: 'quickstart' })
                            },
                            on: { CLICK_APP_REGISTRATION: 'app_registration' },
                        },
                        app_registration: {
                            onEntry: () => { 
                                assign({ highlight: 'app_registration' })
                            },
                            on: { CLICK_API_GUIDE: 'api_guide' },
                        },
                        api_guide: {
                            onEntry: () => { 
                                assign({ highlight: 'api_guide' })
                            },
                            on: { CLICK_FAQ: 'faq' },
                        },
                        faq: {
                            onEntry: () => { 
                                assign({ highlight: 'faq' })
                            },
                            on: { CLICK_JSON_SCHEMAS: 'json_schemas' },
                        },
                        json_schemas: {
                            onEntry: () => { 
                                assign({ highlight: 'json_schemas' })
                            },
                            on: { CLICK_BUG_BOUNTY: 'bug_bounty' },
                        },
                        bug_bounty: {
                            onEntry: () => { 
                                assign({ highlight: 'bug_bounty' })
                            },
                            on: { CLICK_API_PLAYGROUND: 'api_playground' },
                        },
                    }
                },
                api_playground: {
                    on: { CLOSE_HAMBURGER: 'closed_hamburger' }
                },
            },
        },
        closed_hamburger: {
            on: {
                CLICK_HAMBURGER: 'open_hamburger',
            },
        },
    },
});