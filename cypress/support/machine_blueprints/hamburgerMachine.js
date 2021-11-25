export const hamburgerMachine = () => ({
    id: 'hamburger',
    initial: 'closed_hamburger',
    on: {
        CLICK_HAMBURGER: 'open_hamburger',
    },
    states: {
        open_hamburger: {
            on: { 
                CLICK_HAMBURGER: '#hamburger.closed_hamburger',
                CLOSE_HAMBURGER: '#hamburger.closed_hamburger',
                CLICK_HOME: '#hamburger.closed_hamburger',
                TOGGLE_DOCUMENTATION: '#hamburger.open_hamburger.documentation_open',
                CLICK_APP_REGISTRATION: '#hamburger.closed_hamburger',
                CLICK_API_GUIDE: '#hamburger.closed_hamburger',
                CLICK_FAQ: '#hamburger.closed_hamburger',
                CLICK_JSON_SCHEMAS: '#hamburger.closed_hamburger',
                CLICK_BUG_BOUNTY: '#hamburger.closed_hamburger',
                CLICK_API_PLAYGROUND: '#hamburger.closed_hamburger',
            },
            states: {
                documentation_open: {
                    on: {
                        TOGGLE_DOCUMENTATION: 'documentation_closed',
                        CLICK_QUICKSTART: '#hamburger.closed_hamburger',
                        CLICK_APP_REGISTRATION: '#hamburger.closed_hamburger',
                        CLICK_API_GUIDE: '#hamburger.closed_hamburger',
                        CLICK_FAQ: '#hamburger.closed_hamburger',
                        CLICK_JSON_SCHEMAS: '#hamburger.closed_hamburger',
                        CLICK_BUG_BOUNTY: '#hamburger.closed_hamburger',
                    },
                },
                documentation_closed: {
                    on: {
                        TOGGLE_DOCUMENTATION: 'documentation_open'
                    },
                },
            },
        },
        closed_hamburger: {
            on: {
                CLICK_HAMBURGER: 'open_hamburger',
            }
        },
    },
});