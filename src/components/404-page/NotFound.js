import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <p>404 ERROR </p>
      <p>Sorry,page not found</p>
      <Link to="/messages"> Go back to Home page </Link>
    </>
  );
};

export default NotFound;
