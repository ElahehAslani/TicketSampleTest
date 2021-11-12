import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function Ticket() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [submitTicketButton, setSubmitTicketButton] = useState(true);

    const onSubmit = data => {
      console.log("data:",data);
      if(data !== null ){
        setSubmitTicketButton(false);
        console.log("Submit :", submitTicketButton);
      }
    };
  
  return (
    <div className="ticket">
      <form className="ticket-form" onSubmit={handleSubmit(onSubmit)}>
       <label htmlFor="TicketTitle" className="ticket-span">Ticket Title:</label>
       <input 
        className="ticket-input" 
        placeholder="enter your title..." 
        {...register("ticketTitle", { required: true })} 
       />
       <div className="ticket-error">{errors.ticketTitle?.type === 'required' && "Please Enter Title for your Ticket."}</div>
      
       <label htmlFor="TicketMessage" className="ticket-span">Ticket Message:</label>
       <textarea 
        className="ticket-message" placeholder="enter your message..." 
        {...register("ticketMessage", { required: true })} 
       />
       <div className="ticket-error">{errors.ticketMessage && "Please Write your Message."}</div>
       {submitTicketButton ? 
        (<input className="submit" type="submit" value="Send Ticket"/>)
        : 
        (
          <span className="after-submit" >Thank You!</span>
        )
       }
      </form>
    </div>

  );
}

export default Ticket;
