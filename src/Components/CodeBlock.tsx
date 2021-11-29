import { createEffect, createMemo, PropsWithChildren } from 'solid-js';
import type { Component } from 'solid-js';
import hljs from 'highlight.js';
import 'highlight.js/styles/a11y-dark.css';
import { SupportedLanguages } from '../types';


type TLanguageModule = {
  [SupportedLanguages.CSharp]: string;
  [SupportedLanguages.Javascript]: string;
  [SupportedLanguages.PHP]: string;
  [SupportedLanguages.Python]: string;
  selected: SupportedLanguages;
};


type CodeBlockProps = PropsWithChildren & {
  store: TLanguageModule
};

export const CodeBlock: Component<CodeBlockProps> = ({ store }: CodeBlockProps) => {
  let codeRef: HTMLElement| undefined;
  const highlight = (a: string) => {
    if (codeRef) {
      codeRef.innerHTML = '';
      codeRef.textContent = a;
      hljs.highlightAll();
    }
  };

  const languageMemo = createMemo(() => store.selected);
  const codeClass = createMemo(() => `language ${languageMemo().toLowerCase()} bg-gray-900`);
  const code = createMemo(() => store[store.selected])
  createEffect(() => highlight(store[store.selected]));

  return (
    <code ref={codeRef} class={codeClass()}>
      {code()}
    </code>
  );
};
