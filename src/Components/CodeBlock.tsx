import { onMount } from 'solid-js';
import type { Component } from 'solid-js';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';

type CodeBlockProps = {
  language?: 'php' | 'javascript';
  children: string;
};

export const CodeBlock: Component<CodeBlockProps> = ({ language = 'javascript', children }: CodeBlockProps) => {
  onMount(() => {
    hljs.highlightAll();
  });
  return <code class={`langauge-${language} bg-gray-900`}>{children}</code>;
};
