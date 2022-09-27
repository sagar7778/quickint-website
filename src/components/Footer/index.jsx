/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Formik, Form, Field } from "formik";
import appData from "../../data/app.json";
import { useRouter } from "next/router";

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
    <footer className="footer-half sub-bg section-padding pb-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="cont">
              <div className="logo">
                <a onClick={() => router.push("/")}>
                  <img src={`${appData.darkLogo}`} alt="" />
                </a>
              </div>
              <div className="con-info custom-font">
                <ul>
                  <li>
                    <span>Email : </span>  quickintsolutions@gmail.com
                  </li>
                  <li>
                    <span>Address : </span> 417 Saffron Business Park, NR Jashodanagar Cross Rd, Ahmedabad, Gujarat 382445
                  </li>
                  <li>
                    <span>Phone : </span>  (+91) 9825866927
                  </li>
                </ul>
              </div>
              <div className="social-icon">
                <h6 className="custom-font stit simple-btn">Connect</h6>
                <div className="social">
                  <a href="https://www.upwork.com/o/companies/~01ac40e312f2bbadc2/" target="_blank" rel="noreferrer" className="icon">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="https://www.linkedin.com/company/quickint-solutions/" target="_blank" rel="noreferrer" className="icon">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="https://www.fiverr.com/" target="_blank" rel="noreferrer" className="icon">
                    <i className="fab fa-pinterest"></i>
                  </a>
                  </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-2">
            <div className="subscribe mb-50">
              <h6 className="custom-font stit simple-btn">GET IN TOUCH</h6>
              <p></p>
              <Formik
                initialValues={{
                  subscribe: "",
                }}
                onSubmit={async (values) => {
                  await sendEmail(500);
                  alert(JSON.stringify(values, null, 2));
                  // Reset the values
                  values.subscribe = "";
                }}
              >
                {({ errors, touched }) => (
                  <Form>
                    <div className="form-group custom-font">
                      <Field
                        validate={validateEmail}
                        type="email"
                        name="subscribe"
                        placeholder="Your Email"
                      />
                      {errors.email && touched.email && (
                        <div>{errors.email}</div>
                      )}
                      <button className="cursor-pointer">mail</button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
            
          </div>
        </div>
        <div className="copyrights text-center">
          <p>
            © 2022 Reserved by 
            <a onClick={() => router.push("/")}  style={{marginLeft: 5}}>Quickint Solutions</a>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
