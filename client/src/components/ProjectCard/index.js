import React, { useState } from "react";
import EditModal from "../EditModal";
import Placehold from "../../assets/project_img_placeholder.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import octocat from "../../assets/octocat.png";
import "./index.css";

export default ({ project, owner }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <EditModal setShow={setShow} show={show} />
      <div className="flip-card col-lg-3 col-md-4 col-sm-6 col-xs-12 mt-3">
        <div className="flip-card-inner" style={{ height: "40vh" }}>
          {/* front of card */}
          <div
            className="card text-white bg-dark mb-3 flip-card-front"
            style={{ borderRadius: "10px", height: "100%" }}
          >
            <div className="card-header">
              {project.contributors.map(a => (
                <a
                  href={a.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={a.handle}
                >
                  <span
                    className="badge badge-light mr-1"
                    style={{ color: "dark" }}
                  >
                    {a.handle}
                  </span>
                </a>
              ))}
            </div>
            <div className="card-body">
              <h5 className="card-title">
                {project.name}
                {owner ? (
                  <span style={{ marginLeft: "10%" }}>Your Project</span>
                ) : (
                  ""
                )}
              </h5>
              <p className="card-text">
                {project.description ||
                  (owner ? "Please add a description" : "No description yet")}
              </p>
            </div>
          </div>
          {/* back of card */}
          <div
            className="card text-white bg-dark mb-3 flip-card-back"
            style={{ borderRadius: "10px", height: "100%" }}
          >
            <div className="card-header">
              {project.contributors.map(a => (
                <a
                  href={a.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={a.handle}
                >
                  <span
                    className="badge badge-light mr-1"
                    style={{ color: "dark" }}
                  >
                    {a.handle}
                  </span>
                </a>
              ))}
            </div>
            <div className="card-body">
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <img
                  className="img-fluid"
                  src={Placehold}
                  alt="project img placeholder"
                />
              </a>
            </div>
            <span style={{ margin: "auto" }}>
              <a href={project.repo} target="_blank" rel="noopener noreferrer">
                <img
                  src={octocat}
                  style={{ width: "15%" }}
                  alt="github octocat"
                />
              </a>
              {owner ? (
                <FontAwesomeIcon
                  onClick={() => setShow(true)}
                  icon={faEdit}
                  size="2x"
                  style={{ color: "green" }}
                />
              ) : (
                ""
              )}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
