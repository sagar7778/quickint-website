import React from "react";
import Split from "../Split";
import Link from "next/link";

const Services1 = () => {
  return (
    <section className="services">
      <div className="container">
        <div className="sec-head custom-font text-center">
          <h6 className="wow fadeIn" data-wow-delay=".5s">
            Best Features
          </h6>
          <Split>
            <h3 className="wow words chars splitting" data-splitting>
              Services.
            </h3>
          </Split>
          <span className="tbg">Services</span>
        </div>
        <div className="row">
          <div
            className="col-lg-3 col-md-6 item-box bg-img wow fadeInLeft"
            data-wow-delay=".3s"
            style={{ backgroundImage: "url(/img/1.jpg)" }}
          >
            <h4 className="custom-font">
              Best Of <br /> Our Services
            </h4>
            <Link href="/about/about-dark">
              <a className="btn-curve btn-bord btn-lit mt-40">
                <span></span>
                <a onClick={() => router.push("/")}  style={{marginLeft: 5}}>see all services</a>
              </a>
            </Link>
          </div>
          <div
            className="col-lg-3 col-md-6 item-box wow fadeInLeft"
            data-wow-delay=".5s"
          >
            <span className="icon pe-7s-phone"></span>
            <h6>Web and Mobile app devlopment</h6>
            <p>
            Digitize your business with our custom, user-friendly and state-of-the-art web or mobile software. In which we can provide you with operational efficiency by utilizing the latest technologies that give a boost to your business.
            </p>
          </div>
          <div
            className="col-lg-3 col-md-6 item-box wow fadeInLeft"
            data-wow-delay=".7s"
          >
            <span className="icon pe-7s-loop"></span>
            <h6>
              DevOps auutomation
            </h6>
            <p> 
              <br></br>Let’s combine your business with our software and shorten the software development life cycle (SDLC). Which ultimately helps you to shift your typical traditional business methods into the new digital generation ones.</p>
          </div>
          <div
            className="col-lg-3 col-md-6 item-box wow fadeInLeft"
            data-wow-delay=".9s"
          >
            <span className="icon pe-7s-like2"></span>
            <h6>
            Manual testing and quality assurance (QA) <br />
            </h6>
            <p>Let our quality analysts check your existing or newly developed digital service, to ensure you services with least bugs and high quality codes.</p>
          </div>
        </div>
      </div>
      <div className="half-bg bottom"></div>
    </section>
  );
};

export default Services1;
