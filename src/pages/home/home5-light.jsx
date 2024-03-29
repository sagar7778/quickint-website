import React from "react";
import AboutWithSkills from "../../components/About-with-skills";
import Footer from "../../components/Footer";
import IntroTxt from "../../components/Intro-txt";
import Navbar from "../../components/Navbar";
import Numbers1 from "../../components/Numbers";
import PortfolioCustomColumn from "../../components/Portfolio-custom-column";
import Services4 from "../../components/Services4";
import Testimonials1 from "../../components/Testimonials1";
import BlogsThreeColum2 from "../../components/Blogs-three-column2";
import LightTheme from "../../layouts/Light";
import ContactSection from "../../components/Contact-section";
import ClientsBrands from "../../components/Clients-brands";
import appData from "../../data/app.json";

const Homepage2 = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    var navbar = navbarRef.current,
      logo = logoRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
        logo.setAttribute("src", appData.darkLogo);
      } else {
        navbar.classList.remove("nav-scroll");
        logo.setAttribute("src", appData.lightLogo);
      }
    });
  }, [navbarRef]);

  return (
    <LightTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      <IntroTxt />
      <AboutWithSkills />
      <Services4 halfBG />
      <Numbers1 />
      <PortfolioCustomColumn column={2} filterPosition="left" />
      <Testimonials1 subBgLftstl parallaxie withBG overlay />
      {/* <BlogsThreeColum2 /> */}
      <ClientsBrands subBG theme="light" />
      <ContactSection />
      <Footer />
    </LightTheme>
  );
};

export default Homepage2;
