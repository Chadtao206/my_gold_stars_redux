import React from "react";
import { useAuth } from "../../utils/auth";
import "./index.css";
const star = require("../../assets/goldstar_mod.png");

export default ({ setComp }) => {
  const { user, logout } = useAuth();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <span className="navbar-brand">
        <img id="star" src={star} style={{ height: "40px" }} alt="goldstar" />
      </span>
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
          <button
            className="nav-item nav-link btn btn-outline-success"
            onClick={() => setComp("")}
          >
            Home
          </button>
          <button
            className="nav-item nav-link btn btn-outline-success"
            onClick={() => setComp("stars")}
          >
            My Gold Stars{" "}
            <span className="badge badge-dark" style={{ color: "gold" }}>
              {user.stars}
            </span>
          </button>
          <button
            className="nav-item nav-link btn btn-outline-success"
            onClick={() => setComp("projects")}
          >
            Bootcamp Projects
          </button>
          <button
            className="nav-item nav-link btn btn-outline-success"
            onClick={() => setComp("resources")}
          >
            Bootcamp Resources
          </button>
          <button
            className="nav-item nav-link btn btn-outline-success"
            onClick={() => setComp("skills")}
          >
            Web Skills
          </button>
          <h1 className="h3 nav-item ml-5 mr-5">Welcome {user.fullname}!</h1>
          <button
            className="nav-item nav-link btn btn-outline-warning"
            onClick={logout}
          >
            Log Out
          </button>
        </div>
      </div>
    </nav>
  );
};
