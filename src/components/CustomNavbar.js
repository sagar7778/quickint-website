import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Sticky from "react-stickynode";

class CustomNavbar extends Component {
  render() {
    var { mClass, nClass, cClass, slogo } = this.props;

    return (
      <Sticky top={0} innerZ={9999} activeClass="navbar_fixed">
        <header className="header_area">
          <nav className={`navbar navbar-expand-lg menu_one ${mClass}`}>
            <div className={`container ${cClass}`}>
              <NavLink className={`navbar-brand ${slogo}`} to="/">
                <img
                  src={require("../img/logo2.png")}
                  alt=""
                  style={{ width: "45%" }}
                />
                <img
                  src={require("../img/logo.png")}
                  alt="logo"
                  style={{ width: "45%" }}
                />
              </NavLink>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className={`navbar-nav menu ml-auto ${nClass}`}>
                  <li className="nav-item dropdown submenu mega_menu mega_menu_two">
                    <NavLink title="Home" className="nav-link" to="/Home">
                      HOME
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink
                      title="AboutUs"
                      className="nav-link"
                      to="/About"
                      style={{ width: 75 }}
                    >
                      ABOUT US
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink
                      title="Portfolio"
                      className="nav-link"
                      to="/Portfolio"
                    >
                      PORTFOLIO
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink title="Careers" className="nav-link" to="/Career">
                      CAREERS
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink
                      title="Countactus"
                      className="nav-link"
                      to="/Contact"
                      style={{ width: 100 }}
                    >
                      CONTACT US
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </Sticky>
    );
  }
}

export default CustomNavbar;
