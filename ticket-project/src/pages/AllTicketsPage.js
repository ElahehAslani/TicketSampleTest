import React from 'react';
import { StringParam,  useQueryParam } from 'use-query-params';
import TicketReply from '../components/TicketReply'; 
import TicketList from '../components/TicketList';


function AllTicketsPage() {
  const [selectedTicket] = useQueryParam('selectedTicket-f', StringParam);

  return (
    <div className="ticket-page container">
      {selectedTicket ? <TicketReply /> : <TicketList />}
    </div>
  );
}

export default AllTicketsPage;
