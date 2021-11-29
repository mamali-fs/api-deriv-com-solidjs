import { createMemo, createSignal } from 'solid-js';
import { routes } from './routes';

export const routeSignal = createSignal(routes);
const navigationRoutes = routes
  .flatMap((route) => {
    if (route.path === '/docs/') {
      return route.children;
    }
    return undefined;
  })
  .filter(Boolean);

export const docsNavSignal = createSignal(navigationRoutes);

export const navMemo = createMemo(() => routes.filter(route => {
  return route.is_root_path;
}));