import React from "react";
import Card from "../components/ProjectCard";
import projects from "../utils/projects.json";

export default ({ user }) => {
  return (
    <>
      <h1>Project One</h1>
      <div className="row">
        {projects.project1.map(a => (
          <Card
            project={a}
            owner={a.contributors.map(a => a.handle).includes(user.username)}
          />
        ))}
      </div>
    </>
  );
};
