import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../utils/auth";

// Redirects to given path if user is not logged in. Defaults to /login if
// the user is not logged in.
const ProtectedRoute = ({ onFailureRedirectToPath = "/login", ...rest }) => {
  const { isLoggedIn } = useAuth();
  console.log(isLoggedIn);
  return isLoggedIn ? (
    <Route {...rest} />
  ) : (
    // <Redirect to={onFailureRedirectToPath} />
    <Route {...rest} />
  );
};

export default ProtectedRoute;
