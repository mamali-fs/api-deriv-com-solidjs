import type { Component } from "solid-js";
import { Router, useRoutes } from "solid-app-router";
import SideBar from "../../Components/SideBar";
import QuickStart from "../QuickStart/index";
import { docs_routes } from "../../Store/routes";

export const Docs: Component = () => {
  const Routes = useRoutes(docs_routes);
  return (
    <div class="flex justify-center pt-20 pb-32 h-screen mobile:hidden">
      <div class="w-4/5 mt-5">
        <Router>
        <SideBar />
        <Routes />
      </Router>
      </div>
      
    </div>
  );
};
