import React from "react";
import Admin from "./AdminDash";
import Student from "./StudentDash";

export default ({ admin }) => {
  return <>{admin ? <Admin /> : <Student />}</>;
};
