import React from "react";

const ProjectDetailsHeader = ({ title }) => {
  return (
    <section className="page-header proj-det">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-9">
            <div className="cont">
              <h6>art &amp; illustration</h6>
              <h2>{title}</h2>
            </div>
          </div>
        </div>
      </div>
      <div
        className="img-wrapper bg-img parallaxie"
        style={{
          backgroundImage: "url(/img/portfolio/project1/bg.jpg)",
        }}
      ></div>
    </section>
  );
};

export default ProjectDetailsHeader;
