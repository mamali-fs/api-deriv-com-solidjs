import type { Component } from "solid-js";
import { PlaygroundApiDocs } from "./components/playgrounApiDocs";
import { createEffect, createSignal, onCleanup } from "solid-js";
import Request from "./Request";
import WS from "../../Helpers/WS";
import { Conversation } from "./components/Conversation";
import { ApiSelector } from "./components/ApiSelector";
import { Authenticate } from "./components/Authenticate";

export const Playground: Component = () => {
  const [reqs, setReqs] = createSignal([]);

  const addToReqs = (value: string) => {
    return setReqs([...reqs(), value]);
  };

  const resetReqs = () => {
    return setReqs([]);
  };

  createEffect(() => {
    WS.init((item: string) => {
      addToReqs(item);
    });
  });

  onCleanup(WS.removeListener);
  return (
    <div data-testid="playground-page" class="main-content flex flex-col">
      <div
        id="content"
        class="playground-content bg-dark-100 text-white min-h-[95vh] px-6 py-[105px]"
      >
        <h1 class="bg-dark-100 text-white mb-10 text-center text-5xl">
          API Playground
        </h1>
        <div class="page-wrapper flexbg-dark-100">
          <div class="playground flex justify-center flex-row flex-wrap w-full">
            <div class="playground-page-wrapper flex w-[95%] mobile:w-full mobile:flex-col bg-dark-100 text-white">
              <div class="playground-api-json flex flex-col w-1/2 mobile:w-full  mr-6 bg-dark-100 text-white">
                <ApiSelector />
                <Authenticate />
                <Request resetReqs={resetReqs} />
                <Conversation data={reqs} />
              </div>
              <div
                id="playground"
                class="playground-api-docs flex flex-col w-1/2 mobile:w-full bg-dark-100 text-white"
              >
                <PlaygroundApiDocs />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
