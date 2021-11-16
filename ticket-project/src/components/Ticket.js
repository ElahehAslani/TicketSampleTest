/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useCallback } from 'react';
import { useForm } from 'react-hook-form';

const Ticket = () => { const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful, isDirty } } 
    = useForm(
      {
        defaultValues: {
          ticketTitle: "",
          ticketMessage: ""
        }
      }
    );

    const newTicket = {
      'id': new Date().getMilliseconds(),
      'ticketTitle': localStorage.getItem('Title'),
      'ticketMessage': localStorage.getItem('Message'),
      'createTime': new Date().toLocaleTimeString(),
      'ticketStatus': 'Pending',
    }

    const [tickets, setTickets] = useState([]);

    const addTicket = useCallback((ticket) => {
      const newTicketsList = [...tickets];
      newTicketsList.push(ticket);
      setTickets(newTicketsList);
      localStorage.setItem('List', JSON.stringify(newTicketsList));
    }, [tickets]);

    const onSubmit = data => {
      localStorage.setItem('Title', JSON.stringify(data.ticketTitle));
      localStorage.setItem('Message', JSON.stringify(data.ticketMessage));
    };

    useEffect(() => {
      setTimeout(() => {
        if (isSubmitSuccessful) {
          addTicket(newTicket);
          reset({ ticketMessage: '', ticketTitle: '' });
        }
     }, 3000)

    }, [isSubmitSuccessful,newTicket ,addTicket, reset]);

  return (
    <div className="ticket">
      <form className="ticket-form" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="TicketTitle" className="ticket-span">Ticket Title:</label>
          <input 
          className="ticket-input" 
          placeholder="enter your title..." 
          {...register("ticketTitle", { required: true })} 
        />
        <div className="ticket-error">
          {errors.ticketTitle?.type === 'required' && "Please Enter Title for your Ticket."}
        </div>
      
        <label htmlFor="TicketMessage" className="ticket-span">Ticket Message:</label>
        <textarea 
          className="ticket-message" placeholder="enter your message..." 
          {...register("ticketMessage", { required: true })} 
        />
        <div className="ticket-error">
          {errors.ticketMessage && "Please Write your Message."}
        </div>
        <button disabled={ !isDirty } className="submit" type="submit" value="Send Ticket">
          {isSubmitSuccessful ? "Thank You!" : "Send Ticket"}
        </button>
        {isSubmitSuccessful && <span className="form-span">Your Ticket Successfully Send.</span>}
      </form>
    </div>
  );
}

export default Ticket;
