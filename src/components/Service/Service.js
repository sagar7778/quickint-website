import React from "react";
import SeoTitle from "../Title/SeoTitle";
import Fade from "react-reveal/Fade";

const Service = () => {
  return (
    <React.Fragment>
      <section className="seo_service_area sec_pad">
        <div className="container">
          <SeoTitle
            Title="OUR SERVICES"
            TitleP="We provide a range of services to various sectors all around the globe."
          />
          <div className="row seo_service_info">
            <Fade bottom duration={500}>
              <div className="col-lg-4 col-md-6">
                <div className="seo_service_item">
                  <img src={require("../../img/seo/icon1.png")} alt="" />
                  <a href=".#">
                    <h4>Digital Analytics</h4>
                  </a>
                  <p>
                    Twit cras excuse my French matie boy grub it's all gone to
                    pot off his nut butty horse play blow off pardon you hanky
                    panky.!
                  </p>
                  <a href=".#">
                    <i className="arrow_right"></i>
                  </a>
                </div>
              </div>
            </Fade>
            <Fade bottom duration={700}>
              <div className="col-lg-4 col-md-6">
                <div className="seo_service_item">
                  <img src={require("../../img/seo/icon2.png")} alt="" />
                  <a href=".#">
                    <h4>Digital Marketing</h4>
                  </a>
                  <p>
                    Twit cras excuse my French matie boy grub it's all gone to
                    pot off his nut butty horse play blow off pardon you hanky
                    panky.!
                  </p>
                  <a href=".#">
                    <i className="arrow_right"></i>
                  </a>
                </div>
              </div>
            </Fade>
            <Fade bottom duration={1000}>
              <div className="col-lg-4 col-md-6">
                <div className="seo_service_item">
                  <img src={require("../../img/seo/icon5.png")} alt="" />
                  <a href=".#">
                    <h4>Email Marketing</h4>
                  </a>
                  <p>
                    Twit cras excuse my French matie boy grub it's all gone to
                    pot off his nut butty horse play blow off pardon you hanky
                    panky.!
                  </p>
                  <a href=".#">
                    <i className="arrow_right"></i>
                  </a>
                </div>
              </div>
            </Fade>
            <div className="col-lg-12 text-center mt_40">
              <a href=".#" className="seo_btn seo_btn_one btn_hover">
                All Features
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="seo_features_one sec_pad">
        <div className="container">
          <div className="row flex-row-reverse">
            <div className="col-lg-3">
              <div
                className="seo_features_img"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <div className="round_circle"></div>
                <div className="round_circle two"></div>
                <img src={require("../../img/seo/features_img.png")} alt="" />
              </div>
            </div>
            <div className="col-lg-9">
              <Fade bottom cascade>
                <div className="seo_features_content">
                  <h2>Our Core Values</h2>
                  <p>
                    Faff about only a quid blower I don't want no agro bleeding
                    chimney pot burke tosser cras nice one boot fanny.!
                  </p>
                  <div className="media seo_features_item">
                    <div className="media-body">
                      <h3>Client centric services</h3>
                      <p>
                        We believe in providing services to our clients that
                        revolve around them. We focus to understand their needs,
                        be easily accessible, conduct meetings frequently to
                        address their all queries.
                      </p>
                    </div>
                  </div>
                  <div className="media seo_features_item">
                    <div className="media-body">
                      <h3>Transparency & Flexibility</h3>
                      <p>
                        We, as a responsible and reputed organization, try to be
                        open, honest and straightforward to our clients about
                        our various operations. We ensure to do business
                        according to legal contracts and abide with SOP. In
                        addition to that,our team is very flexible with constant
                        changes occurring in the programming world, ready to
                        listen to client's demands and act according to it.
                      </p>
                    </div>
                  </div>
                  <div className="media seo_features_item">
                    <div className="media-body">
                      <h3>We value relationships</h3>
                      <p>
                        We are very focused on getting other orders from
                        previous clients. So, we continue to take feedback from
                        our clients after providing our services,and are
                        available to provide them with minor updates and bug
                        fixing if they would like to update something.
                      </p>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </section>
      <section className="seo_features_one sec_pad">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="seo_features_img seo_features_img_two">
                <div className="round_circle"></div>
                <div className="round_circle two"></div>
                <img
                  src={require("../../img/seo/features_img_two.png")}
                  width="100%"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-7 d-flex align-items-center">
              <Fade bottom cascade>
                <div className="seo_features_content">
                  <h2 className="wow fadeInUp">
                    Our merits that can make your mind clear
                  </h2>
                  <p className="wow fadeInUp">
                    1) 4+ YEARS OF INDUSTRY EXPERIENCE With the experience of
                    over 4 years as an entity,we serve several clients across
                    various sectors.so, we almost touched each sector.in
                    addition,our clients were from all continents of globe.We
                    believe in learning and constantly evolving ourselves with a
                    positive attitude that can lead us to become a mature and
                    trustful organization.
                  </p>
                  <p className="wow fadeInUp">
                    2) FULL-STACK TEAMS We have teams of experienced and
                    permanent full stack developers who are keenly interested in
                    coding to provide high-quality & well written codes,and have
                    the least bugs possible.This provided excellent and
                    satisfactory results to our previous clients and the count
                    of satisfaction still goes on.
                  </p>
                  <p className="wow fadeInUp">
                    3) FREE BUSINESS CONSULTATION We also provide free business
                    consultation to our potential clients who don't have
                    in-depth knowledge of technicality of this field but have a
                    desire to make changes in the conventional business methods
                    and innovate it.we are happy to give them right
                    guidance,solutions and services.
                  </p>
                  {/* <a
                    href=".#"
                    className="seo_btn seo_btn_one btn_hover wow fadeInUp"
                  >
                    Learn More
                  </a> */}
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Service;
