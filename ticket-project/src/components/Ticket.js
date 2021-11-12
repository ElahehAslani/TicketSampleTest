import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function Ticket() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [submitTicket, setSubmitTicket] = useState('');
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
       <span className="ticket-span">Ticket Title:</span>
       <input 
        onChange={(event) => setSubmitTicket(event.target.value)} 
        className="ticket-input" 
        placeholder="enter your title..." 
        {...register("ticketTitle", { required: true })} 
       />
       <div className="ticket-error">{errors.ticketTitle?.type === 'required' && "Please Enter Title for your Ticket."}</div>
      
       <span className="ticket-span">Ticket Message:</span>
       <textarea 
        onChange={(event) => setSubmitTicket(event.target.value)}  
        className="ticket-message" placeholder="enter your message..." 
        {...register("ticketMessage", { required: true })} 
       />
       <div className="ticket-error">{errors.ticketMessage && "Please Write your Message."}</div>
      {submitTicketButton ? 
        (<input className="submit" type="submit" value="Send Ticket"/>)
        : 
        (
          <span className="after-submit" >Thank You!</span>
        // <input className="after-submit" type="submit" value="Thank You!" />
        )
      }
      </form>
    </div>

  );
}

export default Ticket;
