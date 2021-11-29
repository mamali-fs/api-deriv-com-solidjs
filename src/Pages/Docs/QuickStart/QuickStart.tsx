import { Component } from 'solid-js';
import { CodePreview } from '../../../Components/Organisms/CodePreview';
export const QuickStart: Component = () => {
  return (
    <div data-testid="quickstart-page" class="pl-10">
      <h1 class="mb-10 text-5xl text-center text-gray-800 block font-bold">
        Quickstart to Deriv API
      </h1>
      <div>
        <p class="leading-7 mb-4">
          On this page, you&#39;ll find code samples in various programming
          languages showing you how to work with the Deriv API to perform some
          of the most important operations.
        </p>
        <p class="leading-7 mb-4">
          You can find all of the other available calls in the 
          <a class="text-red-600 no-underline" href="/playground/">
            API Playground
          </a>
          .
        </p>
        <h3 class="mb-2 font-bold text-2xl text-left leading-normal text-gray-800">
          Before you begin
        </h3>
        <ul class="block list-disc ml-5">
          <li class="mb-4 mt-4">
            Open a 
            <a class="text-red-600 no-underline" href="https://deriv.com/">
              Deriv account 
            </a> 
             (either a demo or real account).
          </li>
          <li class="mb-4 mt-4">
            Create a new token using the 
            <a
              class="text-red-600 no-underline"
              href="https://app.deriv.com/account/api-token"
            >
              admin scope
            </a>
            .
          </li>
          <li class="mb-4 mt-4">
            Register your app to receive your <b>app_id</b> or use
            <b>app_id 1089</b> to test Deriv API.
          </li>
        </ul>
        <h3 class="mb-2 font-bold text-2xl text-left leading-normal text-gray-800">
          Setting up your environment
        </h3>
        <p class="leading-7 mb-4">
          Instructions for setting up your environment and running the examples
          in your desired programming language are given as comments in the code
          samples.
        </p>
      </div>
      <div class="mb-10">
        <h2 class="text-3xl mb-3 text-left w-full text-gray-800 font-bold">
          Buy contract
        </h2>
        <p class="leading-7 mb-4">
          A contract is an agreement to buy or sell an asset at an agreed-upon
          price. This example shows you how to buy a contract using Deriv API.
        </p>
        <CodePreview apiType="buyContract" />
      </div>
      <div class="mb-10">
        <h2 class="text-3xl mb-3 text-left w-full text-gray-800 font-bold">
          Ticks
        </h2>
        <p class="leading-7 mb-4">
          A tick is a measure of minimum upward or downward movement in the
          price of a trading commodity. This example shows you how to collect
          ticks for your trading app using Deriv’s API.
        </p>
        <CodePreview apiType="ticks" />
      </div>
      <div class="mb-10">
        <h2 class="text-3xl mb-3 text-left w-full text-gray-800 font-bold">
          Account balance
        </h2>
        <p class="leading-7 mb-4">
          This example shows you how to use the Deriv API to retrieve account
          balance information.
        </p>
        <CodePreview apiType="balance" />
      </div>
      <div class="mb-10">
        <h2 class="text-3xl mb-3 text-left w-full text-gray-800 font-bold">
          Proposal
        </h2>
        <p class="leading-7 mb-4">
          This example is for getting a contract proposal. You’ll be able to get
          the price, payout and spot value for your contract.
        </p>
        <p class="leading-7 mb-4">
          To keep this connection alive in case of inactivity timeouts, see the
          example for 
          <a
            class="text-red-600 no-underline"
            href="https://app.deriv.com/account/api-token"
          >
            Keep alive
          </a>
          .
        </p>
        <CodePreview apiType="proposal" />
      </div>
      <div class="mb-10">
        <h2 class="text-3xl mb-3 text-left w-full text-gray-800 font-bold">
          Keep alive
        </h2>
        <p class="leading-7 mb-4">
          In this example you’ll see how to keep a connection alive when getting
          contract proposals via the Deriv API. This example keeps the
          connection alive by sending a ping every 30 seconds.
        </p>
        <CodePreview apiType="keepAlive" />
      </div>
    </div>
  );
};
