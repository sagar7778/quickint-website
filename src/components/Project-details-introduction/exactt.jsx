import React from "react";
import Link from "next/link";

const ProjectDetailsIntroduction = () => {
  return (
    <section className="intro-section section-padding">
      <div className="container">
        <div className="row">
          

          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Client</h6>
              <p>
                Paras Patel
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Date</h6>
              <p>08/10/2022</p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Categories</h6>
              <p>
                Laboratory 
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Tags</h6>
              <p>
                Lab, Software, Testing
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailsIntroduction;
