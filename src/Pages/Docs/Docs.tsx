import { Component, createEffect, createMemo, Match, Switch } from "solid-js";
import { Outlet, Router, useLocation, useMatch } from "solid-app-router";
import SideBar from "../../Components/SideBar";
import QuickStart from "./QuickStart";
import Faq from "./FAQ";

export const Docs: Component = () => {
  const location = useLocation();
  const pathname = createMemo(() => location.pathname);
  createEffect(() => {
    console.log(pathname())
  })

  return (
    <div class="grid grid-cols-documentation gap-2 h-screen mobile:hidden pt-20 mx-auto max-w-screen-xl">
        <SideBar />
          <Switch fallback={<div>...</div>}>
            <Match when={pathname() === '/docs/'}>
              <QuickStart />
            </Match>
            <Match when={pathname() === '/docs/faq'}>
              <Faq/>
            </Match>
          </Switch>
    </div>
  );
};
