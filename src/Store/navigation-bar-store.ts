import { createMemo, createSignal } from 'solid-js';
import { routes } from './routes';

export const routeSignal = createSignal(routes);
export const docsNavSignal = createSignal(routes.filter(route => {
  return !route.is_root_path;
}));

export const navMemo = createMemo(() => routes.filter(route => {
  return route.is_root_path;
}));