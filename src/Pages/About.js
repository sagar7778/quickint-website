import React from "react";
import CustomNavbar from "../components/CustomNavbar";
import Breadcrumb from "../components/Breadcrumb";
import FooterTwo from "../components/Footer/FooterTwo";
import FooterData from "../components/Footer/FooterData";
import Fade from "react-reveal/Fade";

const About = () => {
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
        Ptitle="About Us"
        Pdescription="Check out what we have to offer you...Devlopment, customization, and much more.. "
      />
      <Fade bottom cascade>
        <div className="about_us_container seo_features_content about_us_p">
          <p>
            We, as an enterprise, established back in 2020, with the motto of
            providing our digital expertise to people who want to innovate
            conventional methods of working and have a desire to add some
            technological features to their business. In addition to that, our
            key focus is to provide satisfactory work at an affordable rate
            because we are optimistic about the boom of technology in this
            era.Thus, we count on it to be available for every potential desired
            client with a high degree of quality work.
          </p>

          <p>
            As it is briefly described in <a href="/service">our services</a> section,
            we provide a range of services to our clients. Moreover, we also
            provide them free and precise business consultation and research
            products to target specific hurdles which restrain and moderate
            their speed of growth in order to deliver good ROI. We ensure
            explicit services and contracts with no hidden terms and
            conditions.we as a responsible organization ensure, queries of
            clients not only before and during our service but also after
            providing it.
          </p>

          <p>
            Our core value is to bring positive change and revolution in the way
            of living as, you can see, we prefer to work on innovative ideas in
            our <a href="/Portfolio">portfolio</a> section and also in various
            sectors. With a team of highly qualified and skilled developers, our
            mission is to reach as much as people with our quality, satisfactory
            and affordable services with the values of accountability and
            responsibility.
          </p>
        </div>
      </Fade>
      {/* <Sservice /> */}
      {/* <AgencyAbout ServiceData={ServiceData}/> */}

      <FooterTwo FooterData={FooterData} />
    </div>
  );
};
export default About;
