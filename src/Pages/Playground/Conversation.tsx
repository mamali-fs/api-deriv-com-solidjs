import type { Component } from 'solid-js';
import { createEffect } from 'solid-js';
// PrismJS library is used for JSON syntax highlighting.
import Prism from "prismjs";
// The css file below contains the style of the JSON code and can be customized.
import "prismjs/themes/prism-okaidia.css"
import 'prismjs/components/prism-json';

export const Conversation: Component = ({ data }) => {
    createEffect(() => {
        Prism.highlightAll();
        data();
    });

    return (
        <section className="w-full max-h-60vh overflow-y-auto p-4">
             {data().map(code =>
             <pre className='language-json' style={{background: '#111827'}} >
                <code>{code()}</code>
            </pre>)}
        </section>
    );
}