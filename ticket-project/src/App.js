import React from 'react';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import { QueryParamProvider } from 'use-query-params';
import HomePage from './pages/HomePage';
import TicketPage from './pages/TicketPage';
import AllTicketsPage from './pages/AllTicketsPage';

const App = () => {
  return (
    <Router>
      <QueryParamProvider ReactRouterRoute={Route}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/create-ticket" component={TicketPage} />
          <Route exact path="/all-tickets" component={AllTicketsPage} />
        </Switch>
      </QueryParamProvider>
    </Router>
  );
}

export default App;
