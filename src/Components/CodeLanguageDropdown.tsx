import { SupportedLanguages } from '../types';
import {  createMemo, JSX, PropsWithChildren } from 'solid-js';

type Props = PropsWithChildren & {
  value: SupportedLanguages;
  onChange: (v: SupportedLanguages) => void;
};
export function CodeLanguageDropdown({ value, onChange }: Props): JSX.Element {
  const valueMemo = createMemo(() => {
    return value;
  });
  return (
    <select
      id="demo-ticks"
      class="text-gray-400 bg-black mb-0"
      onChange={(e: Event) => {
        if (e.target) {
          onChange((e.target as HTMLSelectElement).value as SupportedLanguages);
        }
      }}
    >
      <option
        value={SupportedLanguages.Javascript}
        selected={valueMemo() === SupportedLanguages.Javascript}
      >
        JavaScript
      </option>
      <option
        value={SupportedLanguages.CSharp}
        selected={valueMemo() === SupportedLanguages.CSharp}
      >
        C#
      </option>
      <option
        value={SupportedLanguages.PHP}
        selected={valueMemo() === SupportedLanguages.PHP}
      >
        PHP
      </option>
      <option
        value={SupportedLanguages.Python}
        selected={valueMemo() === SupportedLanguages.Python}
      >
        Python
      </option>
    </select>
  );
}
