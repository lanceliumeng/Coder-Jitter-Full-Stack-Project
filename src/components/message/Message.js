import { Card, CardContent, Typography } from "@mui/material";
import { style } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

const Message = ({ msg }) => {
  return (
    <Link to={`${msg.id}`} style={{ textDecoration: "none" }}>
      <Card>
        <CardContent>
          <Typography variant="h5">{msg.text}</Typography>
          <Typography variant="p">{msg.user}</Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default Message;
