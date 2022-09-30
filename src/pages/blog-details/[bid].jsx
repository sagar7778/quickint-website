import { useRouter } from "next/router";
import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import DarkTheme from "../../layouts/Dark";
import blogsData from "./blogsData";

const BlogDetailsDark = () => {
  const router = useRouter();
  const { bid } = router.query;

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
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [navbarRef]);

  const blogData = blogsData[bid];

  return (
    <DarkTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      <section className="page-header blg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 col-md-9">
              <div className="cont text-center">
                <h2>{blogData?.title}</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      {blogData?.content}
      <Footer />
    </DarkTheme>
  );
};

export default BlogDetailsDark;
