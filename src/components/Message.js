import React from "react";

const Message = ({ msg }) => {
  return (
    <>
      <p>{msg.text}</p>
      <p>{msg.user}</p>
    </>
  );
};

export default Message;
