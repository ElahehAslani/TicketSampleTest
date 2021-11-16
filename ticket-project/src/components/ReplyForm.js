import React, { useState, useEffect, useCallback } from 'react';
import { StringParam, useQueryParam, BooleanParam, withDefault } from 'use-query-params';
import { useForm } from 'react-hook-form';

function ReplyForm() {const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful, isDirty } } 
= useForm({
    defaultValues: {
      replyText: ""
    }
  }
);

  const [selectedTicket] = useQueryParam('selectedTicket-f', StringParam); 
  const newReply = {
   'id': selectedTicket,
   'replyText': localStorage.getItem('Reply'),
  }

  const [replies, setReply] = useState([]);
  const [isNewReply, setNewReply] = useQueryParam('new-reply-f',withDefault(BooleanParam, false));

  const addReply = useCallback((reply) => {
    const newReplyList = [...replies];
    newReplyList.push(reply);
    setReply(newReplyList);
    setNewReply(!isNewReply);
    localStorage.setItem('Replies', JSON.stringify(newReplyList));
  }, [replies,isNewReply, setNewReply]);

  const onSubmit = data => {
    localStorage.setItem('Reply', JSON.stringify(data.ticketReply));
    addReply(newReply);
  };

  useEffect(() => {
    setTimeout(() => {
      if (isSubmitSuccessful) {
        reset({ ticketReply: '' });
      }
   }, 1000)

  }, [isSubmitSuccessful,selectedTicket ,addReply, reset]);

  return (
    <div className="ticket">
      <form className="ticket-form" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="TicketMessage" className="ticket-span">Ticket Reply:</label>
        <textarea 
          className="ticket-message" placeholder="enter your reply..." 
          {...register("ticketReply", { required: true })} 
        />
        <div className="ticket-error">
          {errors.replyText && "Please Write your Reply."}
        </div>
        <button disabled={ !isDirty } className="submit" type="submit" value="Send Reply">
          {isSubmitSuccessful ? "Thank Yot!" : "Send Reply"}
        </button>
        {isSubmitSuccessful && <span>Your Reply Successfully Send.</span>}
      </form>
    </div>
  );
}

export default ReplyForm;