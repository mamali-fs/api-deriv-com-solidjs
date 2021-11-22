import { Component, createMemo, Match, Switch } from "solid-js";
import { Outlet, Router, useLocation } from "solid-app-router";
import SideBar from "../../Components/SideBar";
import QuickStart from "./QuickStart";

export const Docs: Component = () => {
  const location = useLocation();
  const is_root = createMemo(() => location.pathname === '/docs');
  
  return (
    <div class="grid grid-cols-documentation gap-2 h-screen mobile:hidden pt-20 mx-auto max-w-screen-xl">
      <Router>
        <SideBar />
        <Switch fallback={<div>...</div>}>
          <Match when={is_root}>
            <QuickStart />
          </Match>
          <Match when={!is_root}>
            <Outlet />
          </Match>
        </Switch>
      </Router>
    </div>
  );
};
