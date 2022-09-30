/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Formik, Form, Field } from "formik";
import appData from "../../data/app.json";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();

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
                    <span>Email : </span> quickintsolutions@gmail.com
                  </li>
                  <li>
                    <span>Address : </span> 417 Saffron Business Park,
                    NR Jashodanagar Cross Rd, Ahmedabad, Gujarat
                    382445
                  </li>
                  <li>
                    <span>Phone : </span> (+91) 9825866927
                  </li>
                </ul>
              </div>
              <div className="social-icon">
                <h6 className="custom-font stit simple-btn">
                  SOCIALS
                </h6>

                <div className="social">
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
            </div>
          </div>
          <div className="col-lg-5 offset-lg-2">
            <div className="subscribe mb-50">
              <h6 className="custom-font stit simple-btn">
                GET IN TOUCH
              </h6>
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
            <a
              onClick={() => router.push("/")}
              style={{ marginLeft: 5 }}
            >
              Quickint Solutions
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
