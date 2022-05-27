import React from "react";
import { useGlobalState } from "../utlis/stateContext";
import Message from "./Message";

const Messages = () => {
  const { store } = useGlobalState();
  const { messageList } = store;
  return (
    <>
      {messageList.map((msg) => (
        <Message key={msg.id} msg={msg} />
      ))}
    </>
  );
};

export default Messages;
