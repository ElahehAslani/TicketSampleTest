import React from 'react';

const ReplyDetail =(props) => {
  return (
      <div className="reply-detail">
        <span>Ticket ID : {props.id} </span>
        <span>Reply Text : {props.replyText}</span>
      </div>
  );
}

export default ReplyDetail;