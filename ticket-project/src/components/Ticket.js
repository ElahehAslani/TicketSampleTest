import React from 'react';
import { useForm } from 'react-hook-form';

function Ticket() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
  return (
    <div className="ticket">
      <form className="ticket-form" onSubmit={handleSubmit(onSubmit)}>
       <span className="ticket-span">Ticket Title:</span>
       <input className="ticket-input" placeholder="enter your title..." {...register("ticketTitle", { required: true })} />
       <div className="ticket-error">{errors.ticketTitle?.type === 'required' && "Please Enter Title for your Ticket."}</div>
      
       <span className="ticket-span">Ticket Message:</span>
       <textarea className="ticket-message" placeholder="enter your message..." {...register("ticketMessage", { required: true })} />
       <div className="ticket-error">{errors.ticketMessage && "Please Write your Message."}</div>
    
       <input className="submit" type="submit" value="Send Ticket"/>
      </form>
    </div>

  );
}

export default Ticket;
