/* eslint-disable @next/next/no-img-element */
import React from "react";

const ProjectDetailsImages = ({ images }) => {
  return (
    <section className="projdtal">
      <h2 style={{ display: "none" }}> &nbsp; </h2>
      <div className="container-fluid">
        <div className="justified-gallery">
          <div className="row">
            <div className="col-md-6 pr-0">
              {images?.map((image) => {
                const { img, id } = image;
                return (
                  <a key={id} href="img/portfolio/project1/1.jpg">
                    {img && <img alt="" src={img.src} />};
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailsImages;
