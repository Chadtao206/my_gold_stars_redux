import React from "react";
import { useAuth } from "../utils/auth";
import Nav from "../components/Nav";
const Home = () => {
  const { user, logout } = useAuth();

  return (
    <>
      <Nav />
      <div className="container">
        <h1 className="h3">Welcome {user.username}!</h1>
        <p>
          Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast
          yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin
        </p>
      </div>
    </>
  );
};

export default Home;
