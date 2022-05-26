import React from "react";
import { Link } from "react-router-dom";

const Message = ({ msg }) => {
  return (
    <>
      <p>{msg.text}</p>
      <p>{msg.user}</p>
      <Link to={`${msg.id}`}> View Details</Link>
    </>
  );
};

export default Message;
