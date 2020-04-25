import React from "react";
import { useAuth } from "../../utils/auth";

export default () => {
  const { user, logout } = useAuth();
  return (
    <nav
      class="navbar navbar-expand-lg navbar-light bg-light sticky-top"
      style={{ justifyContent: "space-around" }}
    >
      <a class="navbar-brand" href="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/1024px-Gold_Star.svg.png"
          style={{ height: "20px" }}
        />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-item nav-link btn btn-outline-success ml-2" href="#">
            Home
          </a>
          <a class="nav-item nav-link btn btn-outline-success ml-2" href="#">
            My Gold Stars
          </a>
          <a class="nav-item nav-link btn btn-outline-success ml-2" href="#">
            Bootcamp Resources
          </a>
          <a class="nav-item ml-5 mr-5" href="#">
            <h1 className="h3">Welcome {user.username}!</h1>
          </a>
          <a
            class="nav-item nav-link btn btn-outline-success ml-5"
            href="#"
            onClick={logout}
          >
            Log Out
          </a>
        </div>
      </div>
    </nav>
  );
};
