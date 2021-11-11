import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../logo.jpeg';
import './App.css';

function Home() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          By following the links below, you can create tickets or view all your tickets.
        </p>
        <div className="Links">
          <Link
            className="App-link"
            to="/create-ticket"
            rel="noopener noreferrer"
          >
            Create Ticket
          </Link>
          <Link
            className="App-link"
            to="/all-tickets"
            rel="noopener noreferrer"
          >
            See All Tickets
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
