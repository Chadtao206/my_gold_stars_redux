import React, { useState } from "react";
import Nav from "../components/Nav";
import Skills from "../pages/Skills";
import Resources from "../pages/Resources";
import Goldstars from "../pages/Goldstars";
import Projects from "../pages/Projects";
const Home = () => {
  const [comp, setComp] = useState("");
  return (
    <>
      <Nav setComp={setComp} />
      {comp === "skills" ? (
        <Skills />
      ) : comp === "stars" ? (
        <Goldstars />
      ) : comp === "resources" ? (
        <Resources />
      ) : comp === "projects" ? (
        <Projects />
      ) : (
        <p>Welcome to my goldstars</p>
      )}
    </>
  );
};

export default Home;
