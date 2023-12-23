import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Header.css";
import mainlogo from "../../assests/home_page/mainlogo.jpg";
import whatsapp from "../../assests/home_page/chatus.gif";
import call from "../../assests/home_page/cu4.gif";
import admission from "../../assests/home_page/adm.gif";

const Header = (props) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  const windowWidth = window.innerWidth;
  const topview = () => {
    if (windowWidth >= 768) {
      return (
        <div className="header-col2">
          <div className="header-col3">
            {/* <a
              className="header-col12"
              href="https://docs.google.com/forms/d/e/1FAIpQLSdhyUZrK-2UP8DbWgEn3M4bcYCtXG5tSyNUrbFYiDgRaAX2XQ/viewform?usp=sf_link"
            >
              <img src={admission} alt="" />
            </a> */}
            <li>
              <NavLink
                to="/Admission-form-iit-academy"
                className="header-col12"
              >
                <img src={admission} alt="" />
              </NavLink>
            </li>
          </div>
          <div className="header-col21">
            <a
              href="https://wa.me/918453307045?text=Chat With IIT Academy&utm_medium=&utm_campaign=&utm_term=&utm_content=&lang=en"
              className="navbar-brand"
            >
              <img src={whatsapp} alt="" />
            </a>
          </div>
          <div className="header-col22">
            <a href="tel:8453307045" className="navbar-brand">
              <img src={call} alt="" />
            </a>
          </div>
        </div>
      );
    }
    // Return null if the screen width is less than 768 pixels (mobile view)
    return null;
  };
  return (
    <>
      <div className="header" style={{ backgroundColor: "white" }}>
        <div className="row1">
          <div className="container-fluid">
            <div className="header-col1">
              <a className="navbar-brand" href="/" onClick={toggleMobileMenu}>
                <img src={mainlogo} alt="" />
              </a>
            </div>

            {topview()}
          </div>
        </div>

        <div className="row2">
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div
              className="container-fluid"
              style={{ backgroundColor: "#F39C12 " }}
            >
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarTogglerDemo01"
                aria-controls="navbarTogglerDemo01"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={toggleMobileMenu}
                style={{ color: "white", justifyContent: "center" }}
              >
                <span className="navbar-toggler-icon" />
                Menu
              </button>
              <div
                className={`collapse navbar-collapse ${
                  isMobileMenuOpen ? "show" : ""
                }`}
                id="navbarTogglerDemo01"
                class="collapse navbar-collapse"
              >
                <ul
                  className="navbar-nav mx-auto mb-2 mb-lg-0"
                  style={{
                    fontSize: "20px",
                    fontFamily: "comforta",
                    fontWeight: "bold",
                  }}
                >
                  <li
                    className="nav-item"
                    style={{
                      marginRight: "25px",
                    }}
                  >
                    <NavLink
                      to="/"
                      className="nav-link"
                      activeclassname="active"
                      style={{ color: "White" }}
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item dropdown hover">
                    <NavLink
                      className="nav-link dropdown-toggle"
                      href=""
                      role="button"
                      data-bs-toggle="dropdown"
                      style={{
                        border: "none",
                        marginLeft: "25px",
                        marginRight: "25px",
                        color: "White",
                      }}
                      aria-expanded="false"
                    >
                      About
                    </NavLink>
                    <ul className="dropdown-menu">
                      <li>
                        <NavLink
                          to="/about-iit-academy"
                          className="dropdown-item"
                        >
                          <i
                            className="fas fa-angle-double-right"
                            style={{ color: "#f39c12", marginRight: "5px" }}
                          ></i>
                          IIT Academy
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/director-message-iit-academy"
                          className="dropdown-item"
                        >
                          <i
                            className="fas fa-angle-double-right"
                            style={{ color: "#f39c12", marginRight: "5px" }}
                          ></i>
                          Welcome Message
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  <li
                    className="nav-item dropdown hover"
                    style={{ marginLeft: "25px", marginRight: "25px" }}
                  >
                    <NavLink
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      style={{ border: "none", color: "White" }}
                      aria-expanded="false"
                    >
                      Admission
                    </NavLink>
                    <ul className="dropdown-menu">
                      <li>
                        <NavLink to="/fees-structure" className="dropdown-item">
                          <i
                            className="fas fa-angle-double-right"
                            style={{ color: "#f39c12", marginRight: "5px" }}
                          ></i>
                          Fee Structure
                        </NavLink>
                      </li>

                      <li>
                        <NavLink
                          to="/our-policy-iit-academy"
                          className="dropdown-item"
                        >
                          <i
                            className="fas fa-angle-double-right"
                            style={{ color: "#f39c12", marginRight: "5px" }}
                          ></i>
                          Privacy policy
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  <li
                    className="nav-item dropdown hover"
                    style={{
                      marginLeft: "25px",
                      marginRight: "25px",
                      color: "white",
                      fontWeight: "bold",
                    }}
                  >
                    <NavLink
                      className="nav-link dropdown-toggle"
                      role="button"
                      data-bs-toggle="dropdown"
                      style={{ border: "none", color: "White" }}
                      aria-expanded="false"
                    >
                      Login Section
                    </NavLink>
                    <ul className="dropdown-menu">
                      <li>
                        <NavLink
                          to="/students-login-iit-academy"
                          className="dropdown-item"
                        >
                          <i
                            className="fas fa-angle-double-right"
                            style={{ color: "#f39c12", marginRight: "5px" }}
                          ></i>
                          Students
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/faculty-login-iit-academy"
                          className="dropdown-item"
                        >
                          <i
                            className="fas fa-angle-double-right"
                            style={{ color: "#f39c12", marginRight: "5px" }}
                          ></i>
                          Faculty
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  <li
                    className="nav-item dropdown hover"
                    style={{ marginLeft: "25px", marginRight: "25px" }}
                  >
                    <NavLink
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      style={{ border: "none", color: "White" }}
                      aria-expanded="false"
                    >
                      Result
                    </NavLink>
                    <ul className="dropdown-menu">
                      <li>
                        <div className="dropdown-item">
                          <i
                            className="fas fa-angle-double-right"
                            style={{ color: "#f39c12", marginRight: "5px" }}
                          ></i>
                          JEE-Mains
                        </div>
                      </li>

                      {/* NavLink to="/" */}
                      <li>
                        <div className="dropdown-item">
                          <i
                            className="fas fa-angle-double-right"
                            style={{ color: "#f39c12", marginRight: "5px" }}
                          ></i>
                          KVPY
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li
                    className="nav-item"
                    style={{
                      marginLeft: "25px",
                      fontWeight: "bold",
                    }}
                  >
                    <div
                      className="nav-link"
                      activeclassname="active"
                      style={{ color: "White" }}
                    >
                      Contact Us
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
