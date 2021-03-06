import type { Component } from 'solid-js';

export const LookingForAPI: Component = () => {
  return (
    <div class="py-6 flex rounded-sm items-center justify-center flex-col bg-superlight-gray mb-10">
      <h3>Looking for your API token?</h3>
      <a target="tokeninput" href="https://app.deriv.com/account/api-token">
        <div class="btn-secondary">Get your API token</div>
      </a>
    </div>
  );
};
