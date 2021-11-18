import { createSignal } from "solid-js";
import type { Component } from "solid-js";
import { RouteProps } from "solid-app-router";
import { docs_routes } from "./routes";

export type TNavigation = RouteProps & {
  icon?: string;
  label: string;
  path: string;
  component: Component;
};

const navSignal = createSignal(docs_routes);

export { navSignal };
