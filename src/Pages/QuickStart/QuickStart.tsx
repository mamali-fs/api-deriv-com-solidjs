import type { Component } from "solid-js";


export const QuickStart: Component = () => {

  return (
      <div data-testid='quickstart-page' class="page-content">
  <h1 class="doc-main-title">Quickstart to Deriv API</h1>
  <div>
    <p>On this page, you&#39;ll find code samples in various programming languages showing you how to work
      with the Deriv API to perform some of the most important operations.</p>
    <p>You can find all of the other available calls in the  <a href="{{ branch }}/playground/">API Playground</a>.</p>
    <h3 class="api-sub-title bold">Before you begin</h3>
    <ul class="bullet">
      <li>Open a <a href="https://deriv.com/">Deriv account</a> (either a demo or real account).</li>
      <li>Create a new token using the <a href="https://app.deriv.com/account/api-token">admin scope</a>.</li>
      <li>Register your app to receive your <b>app_id</b> or use <b>app_id 1089</b> to test Deriv API.</li>
    </ul>
    <h3 class="api-sub-title bold">Setting up your environment</h3>
    <p>Instructions for setting up your environment and running the examples in your desired programming
      language are given as comments in the code samples.</p>
  </div>
  <div class="text-block">
    <h2 class="doc-sub-title">Buy contract</h2>
    <p>A contract is an agreement to buy or sell an asset at an agreed-upon price. This example shows you
      how to buy a contract using Deriv API.</p>
      <div class="card">
        <div class="card-header">
            <p class="card-header-title">
                <select id="demo-buy-contract" >
                    <option value="javascript">JavaScript</option>
                    <option value="csharp">C#</option>
                    <option value="php">PHP</option>
                    <option value="python">Python</option>
                </select>
            </p>
            <div class="copy-button">
                <img class="copy-button-image" src="{{ branch }}/img/copy.svg" width="16" height="16" alt="copy code icon" /> Copy
            </div>
        </div>
        <div class="language-demos">

        </div>
    </div>
  </div>
  <div class="text-block">
    <h2 class="doc-sub-title">Ticks</h2>
    <p>A tick is a measure of minimum upward or downward movement in the price of a trading
      commodity. This example shows you how to collect ticks for your trading app using Deriv’s API.</p>
      <div class="card">
        <div class="card-header">
            <p class="card-header-title">
                <select id="demo-ticks" >
                    <option value="javascript">JavaScript</option>
                    <option value="csharp">C#</option>
                    <option value="php">PHP</option>
                    <option value="python">Python</option>
                </select>
            </p>
            <div class="copy-button">
                <img class="copy-button-image" src="{{ branch }}/img/copy.svg" width="16" height="16" alt="copy code icon" /> Copy
            </div>
        </div>
        <div class="language-demos">

        </div>
    </div>
  </div>
  <div class="text-block">
    <h2 class="doc-sub-title">Account balance</h2>
    <p>This example shows you how to use the Deriv API to retrieve account balance information.</p>
    <div class="card">
      <div class="card-header">
          <p class="card-header-title">
              <select id="demo-balance" >
                  <option value="javascript">JavaScript</option>
                  <option value="csharp">C#</option>
                  <option value="php">PHP</option>
                  <option value="python">Python</option>
              </select>
          </p>
          <div class="copy-button">
              <img class="copy-button-image" src="{{ branch }}/img/copy.svg" width="16" height="16" alt="copy code icon" /> Copy
          </div>
      </div>
      <div class="language-demos">

      </div>
  </div>
  </div>
  <div class="text-block">
    <h2 class="doc-sub-title">Proposal</h2>
    <p>This example is for getting a contract proposal. You’ll be able to get the price, payout and spot value
      for your contract.</p>
    <p>To keep this connection alive in case of inactivity timeouts, see the example for <a href="#keep-alive">Keep alive</a>.</p>
    <div class="card">
      <div class="card-header">
          <p class="card-header-title">
              <select id="demo-proposal" >
                  <option value="javascript">JavaScript</option>
                  <option value="csharp">C#</option>
                  <option value="php">PHP</option>
                  <option value="python">Python</option>
              </select>
          </p>
          <div class="copy-button">
              <img class="copy-button-image" src="{{ branch }}/img/copy.svg" width="16" height="16" alt="copy code icon" /> Copy
          </div>
      </div>
      <div class="language-demos">

      </div>
  </div>
  </div>
  <div class="text-block">
    <h2 id="keep-alive" class="doc-sub-title">Keep alive</h2>
    <p>In this example you’ll see how to keep a connection alive when getting contract proposals via the
      Deriv API. This example keeps the connection alive by sending a ping every 30 seconds.</p>
      <div class="card">
        <div class="card-header">
            <p class="card-header-title">
                <select id="demo-keep-alive" >
                    <option value="javascript">JavaScript</option>
                    <option value="csharp">C#</option>
                    <option value="php">PHP</option>
                    <option value="python">Python</option>
                </select>
            </p>
            <div class="copy-button">
                <img class="copy-button-image" src="{{ branch }}/img/copy.svg" width="16" height="16" alt="copy code icon" /> Copy
            </div>
        </div>
        <div class="language-demos">

        </div>
    </div>
  </div>
</div>

  );
};
