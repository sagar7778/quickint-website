/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";
import projectsData from "../../data/sections/portfolio1.json";

// import Image from "../"
const WorksThreeColumnWithFilter = ({ filterPosition }) => {
  const [pageLoaded, setPageLoaded] = React.useState(false);
  React.useEffect(() => {
    setPageLoaded(true);
    if (pageLoaded) {
      setTimeout(() => {
        initIsotope();
      }, 1000);
    }
  }, [pageLoaded]);
  return (
    <section className="portfolio section-padding pb-70">
      <div className="container">
        <div className="row">
          <div
            className={`filtering ${
              filterPosition === "center"
                ? "text-center"
                : filterPosition === "left"
                ? "text-left"
                : "text-right"
            } smplx col-12`}
          >
            <div className="filter">
              <span data-filter="*" className="active">
                All
              </span>
              <span data-filter=".web">Web App</span>
              <span data-filter=".mobile">Mobile App</span>
              <span data-filter=".software">Software</span>
            </div>
          </div>

          <div className="gallery full-width">
            <div className="col-lg-4 col-md-6 items graphic lg-mr">
              <div
                className="item-img wow fadeInUp"
                data-wow-delay=".4s"
              >
                <Link href="/project-details/0">
                  <a>
                    <img
                      src={projectsData[0].image}
                      alt="image"
                    />
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>{projectsData[0].title}</h6>
                <span>
                  <p >React Native app</p>
                </span>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 items web">
              <div
                className="item-img wow fadeInUp"
                data-wow-delay=".4s"
              >
                <Link href="/project-details/1">
                  <a>
                    <img
                        // src={`../../img/portfolio/${projectsData[1].image}`}
                        src={`img/portfolio/greendoors.png`}
                      alt="image"
                    />
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>{projectsData[1].title}</h6>
                <span>
                  <p>react software</p>
                </span>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 items brand lg-mr">
              <div
                className="item-img wow fadeInUp"
                data-wow-delay=".4s"
              >
                <Link href="/project-details/2">
                  <a>
                    <img
                      src={projectsData[2].image}
                      alt="image"
                    />
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>{projectsData[2].title}</h6>
                <span>
                 <p>react web app</p>
                </span>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 items brand">
              <div
                className="item-img wow fadeInUp"
                data-wow-delay=".4s"
              >
                <Link href="/project-details/3">
                  <a>
                    <img
                      src={projectsData[3].image}
                      alt="image"
                    />
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>{projectsData[3].title}</h6>
                <span>
                 <p>react web app</p>
                </span>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 items web">
              <div
                className="item-img wow fadeInUp"
                data-wow-delay=".4s"
              >
                <Link href="/project-details/4">
                  <a>
                    <img
                      src={projectsData[4].image}
                      alt="image"
                    />
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>{projectsData[4].title}</h6>
                <span>
                  <p>React web app</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorksThreeColumnWithFilter;
