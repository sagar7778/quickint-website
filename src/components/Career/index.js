import React, { Component } from "react";
import CustomNavbar from "../CustomNavbar";
import Breadcrumb from "../Breadcrumb";
import FooterTwo from "../Footer/FooterTwo";
import FooterData from "../Footer/FooterData";
import Base_URL from "../../BaseURL";


class Career extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      phoneNumber: "",
      message: "",
      myFile: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitForm = (e) => {
    const { name, email, phoneNumber, message, myFile } = this.state;
    const params = {
      name: name,
      email: email,
      phoneNumber: phoneNumber,
      message: message,
      myFile: myFile,
    };

    fetch(Base_URL + "/api/career", {
      method: "POST",
      body: JSON.stringify(params),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert("Done");
        // Handle data
      })
      .catch((err) => {
        console.log(err.message);
      });

    //reset the fields
    this.setState({
      name: "",
      email: "",
      message: "",
      emailStatus: "",
    });
    e.preventDefault();
  };

  render() {
    return (
      <div className="body_wrapper">
        <CustomNavbar
          slogo="sticky_logo"
          mClass="menu_four"
          nClass="w_menu ml-auto mr-auto"
        />
        <Breadcrumb
          breadcrumbClass="breadcrumb_area"
          imgName="breadcrumb/banner_bg.png"
          Ptitle="Career"
          Pdescription=" Join our team by dropping your resume here and get a chance to work with us."
        />

        <section className="contact_info_area sec_pad bg_color">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div className="contact_info_item">
                  <h6 className="f_p f_size_20 t_color3 f_500 mb_20">
                    Office Address
                  </h6>
                  <p className="f_400 f_size_15">
                    417 Saffron Business Park, Jashodanagar Cross Road,
                    Ahmedabad- 382445.
                  </p>
                </div>
                <div className="contact_info_item">
                  <h6 className="f_p f_size_20 t_color3 f_500 mb_20">
                    Contact Info
                  </h6>
                  <p className="f_400 f_size_15">
                    <span className="f_400 t_color3">Phone:</span>{" "}
                    <a href="tel:3024437488">(+91) 9825866927</a>
                  </p>
                  <p className="f_400 f_size_15">
                    <span className="f_400 t_color3">Email:</span>{" "}
                    <a href="mailto:info@quickint.in">
                    info@quickint.in
                    </a>
                  </p>
                </div>
              </div>
              <div className="contact_form col-lg-9">
                <h2 className="f_p f_size_22 t_color3 f_600 l_height28 mb_40">
                  Leave a Message
                </h2>
                <form
                  onSubmit={this.submitForm}
                  className="contact_form_box"
                  method="post"
                  id="contactForm"
                >
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group text_box">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          placeholder="Your Name"
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group text_box">
                        <input
                          type="text"
                          name="email"
                          id="email"
                          placeholder="Your Email Address"
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group text_box">
                        <input
                          type="text"
                          name="phoneNumber"
                          id="phoneNumber"
                          placeholder="Your Phone Number"
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group text_box">
                        <textarea
                          onChange={this.handleChange}
                          name="message"
                          id="message"
                          cols="30"
                          rows="10"
                          placeholder="Enter Your Message . . ."
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group text_box">
                        <label htmlFor="contained-button-file">
                          <input
                            type="file"
                            id="myFile"
                            name="myFile"
                            onChange={this.handleChange}
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                  <button type="submit" className="btn_three">
                    Send Message
                  </button>
                </form>
                {/* {emailStatus ? emailStatus : null} */}
                <div id="success">Your message succesfully sent!</div>
                <div id="error">
                  Opps! There is something wrong. Please try again
                </div>
              </div>
            </div>
          </div>
        </section>

        <FooterTwo FooterData={FooterData} />
      </div>
    );
  }
}

export default Career;
