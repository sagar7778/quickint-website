import React from "react";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BlogsTwoColumnSlider = () => {
  return (
    <section className="blog-curs section-padding sub-bg">
      <div className="container">
        <div className="sec-head custom-font text-center">
          <h6 className="wow fadeIn" data-wow-delay=".5s">
            Latest 
          </h6>
          <h3 className="wow" data-splitting>
            BLOGS
          </h3>
          <span className="tbg">BLOGS</span>
        </div>
        <div className="row">
          <div className="col-12">
            <Slider
              className="blg-swipe wow fadeInUp"
              data-wow-delay=".5s"
              {...{
                dots: false,
                infinite: true,
                arrows: false,
                autoplay: true,
                slidesToScroll: 1,
                slidesToShow: 2,
                responsive: [
                  {
                    breakpoint: 1024,
                    settings: {
                      slidesToShow: 2,
                    },
                  },
                  {
                    breakpoint: 991,
                    settings: {
                      slidesToShow: 1,
                    },
                  },
                  {
                    breakpoint: 480,
                    settings: {
                      slidesToShow: 1,
                    },
                  },
                ],
              }}
            >
              <div className="item-box">
                <div className="item">
                  <div className="bimg">
                    <div
                      className="img bg-img"
                      style={{ backgroundImage: "url(/img/blog/agri.png)" }}
                    ></div>
                  </div>
                  <div className="cont valign">
                    <div className="full-width">
                      <div className="info custom-font">
                        <a href="#0" className="author">
                          <span>by TOI</span>
                        </a>
                        <Link href="/blog/blog-dark">
                          <a className="date">
                            <span>
                              <i>06</i> Apr
                            </span>
                          </a>
                        </Link>
                      </div>
                      <h6 className="custom-font">
                        <Link href="/blog-details/blog-details-dark">
                        Technology innovation will bring in a new age in agriculture,
                        </Link>
                      </h6>
                      <div className="btn-more custom-font">
                        <Link href="/blog-details/blog-details-dark">
                          <a className="simple-btn">Read More</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item-box">
                <div className="item">
                  <div className="bimg">
                    <div
                      className="img bg-img"
                      style={{ backgroundImage: "url(/img/blog/blog2.png)" }}
                    ></div>
                  </div>
                  <div className="cont valign">
                    <div className="full-width">
                      <div className="info custom-font">
                        <a href="/blog-details/blog2" className="author">
                          <span>by value chain</span>
                        </a>
                        <Link href="/blog-details/blog2">
                          <a className="date">
                            <span>
                              <i>08</i> Aug
                            </span>
                          </a>
                        </Link>
                      </div>
                      <h6 className="custom-font">
                        <Link href="/blog-details/blog2">
                           For the industry to progress and for UK manufacturers to compete with foreign manufacturers in Germany
                        </Link>
                      </h6>
                      <div className="btn-more custom-font">
                        <Link href="/blog-details/blog2">
                          <a className="simple-btn">Read More</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogsTwoColumnSlider;
