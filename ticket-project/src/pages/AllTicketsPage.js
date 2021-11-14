import React from 'react';
import { StringParam,  useQueryParam } from 'use-query-params';
import TicketDetail from '../components/TicketDetail';
import logo from './../logo.jpeg';

function AllTicketsPage() {
  const TicketLists = JSON.parse(localStorage.getItem('List'));
  const [selectedTicket, setSelectedTicket] = useQueryParam('selectedTicket-f', StringParam);

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
      {selectedTicket && alert("Yes")}
    </div>
  );
}

export default AllTicketsPage;
