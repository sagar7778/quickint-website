import React from "react";

const Portfoliosingle = (props) => {
  const { projectDetails } = props;

  return (
    <section className="portfolio_details_area sec_pad">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="portfolio_details_info pr_50">
              <h5 className="f_700 f_p f_size_20 t_color3 mb-30">
                {projectDetails.ptitle}
              </h5>
              <p className="f_400 f_size_15 mb-0">
                {projectDetails.aboutProject}
              </p>
              <div className="portfolio_category mt_60">
                <div className="p_category_item mb-30">
                  <h6 className="f_p f_size_15 f_400 t_color3 mb-0 l_height28">
                    Client:
                  </h6>
                  <p className="f_size_15 f_400 mb-0">
                    {projectDetails.client}
                  </p>
                </div>
                <div className="p_category_item mb-30">
                  <h6 className="f_p f_size_15 f_400 t_color3 mb-0 l_height28">
                    Date:
                  </h6>
                  <p className="f_size_15 f_400 mb-0">{projectDetails.date}</p>
                </div>
                <div className="p_category_item mb-30">
                  <h6 className="f_p f_size_15 f_400 t_color3 mb-0 l_height28">
                    Website:
                  </h6>
                  <a
                    className="f_size_15 f_400 mb-0"
                    href={projectDetails.website}
                    target="_blank"
                  >
                    {projectDetails.website}
                  </a>
                </div>
                <div className="p_category_item mb-30">
                  <h6 className="f_p f_size_15 f_400 t_color3 mb-0 l_height28">
                    Services:
                  </h6>
                  <p className="f_size_15 f_400 mb-0">
                    {projectDetails.services}
                  </p>
                </div>
              </div>

              <div className="portfolio_pagination mt_100">
                <a href=".#" className="prev">
                  <i className="ti-arrow-left"></i>Prev Project
                </a>
                <a href=".#" className="next">
                  Next Project<i className="ti-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="portfolio_details_gallery">
              {projectDetails.projectImgs.map((item) => {
                return <img className="img-fluid mb_20" src={item} alt="" />;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Portfoliosingle;
