import React from "react";
import introData from "../../data/sections/intro.json";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import SwiperCore, {
  Navigation,
  Pagination,
  Parallax,
  Autoplay,
} from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Split from "../Split";
import fadeWhenScroll from "../../common/fadeWhenScroll";
import removeSlashFromPagination from "../../common/removeSlashFromPagination";

SwiperCore.use([Navigation, Pagination, Parallax, Autoplay]);

const IntroWithSlider1 = ({ sliderRef }) => {
  const [load, setLoad] = React.useState(true);
  React.useEffect(() => {
    fadeWhenScroll();
    setTimeout(() => {
      setLoad(false);
      removeSlashFromPagination();
    }, 1000);
  }, []);

  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const paginationRef = React.useRef(null);

  return (
    <header
      ref={sliderRef}
      className="slider slider-prlx fixed-slider text-center"
    >
      <div className="swiper-container parallax-slider">
        {!load ? (
          <Swiper
            speed={2000}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
            }}
            parallax={true}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            pagination={{
              type: "fraction",
              clickable: true,
              el: paginationRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl =
                navigationPrevRef.current;
              swiper.params.navigation.nextEl =
                navigationNextRef.current;
              swiper.params.pagination.el = paginationRef.current;
            }}
            onSwiper={(swiper) => {
              setTimeout(() => {
                for (var i = 0; i < swiper.slides.length; i++) {
                  swiper.slides[i].childNodes[0].setAttribute(
                    "data-swiper-parallax",
                    0.75 * swiper.width
                  );
                }

                swiper.params.navigation.prevEl =
                  navigationPrevRef.current;
                swiper.params.navigation.nextEl =
                  navigationNextRef.current;

                swiper.params.pagination.el = paginationRef.current;

                swiper.navigation.destroy();
                swiper.navigation.init();
                swiper.navigation.update();

                swiper.pagination.destroy();
                swiper.pagination.init();
                swiper.pagination.update();
              });
            }}
            className="swiper-wrapper"
            slidesPerView={1}
          >
            {introData.map((slide) => (
              <SwiperSlide key={slide.id} className="swiper-slide">
                <div
                  className="bg-img valign"
                  style={{ backgroundImage: `url(${slide.image})` }}
                  data-overlay-dark="6"
                >
                  <div className="container">
                    <div className="row justify-content-center">
                      <div className="col-lg-7 col-md-9">
                        <div className="caption center">
                          <Split>
                            <h1 className="words chars splitting">
                              {typeof slide.title === "object" ? (
                                <>
                                  {slide.title.first} <br />
                                  {slide.title.second}
                                </>
                              ) : (
                                slide.title
                              )}
                            </h1>
                          </Split>
                          {slide?.content && <p>{slide.content}</p>}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : null}
        <div className="setone setwo">
          <div
            ref={navigationNextRef}
            className="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer"
          >
            <i className="fas fa-chevron-right"></i>
          </div>
          <div
            ref={navigationPrevRef}
            className="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer"
          >
            <i className="fas fa-chevron-left"></i>
          </div>
        </div>
        <div
          ref={paginationRef}
          className="swiper-pagination top botm custom-font"
        ></div>

        <div className="social-icon">
          <a
            href="https://www.linkedin.com/company/quickint-solutions/?viewAsMember=true"
            target="_blank"
            rel="noreferrer"
            className="icon"
          >
            <i className="fab">
              <img
                style={{ width: "68%" }}
                src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzIgMzIiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE2IDBDNy4xNjQgMCAwIDcuMTYzIDAgMTZjMCA4LjgzNiA3LjE2NCAxNiAxNiAxNnMxNi03LjE2NCAxNi0xNmMwLTguODM3LTcuMTY0LTE2LTE2LTE2em0tNC4xNTYgMjIuMjc3SDguNTh2LTkuODJoMy4yNjR2OS44MnptLTEuNjMyLTExLjE2MWgtLjAyMWMtMS4wOTYgMC0xLjgwNC0uNzU1LTEuODA0LTEuNjk3IDAtLjk2My43My0xLjY5NiAxLjg0Ni0xLjY5NnMxLjgwNC43MzMgMS44MjUgMS42OTZjMCAuOTQzLS43MDkgMS42OTctMS44NDYgMS42OTd6bTEzLjQwMSAxMS4xNjFoLTMuMjY0di01LjI1NGMwLTEuMzItLjQ3Mi0yLjIyLTEuNjU0LTIuMjItLjkwMSAwLTEuNDM4LjYwNy0xLjY3NCAxLjE5NC0uMDg2LjIxLS4xMDguNTAzLS4xMDguNzk2djUuNDg0SDEzLjY1cy4wNDMtOC44OTggMC05LjgyaDMuMjY0djEuMzkxYy40MzMtLjY2OSAxLjIwOS0xLjYyMiAyLjk0Mi0xLjYyMiAyLjE0NyAwIDMuNzU3IDEuNDA0IDMuNzU3IDQuNDJ2NS42MzF6IiBmaWxsPSIjZmZmZmZmIiBjbGFzcz0iZmlsbC0wMDAwMDAiPjwvcGF0aD48L3N2Zz4="
                alt=""
              />
            </i>
          </a>
          <a
            href="https://www.upwork.com/agencies/~01ac40e312f2bbadc2"
            target="_blank"
            rel="noreferrer"
            className="icon"
          >
            <i className="fab">
              <img
                style={{ width: "68%" }}
                src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTYuNyA1Ni43IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDU2LjcgNTYuNyI+PHBhdGggZD0iTTM4LjggMjQuNmMtMi44IDAtMy43IDIuNy0zLjkgNC4zdi4xbC0uNCAxLjVjMS4yIDEgMi43IDEuNyA0LjIgMS43IDIgMCAzLjgtMS43IDMuOS0zLjkgMC0yLTEuNy0zLjctMy44LTMuN3oiIGZpbGw9IiNmZmZmZmYiIGNsYXNzPSJmaWxsLTAwMDAwMCI+PC9wYXRoPjxwYXRoIGQ9Ik0yOC45IDMuN0MxNS4yIDMuNyA0LjEgMTQuOCA0LjEgMjguNWMwIDEzLjcgMTEuMSAyNC44IDI0LjggMjQuOCAxMy43IDAgMjQuOC0xMS4xIDI0LjgtMjQuOCAwLTEzLjctMTEuMS0yNC44LTI0LjgtMjQuOHptOS45IDMyLjRjLTIgMC0zLjctLjYtNS4yLTEuNWwtMS43IDhIMjhsMi40LTExYy0xLTEuNC0yLTMtMi43LTQuNXYxLjdjMCA0LjEtMy4zIDcuNC03LjMgNy40cy03LjMtMy4zLTcuMy03LjR2LTEwaDMuOHYxMGMwIDIgMS42IDMuNiAzLjYgMy42czMuNi0xLjYgMy42LTMuNnYtMTBoMy44Yy44IDIuNSAyLjEgNS41IDMuOCA4LjIgMS0zLjggMy44LTYuMSA3LjMtNi4xIDQuMSAwIDcuNSAzLjQgNy41IDcuNS0uMiA0LjMtMy42IDcuNy03LjcgNy43eiIgZmlsbD0iI2ZmZmZmZiIgY2xhc3M9ImZpbGwtMDAwMDAwIj48L3BhdGg+PC9zdmc+"
                alt=""
              />
            </i>
          </a>

          <a
            href="https://www.fiverr.com/quickint?up_rollout=true"
            target="_blank"
            rel="noreferrer"
            className="icon"
          >
            <i className="fab">
              <img
                style={{ width: "68%" }}
                src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIyNTYiIGN5PSIyNTYiIGZpbGw9IiNmZmZmZmYiIHI9IjI1NiIgY2xhc3M9ImZpbGwtMDBiMjJkIj48L2NpcmNsZT48cGF0aCBkPSJNMjk3IDEzN2MwIDE3IDEzLjggMzAuOCAzMSAzMC44IDE3IDAgMzAuOC0xMy44IDMwLjgtMzAuOCAwLTE3LjItMTMuOC0zMS0zMC44LTMxLTE3LjIgMC0zMSAxMy44LTMxIDMxem0tNzMuNS0yNS45Yy00MCAwLTY1LjkgMjMuOC03MSA0OC4yLS41IDIuOS0xIDUuOC0xIDguN3YyMi44aC0yNi45djQ1LjNoMjYuOXYxMDNoLTI2LjlWMzg2aDExNy4xdi00Ni44aC0yNy4ydi0xMDNoODEuOXYxMDNIMjcwVjM4NmgxMTcuM3YtNDYuOGgtMjcuOVYxOTAuOGgtMTQ1di0xMy42YzAtMTEuMiAxMC45LTE3LjkgMjAuMS0xNy45SDI1N3YtNDguMmgtMzMuNXoiIGZpbGw9IiMwMDAwMDAiIGNsYXNzPSJmaWxsLWZmZmZmZiI+PC9wYXRoPjwvc3ZnPg=="
                alt=""
              />
            </i>
          </a>
        </div>
      </div>
    </header>
  );
};

export default IntroWithSlider1;
