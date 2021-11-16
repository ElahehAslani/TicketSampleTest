import React, { useEffect } from 'react';
import { StringParam,  useQueryParam } from 'use-query-params';
import ReplyForm from './ReplyForm';
import ReplyDetail from './ReplyDetail';
import logo from '../assets/logo.jpeg';

function TicketReply() {
  const ReplyLists = JSON.parse(localStorage.getItem('Replies'));
  const [selectedTicket] = useQueryParam('selectedTicket-f', StringParam);

  useEffect(() => {
    
  });

  return (
    <div className="list-page">
      <img className="image" src={logo} alt="logo" />
      <h3>Replies For Ticket : {selectedTicket}</h3>
            
      <h3>Write Your Reply Here!</h3>
      <ReplyForm />
      {ReplyLists !== null && 
        <div  className="lists">
          {ReplyLists.map((reply, index) => {
            return(
              <ReplyDetail 
                key={index}
                id={reply.id} 
                replyText={reply.replyText}
              />
            );
          })}
        </div>}
    </div>
  );
}

export default TicketReply;