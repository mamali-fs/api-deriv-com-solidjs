import { createSignal } from 'solid-js';
import type { Component } from 'solid-js';
import {docs_routes, routes} from './routes';
import { RouteProps } from 'solid-app-router';

export type TNavigation = RouteProps & {
  icon?: string;
  label: string;
  path: string;
  component: Component;
};

export const navSignal = createSignal(routes);
export const docsNavSignal = createSignal(docs_routes)
