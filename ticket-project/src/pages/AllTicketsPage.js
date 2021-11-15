import React from 'react';
import { StringParam,  useQueryParam } from 'use-query-params';
import TicketReply from '../components/TicketReply'; 
import TicketList from '../components/TicketList';


function AllTicketsPage() {
  const [selectedTicket] = useQueryParam('selectedTicket-f', StringParam);

  return (
    <>
    {selectedTicket ? <TicketReply /> : <TicketList />}
    </>
  );
}

export default AllTicketsPage;
