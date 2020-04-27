import React, { useEffect, useState } from "react";
import { getUsers, addStar, removeStar } from "../utils/API";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";

export default () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [sortedUsers, setSortedUsers] = useState({ sorted: [] });
  const [sortOrder, setSortOrder] = useState(false);
  useEffect(() => {
    getUsers().then(({ data }) => {
      const mod = data.sort((a, b) => (a.isAdmin ? -1 : b.isAdmin ? 1 : 0));
      setUsers(mod);
      setFilteredUsers(mod);
      setSortedUsers({ sorted: mod });
    });
  }, []);

  const handleFilter = val => {
    const filtered = users.filter(
      a =>
        a.fullname.toLowerCase().includes(val) ||
        a.username.toLowerCase().includes(val)
    );
    setFilteredUsers(filtered);
    setSortedUsers({ sorted: filtered });
  };

  const handleSort = type => {
    const sorted = filteredUsers.sort((a, b) =>
      sortOrder
        ? a[type] > b[type]
          ? -1
          : a[type] < b[type]
          ? 1
          : 0
        : a[type] < b[type]
        ? -1
        : a[type] > b[type]
        ? 1
        : 0
    );
    setSortOrder(!sortOrder);
    setSortedUsers({ sorted: sorted });
  };

  const add = id => addStar(id).then(data => console.log(data));
  const remove = id => removeStar(id).then(data => console.log(data));

  return (
    <>
      <div
        style={{
          height: "contain",
          background:
            "linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)"
        }}
      >
        <div className="container">
          <h1>Admin Dashboard</h1>
          <Form.Control
            type="text"
            onChange={e => handleFilter(e.target.value.toLowerCase())}
            className="mb-2"
            placeholder="search"
          />
          <Table className="mb-5" striped bordered hover variant="dark">
            <thead>
              <tr>
                <th onClick={() => handleSort("username")}>Username</th>
                <th onClick={() => handleSort("fullname")}>Full Name</th>
                <th onClick={() => handleSort("isAdmin")}>Credentials</th>
                <th onClick={() => handleSort("stars")}>Stars</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {sortedUsers.sorted.map(a => (
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
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};
