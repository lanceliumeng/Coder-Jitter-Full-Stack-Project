import React from "react";

const Navigation = ({ loggedInUser, activateUser }) => {
  const logOut = (event) => {
    event.preventDefault();
    activateUser("");
  };

  return (
    <nav>
      <a href="/">Home</a>
      <a href="/">About</a>
      {loggedInUser ? (
        <>
          <a href="/" onClick={logOut}>
            Log Out
          </a>{" "}
          {loggedInUser}
        </>
      ) : (
        <>
          <a href="/">Log In</a>
          <a href="/">Sign Up</a>
          Guest
        </>
      )}
    </nav>
  );
};

export default Navigation;
