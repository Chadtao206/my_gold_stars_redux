import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useAuth } from "../utils/auth";
import FullPageSpinner from "../components/FullPageSpinner";
import LoginAlert from "../components/LoginAlert";
import {
  EmailInputGroup,
  PasswordInputGroup
} from "../components/FormControls";
import "./Login.css";

const Login = () => {
  const { login, isPending, isLoggedIn, error } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    login(username, password);
  };

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  if (isPending) {
    return <FullPageSpinner text="Verifying account..." />;
  }

  return (
    <div className="contain vh-100 text-center d-flex align-items-center flex-column">
      <div class="jumbotron mt-4">
        <h1 class="display-4">Welcome to My Gold Stars App</h1>
        <p class="lead">Please log in using the credentials provided to you.</p>
      </div>
      <form className="form-login m-auto" onSubmit={handleSubmit}>
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
        <EmailInputGroup
          required
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <PasswordInputGroup
          required
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit" className="my-3 btn btn-lg btn-primary btn-block">
          Log In
        </button>
        {error && <LoginAlert error={error} />}
      </form>
    </div>
  );
};

export default Login;
