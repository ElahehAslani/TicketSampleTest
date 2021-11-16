import React from 'react';
import Header from '../components/Header';
import Ticket from '../components/Ticket';
import './App.css';

function TicketPage() {
  return (
    <div className="ticket-page container">
      <Header/>      
      <h3>Create Your Ticket! </h3>
      <Ticket />
    </div>

  );
}

export default TicketPage;
