import { lazy } from "solid-js";
import { TNavigation } from "./side-bar-store";

const NotFound = lazy(() => import("../Pages/NotFound"));


export const routes: any[] = [
  {
    label: 'Home',
    path: '/',
    is_root_path: true,
    component: lazy(() => import('../Pages/Home')),
  },
  {
    label: 'Documentation',
    path: '/docs/',
    is_root_path: true,
    component: lazy(() => import('../Pages/Docs')),
    children: [
      {
        label: 'Quickstart',
        path: '/',
        component: lazy(() => import('../Pages/Docs/QuickStart')),
      },
      {
        label: 'App registration',
        path: '/app-registration',
        component: lazy(() => import('../Pages/Docs/AppRegistration')),
      },
      {
        label: 'API guide',
        path: '/api-guide',
        component: NotFound,
      },
      {
        label: 'FAQ',
        path: '/faq',
        component: NotFound,
      },
      {
        label: 'JSON schemas',
        path: '/json-schemas',
        component: lazy(() => import('../Pages/Docs/JSONSchemas')),
      },
      {
        label: 'Bug Bounty',
        path: '/bug-bounty',
        component: lazy(() => import('../Pages/Docs/BugBounty')),
      },
    ],
  },
  {
    label: 'API Playground',
    path: '/playground',
    is_root_path: true,
    component: lazy(() => import('../Pages/Playground')),
  },
];
