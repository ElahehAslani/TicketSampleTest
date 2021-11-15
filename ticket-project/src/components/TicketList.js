import React, { useEffect } from 'react';
import { Link} from 'react-router-dom';
import { StringParam, useQueryParam } from 'use-query-params';
import TicketDetail from './TicketDetail';
import logo from '../assets/logo.jpeg';

function TicketLists() {
  const TicketLists = JSON.parse(localStorage.getItem('List'));
  const [selectedTicket, setSelectedTicket] = useQueryParam('selectedTicket-f', StringParam);

  useEffect(() => {
    if(selectedTicket) {
      console.log("ticket:", selectedTicket)
    }
  }, [selectedTicket]);
  return (
    <div className="list-page">
      <img className="image" src={logo} alt="logo" />
      <h3>You Can See All Tickets Here!</h3>
      <div  className="lists">
      {TicketLists.map((ticket, index) => {
        return(
          <TicketDetail 
            key={index}
            id={ticket.id} 
            ticketTitle={ticket.ticketTitle}
            ticketMessage={ticket.ticketMessage}
            createTime={ticket.createTime}
            ticketStatus={ticket.ticketStatus}
            onClick={() => setSelectedTicket(ticket.id)}
            />
        );
      })}
      </div>
      <div className="Links">
        <Link
          className="App-link"
          to="/"
          rel="noopener noreferrer"
        >
          Back to Home Page
        </Link>
      </div>
    </div>
  );
}

export default TicketLists;