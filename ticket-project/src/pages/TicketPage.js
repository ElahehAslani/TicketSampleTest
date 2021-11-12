import React from 'react';
import Ticket from '../components/Ticket';
import logo from '../logo.svg';
import './App.css';

function TicketPage() {
  return (
    <div className="ticket-page">
      <img className="image" src={logo} alt="logo" />
      <h2>Create Your Ticket! </h2>
      <Ticket />
    </div>

  );
}

export default TicketPage;
