import { Component, createSignal, Show } from "solid-js";
import minus from '../../../assets/minus.svg'
import plus from '../../../assets/plus.svg'

type acccordinWrapperType = {
  header: string;
  body: any;
};
const AcccordinWrapper: Component<acccordinWrapperType> = ({
  header,
  body,
}) => {
  const [showBody, setShowBody] = createSignal(false);

  return (
    <div class="accordin">
      <div class="accordin-wrapper flex flex-col mb-6">
        <div
          class="accordin-header inline-flex min-h-[56px] items-center px-10 py-0 max-h-[fit-content] rounded-[6px] bg-[#ffff] shadow-lg"
          onClick={() => setShowBody(!showBody())}
        >
          <div class="accordin-text text-[16px] mr-4 text-[#333] font-bold">
            {header}
          </div>
          <Show when={!showBody()}>
            <img
              class="accordin-button ml-[auto]"
              width="16"
              height="16"
              alt="expand"
              src={plus}
            />
          </Show>
          <Show when={showBody()}>
            <img
              class="accordin-button ml-[auto]"
              width="16"
              height="16"
              alt="expand"
              src={minus}
            />
          </Show>
        </div>
        <Show when={showBody()}>
          <div class="accordin-pannel h-[fit-content] px-10 py-6 bg-[rgba(87,122,146,.04)] z-[2] mb-6">
            {body}
          </div>
        </Show>
      </div>
    </div>
  );
};

