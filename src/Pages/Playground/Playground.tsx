import type { Component } from 'solid-js';
import { ApiSelector } from './components/ApiSelector';
import { Authenticate } from './components/Authenticate';

export const Playground: Component = () => (
    <div data-testid="playground-page" class="text-base bg-dark-100 text-white">
        <h1 class="text-5xl text-center font-bold mb-10">API Playground</h1>

        <div class="grid grid-cols-2 gap-10">
            <div>
                <ApiSelector />
                <Authenticate />
            </div>

            <div class="">
                result part must be here
            </div>
        </div>
    </div>
)
