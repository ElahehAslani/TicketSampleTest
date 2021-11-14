import React from 'react';
import logo from './../logo.svg';

function TicketDetail(props) {
  return (
      <div className="ticket-detail" role="button" tabIndex={0}>
        <img className="cart-logo" src={logo} alt="logo" />
        <span>Ticket ID :{props.id} </span>
        <span>Ticket Title : {props.ticketTitle}</span>
        <span>Ticket Message : {props.ticketMessage}</span>
        <span>Ticket Status : {props.ticketStatus}</span>
        <span>Ticket Create Time : {props.createTime}</span>
      </div>
  );
}

export default TicketDetail;