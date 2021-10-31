import { createSignal } from 'solid-js';
import type { Component } from 'solid-js';
import { routes } from './routes';
import { RouteProps } from 'solid-app-router';

export type TNavigation = RouteProps & {
  icon?: string;
  label: string;
  path: string;
  component: Component;
};

export const navSignal = createSignal(routes);
