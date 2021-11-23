import { lazy } from "solid-js";
import { TNavigation } from "./side-bar-store";

const NotFound = lazy(() => import("../Pages/NotFound"));


export const routes: TNavigation[] = [
  {
    label: 'Home',
    path: '/',
    is_root_path: true,
    component: lazy(() => import('../Pages/Home')),
  },
  {
    label: 'Documentation',
    path: '/docs',
    is_root_path: true,
    component: lazy(() => import('../Pages/Docs')),
  },
  {
    label: 'API Playground',
    path: '/playground',
    is_root_path: true,
    component: lazy(() => import('../Pages/Playground')),
  },
  {
    label: 'Quickstart',
    path: '/docs',
    component: lazy(() => import('../Pages/Docs/QuickStart')),
  },
  {
    label: 'App registration',
    path: '/docs/app-registration',
    component: NotFound,
  },
  {
    label: 'API guide',
    path: '/docs/api-guide',
    component: NotFound,
  },
  {
    label: 'FAQ',
    path: '/docs/faq',
    component: NotFound,
  },
  {
    label: 'JSON schemas',
    path: '/docs/json-schemas',
    component: NotFound,
  },
  {
    label: 'Bug Bounty',
    path: '/docs/bug-bounty',
    component: NotFound,
  },
];
