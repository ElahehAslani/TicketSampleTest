import React  from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { StringParam,  useQueryParam } from 'use-query-params';
import ReplyForm from './ReplyForm';
import ReplyDetail from './ReplyDetail';
import logo from '../assets/logo.jpeg';
import close from '../assets/close.svg';

function TicketReply() {
  const ReplyLists = JSON.parse(localStorage.getItem('Replies'));
  const [selectedTicket] = useQueryParam('selectedTicket-f', StringParam);
  const history = useHistory();
  const match = useRouteMatch();

  return (
    <div className="reply-page">
      <img className="image" src={logo} alt="logo" />
      <h3>Replies For Ticket : {selectedTicket}</h3>
      <div className="reply">
        <button className="close-button" onClick={() => (history.push(`${match.path}`))}>
          <img className="close-icon" src={close} alt="close" />
        </button>
        <div className="reply-part">
        <ReplyForm />
          {ReplyLists !== null ?
            <div className="replies">
              {ReplyLists.map((reply, index) => {
                return(
                  <ReplyDetail 
                    key={index}
                    id={reply.id} 
                    replyText={reply.replyText}
                  />
                );
              })}
            </div>
          : 
          <div className="first-reply">
            <h3>Please Write First Reply!</h3>
          </div>}
          </div>
        </div>
      </div>
  );
}

export default TicketReply;