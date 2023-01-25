import React from "react";
import Split from "../Split";

const AboutIntro = () => {
  return (
    <section className="intro-section section-padding pb-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="htit sm-mb30">
              <h4>Who We Are ?</h4>
            </div>
          </div>
          <div className="col-lg-8 offset-lg-1 col-md-8">
            <div className="text">
              <Split>
                <p className="wow txt words chars splitting" data-splitting>
                We, as an enterprise, established back in 2021, with the motto of providing our digital expertise to people who want to innovate conventional methods of working and have a desire to add some technical features to their business. In addition to that, our key focus is to provide satisfactory work at an affordable rate. We are experts in React.js, Next.js, Node.js, Laravel, PHP, express.js, MongoDB, MySQL, AWS, typescript and many more.
                </p>
              </Split>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
