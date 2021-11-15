import React from 'react';
import { StringParam,  useQueryParam } from 'use-query-params';
import logo from './../logo.jpeg';

function TicketReply() {
  const [selectedTicket] = useQueryParam('selectedTicket-f', StringParam);

  return (
    <div className="list-page">
      <img className="image" src={logo} alt="logo" />
      <h3>You Can See All Replies For Ticket Here!</h3>
      <span>{selectedTicket}</span>
    </div>
  );
}

export default TicketReply;