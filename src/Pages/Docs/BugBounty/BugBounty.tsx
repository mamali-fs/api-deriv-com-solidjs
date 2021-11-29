import type { Component } from "solid-js";

export const BugBounty: Component = () => {
    return (
        <div class="pl-10 text-[#333333]">
            <h1 class="text-5xl text-center">Bug bounty</h1>

            <p class="mt-10 text-2xl font-bold">Want to help us enhance our security?</p>
            <p class="mt-2">Test our products and services for security vulnerabilities and earn a monetary reward for any verifiable issues that you find, courtesy of our bug bounty programme.</p>

            <div class="mt-4 lg:grid lg:grid-cols-2 lg:gap-10 p-10 rounded bg-[#F0F1F3A3]">
                <div class="lg:col-span-1 text-center px-5">
                    <h3 class="font-bold text-3xl mb-6 block">Explore our bounty programme</h3>
                    <a target="_blank" href="https://hackerone.com/binary" class="text-sm px-4 py-2 border-2 rounded font-bold hover:bg-[#999] border-[#999]">Go to Hackerone</a>
                </div>

                <div class="lg:col-span-1 text-center mt-10 lg:mt-0 flex items-center justify-center">
                    <div style={{ "max-width": "245px" }}>
                        <h3 class="font-bold text-3xl mb-2 block">Got questions?</h3>
                        <p>Email us at <a href="mailto:security@deriv.com" class="text-[#FF444F]">security@deriv.com</a> for more information.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}