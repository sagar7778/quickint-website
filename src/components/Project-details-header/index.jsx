import React from "react";

const ProjectDetailsHeader = ({ title }) => {
  return (
    <section className="page-header proj-det">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-9">
            <div className="cont">
              <h6>Agro-Teach</h6>
              <h2>{title}</h2>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default ProjectDetailsHeader;
