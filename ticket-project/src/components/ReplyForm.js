/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useCallback } from 'react';
import { StringParam, useQueryParam, BooleanParam, withDefault } from 'use-query-params';
import { useForm } from 'react-hook-form';

const ReplyForm = () => {const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful, isDirty } } 
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
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      addReply(newReply)
      reset({ ticketReply: '' });
    }
  }, [isSubmitSuccessful,selectedTicket,newReply ,addReply, reset]);

  return (
    <div className="reply-section">
      <form className="reply-form" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="ReplyMessage" className="ticket-span">New Reply :</label>
        <textarea
          className="reply-message" placeholder="enter your reply..." 
          {...register("ticketReply", { required: true })} 
        />
        <div className="ticket-error">
          {errors.replyText && "Please Write your Reply."}
        </div>
        <button disabled={ !isDirty } className="submit-reply" type="submit" value="Send Reply">
          {isSubmitSuccessful ? "Thank You!" : "Send Reply"}
        </button>
      </form>
    </div>
  );
}

export default ReplyForm;