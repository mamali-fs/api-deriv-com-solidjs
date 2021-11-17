import type { Component } from 'solid-js';
import {createEffect, createSignal} from 'solid-js';

export const Conversation: Component = ({ data }) => {
    createEffect(() => {
        data();
    });

    return (
        <section>
            {data()}
        </section>
    );
}
