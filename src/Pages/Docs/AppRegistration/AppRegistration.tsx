import { JSX } from 'solid-js';
import { LookingForAPI } from '../../../Components/Organisms/LookingForAPI';
export const AppRegistration = (): JSX.Element => {
  return (
    <div class="page-content">
      <h1>App registration</h1>
      <h4>Authenticate your API token before using it in your app.</h4>
      <LookingForAPI />
      <fieldset id="api-token-fieldset">
        <div class="api-token-wrapper flex items-center justify-center relative w-full">
          <p class="helper-label">API Token</p>
          <input
            type="text"
            id="api-token"
            placeholder="API Token"
            class="api-token block w-full border-solid border border-superlight-gray h-10 text-sm py-0 px-3"
          />
          <button id="send-auth-manually-btn" class="btn-authenticate bold">
            Authenticate
          </button>
        </div>
      </fieldset>
      <div class="horizontal-separator-grey"></div>
      <form
        id="frmNewApplication"
        class="w-full flex flex-col justify-start items-center"
      >
        <div class="form-content w-[80%]">
          <fieldset>
            <h3>Register your app</h3>
            <div class="input-wrapper first">
              <p class="helper-label">Name (Required)</p>
              <input
                id="application-name"
                type="text"
                maxlength="48"
                placeholder="Name (Required)"
                style='background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABHklEQVQ4EaVTO26DQBD1ohQWaS2lg9JybZ+AK7hNwx2oIoVf4UPQ0Lj1FdKktevIpel8AKNUkDcWMxpgSaIEaTVv3sx7uztiTdu2s/98DywOw3Dued4Who/M2aIx5lZV1aEsy0+qiwHELyi+Ytl0PQ69SxAxkWIA4RMRTdNsKE59juMcuZd6xIAFeZ6fGCdJ8kY4y7KAuTRNGd7jyEBXsdOPE3a0QGPsniOnnYMO67LgSQN9T41F2QGrQRRFCwyzoIF2qyBuKKbcOgPXdVeY9rMWgNsjf9ccYesJhk3f5dYT1HX9gR0LLQR30TnjkUEcx2uIuS4RnI+aj6sJR0AM8AaumPaM/rRehyWhXqbFAA9kh3/8/NvHxAYGAsZ/il8IalkCLBfNVAAAAABJRU5ErkJggg=="); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%; cursor: auto;'
              />
            </div>
            <div class="input-wrapper">
              <p class="helper-label">Redirect URL (Required)</p>
              <input
                id="application-redirect_uri"
                type="text"
                maxlength="255"
                placeholder="Redirect URL (Required)"
              />
            </div>
            <div class="input-wrapper">
              <p class="helper-label">Verification URL</p>
              <input
                id="application-verification_uri"
                type="text"
                maxlength="255"
                placeholder="Verification URL"
              />
            </div>
            <div class="input-wrapper">
              <p class="helper-label">Homepage URL</p>
              <input
                id="application-homepage"
                type="text"
                maxlength="255"
                placeholder="Homepage URL"
              />
            </div>
            <div class="input-wrapper">
              <p class="helper-label">Github URL</p>
              <input
                id="application-github"
                type="text"
                maxlength="255"
                placeholder="Github URL"
              />
            </div>
            <div class="input-wrapper">
              <p class="helper-label">Appstore URL</p>
              <input
                id="application-appstore"
                type="text"
                maxlength="255"
                placeholder="Appstore URL"
              />
            </div>
            <div class="input-wrapper">
              <p class="helper-label">Google Play URL</p>
              <input
                id="application-googleplay"
                type="text"
                maxlength="255"
                placeholder="Google Play URL"
              />
            </div>
            <div class="input-wrapper">
              <p class="helper-label">Markup Percentage</p>
              <input
                id="application-app_markup_percentage"
                type="text"
                maxlength="5"
                placeholder="Markup percentage"
                class="last"
              />
              <p class="helper-text">minimum 0.00 and maximum 5.00</p>
            </div>
          </fieldset>
          <div class="scopes">
            <h6 class="font-bold">Scopes:</h6>
            <div class="scopes-field">
              <input id="read-scope" type="checkbox" value="read" />
              <label for="read-scope">Read: View account activity</label>
            </div>
            <div class="scopes-field">
              <input id="trade-scope" type="checkbox" value="trade" />
              <label for="trade-scope">Trade: Buy and sell contracts</label>
            </div>
            <div class="scopes-field">
              <input
                id="trading_information-scope"
                type="checkbox"
                value="trading_information"
              />
              <label for="trading_information-scope">
                Trading Information: View trading and balance information
              </label>
            </div>
            <div class="scopes-field">
              <input id="payments-scope" type="checkbox" value="payments" />
              <label for="payments-scope">
                Payments: Cashier (Deposit, Withdraw)
              </label>
            </div>
            <div class="scopes-field mb-0">
              <input id="admin-scope" type="checkbox" value="admin" />
              <label for="admin-scope">
                Admin: API token management, application management
              </label>
            </div>
          </div>
          <button
            class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mx-auto"
            id="btnRegister"
          >
            Register
          </button>
        </div>
      </form>
      <div class="horizontal-separator-grey"></div>
      <div class="request-container">
        <div class="table-wrapper">
          <table
            class="flex-table"
            id="applications-table"
            style="display: none"
          >
            <thead>
              <tr class="flex-tr">
                <th class="flex-tr-child name">Name</th>
                <th class="flex-tr-child app_id">Application ID</th>
                <th class="flex-tr-child scopes">Scopes</th>
                <th class="flex-tr-child redirect_url">Redirect URL</th>
                <th colspan="2" class="flex-tr-child actions">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
        <fieldset class="mb-0">
          <div class="form-content">
            <h3 class="app-registration-subheader">Request JSON</h3>

            <textarea
              id="playground-request"
              placeholder="Request JSON"
            ></textarea>
            <div class="json-btn-wrapper">
              <button class="gray-btn-submit mr-8p" id="playground-send-btn">
                Send Request
              </button>
              <a id="playground-reset-btn" href="javascript:;">
                <button class="btn-reset">Reset Connection</button>
              </a>
            </div>
          </div>
        </fieldset>
        <div id="playground-console"></div>
      </div>
    </div>
  );
};
