import React from "react";
import { useAuth } from "../../utils/auth";
import "./index.css";

export default () => {
  const { user, logout } = useAuth();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <a className="navbar-brand" href="/">
        <img
          id="star"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/1024px-Gold_Star.svg.png"
          style={{ height: "30px" }}
        />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse sticky-top"
        id="navbarNavAltMarkup"
      >
        <div
          className="navbar-nav"
          style={{ justifyContent: "space-evenly", width: "100%" }}
        >
          <a className="nav-item nav-link btn btn-outline-success" href="#">
            Home
          </a>
          <a className="nav-item nav-link btn btn-outline-success" href="#">
            My Gold Stars
          </a>
          <a className="nav-item nav-link btn btn-outline-success" href="#">
            Bootcamp Resources
          </a>
          <a
            className="nav-item nav-link btn btn-outline-success"
            href="/skills"
          >
            Web Skills
          </a>
          <h1 className="h3 nav-item ml-5 mr-5">
            Welcome {user ? user.username : ""}!
          </h1>
          <a
            className="nav-item nav-link btn btn-outline-success"
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
