import React from "react";
import Card from "../components/ProjectCard";
import projects from "../utils/projects.json";

export default () => {
  return (
    <>
      <h1>Project One</h1>
      <div className="row">
        {projects.project1.map(a => (
          <Card project={a} />
        ))}
      </div>
    </>
  );
};
