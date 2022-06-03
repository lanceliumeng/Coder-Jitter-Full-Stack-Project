import { AppBar, Toolbar } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGlobalState } from "../utlis/stateContext";

const Navigation = () => {
  const { store, dispatch } = useGlobalState();
  const { loggedInUser } = store;

  const navigate = useNavigate();

  const logOut = (event) => {
    event.preventDefault();
    dispatch({
      type: "setLoggedInUser",
      data: "",
    });
    navigate("/messages"); //for logout rederict to home page
  };

  // const activateUser = (username) => {
  //   // setLoggedInUser(username);
  //   dispatch({
  //     type: "setLoggedInUser",
  //     data: username,
  //   });
  // };

  return (
    <AppBar position="sticky">
      <Typography variant="h3"> Jitter </Typography>
      <Toolbar>
        <Tabs>
          <Tab label="Home" component="link" to="/messages" />
          <Tab label="About" component="link" to="/about" />
          {loggedInUser ? (
            <>
              <Link to="/messages/new">New message</Link>
              <Link to="/messages" onClick={logOut}>
                Log Out
              </Link>
              {loggedInUser}
            </>
          ) : (
            <>
              <Link to="/login">Log In</Link>
              <Link to="/login">Sign Up</Link>
              Guest
            </>
          )}
        </Tabs>
      </Toolbar>
    </AppBar>

    // {/* <Link to="/messages">Home</Link>
    // <Link to="/about">About</Link> */}
  );
};

export default Navigation;
