import React from "react";
import "./Skills.css";
import Nav from "../components/Nav";
import { useAuth } from "../utils/auth";

export default () => {
  const { user } = useAuth();
  return (
    <>
      <Nav />
      <iframe
        src="https://andreasbm.github.io/web-skills/"
        style={{ width: "100vw", height: "100vh" }}
      ></iframe>
    </>
  );
};
