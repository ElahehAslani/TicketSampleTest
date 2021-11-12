import React from 'react';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TicketPage from './pages/TicketPage';
import AllTicketsPage from './pages/AllTicketsPage';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/create-ticket" component={TicketPage} />
          <Route exact path="/all-tickets" component={AllTicketsPage} />
        </Switch>
      </Router>
    </>    
  );
}

export default App;
