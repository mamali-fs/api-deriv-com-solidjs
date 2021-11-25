import type { Component } from 'solid-js';
import {createEffect, createSignal} from 'solid-js';
import Request from './Request';
import WS from '../../Helpers/WS';
import { Conversation } from './Conversation';
import { ApiSelector } from './components/ApiSelector';
import { Authenticate } from './components/Authenticate';

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
      <div data-testid="playground-page" class="text-base bg-dark-100 text-white">
        <h1 class="text-5xl text-center font-bold mb-10">API Playground</h1>

        <main class="grid grid-cols-2 gap-10">
            <div>
                <ApiSelector />
                <Authenticate />
                <Request resetReqs={resetReqs}/>
                <Conversation data={reqs} />
            </div>

            <div class="">
                result part must be here
            </div>
        </div>
    </div>
    )
}
