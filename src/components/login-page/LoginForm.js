import { Button, InputLabel, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalState } from "../utlis/stateContext";

const LoginForm = () => {
  const { dispatch } = useGlobalState();

  const navigate = useNavigate();
  //username state
  // const [user, setUser] = useState("");
  //password state
  // const [password, setPassword] = useState("");

  //Dry code,each property needs to match input name or id!
  const initialFormData = {
    username: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialFormData);

  //for form submit
  const submitHandler = (event) => {
    event.preventDefault();
    // console.log("You clicked sumbit for the form");
    console.log(formData);
    dispatch({
      type: "setLoggedInUser",
      data: formData.username,
    });
    setFormData(initialFormData); //after form submit, reset input to initial, in this case, reset back to blank
    navigate("/messages");
  };

  //for user input, each input name or id is very important
  const formDataHandler = (event) => {
    // console.log(event.target.value);
    //  setFormData()
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <div>
          <InputLabel htmlFor="email">Username:</InputLabel>
          <TextField
            type="text"
            name="username"
            id="username"
            value={formData.username}
            onChange={formDataHandler}
          />
        </div>

        <div>
          <InputLabel htmlFor="password">Password:</InputLabel>
          <TextField
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={formDataHandler}
          />
        </div>

        {/* <input type="submit" value="login" /> */}
        <Button type="submit" variant="contained">
          Login
        </Button>
      </form>
    </>
  );
};

export default LoginForm;
