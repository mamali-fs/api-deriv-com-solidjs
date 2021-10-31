import type { Component } from 'solid-js';
import { Router, useRoutes } from 'solid-app-router';

import NavigationBar from './Components/NavigationBar';
import { routes } from './Store/routes';

const App: Component = () => {
  const Routes = useRoutes(routes);

  return (
    <>
      <Router>
        <NavigationBar />
        <div>General items</div>
        <Routes />
        <footer>Footer goes here</footer>
      </Router>
    </>
  );
};

export default App;
