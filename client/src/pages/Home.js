import React, { useState } from "react";
import { useAuth } from "../utils/auth";
import Nav from "../components/Nav";
import Skills from "../pages/Skills";
import Resources from "../pages/Resources";
import Goldstars from "../pages/Goldstars";
import Projects from "../pages/Projects";
const Home = () => {
  const [comp, setComp] = useState("stars");
  const { user } = useAuth();
  return (
    <>
      <Nav setComp={setComp} />
      {comp === "skills" ? (
        <Skills />
      ) : comp === "stars" ? (
        <Goldstars admin={user.isAdmin} />
      ) : comp === "resources" ? (
        <Resources />
      ) : comp === "projects" ? (
        <Projects user={user} />
      ) : (
        <p>Welcome to my goldstars</p>
      )}
    </>
  );
};

export default Home;
