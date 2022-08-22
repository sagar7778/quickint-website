import React from "react";
import Reveal from "react-reveal/Reveal";

const DesignBanner = () => {
  return (
    <section className="seo_home_area">
      <div className="banner_top">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center seo_banner_content">
              <Reveal effect="fadeInUp" duration={500}>
                <h3>
                  Welcome to the new world of digitalization, <br /> where we
                  are here to provide you digital solutions.
                </h3>
              </Reveal>
              <Reveal effect="fadeInUp" duration={1000}>
                <p className="wow fadeInUp" data-wow-delay="0.5s">
                    We are a credible organization that provides reliable solutions for <br /> Web and mobile app development, SEO, Customize software, and Graphic work to various clients throughout the globe.
                </p>
              </Reveal>
              
            </div>
          </div>
          <div className="saas_home_img">
            <Reveal effect="fadeInUp" duration={1400}>
              <img src={require("../../img/seo/image.png")} alt="" />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
export default DesignBanner;
