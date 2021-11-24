import type { Component } from 'solid-js'
import HomeSlider from '../../Components/HomeSlider';
import ComprehensiveRow from './ComprehensiveRow';
import Hero from './Hero';
import Benefits from './Benefits';
import WaysToEarn from './WaysToEarn'

export const Home: Component = () => (
    <div class="flex flex-col overflow-hidden">
        <Hero />
        <Benefits />
        <WaysToEarn />
        <HomeSlider />
        <ComprehensiveRow />
    </div>
)