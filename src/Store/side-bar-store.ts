import type { RouteDefinition } from "solid-app-router";

export type TNavigation = RouteDefinition & {
  icon?: string;
  is_root_path?: boolean;
  label: string;
};


