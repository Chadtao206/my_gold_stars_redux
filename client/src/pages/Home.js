import React, { useState } from "react";
import Nav from "../components/Nav";
import Skills from "../pages/Skills";
import Resources from "../pages/Resources";
import Goldstars from "../pages/Goldstars";
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
      ) : (
        <p>Welcome to my goldstars</p>
      )}
    </>
  );
};

export default Home;
