/* eslint-disable @next/next/no-img-element */
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";

const VideoWithTestimonials = () => {
  const [isOpen, setOpen] = React.useState(false);
  React.useEffect(() => {
    console.clear();
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="block-sec">
      <div
        className="background bg-img section-padding pb-0"
        style={{ backgroundImage: "url(/img/clients/outdooors.png)"}}
        data-overlay-dark="8"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="vid-area">
                <div className="vid-icon">
                  {typeof window !== "undefined" && (
                    <ModalVideo
                      channel="vimeo"
                      autoplay
                      isOpen={isOpen}
                      videoId="127203262"
                      onClose={() => setOpen(false)}
                    />
                  )}
                  
                </div>

                <div className="cont">
                  <h3 className="wow" data-splitting>
                  check out testimonials from clients with credibility and reliability! &apos;
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className="testim-box">
                <div className="head-box">
                  <h6 className="wow fadeIn" data-wow-delay=".5s">
                    Our Clients
                  </h6>
                  <h4 className="wow fadeInLeft" data-wow-delay=".5s">
                    What Client&apos;s Say?
                  </h4>
                </div>
                <Slider
                  {...settings}
                  className="slic-item wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <div className="item">
                    <p>
                    I am very happy with the work of neel and his team, as I am not an IT guy. I don't know anything about it but he did his research and understands our business very well and made me software named exatt which completely boosted our slow operations and made it digital.
                    </p>
                    <div className="info">
                      <div className="cont">
                        <div className="author">
                          <h6 className="author-name custom-font">
                                          Paras Patel
                          </h6>
                          <span className="author-details">
                                          Director - Hi-Tech solutions
                          </span>     
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <p>
                       Green doors Neel was a good full-stack developer. He worked with us for a couple of months. Wish him well moving forward.
                    </p>
                    <div className="info">
                      <div className="cont">
                        <div className="author">
                          <h6 className="author-name custom-font">
                                        Rishabh Rastogi
                          </h6>
                          <span className="author-details">
                             Greendoors LLC
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoWithTestimonials;
