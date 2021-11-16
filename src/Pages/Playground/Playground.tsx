import type { Component } from 'solid-js';
import {createEffect} from 'solid-js';
import { createStore } from 'solid-js/store';
import Request from './Request';
import WS from '../../Helpers/WS';

export const Playground: Component = () => {
    const [state, setState] = createStore({reqs: []});

    createEffect(() => {
        WS.init((item: string) => {
            setState('reqs', [...state.reqs, item])
            console.log('pushhhhhh')
        });
        console.log('effect');
    });

    console.log('state', state.reqs);

    return (
        <div data-testid="playground-page">
            <h1>Playground page</h1>
            <Request />
            {state.reqs}
        </div>
    )
}
