import React from 'react';
import { StringParam,  useQueryParam } from 'use-query-params';
import ReplyForm from './ReplyForm';
import logo from '../assets/logo.jpeg';

function TicketReply() {
  const [selectedTicket] = useQueryParam('selectedTicket-f', StringParam);

  return (
    <div className="list-page">
      <img className="image" src={logo} alt="logo" />
      <h3>Replies For Ticket : {selectedTicket}</h3>
      <h3>Write Your Reply Here!</h3>
      <ReplyForm />
    </div>
  );
}

export default TicketReply;