export const Faq: Component = () => {
  return (
    <div data-testid="FAQ-page" class="faq-page pl-10">
      <h1 class="mb-10 text-5xl text-center text-gray-800 block font-bold">
        FAQ
      </h1>
      <div class="accordin pl-[75px]">
        <AcccordinWrapper
          header="What is the easiest way to get started with Deriv API?"
          body={() => (
            <p class="leading-[28px] mt-4">
              View our{" "}
              <a class="text-[#ff444f] no-underline" href="/docs/">
                code samples
              </a>
              . You can use these code snippets in your app to open a connection
              to our WebSocket API service. Explore our
              <a class="text-[#ff444f] no-underline" href="/playground">
                {" "}
                API playground
              </a>{" "}
              for the method calls you need for your app.
            </p>
          )}
        />
        <AcccordinWrapper
          header="How do I build my own front-end app?"
          body={() => (
            <>
              <p class="leading-[28px] mt-4">
                Simply copy our open-source code and adapt it for your needs.
                Follow these steps to get started:
              </p>
              <ol class="ml-5">
                <li>
                  Open a{" "}
                  <a
                    class="text-[#ff444f] no-underline"
                    target="_blank"
                    href="https://www.github.com"
                  >
                    GitHub
                  </a>{" "}
                  account.
                </li>
                <li>
                  Download the{" "}
                  <a
                    class="text-[#ff444f] no-underline"
                    target="_blank"
                    href="https://desktop.github.com"
                  >
                    GitHub Desktop application
                  </a>
                  .
                </li>
                <li>
                  Fork any of our{" "}
                  <a
                    class="text-[#ff444f] no-underline"
                    target="_blank"
                    href="https://github.com/binary-com/?q=&amp;type=&amp;language=javascript&amp;sort="
                  >
                    open-source front-end repositories
                  </a>
                  .
                </li>
                <li>Make the code changes in your fork.</li>
                <li>
                  Publish your fork using the{" "}
                  <a
                    class="text-[#ff444f] no-underline"
                    target="_blank"
                    href="https://pages.github.com/"
                  >
                    GitHub Pages
                  </a>{" "}
                  facility.
                </li>
                <li>
                  For SSL and website acceleration for your app, open a free
                  account on
                  <a
                    class="text-[#ff444f] no-underline"
                    target="_blank"
                    href="https://www.cloudflare.com/"
                  >
                    Cloudflare
                  </a>
                  .
                </li>
              </ol>
            </>
          )}
        />
        <AcccordinWrapper
          header="Can someone build an app for me?"
          body={() => (
            <p class="leading-[28px] mt-4">
              Sure! You may hire developers who are familiar with JavaScript and
              WebSocket technology to build your app for you.
            </p>
          )}
        />
        <AcccordinWrapper
          header="Will I earn commissions if a client signed up with Deriv using my app?"
          body={() => (
            <>
              <p class="leading-[28px] mt-4">Yes! Follow these steps:</p>
              <ol class="ml-5">
                <li>
                  Sign up as an{" "}
                  <a
                    class="text-[#ff444f] no-underline"
                    href="https://deriv.com/partners/affiliate-ib/"
                  >
                    affiliate
                  </a>
                  .
                </li>
                <li>
                  Insert your affiliate token into the{" "}
                  <a
                    class="text-[#ff444f] no-underline"
                    href="/playground/#new_account_virtual"
                  >
                    <code class="border-[1px] rounded-[4px] px-1 py-0.5 border-solid border-[#eaeced]">
                      new_account_virtual
                    </code>
                  </a>{" "}
                  call in your app.
                </li>
              </ol>
            </>
          )}
        />
        <AcccordinWrapper
          header="How else can I earn?"
          body={() => (
            <>
              <p class="leading-[28px] mt-4">Here are some ways:</p>
              <ol class="ml-5">
                <li>
                  Sign up as a{" "}
                  <a href="https://deriv.com/partners/payment-agent/">
                    payment agent 
                  </a>{" "}
                  to process local payments for our clients in your country. You
                  may automate your payment agent facility using the 
                  <a
                    class="text-[#ff444f]"
                    href="/playground/#paymentagent_transfer"
                  >
                    <code class="border-[1px] rounded-[4px] px-1 py-0.5 border-solid border-[#eaeced]">paymentagent_transfer</code>
                  </a>{" "}
                  API call.
                </li>
                <li>
                  If you are prepared to offer higher contract prices than ours,
                  you may add a <strong>markup percentage</strong> when you 
                  <a class="text-[#ff444f]" href="/docs/app-registration">
                    register
                  </a>{" "}
                  your app. This is a percentage of contract payouts, and it’s
                  added to all contract prices in your app. At every month-end,
                  the aggregate markup is paid to you. Sign up as our affiliate
                  and contact your Affiliate Manager to learn more.
                </li>
              </ol>
            </>
          )}
        />
        <AcccordinWrapper
          header="What does it mean if a schema property has the ‘sensitive’ attribute?"
          body={() => (
            <p class="leading-[28px] mt-4">
              This means we will treat the value of this property as
              confidential, and will never return it in any API response. It is
              used for passwords and tokens.
            </p>
          )}
        />
        <AcccordinWrapper
          header="What is copy trading?"
          body={() => (
            <>
              <p class="leading-[28px] mt-4">
                Copy trading allows a client (the Copier) to automatically copy
                the trades of another client (the Trader).
              </p>
              <p class="leading-[28px] mt-4">
                To allow others to copy your trades, set the ‘allow_copiers’
                setting via the{" "}
                <a class="text-[#ff444f]" href="/playground/#set_settings">
                  set settings
                </a>{" "}
                call.
              </p>
              <p class="leading-[28px] mt-4">
                The Trader may create a read-only API token and provide it to
                the Copier.
              </p>
              <p class="leading-[28px] mt-4">
                Enabling ‘allow_copiers’ will also make the copytrading
                statistics call available. The statistics call provides the
                information about an account. This is so that potential copiers
                have an idea about the trader’s past performance.
              </p>
              <p class="leading-[28px] mt-4">
                To start copying, use the{" "}
                <a class="text-[#ff444f]" href="/playground/#copy_start">
                  copy start
                </a>{" "}
                call. To stop copying, use{" "}
                <a class="text-[#ff444f]" href="/playground/#copy_stop">
                  copy stop
                </a>
                .
              </p>
            </>
          )}
        />

        <AcccordinWrapper
          header="How do I check for server status updates?"
          body={() => (
            <p class="leading-[28px] mt-4">
              Use the{" "}
              <a
                class="text-[#ff444f] no-underline"
                href="/playground/#website_status"
              >
                website status
              </a>{" "}
              call to check whether the website is online or not.
            </p>
          )}
        />
        <AcccordinWrapper
          header="How do I subscribe to server status notifications?"
          body={() => (
            <>
            <p class="leading-[28px] mt-4">
              This JavaScript code opens a WebSocket and makes a subscription for server status notifications. When a message is received, it sends the website status message, if available:
            </p>
            </>
          )}
        />
        <AcccordinWrapper
          header="How do I get help?"
          body={() => (
            <p class="leading-[28px] mt-4">
              Visit our{" "}
              <a 
                class="text-[#ff444f] no-underline font-bold"
                target="_blank"
                href="https://binary.vanillacommunity.com/"
                rel="noreferrer noopener"
              >
                dev forum
              </a>{" "}
              or email 
              <a class="text-[#ff444f] no-underline"  href="mailto:api-support@deriv.com?subject=API+Question:+">
                 api-support@deriv.com
              </a>
              .
            </p>
          )}
        />
      </div>
    </div>
  );
};
