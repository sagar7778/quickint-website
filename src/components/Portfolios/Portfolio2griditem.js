import Image from "next/image";
import React from "react";
import { Link } from "react-router-dom";

const Portfolio2griditem = (props) => {
  const { pImg, colClass, projectDetails } = props;

  return (
    <div className={`portfolio_item mb-30 ${colClass} `}>
      <Link
        to={{
          pathname: "/Pages/PortfolioSingle",
          state: { projectDetails: projectDetails },
        }}
        className="portfolio-title"
      >
        <div className="portfolio_img">
          <Image src={"/img/portfolio/" + pImg} alt="" height={"100%"} width={"100%"} />
          <div className="hover_content">
            <div className="portfolio-description leaf">
              <h3 className="f_500 f_size_20 f_p">{projectDetails.ptitle}</h3>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default Portfolio2griditem;
