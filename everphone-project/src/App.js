import React from 'react';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import { QueryParamProvider } from 'use-query-params';
import HomePage from './pages/HomePage';
import AllDevicesPage from './pages/AllDevicesPage';

const App = () => {
  return (
    <Router>
      <QueryParamProvider ReactRouterRoute={Route}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/dashboard" component={AllDevicesPage} />
        </Switch>
      </QueryParamProvider>
    </Router>
  );
}

export default App;
