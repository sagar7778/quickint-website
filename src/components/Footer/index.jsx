/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Formik, Form, Field } from "formik";
import appData from "../../data/app.json";
import { useRouter } from "next/router";
import { SiFiverr, SiLinkedin, SiUpwork } from "react-icons/si";

const Footer = () => {
  const router = useRouter()

  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  }
  const sendEmail = (ms) => new Promise((r) => setTimeout(r, ms));
  return (
    <>
    <section className="contact section-padding" style={{display: 'flex'}}>
      <div className="container">
        <div className="row">
          
          <div className="col-lg-6 offset-lg-3">
            <div className="cont-info">
              <h4 className="extra-title mb-50">Contact Info.</h4>
              <h3 className="custom-font wow" data-splitting>
                Let&apos;s Talk.
              </h3>
              <div className="item mb-40">
                <h5>
                  <a href="mailto:info@quickint.in"> info@quickint.in</a>
                </h5>
                <a href="tel:(+91) 9825866927">+91 98258 66927</a>
              </div>
              <h3 className="custom-font wow" data-splitting>
                Visit Us.
              </h3>
              <div className="item">
                <h6>
                      417 Saffron Business Park, NR Jashodanagar
                  <br />
                      Ahmedabad, Gujarat 382445
                </h6>
              </div>
              <div className="social mt-50">
              <a href="https://www.linkedin.com/company/quickint-solutions/" target="_blank" rel="noreferrer" className="icon"> 
              <SiLinkedin /> </a>
               <a href="https://www.upwork.com/o/companies/~01ac40e312f2bbadc2" target="_blank" rel="noreferrer" className="icon"> 
               <SiUpwork /> 
              </a> 
              <a href="https://www.fiverr.com/" target="_blank" rel="noreferrer" className="icon"> 
              <SiFiverr /> 
              </a>
                {/* <a href="#0" className="icon">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#0" className="icon">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#0" className="icon">
                  <i className="fab fa-pinterest"></i>
                </a>
                <a href="#0" className="icon">
                  <i className="fab fa-behance"></i>
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="col-lg-6" style={{marginRight:"10%"}}>
            <div className="form md-mb50">
              <h4 className="extra-title mb-50">Get In Touch.</h4>

              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  message: "",
                }}
                onSubmit={async (values) => {
                  await sendMessage(500);
                  alert(JSON.stringify(values, null, 2));
                  // show message

                  messageRef.current.innerText =
                    "Your Message has been successfully sent. I will contact you soon.";
                  // Reset the values
                  values.name = "";
                  values.email = "";
                  values.message = "";
                  // clear message
                  setTimeout(() => {
                    messageRef.current.innerText = "";
                  }, 2000);
                }}
              >
                {({ errors, touched }) => (
                  <Form id="contact-form">

                    <div className="controls">
                      <div className="form-group">
                        <Field
                          id="form_name"
                          type="text"
                          name="name"
                          placeholder="Name"
                          required="required"
                        />
                      </div>
                      <div className="form-group">
                        <Field
                          id="form_number"
                          name="number"
                          placeholder="Contact No."
                          required="required"
                         
                        />
                      </div>
                      <div className="form-group">
                        <Field
                          validate={validateEmail}
                          id="form_email"
                          type="email"
                          name="email"
                          placeholder="Email"
                          required="required"
                        />
                        {errors.email && touched.email && (
                          <div>{errors.email}</div>
                        )}
                      </div>

                      <div className="form-group">
                        <Field
                          as="textarea"
                          id="form_message"
                          name="message"
                          placeholder="Message"
                          rows="4"
                          required="required"
                        />
                      </div>

                      <button type="submit" className="btn-curve btn-lit">
                        <span>Send Message</span>
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
    </section>
    <div className="map" id="ieatmaps">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.092651333545!2d72.6224723148699!3d22.983620223550485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e87091e60d2cf%3A0xb7f883dd2c61cb5a!2sQuickint%20Solutions!5e0!3m2!1sen!2sin!4v1672826104529!5m2!1sen!2sin"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"s
      ></iframe>
    </div>

    <footer className="footer-half sub-bg">
      <div className="container">
        <div className="copyrights text-center mt-0">
          <p>
            © 2022 Reserved by 
            <a onClick={() => router.push("/")}  style={{marginLeft: 5}}>Quickint Solutions</a>.
          </p>
        </div>
      </div>
    </footer>
  </>
  );
};

export default Footer;
