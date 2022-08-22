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
                    <h4>Web and mobile app development</h4>
                  </a>
                  <p>
                    Digitize your business with our custom, user-friendly and
                    state-of-the-art web or mobile software. In which we can
                    provide you with operational efficiency by utilizing the
                    latest technologies that give a boost to your business.
                  </p>
                  {/* <a href=".#">
                    <i className="arrow_right"></i>
                  </a> */}
                </div>
              </div>
            </Fade>

            <Fade bottom duration={700}>
              <div className="col-lg-4 col-md-6">
                <div className="seo_service_item">
                  <img src={require("../../img/seo/icon2.png")} alt="" />
                  <a href=".#">
                    <h4>DevOps automation</h4>
                  </a>
                  <p>
                    Let’s combine your business with our software and shorten
                    the software development life cycle (SDLC). Which ultimately
                    helps you to shift your typical traditional business methods
                    into the new digital generation ones.
                  </p>
                  {/* <a href=".#">
                    <i className="arrow_right"></i>
                  </a> */}
                </div>
              </div>
            </Fade>

            <Fade bottom duration={1000}>
              <div className="col-lg-4 col-md-6">
                <div className="seo_service_item">
                  <img src={require("../../img/seo/icon5.png")} alt="" />
                  <a href=".#">
                    <h4>SEO</h4>
                  </a>
                  <p>
                    We can provide you with SEO support which can highlight and
                    differentiate your business in this competitive market. As a
                    result, you can achieve new milestones in sales.
                  </p>
                  {/* <a href=".#">
                    <i className="arrow_right"></i>
                  </a> */}
                </div>
              </div>
            </Fade>

            <Fade bottom duration={1000}>
              <div className="col-lg-4 col-md-6">
                <div className="seo_service_item">
                  <img src={require("../../img/seo/icon5.png")} alt="" />
                  <a href=".#">
                    <h4>Digital Innovation</h4>
                  </a>
                  <p>
                    Innovate your conventional business procedures with us on
                    our digital innovation platform, where we can provide you
                    with research-based web & app platforms and IoT which help
                    you to boost your growth.
                  </p>
                  {/* <a href=".#">
                    <i className="arrow_right"></i>
                  </a> */}
                </div>
              </div>
            </Fade>

            <Fade bottom duration={500}>
              <div className="col-lg-4 col-md-6">
                <div className="seo_service_item">
                  <img src={require("../../img/seo/icon1.png")} alt="" />
                  <a href=".#">
                    <h4>Manual testing & quality assurance (QA)</h4>
                  </a>
                  <p>
                    Let our quality analysts check your existing or newly
                    developed digital service, to ensure you services with least
                    bugs and high quality codes.
                  </p>
                  {/* <a href=".#">
                    <i className="arrow_right"></i>
                  </a> */}
                </div>
              </div>
            </Fade>

            

            <Fade bottom duration={700}>
              <div className="col-lg-4 col-md-6">
                <div className="seo_service_item">
                  <img src={require("../../img/seo/icon2.png")} alt="" />
                  <a href=".#">
                    <h4>Digital marketing & graphic designing</h4>
                  </a>
                  <p>
                    We not only provide you with development services but we
                    also help you with digital marketing, UX/UI designing,
                    content development, logo designing and other services.
                  </p>
                  {/* <a href=".#">
                    <i className="arrow_right"></i>
                  </a> */}
                </div>
              </div>
            </Fade>
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
                    We follows some key principals to which we tries to adhere
                    strictly with and provide it to our each clients.
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

                  <div className="media-body">
                    <h5>Experience</h5>
                    <p className="wow fadeInUp">
                      4+ YEARS OF INDUSTRY EXPERIENCE With the experience of
                      over 4 years as an entity,we serve several clients across
                      various sectors.so, we almost touched each sector.in
                      addition,our clients were from all continents through out
                      globe. We believe in learning and constantly evolving
                      ourselves with a positive attitude that made us a mature
                      and trustful organization.
                    </p>
                  </div>
                  <div className="media-body">
                    <h5>Full-Stack Team</h5>
                    <p className="wow fadeInUp">
                      We have teams of experienced and permanent full stack
                      developers who are keenly interested in coding to provide
                      high-quality & well written codes,and have the least bugs
                      possible.This provided excellent and satisfactory results
                      to our previous clients and the count of satisfaction
                      still goes on.
                    </p>
                  </div>
                  <div className="media-body">
                    <h5>Free Business Consultation</h5>
                    <p className="wow fadeInUp">
                      We also provide free business consultation to our
                      potential clients who don't have in-depth knowledge of
                      technicality of this field but have a desire to make
                      changes in the conventional business methods and innovate
                      it.we are happy to give them right guidance,solutions and
                      services.
                    </p>
                  </div>
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
