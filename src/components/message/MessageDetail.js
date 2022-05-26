import React from "react";
import { Link, useParams } from "react-router-dom";

const MessageDetail = ({ messageList }) => {
  const params = useParams();
  console.log(params);

  const getMessage = (id) => {
    return messageList.find((m) => m.id === parseInt(id));
  };

  const message = getMessage(params.messageId);
  return (
    <>
      {message ? (
        <>
          <p>{message.text}</p>
          <p>{message.user}</p>
        </>
      ) : (
        <>
          <p>Message not Found</p>
          <Link to="/messages">Go back to home page </Link>
        </>
      )}
    </>
  );
};

export default MessageDetail;
