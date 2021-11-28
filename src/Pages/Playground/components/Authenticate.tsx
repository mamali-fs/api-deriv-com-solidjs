import type { Component } from 'solid-js';

export const Authenticate: Component = () => (
    <div class="p-6 rounded mt-6 grid grid-cols-12 bg-[#151717]">
        <fieldset id="api-token-fieldset" class="h-10 col-span-7 flex items-center my-auto pr-6">
            <input type="text" id="api-token" placeholder="API Token" class="rounded-l h-full w-full text-sm px-3 text-white-gray bg-dark-100" />
            <button class="rounded-r px-4 h-full font-bold text-center text-sm bg-[#ff444f]">Authenticate</button>
        </fieldset>

        <div class="font-bold text-center col-span-5 border-l border-gray-rgba">
            <p class="mb-4 text-white-gray">Looking for your API token?</p>
            <a target="tokeninput" href="https://app.deriv.com/account/api-token" class="py-2 px-4 rounded text-sm border-2 mx-auto border-[#6e6e6e]">Get your API token</a>
        </div>
    </div>
)