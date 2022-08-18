import React from "react";
import CustomNavbar from "../components/CustomNavbar";
import Breadcrumb from "../components/Breadcrumb";
import Portfoliosingle from "../components/Portfolios/Portfoliosingle";
import FooterTwo from "../components/Footer/FooterTwo";
import FooterData from "../components/Footer/FooterData";

const About = (props) => {
  const { projectDetails } = props.history.location.state;

  return (
    <div className="body_wrapper">
      <CustomNavbar
        slogo="sticky_logo"
        mClass="menu_four"
        nClass="w_menu ml-auto mr-auto"
      />
      <Breadcrumb
        breadcrumbClass="breadcrumb_area"
        imgName="breadcrumb/banner_bg.png"
        Ptitle="Portfolio Details"
        Pdescription="Check out what we have to offer you...Devlopment, customization, and much more.. "
      />
      <Portfoliosingle projectDetails={projectDetails} />
      <FooterTwo FooterData={FooterData} />
    </div>
  );
};
export default About;
