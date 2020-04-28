import React, { useState } from "react";
import EditModal from "../EditModal";
import Placehold from "../../assets/project_img_placeholder.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faImages } from "@fortawesome/free-solid-svg-icons";
import octocat from "../../assets/octocat.png";
import { updateProjectDesc, updateProjectImg } from "../../utils/API";
import "./index.css";

export default ({ project, owner, reload }) => {
  const [show, setShow] = useState(false);
  const [edit, setEdit] = useState("");

  const handleUpdate = (id, desc) => {
    edit === "desc"
      ? updateProjectDesc(id, desc).then(() => reload())
      : updateProjectImg(id, desc).then(() => reload());
  };
  const editPic = () => {
    setEdit("pic");
    setShow(true);
  };
  const editDesc = () => {
    setEdit("desc");
    setShow(true);
  };
  return (
    <>
      <EditModal
        setShow={setShow}
        show={show}
        project={project}
        update={handleUpdate}
        edit={edit}
      />
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
                  src={project.img || Placehold}
                  alt="project img placeholder"
                  style={{ width: "100%", maxHeight: "100%" }}
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
                <>
                  <FontAwesomeIcon
                    className="ml-2 mr-2"
                    onClick={editDesc}
                    icon={faEdit}
                    size="2x"
                    style={{ color: "green", cursor: "cell" }}
                  />
                  <FontAwesomeIcon
                    onClick={editPic}
                    icon={faImages}
                    size="2x"
                    style={{ color: "orange", cursor: "cell" }}
                  />
                </>
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
