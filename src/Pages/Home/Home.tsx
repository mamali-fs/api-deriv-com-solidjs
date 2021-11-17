import type { Component } from 'solid-js'
import ComprehensiveRow from './ComprehensiveRow';
import Hero from './Hero';

export const Home: Component = () => (
    <div class="flex flex-col overflow-hidden">
        <Hero />
        <ComprehensiveRow />
    </div>
)