import React, { useState, useEffect } from "react";
import Card from "../components/ProjectCard";
import { getProjects } from "../utils/API";

export default ({ user }) => {
  const [projects, setProjects] = useState([]);
  useEffect(() => handleGetProjects(), []);

  const handleGetProjects = () => {
    getProjects().then(({ data }) => setProjects(data));
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Project One</h1>
      <div className="row mr-5 ml-5">
        {projects.map(a => (
          <Card
            key={a.name}
            project={a}
            owner={a.contributors.map(a => a.handle).includes(user.username)}
            reload={handleGetProjects}
          />
        ))}
      </div>
    </>
  );
};
