import React from "react";
import ContactHeader from "../../components/Contact-header";
import ContactWithMap from "../../components/Contact-with-map";
import Navbar from "../../components/Navbar";
import DarkTheme from "../../layouts/Dark";
import Head from "next/head";

const Contact = () => {
  const fixedHeader = React.useRef(null);
  const MainContent = React.useRef(null);
  const navbarRef = React.useRef(null);
  React.useEffect(() => {
    setInterval(() => {
      if (fixedHeader.current) {
        var slidHeight = fixedHeader.current.offsetHeight;
      }
      if (MainContent.current) {
        MainContent.current.style.marginTop = slidHeight + "px";
      }
    }, 1000);
    var navbar = navbarRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, []);
  return (
    <DarkTheme>
      <Head>
        <title>Quickint Solutions | Contact Us</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar nr={navbarRef} />
      <ContactHeader sliderRef={fixedHeader} />
      <div className="main-content" ref={MainContent}>
        <ContactWithMap />
      </div>
    </DarkTheme>
  );
};

export default Contact;
