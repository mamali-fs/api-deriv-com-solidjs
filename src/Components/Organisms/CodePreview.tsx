import { JSX, PropsWithChildren } from 'solid-js';
import { createStore } from 'solid-js/store';
import { SupportedLanguages } from '../../types';
import { CodeLanguageDropdown } from '../CodeLanguageDropdown';
import { CodeBlock } from '../CodeBlock';

import balanceCSharp from './demos/balance-csharp.cs.txt?raw';
import balanceJS from './demos/balance-javascript.js.txt?raw';
import balancePHP from './demos/balance-php.php.txt?raw';
import balancePython from './demos/balance-python.py.txt?raw';

import keepAliveCSharp from './demos/keep-alive-csharp.cs.txt?raw';
import keepAliveJS from './demos/keep-alive-javascript.js.txt?raw';
import keepAlivePHP from './demos/keep-alive-php.php.txt?raw';
import keepAlivePython from './demos/keep-alive-python.py.txt?raw';

import buyCSharp from './demos/buy-contract-csharp.cs.txt?raw';
import buyJS from './demos/buy-contract-javascript.js.txt?raw';
import buyPHP from './demos/buy-contract-php.php.txt?raw';
import buyPython from './demos/buy-contract-python.py.txt?raw';

import proposalCSharp from './demos/proposal-csharp.cs.txt?raw';
import proposalJS from './demos/proposal-javascript.js.txt?raw';
import proposalPHP from './demos/proposal-php.php.txt?raw';
import proposalPython from './demos/proposal-python.py.txt?raw';

import ticksCSharp from './demos/ticks-csharp.cs.txt?raw';
import ticksJS from './demos/ticks-javascript.js.txt?raw';
import ticksPHP from './demos/ticks-php.php.txt?raw';
import ticksPython from './demos/ticks-python.py.txt?raw';

type TLanguageModule = {
  [SupportedLanguages.CSharp]: string;
  [SupportedLanguages.Javascript]: string;
  [SupportedLanguages.PHP]: string;
  [SupportedLanguages.Python]: string;
  selected: SupportedLanguages;
};

type TCodePreview = {
  buyContract: TLanguageModule;
  balance: TLanguageModule;
  proposal: TLanguageModule;
  ticks: TLanguageModule;
  keepAlive: TLanguageModule;
}

const [codePreviewStore, setCodePreviewStore] =
  createStore <TCodePreview>({
    buyContract: {
      [SupportedLanguages.CSharp]: buyCSharp,
      [SupportedLanguages.Javascript]: buyJS,
      [SupportedLanguages.PHP]: buyPHP,
      [SupportedLanguages.Python]: buyPython,
      selected: SupportedLanguages.Javascript,
    },
    balance: {
      [SupportedLanguages.CSharp]: balanceCSharp,
      [SupportedLanguages.Javascript]: balanceJS,
      [SupportedLanguages.PHP]: balancePHP,
      [SupportedLanguages.Python]: balancePython,
      selected: SupportedLanguages.Javascript,
    },
    proposal: {
      [SupportedLanguages.CSharp]: proposalCSharp,
      [SupportedLanguages.Javascript]: proposalJS,
      [SupportedLanguages.PHP]: proposalPHP,
      [SupportedLanguages.Python]: proposalPython,
      selected: SupportedLanguages.Javascript,
    },
    ticks: {
      [SupportedLanguages.CSharp]: ticksCSharp,
      [SupportedLanguages.Javascript]: ticksJS,
      [SupportedLanguages.PHP]: ticksPHP,
      [SupportedLanguages.Python]: ticksPython,
      selected: SupportedLanguages.Javascript,
    },
    keepAlive: {
      [SupportedLanguages.CSharp]: keepAliveCSharp,
      [SupportedLanguages.Javascript]: keepAliveJS,
      [SupportedLanguages.PHP]: keepAlivePHP,
      [SupportedLanguages.Python]: keepAlivePython,
      selected: SupportedLanguages.Javascript,
    },
  });

type SupportedApis =
  | 'balance'
  | 'keepAlive'
  | 'ticks'
  | 'proposal'
  | 'buyContract';
type TProps = PropsWithChildren & {
  apiType: SupportedApis;
};

export function CodePreview({ apiType }: TProps): JSX.Element {
  const handleDefaultValueChange = (v: SupportedLanguages) => {

    setCodePreviewStore(apiType, {
      selected: v,
    })

  };

  return (
    <div class="rounded-md bg-dark-gray-1">
      <div class="flex flex-no-wrap items-center rounded-md bg-black text-white-gray leading-normal border-b-2 border-solid border-white-gray">
        <div class="w-full pl-6">
          <CodeLanguageDropdown
            value={codePreviewStore[apiType].selected}
            onChange={handleDefaultValueChange}
          />
        </div>
        <div class="flex items-center justify-end text-white-gray border-l-2 border-solid border-white-gray px-6 py-1 cursor-pointer">
          <img
            class="mt-0 mr-2 mb-0 ml-1"
            src="https://api.deriv.com/img/copy.svg"
            width="16"
            height="16"
            alt="copy code icon"
          />
          Copy
        </div>
      </div>
      <div class="bg-gray-900">
        <pre class="max-w-full overflow-auto whitespace-pre-wrap text-white block rounded p-6 mb-4 1 break-words">
          <CodeBlock store={codePreviewStore[apiType]} />
        </pre>
      </div>
    </div>
  );
}
