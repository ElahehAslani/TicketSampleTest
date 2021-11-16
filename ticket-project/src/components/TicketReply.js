/* eslint-disable array-callback-return */
import React  from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { StringParam,  useQueryParam } from 'use-query-params';
import Header from './Header';
import ReplyForm from './ReplyForm';
import ReplyDetail from './ReplyDetail';
import close from '../assets/close.svg';

const TicketReply = () => {
  const ReplyLists = JSON.parse(localStorage.getItem('Replies'));
  const [selectedTicket] = useQueryParam('selectedTicket-f', StringParam);
  const history = useHistory();
  const match = useRouteMatch();

  return (
    <div className="reply-page container">
      <Header />
      <h3>Replies For Ticket : {selectedTicket}</h3>
      <div className="reply">
        <button className="close-button" onClick={() => (history.push(`${match.path}`))}>
          <img className="close-icon" src={close} alt="close" />
        </button>
        <div className="reply-part">
          <ReplyForm />
          {ReplyLists !== null &&
            <div className="replies">
              {ReplyLists.map((reply, index) => {
                if(reply.id === selectedTicket) {
                  return(
                    <ReplyDetail 
                      key={index}
                      id={reply.id} 
                      replyText={reply.replyText}
                    />
                  );
                } 
              })}
            </div>
          }
        </div>
      </div>
    </div>
  );
}

export default TicketReply;