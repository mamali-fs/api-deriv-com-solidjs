import type { Component } from 'solid-js'
import { For } from 'solid-js'
import createSlider from "solid-slider";
import "solid-slider/dist/slider.css";

type TSliderContent = {
    message: string,
    name: string,
    position: string,
    location: string
}

type TSliderOptions = {
    loop: boolean
}

const SLIDER_CONTENT: TSliderContent[] = [
    {
        message: "To be honest, Deriv’s API is one of the best APIs in the trading market.",
        name: "Alessandro",
        position: "CEO",
        location: "Italy"
    }, {
        message: "Probably the best API for making your business successful in trading derivatives out there.",
        name: "Thiago",
        position: "entrepreneur",
        location: "Brazil"
    }, {
        message: " I have been using the Deriv API for 13 years to build successful apps in and I find the support I get from Deriv as a business partner second to none. I look forward to 13 more successful years to come.",
        name: "Josh",
        position: "trader",
        location: "Australia"
    }
]
export const HomeSlider: Component = () => {
    const slider_options: TSliderOptions = { loop: true }
    const [slider, { next, prev }] = createSlider(slider_options);
    return (
        <div aria-label="slider-component" class="flex flex-col items-center">
            <h1 class="mb-10 text-5xl">See what our clients say</h1>
            <div class="w-[80%] flex justify-center items-center">
                <div role="button" aria-label="left" class="flex flex-col justify-center align-middle items-center desktop:mr-[100px] mobile:mr-[50px] bg-arrow-left bg-no-repeat w-[50px] h-[50px]" onclick={prev} />
                <div role="slider" aria-label="home" use:slider class="hover:cursor-pointer w-[588px] h-[248px]">
                    <For each={SLIDER_CONTENT}>
                        {(person) =>
                            <div aria-label="slider-content" class="flex flex-col justify-center items-center">
                                <blockquote class="mb-10">
                                    {person.message}
                                </blockquote>
                                <p><b>{person.name}</b>, {person.position} | {person.location}</p>
                            </div>
                        }
                    </For>
                </div>
                <div role="button" aria-label="right" class="flex flex-col justify-center items-center desktop:ml-[100px] mobile:ml-[50px] w-[50px] h-[50px] bg-arrow-right bg-no-repeat" onclick={next} />

            </div>
        </div>
    )

}