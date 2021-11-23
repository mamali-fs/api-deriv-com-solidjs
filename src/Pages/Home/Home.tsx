import type { Component } from 'solid-js'
import HomeSlider from '../../Components/HomeSlider';
import ComprehensiveRow from './ComprehensiveRow';
import Hero from './Hero';
import WaysToEarn from './WaysToEarn'

export const Home: Component = () => (
    <div class="flex flex-col overflow-hidden">
        <Hero />
        <WaysToEarn />
        <HomeSlider />
        <ComprehensiveRow />
    </div>
)