import React, { useEffect, useState } from "react";
import { getUsers } from "../utils/API";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";

export default () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  useEffect(() => {
    getUsers().then(({ data }) => {
      const mod = data.sort((a, b) => (a.isAdmin ? -1 : b.isAdmin ? 1 : 0));
      setUsers(mod);
      setFilteredUsers(mod);
    });
  }, []);

  const handleSort = val => {
    setFilteredUsers(
      users.filter(
        a =>
          a.fullname.toLowerCase().includes(val) ||
          a.username.toLowerCase().includes(val)
      )
    );
  };

  return (
    <>
      <div
        style={{
          height: "contain",
          background:
            "linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)"
        }}
      >
        <div className="container mb-5">
          <h1>Admin Dashboard</h1>
          <Form.Control
            type="text"
            onChange={e => handleSort(e.target.value.toLowerCase())}
            className="mb-2"
            placeholder="search"
          />
          <Table className="mb-5" striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Username</th>
                <th>Full Name</th>
                <th>Credentials</th>
                <th>Stars</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map(a => (
                <tr>
                  <td>{a.username}</td>
                  <td>{a.fullname}</td>
                  <td>{a.isAdmin ? "Admin" : "Student"}</td>
                  <td>{a.stars}</td>
                  <td style={{ width: "15vw" }}>
                    <Form.Control
                      type="number"
                      className="mr-3 ml-4"
                      style={{ width: "30%", float: "left" }}
                    />
                    <button className="btn btn-secondary">Add Star</button>
                  </td>
                  <td style={{ width: "15vw" }}>
                    <Form.Control
                      type="number"
                      className="mr-3 ml-4"
                      style={{ width: "30%", float: "left" }}
                    />
                    <button className="btn btn-secondary">Remove Star</button>
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
