import type { Component } from "solid-js";
import { CodeBlock } from '../../Components/CodeBlock';


export const QuickStart: Component = () => {

  return (
      <div data-testid='quickstart-page' class="pl-10">
  <h1 class="mb-10 text-5xl text-center text-gray-800 block font-bold">Quickstart to Deriv API</h1>
  <div>
    <p class="leading-7 mb-4">On this page, you&#39;ll find code samples in various programming languages showing you how to work
      with the Deriv API to perform some of the most important operations.</p>
    <p class="leading-7 mb-4">You can find all of the other available calls in the  <a class="text-red-600 no-underline" href="{{ branch }}/playground/">API Playground</a>.</p>
    <h3 class="mb-2 font-bold text-2xl text-left leading-normal text-gray-800">Before you begin</h3>
    <ul class="block list-disc ml-5">
      <li class="mb-4 mt-4">Open a <a class="text-red-600 no-underline" href="https://deriv.com/">Deriv account</a> (either a demo or real account).</li>
      <li class="mb-4 mt-4">Create a new token using the <a class="text-red-600 no-underline" href="https://app.deriv.com/account/api-token">admin scope</a>.</li>
      <li class="mb-4 mt-4">Register your app to receive your <b>app_id</b> or use <b>app_id 1089</b> to test Deriv API.</li>
    </ul>
    <h3 class="mb-2 font-bold text-2xl text-left leading-normal text-gray-800">Setting up your environment</h3>
    <p class="leading-7 mb-4">Instructions for setting up your environment and running the examples in your desired programming
      language are given as comments in the code samples.</p>
  </div>
  <div class="mb-10">
    <h2 class="text-3xl mb-3 text-left w-full text-gray-800 font-bold">Buy contract</h2>
    <p class="leading-7 mb-4">A contract is an agreement to buy or sell an asset at an agreed-upon price. This example shows you
      how to buy a contract using Deriv API.</p>
      <div class="rounded-md bg-gray-900">
        <div class="flex flex-no-wrap items-center rounded-md bg-black text-gray-400 leading-normal border-b-2 border-solid border-gray-600">
            <p class="w-full pl-6">
                <select id="demo-buy-contract" class="text-gray-400 bg-black mb-0" >
                    <option value="javascript">JavaScript</option>
                    <option value="csharp">C#</option>
                    <option value="php">PHP</option>
                    <option value="python">Python</option>
                </select>
            </p>
            <div class="flex items-center justify-end text-gray-400 border-l-2 border-solid border-gray-600 px-6 py-1 cursor-pointer">
                <img class="mt-0 mr-2 mb-0 ml-1" src="https://api.deriv.com/img/copy.svg" width="16" height="16" alt="copy code icon" /> Copy
            </div>
        </div>
        <div class="language-demos">
         <pre class="max-w-full overflow-auto whitespace-pre-wrap text-white block rounded p-6 mb-4 1 break-words">
           <CodeBlock language='javascript'>
               {"const ws = new WebSocket('wss://ws.binaryws.com/websockets/v3?app_id=' + app_id);"}
            </CodeBlock>
         </pre>
        </div>
    </div>
  </div>
  <div class="mb-10">
    <h2 class="text-3xl mb-3 text-left w-full text-gray-800 font-bold">Ticks</h2>
    <p class="leading-7 mb-4">A tick is a measure of minimum upward or downward movement in the price of a trading
      commodity. This example shows you how to collect ticks for your trading app using Deriv’s API.</p>
      <div class="rounded-md bg-gray-900">
        <div class="flex flex-no-wrap items-center rounded-md bg-black text-gray-400 leading-normal border-b-2 border-solid border-gray-600">
            <p class="w-full pl-6">
                <select id="demo-ticks" class="text-gray-400 bg-black mb-0">
                    <option value="javascript">JavaScript</option>
                    <option value="csharp">C#</option>
                    <option value="php">PHP</option>
                    <option value="python">Python</option>
                </select>
            </p>
            <div class="flex items-center justify-end text-gray-400 border-l-2 border-solid border-gray-600 px-6 py-1 cursor-pointer">
                <img class="mt-0 mr-2 mb-0 ml-1" src="https://api.deriv.com/img/copy.svg" width="16" height="16" alt="copy code icon" /> Copy
            </div>
        </div>
        <div>
<pre class="max-w-full overflow-auto whitespace-pre-wrap text-white block rounded p-6 mb-4 1 break-words">
           <CodeBlock language='javascript'>
                      &lt;?php
                      echo "Hello world!"
            </CodeBlock>
         </pre>
        </div>
    </div>
  </div>
  <div class="mb-10">
    <h2 class="text-3xl mb-3 text-left w-full text-gray-800 font-bold">Account balance</h2>
    <p class="leading-7 mb-4">This example shows you how to use the Deriv API to retrieve account balance information.</p>
      <div class="rounded-md bg-gray-900">
        <div class="flex flex-no-wrap items-center rounded-md bg-black text-gray-400 leading-normal border-b-2 border-solid border-gray-600">
            <p class="w-full pl-6">
                <select id="demo-ticks" class="text-gray-400 bg-black mb-0">
                    <option value="javascript">JavaScript</option>
                    <option value="csharp">C#</option>
                    <option value="php">PHP</option>
                    <option value="python">Python</option>
                </select>
            </p>
            <div class="flex items-center justify-end text-gray-400 border-l-2 border-solid border-gray-600 px-6 py-1 cursor-pointer">
                <img class="mt-0 mr-2 mb-0 ml-1" src="https://api.deriv.com/img/copy.svg" width="16" height="16" alt="copy code icon" /> Copy
            </div>
        </div>
        <div>
<pre class="max-w-full overflow-auto whitespace-pre-wrap text-white block rounded p-6 mb-4 1 break-words">
           <CodeBlock language='javascript'>
                      &lt;?php
                      echo "Hello world!"
            </CodeBlock>
         </pre>
        </div>
    </div>
  </div>
  <div class="mb-10">
    <h2 class="text-3xl mb-3 text-left w-full text-gray-800 font-bold">Proposal</h2>
    <p class="leading-7 mb-4">This example is for getting a contract proposal. You’ll be able to get the price, payout and spot value for your contract.</p>
    <p class="leading-7 mb-4">To keep this connection alive in case of inactivity timeouts, see the example for <a class="text-red-600 no-underline" href="https://app.deriv.com/account/api-token">Keep alive</a>.</p>
      <div class="rounded-md bg-gray-900">
        <div class="flex flex-no-wrap items-center rounded-md bg-black text-gray-400 leading-normal border-b-2 border-solid border-gray-600">
            <p class="w-full pl-6">
                <select id="demo-ticks" class="text-gray-400 bg-black mb-0">
                    <option value="javascript">JavaScript</option>
                    <option value="csharp">C#</option>
                    <option value="php">PHP</option>
                    <option value="python">Python</option>
                </select>
            </p>
            <div class="flex items-center justify-end text-gray-400 border-l-2 border-solid border-gray-600 px-6 py-1 cursor-pointer">
                <img class="mt-0 mr-2 mb-0 ml-1" src="https://api.deriv.com/img/copy.svg" width="16" height="16" alt="copy code icon" /> Copy
            </div>
        </div>
        <div>
<pre class="max-w-full overflow-auto whitespace-pre-wrap text-white block rounded p-6 mb-4 1 break-words">
           <CodeBlock language='javascript'>
                      &lt;?php
                      echo "Hello world!"
            </CodeBlock>
         </pre>
        </div>
    </div>
  </div>
  <div class="mb-10">
    <h2 class="text-3xl mb-3 text-left w-full text-gray-800 font-bold">Keep alive</h2>
    <p class="leading-7 mb-4">In this example you’ll see how to keep a connection alive when getting contract proposals via the Deriv API. This example keeps the connection alive by sending a ping every 30 seconds.</p>
      <div class="rounded-md bg-gray-900">
        <div class="flex flex-no-wrap items-center rounded-md bg-black text-gray-400 leading-normal border-b-2 border-solid border-gray-600">
            <p class="w-full pl-6">
                <select id="demo-ticks" class="text-gray-400 bg-black mb-0">
                    <option value="javascript">JavaScript</option>
                    <option value="csharp">C#</option>
                    <option value="php">PHP</option>
                    <option value="python">Python</option>
                </select>
            </p>
            <div class="flex items-center justify-end text-gray-400 border-l-2 border-solid border-gray-600 px-6 py-1 cursor-pointer">
                <img class="mt-0 mr-2 mb-0 ml-1" src="https://api.deriv.com/img/copy.svg" width="16" height="16" alt="copy code icon" /> Copy
            </div>
        </div>
        <div>
<pre class="max-w-full overflow-auto whitespace-pre-wrap text-white block rounded p-6 mb-4 1 break-words">
           <CodeBlock language='javascript'>
                      &lt;?php
                      echo "Hello world!"
            </CodeBlock>
         </pre>
        </div>
    </div>
  </div>

</div>

  );
};
