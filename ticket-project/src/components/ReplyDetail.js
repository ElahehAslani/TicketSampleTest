import React from 'react';

function ReplyDetail(props) {
  return (
      <div className="reply-detail">
        <span>Ticket ID : {props.id} </span>
        <span>Reply Text : {props.replyText}</span>
      </div>
  );
}

export default ReplyDetail;