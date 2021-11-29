import type { Component } from "solid-js";
import { createEffect } from "solid-js";
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";
import "prismjs/components/prism-json";

export const Conversation: Component = ({ data }) => {
  createEffect(() => {
    Prism.highlightAll();
    data();
  });
  return (
    <section className="w-full max-h-60vh overflow-y-auto p-4">
      {data().map((code) => {
        const parsed = JSON.parse(code);
        return (
          <pre className="language-json" style={{ background: "#151717" }}>
            <code>{JSON.stringify(parsed, null, 2)}</code>
          </pre>
        );
      })}
    </section>
  );
};
