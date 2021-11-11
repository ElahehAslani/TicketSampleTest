import React from 'react';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Home from './pages/Home';
import Ticket from './pages/Ticket';
import AllTicket from './pages/AllTickets';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/create-ticket" component={Ticket} />
          <Route exact path="/all-tickets" component={AllTicket} />
        </Switch>
      </Router>
    </>    
  );
}

export default App;
