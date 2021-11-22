import type { Component } from "solid-js";
import { Router, useRoutes } from "solid-app-router";

import Footer from "./Components/Footer";
import NavigationBar from "./Components/NavigationBar";
import { routes } from "./Store/routes";

const App: Component = () => {
  const Routes = useRoutes(routes);

  return (
    <>
      <Router>
        <NavigationBar />
        <Routes />
        <Footer />
      </Router>
    </>
  );
};

export default App;
