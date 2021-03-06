import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalState } from "../utlis/stateContext";
import { Button } from "@mui/material";
const MessageForm = () => {
  const { store, dispatch } = useGlobalState();
  const { loggedInUser, messageList } = store;
  const navigate = useNavigate();

  const initialFormData = {
    text: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const cleanMessageHandler = () => {
    setFormData(initialFormData);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formData.text === "") {
      console.log("empty ");
    } else {
      console.log(formData);
      addMessage(formData.text);
      cleanMessageHandler();
      navigate("/messages");
    }
  };

  const formDataHandler = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const addMessage = (text) => {
    const newMsg = {
      id: nextId,
      text: text,
      user: loggedInUser,
    };

    // setMessageList((messageList) => [newMsg, ...messageList]);
    dispatch({
      type: "addMessage",
      data: newMsg,
    });
  };

  const nextId =
    messageList.reduce(
      (init, currMsg) => (init > currMsg.id ? init : currMsg.id),
      0
    ) + 1;

  return (
    <>
      <form onSubmit={submitHandler}>
        <div>
          <textarea
            type="text"
            name="text"
            id="text"
            value={formData.text}
            onChange={formDataHandler}
            placeholder={`any msg? ${loggedInUser}`}
          />
        </div>

        {/* <input type="submit" value="Post" />
        <button onClick={cleanMessageHandler}>Clean Message</button> */}
        <Button type="submit" value="Post" variant="contained">
          Post Message
        </Button>
        <Button onClick={cleanMessageHandler} variant="contained">
          Clean Message
        </Button>
      </form>
    </>
  );
};

export default MessageForm;
