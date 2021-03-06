import type { Component } from 'solid-js';
import copySVG from '../../../assets/copy.svg'

export const ApiGuide: Component = () => {

    return (
        <div class="pl-[40px] w-[calc(100% - 262px)] docs-link" >
            <h1 class="mb-[40px]">API guide</h1>
            <div class="text-block">
                <h3 class="text-2.25xl font-bold">App registration</h3>
                <h3 class="api-sub-title bold">
                    Register your app before using our API. Here’s how:
                </h3>
                <ol>
                    <li class="list-decimal">
                        <a href="https://deriv.com" target="_blank" class="text-red-500">Open a Deriv account</a> (either a demo or
                        real account).
                    </li>
                    <li class="list-decimal">
                        <a href="https://app.deriv.com/account/api-token" target="_blank" class="text-red-500">Create a new token</a>
                        using the <strong>admin</strong> scope.
                    </li>
                    <li class="list-decimal">
                        Register your app to obtain your
                        <a class="a-link" href="/docs/app-registration/"> <code>app_id</code> </a>.
                    </li>
                </ol>
            </div>
            <div class="text-block">
                <h2 class="mb-3 w-full text-2.25xl font-bold">Client authentication</h2>
                <p>
                    Some API calls require client authentication (e.g.
                    <a class="a-link" href="/playground/#portfolio"><code>portfolio</code></a>) while others don’t (e.g.
                    <a class="a-link" href="/playground/#ticks"><code>ticks</code></a>).
                </p>
                <h3 class="api-sub-title2 bold">
                    There are 2 ways to authenticate clients:
                </h3>
                <ol>
                    <li class="list-decimal"><b>Client authentication by app-specific API tokens</b></li>
                    <p class="ul-paragraph">
                        Clients can generate API tokens by logging to their Deriv account and
                        going to <strong>Security &amp; Limits</strong> &gt;
                        <a href="https://app.deriv.com/account/api-token" target="_blank" class="text-red-500"><code>API token</code></a>.
                    </p>
                    <li class="list-decimal"><b>Client authentication by OAuth</b></li>
                    <p>Send clients to:</p>
                    <div class="border rounded border-[#e5e5e5] bg-[#577a92] bg-opacity-5 text-[#333] text-bold flex flex-nowrap item-center mb-2">
                        <text class="w-full py-4 px-16">
                            https://oauth.binary.com/oauth2/authorize?app_id=[..insert app_id..]
                        </text>
                        <div class="copy-button flex justify-items-center justify-end w-max h-full border-l px-6 py-4 font-normal border-[#e5e5e5] border-opacity-5" onclick={() => {
                            navigator.clipboard.writeText("https://oauth.binary.com/oauth2/authorize?app_id=[..insertapp_id..]");

                        }}>
                            <img class="copy-button-image" src={copySVG} width="16" height="16" alt="copy code icon" />
                            <text>Copy</text>
                        </div>
                    </div>
                    <p>
                        Our system will authenticate the client and send them to the redirect
                        URL you gave us during app registration. A valid token will be returned
                        in the <a href="/playground/#api_token"><code>token</code></a> parameter
                        of the URL.
                    </p>
                    <p>
                        To display the authentication form in another language, add the language
                        code to the OAuth URL as follows:
                    </p>
                    <div class="border rounded border-[#e5e5e5] bg-[#577a92] bg-opacity-5 text-[#333] text-bold flex flex-nowrap item-center mb-2">
                        <text class="w-full py-4 px-16">
                            https://oauth.binary.com/oauth2/authorize?app_id=[..insert
                            app_id..]&amp;l=ZH_CN
                        </text>
                        <div class="copy-button flex justify-items-center justify-end w-max h-full border-l px-6 py-4 font-normal border-[#e5e5e5] border-opacity-5" onclick={() => {
                            navigator.clipboard.writeText("https://oauth.binary.com/oauth2/authorize?app_id=[..insertapp_id..]&l=ZH_CN");

                        }}>
                            <img class="copy-button-image" src={copySVG} width="16" height="16" alt="copy code icon" />
                            <text>Copy</text>
                        </div>
                    </div>
                    <p class="ul-paragraph">
                        Complete the authentication by calling
                        <a href="/playground/#authorize"><code>authorize</code></a> using
                        clients’ API token.
                    </p>
                </ol>
            </div>
            <div class="text-block">
                <h2 class="mb-3 w-full text-2.25xl font-bold">Token scopes</h2>
                <h3 class="bold">Each token can have one or more of these scopes:</h3>
                <ul class="bullet">
                    <li>read - for calls that only read client’s data</li>
                    <li>trade - for calls that can create trades</li>
                    <li>
                        trading_information - for calls that can read information on client’s
                        trades
                    </li>
                    <li>
                        payments - for calls that can access the cashier (for deposits and
                        withdrawals)
                    </li>
                    <li>admin - for calls that can change client’s settings</li>
                </ul>
                <p>
                    Explore our <a class="a-link" href="/playground/">API playground</a> to learn about the
                    required scope for all our API calls.
                </p>
            </div>
            <div class="text-block">
                <h2 class="mb-3 w-full text-2.25xl font-bold">Opening Deriv accounts</h2>
                <p>
                    To open accounts via our API, you’ll first need to verify the client's
                    email address using
                    <a class="a-link" href="/playground/#verify_email"><code>verify_email</code></a>.
                </p>
                <p>
                    To open a virtual account, use
                    <a class="a-link" href="/playground/#new_account_virtual"><code>new_account_virtual</code></a>
                    and then
                    <a class="a-link" href="/playground/#topup_virtual"><code>topup_virtual</code></a> to
                    top-up the new account with virtual money.
                </p>
                <p>
                    To open a real account, use
                    <a class="a-link" href="/playground/#residence_list"><code>residence_list</code></a> and
                    <a class="a-link" href="/playground/#states_list"><code>states_list</code></a> to get the
                    information needed for the account opening form. Once you have all the
                    necessary information, use
                    <a class="a-link" href="/playground/#new_account_real"><code>new_account_real</code></a>.
                </p>
                <p>
                    If you are a registered affiliate, remember to include the
                    <strong>affiliate_token</strong> parameter. You’ll earn commission for
                    every new account.
                </p>
                <p>
                    Based on the client’s country of residence, use
                    <a class="a-link" href="/playground/#landing_company"><code>landing_company</code></a> to
                    determine which landing company the account will be opened with. Use
                    <a class="a-link" href="/playground/#landing_company_details"><code>landing_company_details</code></a>
                    to get information about the landing company.
                </p>
            </div>
            <div class="text-block">
                <h2 class="mb-3 w-full text-2.25xl font-bold">Accounting functionalites</h2>
                <p>
                    You may get a client's
                    <a class="a-link" href="/playground/#portfolio"><code>portfolio</code></a>, <a href="/playground/#statement"><code>statement</code></a>, <a href="/playground/#profit_table"><code>profit_table</code></a>, and their account
                    <a class="a-link" href="/playground/#balance"><code>balance</code></a>. You may also sell an expired contract with
                    <a class="a-link" href="/playground/#sell_expired"><code>sell_expired</code></a>, or generate a real time stream of
                    <a class="a-link" href="/playground/#transaction"><code>transactions</code></a>
                </p>
            </div>
            <div class="text-block">
                <h2 class="mb-3 w-full text-2.25xl font-bold">Option prices</h2>
                <ul class="bullet">
                    <li>
                        To price an option, call
                        <a class="a-link" href="/playground/#proposal"><code>proposal</code></a>.
                    </li>
                    <li>
                        To price options that are open in a client's portfolio, use
                        <a class="a-link" href="/playground/#proposal_open_contract"><code>proposal_open_contract</code></a>.
                    </li>
                </ul>
            </div>
            <div class="text-block">
                <h2 class="mb-3 w-full text-2.25xl font-bold">Payment agents</h2>
                <ul class="bullet">
                    <li>
                        Clients may withdraw via a payment agent using
                        <a class="a-link" href="/playground/#paymentagent_withdraw"><code>paymentagent_withdraw</code></a>.
                    </li>
                    <li>
                        Payment agents may credit clients’ accounts using
                        <a class="a-link" href="/playground/#paymentagent_transfer"><code>paymentagent_transfer</code></a>.
                    </li>
                </ul>
            </div>
            <div class="text-block">
                <h2 class="mb-3 w-full text-2.25xl font-bold">Utility calls</h2>
                <ul class="bullet">
                    <li>
                        To keep the connection alive, use
                        <a class="a-link" href="/playground/#ping"><code>ping</code></a>.
                    </li>
                    <li>
                        Get the server time with
                        <a class="a-link" href="/playground/#time"><code>time</code></a>.
                    </li>
                    <li>
                        Get the status of the website with
                        <a class="a-link" href="/playground/#website_status"><code>website_status</code></a>.
                    </li>
                </ul>
            </div>
            <div class="text-block">
                <h2 class="mb-3 w-full text-2.25xl font-bold">Streams</h2>
                <p>
                    Some functions generate streams of data (e.g.
                    <a class="a-link" href="/playground/#ticks"><code>ticks</code></a>) while others don’t. Use
                    <a class="a-link" href="/playground/#forget"><code>forget</code></a> to cancel an
                    outstanding stream.
                </p>
            </div>
        </div >
    )

}