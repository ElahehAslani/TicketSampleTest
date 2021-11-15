import React from 'react';
import Ticket from '../components/Ticket';
import logo from '../assets/logo.jpeg';
import './App.css';

function TicketPage() {
  return (
    <div className="ticket-page">
      <img className="image" src={logo} alt="logo" />
      <h3>Create Your Ticket! </h3>
      <Ticket />
    </div>

  );
}

export default TicketPage;
