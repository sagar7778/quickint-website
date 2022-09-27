/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
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
                  <a key={id} href="/img/portfolio/project1/1.jpg">
                    {img && <Image alt="" src={img} height={"100%"} width={"100%"} objectFit="contain" />}
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
