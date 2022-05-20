import React, { useState } from "react";

const LoginForm = ({ activateUser }) => {
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
    // console.log(formData);
    activateUser(formData.username);
    setFormData(initialFormData); //after form submit, reset input to initial, in this case, reset back to blank
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
          <label htmlFor="email">Username:</label>
          <input
            type="text"
            name="username"
            id="username"
            value={formData.username}
            onChange={formDataHandler}
          />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={formDataHandler}
          />
        </div>

        <input type="submit" value="login" />
      </form>
    </>
  );
};

export default LoginForm;
