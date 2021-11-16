import { createSignal } from 'solid-js';
import {docs_routes, routes} from './routes';

export const navSignal = createSignal(routes);
export const docsNavSignal = createSignal(docs_routes)
