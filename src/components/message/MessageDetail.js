import React from "react";
import { Link, useParams } from "react-router-dom";
import { useGlobalState } from "../utlis/stateContext";
import { Card, CardContent, Typography } from "@mui/material";

const MessageDetail = () => {
  const { store } = useGlobalState();
  const { messageList } = store;

  const params = useParams();
  console.log(params);

  const getMessage = (id) => {
    return messageList.find((m) => m.id === parseInt(id));
  };

  const message = getMessage(params.messageId);
  return (
    <>
      {message ? (
        <Card>
          <CardContent>
            <Typography variant="h5">{message.text}</Typography>
            <Typography variant="p">{message.user}</Typography>
          </CardContent>
        </Card>
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
