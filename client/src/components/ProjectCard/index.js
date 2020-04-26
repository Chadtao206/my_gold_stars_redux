import React from "react";
import Placehold from "../../assets/project_img_placeholder.jpg";

export default ({ project, owner }) => (
  <div className="flip-card col-lg-3 col-md-4 col-sm-6 col-xs-12">
    <div className="flip-card-inner" style={{ height: "40vh" }}>
      {/* front of card */}
      <div
        className="card text-white bg-dark mb-3 mt-2 ml-2 mr-2 flip-card-front"
        style={{ borderRadius: "10px", height: "100%" }}
      >
        <div className="card-header">
          {owner ? (
            <span style={{ marginRight: "10%" }}>Your Project!</span>
          ) : (
            ""
          )}
          {project.contributors.map(a => (
            <a href={a.url} target="_blank">
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
          <h5 className="card-title">{project.name}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
      {/* back of card */}
      <div
        className="card text-white bg-dark mb-3 mt-2 ml-2 mr-2 flip-card-back"
        style={{ borderRadius: "10px", height: "100%" }}
      >
        <div className="card-header">
          {owner ? (
            <span style={{ marginRight: "10%" }}>Your Project!</span>
          ) : (
            ""
          )}
          {project.contributors.map(a => (
            <a href={a.url} target="_blank">
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
          <img className="img-fluid" src={Placehold} />
        </div>
      </div>
    </div>
  </div>
);
