import type { Component } from 'solid-js'
import Hero from './Hero';
import Benefits from './Benefits';

export const Home: Component = () => (
    <div class="flex flex-col overflow-hidden">
        <Hero />
        <Benefits />
    </div>
)