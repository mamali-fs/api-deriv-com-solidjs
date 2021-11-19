import type { Component } from 'solid-js';
import {createEffect, createSignal} from 'solid-js';
import { createStore } from 'solid-js/store';
import Request from './Request';
import WS from '../../Helpers/WS';
import { Conversation } from './Conversation';

export const Playground: Component = () => {
    const [reqs, setReqs] = createSignal([]);

    const addToReqs = (value) => {
        return setReqs([...reqs(), value]);
    };

    const resetReqs = () => {
        return setReqs([]);
    };

    createEffect(() => {
        WS.init((item: string) => {
            addToReqs(item)
        });
    });

    return (
        <div data-testid="playground-page">
            <h1>Playground page</h1>
            <main className="bg-gray-800 px-4">
                <Request resetReqs={resetReqs}/>
                <Conversation data={reqs} />
            </main>
        </div>
    )
} 
