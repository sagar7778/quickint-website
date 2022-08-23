import React from "react";
import { Link } from "react-router-dom";

const Portfolio2griditem = (props) => {
  const { pImg, tOne, tTwo, colClass, projectDetails } = props;

  return (
    <div className={`portfolio_item mb-30 ${colClass} `}>
      <div className="portfolio_img">
        <img src={require("../../img/portfolio/" + pImg)} alt="" />
        <div className="hover_content">
          
          <div className="portfolio-description leaf">
            <Link
              to={{
                pathname: "/Pages/PortfolioSingle",
                state: { projectDetails: projectDetails },
              }}
              className="portfolio-title"
            >
              <h3 className="f_500 f_size_20 f_p">{projectDetails.ptitle}</h3>
            </Link>
            <div className="links">
              <a href=".#">{tOne}</a>
              <a href=".#">{tTwo}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Portfolio2griditem;
