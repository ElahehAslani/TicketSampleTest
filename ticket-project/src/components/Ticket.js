import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

function Ticket() { const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful, isDirty } } 
    = useForm({
        defaultValues: {
          ticketTitle: "",
          ticketMessage: ""
        }
      }
    );
    const onSubmit = data => {
      localStorage.setItem('Title', JSON.stringify(data.ticketTitle));
      localStorage.setItem('Message', JSON.stringify(data.ticketMessage));
    };

    useEffect(() => {
      setTimeout(() => {
        if (isSubmitSuccessful) {
          reset({ ticketMessage: '', ticketTitle: '' });
        }
     }, 3000)
     
    }, [isSubmitSuccessful, reset]);
  
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
          {isSubmitSuccessful ? "Thank Yot!" : "Send Ticket"}
        </button>
        {isSubmitSuccessful && <span>Your Ticket Successfully Send.</span>}
      </form>
    </div>

  );
}

export default Ticket;
