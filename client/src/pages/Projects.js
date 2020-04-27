import React from "react";
import Card from "../components/ProjectCard";
import projects from "../utils/projects.json";

export default ({ user }) => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Project One</h1>
      <div className="row mr-5 ml-5">
        {projects.project1.map(a => (
          <Card
            key={a.name}
            project={a}
            owner={a.contributors.map(a => a.handle).includes(user.username)}
          />
        ))}
      </div>
    </>
  );
};
