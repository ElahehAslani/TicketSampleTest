import React from 'react';
import logo from './../logo.svg';
import './App.css';

function Home() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          By following the links below, you can create tickets or view all your tickets.
        </p>
        <div className="main">
          <a
            className="App-link"
            href="/create-ticket"
            rel="noopener noreferrer"
          >
            Create Ticket
          </a>
          <a
            className="App-link"
            href="/all-tickets"
            rel="noopener noreferrer"
          >
            See All Tickets
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
