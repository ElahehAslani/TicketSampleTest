import React, { useEffect } from 'react';
import Header from './Header';
import { StringParam, useQueryParam } from 'use-query-params';
import TicketDetail from './TicketDetail';

const TicketLists = () => {
  const TicketLists = JSON.parse(localStorage.getItem('List'));
  const [selectedTicket, setSelectedTicket] = useQueryParam('selectedTicket-f', StringParam);

  useEffect(() => {
    if(selectedTicket) {
      console.log("ticket:", selectedTicket)
    }
  }, [selectedTicket]);
  return (
    <div className="list-page container">
      <Header />
      <h3>You Can See All Tickets Here!</h3>
      {TicketLists !== null &&   <div  className="lists">
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
      </div>}
    </div>
  );
}

export default TicketLists;