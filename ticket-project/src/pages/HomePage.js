import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpeg';
import './App.css';

function HomePage() {
  return (
    <div className="app container">
      <div className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <span className="main-span">
          By following the links below, you can create tickets or view all your tickets.
        </span>
        <div className="links">
          <Link
            className="app-link"
            to="/create-ticket"
          >
            Create Ticket
          </Link>
          <Link
            className="app-link"
            to="/all-tickets"
          >
            See All Tickets
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
