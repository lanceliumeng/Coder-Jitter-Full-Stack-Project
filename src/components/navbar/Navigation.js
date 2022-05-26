import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navigation = ({ loggedInUser, activateUser }) => {
  const navigate = useNavigate();

  const logOut = (event) => {
    event.preventDefault();
    activateUser("");
    navigate("/messages"); //for logout rederict to home page
  };

  return (
    <nav>
      <Link to="/messages">Home</Link>
      <Link to="/about">About</Link>
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
    </nav>
  );
};

export default Navigation;
