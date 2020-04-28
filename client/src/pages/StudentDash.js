import React from "react";
import { useAuth } from "../utils/auth";
import star from "../assets/goldstar_mod.png";

export default () => {
  const { user } = useAuth();
  const stars = [...Array(user.stars).keys()].map(i => []);
  return (
    <>
      <h1>
        Hello {user.fullname} you have {user.stars} stars!
      </h1>
      {stars.map(a => (
        <span className="navbar-brand">
          <img id="star" src={star} style={{ height: "40px" }} alt="goldstar" />
        </span>
      ))}
      <p style={{ color: "red" }}>
        * stay tuned for goldstar shop to spend your stars for favors!
      </p>
    </>
  );
};
