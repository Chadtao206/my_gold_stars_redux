import React from "react";

export default ({ a, handleAdd, handleRemove }) => {
  const add = id => handleAdd(id);
  const remove = id => handleRemove(id);

  return (
    <tr key={a._id}>
      <td>{a.username}</td>
      <td>{a.fullname}</td>
      <td>{a.isAdmin ? "Admin" : "Student"}</td>
      <td>{a.stars}</td>
      <td style={{ width: "10vw" }}>
        <button
          onClick={() => add(a._id)}
          className="btn btn-secondary"
          style={{ width: "100%" }}
        >
          Add Star
        </button>
      </td>
      <td style={{ width: "10vw" }}>
        <button
          style={{ width: "100%" }}
          onClick={() => remove(a._id)}
          className="btn btn-secondary"
        >
          Remove Star
        </button>
      </td>
    </tr>
  );
};
