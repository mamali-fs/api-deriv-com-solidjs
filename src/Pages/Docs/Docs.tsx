import type { Component } from "solid-js";
import { Router, useRoutes } from "solid-app-router";
import SideBar from "../../Components/SideBar";
import { docs_routes } from "../../Store/routes";

export const Docs: Component = () => {
  const Routes = useRoutes(docs_routes);
  return (
    <div class="flex pt-20 pb-32 h-screen mobile:hidden">
      <Router>
        <SideBar />
        <Routes />
      </Router>
    </div>
  );
};
