import React from "react";
import Message from "./Message";

const Messages = ({ messageList }) => {
  return (
    <>
      {messageList.map((msg) => (
        <Message key={msg.id} msg={msg} />
      ))}
    </>
  );
};

export default Messages;
