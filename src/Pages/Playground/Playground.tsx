import type { Component } from 'solid-js';
import {createEffect, createSignal} from 'solid-js';
import Request from './Request';
import WS from '../../Helpers/WS';
import { Conversation } from './Conversation';

export const Playground: Component = () => {
    const [reqs, setReqs] = createSignal([]);

    const addToReqs = (value: string) => {
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
            <main className="px-4">
                <Request resetReqs={resetReqs}/>
                <Conversation data={reqs} />
            </main>
        </div>
    )
}