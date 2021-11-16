import type { Component } from 'solid-js';
import {createEffect, createSignal} from 'solid-js';
import { createStore } from 'solid-js/store';
import Request from './Request';
import WS from '../../Helpers/WS';
import { Conversation } from './Conversation';

export const Playground: Component = () => {
    const [reqs, addReqs] = createSignal([]);

    const addToReqs = (value) => {
        return addReqs([...reqs(), value]);
      };

    createEffect(() => {
        WS.init((item: string) => {
            addToReqs(item)
        });
    });

    return (
        <div data-testid="playground-page">
            <h1>Playground page</h1>
            <Request />
            <Conversation data={reqs} />
        </div>
    )
}