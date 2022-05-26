import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const MessageForm = ({ loggedInUser, addMessage }) => {
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

        <input type="submit" value="Post" />
        <button onClick={cleanMessageHandler}>Clean Message</button>
      </form>
    </>
  );
};

export default MessageForm;
