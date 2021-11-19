import { lazy } from "solid-js";
import { TNavigation } from "./side-bar-store";

const Docs = lazy(() => import("../Pages/Docs/index"));
const QuickStart = lazy(() => import("../Pages/QuickStart/index"));
const Home = lazy(() => import("../Pages/Home/index"));
const Playground = lazy(() => import("../Pages/Playground/index"));
const NotFound = lazy(() => import("../Pages/NotFound/index"));

export const routes: any[] = [
  {
    label: "Home",
    path: "/",
    component: Home,
  },
  {
    label: "Documentation",
    path: "/docs",
    component: Docs,
  },
  {
    label: "API Playground",
    path: "/playground",
    component: Playground,
  },
];

export const 

docs_routes: any[] = [
  {
    label: "Quickstart",
    path: "/docs",
    component: QuickStart,
  },
  {
    label: "App registration",
    path: "/docs/app-registration",
    component: NotFound,
  },
  {
    label: "API playground",
    path: "/playground",
    component: NotFound,
  },
  {
    label: "API guid",
    path: "/docs/api-guide",
    component: NotFound,
  },
  {
    label: "FAQ",
    path: "/docs/faq",
    component: NotFound,
  },
  {
    label: "JSON schemas",
    path: "/docs/json-schemas",
    component: NotFound,
  },
  {
    label: "Bug Bounty",
    path: "/docs/bug-bounty",
    component: NotFound,
  },
];
