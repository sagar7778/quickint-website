/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { Formik, Form, Field } from "formik";

const blog2 = () => {
  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ) {
      error = "Invalid email address";
    }
    return error;
  }
  const sendComment = (ms) => new Promise((r) => setTimeout(r, ms));
  return (
    <section className="blog-pg single section-padding pt-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="post">
              <div className="img">
                <img src="/img/blog/agri.png" alt="" />
              </div>
              <div className="content pt-20">
                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    <div className="cont">
                      <div className="spacial">
                        <p>
                          For the industry to progress and for UK
                          manufacturers to compete with foreign
                          manufacturers in Germany and Japan, it is
                          essential that big data be used in advanced
                          manufacturing. But it's obvious that there
                          is a lot of misunderstanding surrounding the
                          topic, which is why we (Valuechain) joined
                          up with ADS and a number of other partners
                          to demystify Big Data and reveal the
                          potential benefits it can bring to
                          organisations.
                        </p>
                      </div>
                      <p>
                        ‘Big Data’ is pointless without the analytics
                        to process, reduce, fuse and analyse it. It is
                        key to distil out the ‘actionable information’
                        from the haystack of data. Manufacturers
                        collect a lot of data and can use sensors to
                        collect it in a variety of different areas
                        within their business. Ranging from simple
                        indexing and counting devices to process
                        monitoring, to measuring the performance of
                        machines or people. It is clear that sensor
                        measurements and corresponding data generation
                        is only going to increase exponentially. When
                        an advanced manufacturer is able to harness
                        and exploit this data, a huge competitive
                        advantage can be gained.
                      </p>

                      <h6>- The fundamentals of IoT</h6>

                      <p>
                        The fundamentals of IoT in farming and smart
                        farming IoT solutions are essentially designed
                        to support farmers by giving them timely
                        information that might aid in important
                        choices. IoT in agriculture often consists of
                        software and IT services, specialised
                        equipment, and wireless connectivity. Farmers
                        may monitor soil quality and get important
                        climatic data on rainfall, humidity levels,
                        pollutants, and much more by utilising smart
                        equipment like IoT sensors. This finally
                        enables them to base their distribution,
                        planting, and harvesting decisions on precise
                        scientific data. IoT technology in the
                        agriculture industry is predicted to develop
                        at a CAGR of 14.7% by 2025, on a worldwide
                        scale.
                      </p>
                      <p>
                        While the benefits that can be brought to
                        advanced manufacturing supply chains, through
                        the analysis of big data are clear, there are
                        also some challenges, and inhibitors, that
                        must be overcome to unlock the potential of
                        big data. That is why I put together this
                        post, to help you navigate Big Data, and
                        ensure you are able to use it to your full
                        advantage.
                      </p>
                      <p>
                        I will begin by describing some of the drivers
                        for change and the role big data can play. I
                        will explain what we mean by supply chain big
                        data in this context, the enablers for big
                        data and the inhibitors that have prevented
                        supply chains from exploiting technologies
                        that already exist. I will offer some
                        solutions to overcome these obstacles and
                        propose opportunities that companies here
                        today can benefit from.
                      </p>
                      <h4>Drivers for Change - 5Cs</h4>
                      <ul>
                        <li>
                          <span>01</span> Complexity Tiering and
                          justification
                          <p>
                            Aerospace and defence supply networks are
                            by their very nature complicated. The
                            implementation of multi-tier supply chains
                            and supplier rationalisation initiatives
                            have made this situation worse. In order
                            to better manage the complexity of
                            multi-tier supply chains, responsibility
                            has traditionally been delegated to the
                            layer below rather than being addressed
                            internally. This has resulted in a supply
                            chain knowledge that is very fragmented,
                            which affects network agility and overall
                            performance.
                          </p>
                        </li>
                        <li>
                          <span>02</span> Commercial: Global Offset &
                          Low Cost
                          <p>
                            Secondly, Commercial drivers for aerospace
                            and defence OEMs are creating new global
                            challenges. Initially, OEMs were seeking
                            advantages from low-cost labour countries
                            like India, China, Mexico and Eastern
                            Europe. However, few companies truly
                            benefited from the full cost of
                            acquisition reductions they were seeking,
                            and lots of this comes right down to a
                            scarcity of information and communication.
                            From supplier selection, supplier
                            development, collaborative NPI and work
                            package management; the cultural and
                            logistical challenges exacerbated supply
                            chain inefficiencies.
                          </p>
                          <p>
                            More recently, OEMs haven't only sought
                            lower cost from emerging supply chains,
                            but are now seeking new customers from
                            growing economies in Brazil, Russia, India
                            and China for instance. However, OEMs must
                            establish supply chains in these emerging
                            economies as a part of their offset
                            obligations, and massive Data is crucial
                            to their success.
                          </p>
                          <p>
                            To establish supply chains overseas, OEMs
                            may conceive to moving large work packages
                            to emerging economies. However, the
                            multi-tier complexity of their existing
                            supply chains makes it challenging to know
                            exactly what technical capabilities and
                            quality approvals are required, to
                            successfully establish a sustainable
                            supply chain.
                          </p>
                          <p>
                            Furthermore, it's really complex and
                            challenging to map existing supply chains
                            onto an unknown supply chain in an
                            emerging economy where the availability
                            chain capability and structure is totally
                            different.
                          </p>
                        </li>
                        <li>
                          <span>03</span> Capabilities: Emerging
                          Technologies
                          <p>
                            A third driver within the Aerospace and
                            Defence supply chain, is that
                            manufacturing technologies and materials
                            are changing. the foremost prominent
                            emerging technologies, relevant to the
                            current sector, include composites, which
                            is growing rapidly, and additive
                            manufacturing, which remains relatively
                            nascent. it's thought that by implementing
                            these technologies, OEMs are ready to gain
                            a competitive advantage, either in fuel
                            efficiency, or responsive, aftermarket
                            service.
                          </p>
                          <p>
                            However, as OEMs seek to determine these
                            technologies in their supply chains,
                            they're going to must find innovative
                            suppliers. OEM procurement and supplier
                            development teams only know what they
                            know. Big Data can help them to spot what
                            they don’t know or, more specifically,
                            which suppliers they ought to know.
                          </p>
                        </li>
                        <li>
                          <span>04</span> Capabilities: Growing
                          Industry
                          <p>
                            The significant growth in build rates has
                            meant that global demand is outstripping
                            supply. Therefore, organic growth of
                            existing supply chains is constraining
                            growth. this implies that OEMs must
                            identify new suppliers to extend capacity.
                            However, the present process for OEMs to
                            pick new suppliers is incredibly risky,
                            with minimal performance related
                            information available. there's currently
                            no way of know if the potential suppliers
                            are strategically aligned, and have the
                            correct technical capability and
                            performance levels. Big data can,
                            therefore, play a vital role to cut back
                            supply chain selection risk.
                          </p>
                        </li>
                        <li>
                          <span>05</span> Competition: Cost-Sensitive
                          <p>
                            The fifth driver, is that the competitive
                            pressures that OEMs are under to cut back
                            supply chain costs, whilst improving
                            customer service levels. there's only such
                            a lot that may be achieved through price
                            negotiation with suppliers, and
                            sustainable cost competitiveness can only
                            be achieved through waste reduction.
                          </p>
                          <p>
                            While lean and agile improvement
                            programmes are deployed at many tiers
                            within the supply chain to cut back waste;
                            most activity has been focussed within the
                            four walls of factories. the matter, is
                            that the foundation reason for most waste
                            and inefficiencies come from volatile
                            customer demand and unreliable sub-tier
                            deliveries. Big Data can enable multi-tier
                            supply chains to streamline communication
                            so they'll improve planning, increase
                            resource utilisation and reduce inventory
                            levels, amongst other things.
                          </p>
                          <p>
                            we have the technology and analytical
                            modelling to unlock the potential of
                            massive data in supply chain management.
                            Cloud and mobile technologies are
                            connecting the planet – examine how social
                            networks have transformed from one-to-many
                            communication to many-to-many. Why can’t
                            this approach be applied to manufacturing
                            supply chains? it's now much easier to
                            access data from disparate systems through
                            application programming interfaces. And
                            supercomputers can process huge data sets
                            instantly that only some years ago, would
                            have taken hours.
                          </p>
                          <p>
                            Big data analytics is rife, everywhere we
                            glance from financial marketing research
                            to your Tesco Clubcard. The algorithms and
                            simulation models exist to produce
                            predictive analytics, which might be
                            visualised intuitively to support
                            deciding.
                          </p>
                          <p>
                            However, big data analytics continues to
                            be not being applied effectively to
                            advanced manufacturing supply chains.
                          </p>
                        </li>
                      </ul>
                      <span>Valuechain’s Solution</span>
                      <p>
                        Our approach to deal with data integrity
                        issues has been to develop ERP systems that
                        are configured to the DNA of SMEs, in order
                        that they will be effectively deployed at low
                        disruption and value. we offer continuous
                        training, customer support and data integrity
                        monitoring to drive data accuracy. Many
                        companies don't want to vary their ERP system
                        thanks to the disruption costs and risks, so
                        we've got also developed several bolt-on
                        applications to boost data accuracy,
                        transparency and sharing.
                      </p>
                      <p>
                        To address the cultural challenges, it's
                        critical to spot win-win opportunities, and
                        answer the question ‘what’s in it for me?’ for
                        each tier of the provision chain. As companies
                        start to interact, and generate tangible
                        benefits from securely sharing data, with
                        selected supply chain partners, then it'll
                        encourage them to collaborate more openly with
                        their partners.
                      </p>
                      <p>
                        Of our bolt-on applications, there are
                        currently 3 dedicated to improving the
                        management of massive data in supply chains.
                      </p>
                      <p>
                        OpenBook monitors customer performance and
                        identifies schedule change exceptions;
                      </p>
                      <p>
                        VMI integrates with customer and supplier ERP
                        systems to streamline stock replenishment and
                        invoicing; and
                      </p>
                      <p>
                        NPI enables companies to collaborate with
                        their customers and suppliers to share
                        technical and operational data.
                      </p>
                      <p>
                        Through these, and our further apps,
                        Valuechain has developed an eco-system to
                        enable manufacturing supply chains to attach,
                        collaborate and improve competitiveness, which
                        is underpinned by big data.
                      </p>

                      <div className="quotes text-center">
                        <p>
                          Soil: Because crops may only be as excellent
                          as the soil they are grown in, soil quality
                          is very important in farming and
                          agriculture. In order to monitor soil
                          quality and test for nutrient levels
                          (nitrogen, phosphorus, and potassium), ph
                          levels, moisture, and much more, IoT-based
                          sensors are buried in the ground. With the
                          greatest and most accurate information
                          available, all of this information can
                          provide farmers the tools they need to boost
                          yields, farm production, and efficiency.
                        </p>
                      </div>
                      <div className="row">
                        <div className="col-md-6"></div>
                        <div className="col-md-6"></div>
                      </div>

                      <div className="share-info">
                        <div className="social">
                          <a href="#0">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                          <a href="#0">
                            <i className="fab fa-twitter"></i>
                          </a>
                          <a href="#0">
                            <i className="fab fa-behance"></i>
                          </a>
                        </div>
                        <div className="tags">
                          <a href="#0">Web</a>,<a href="#0"></a>,
                          <a href="#0"></a>
                        </div>
                      </div>
                    </div>
                    <div className="author">
                      <div className="author-img">
                        <img src="/img/blog/agri.png" alt="" />
                      </div>
                      <div className="info">
                        <h6>
                          <span>author :</span> Neel
                        </h6>
                        <p>
                          the main component of a healthy environment
                          for self esteem is that it needs be
                          nurturing. The main compont of a healthy
                          environment.
                        </p>
                        <div className="social">
                          <a href="#0">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                          <a href="#0">
                            <i className="fab fa-twitter"></i>
                          </a>
                          <a href="#0">
                            <i className="fab fa-behance"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pagination">
                <span>
                  <a href="#0">Prev Post</a>
                </span>
                <span className="icon">
                  <Link href="/blog/blog-dark">
                    <a>
                      <i className="fas fa-th-large"></i>
                    </a>
                  </Link>
                </span>
                <span className="text-right">
                  <a href="#0">Next Post</a>
                </span>
              </div>

              <div className="comments-area">
                <h5>Comments :</h5>
                <div className="item">
                  <div className="info">
                    <h6>
                      Aman patel - <span> 6 apr 2022</span>
                    </h6>
                    <span className="replay">
                      <a href="#0">
                        Replay <i className="fas fa-reply"></i>
                      </a>
                    </span>
                    <p>
                      the main component of a healthy environment for
                      self esteem is that it needs be nurturing. The
                      main compont of a healthy environment.
                    </p>
                  </div>
                </div>
              </div>

              <div className="comment-form">
                <h5>Add Comment :</h5>
                <div className="form">
                  <Formik
                    initialValues={{
                      name: "",
                      email: "",
                      comment: "",
                    }}
                    onSubmit={async (values) => {
                      await sendComment(500);
                      alert(JSON.stringify(values, null, 2));

                      // Reset the values
                      values.name = "";
                      values.email = "";
                      values.comment = "";
                    }}
                  >
                    {({ errors, touched }) => (
                      <Form>
                        <div className="row">
                          <div className="col-12">
                            <div className="form-group">
                              <Field
                                as="textarea"
                                placeholder="Your Comment"
                                name="comment"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <Field
                                type="text"
                                placeholder="Your Name"
                                name="name"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <Field
                                type="email"
                                validate={validateEmail}
                                placeholder="Your Email"
                                name="email"
                              />
                              {errors.email && touched.email && (
                                <div>{errors.email}</div>
                              )}
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-group">
                              <button className="btn-curve btn-color btn-lg">
                                <span>Submit</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default blog2;
