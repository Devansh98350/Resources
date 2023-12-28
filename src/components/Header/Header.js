import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Header.css";
import mainlogo from "../../assests/home_page/mainlogo.jpg";
// import call from "../../assests/home_page/cu4.gif";
import LanguageDropdown from "../Layout/Dropdown";

const Header = (props) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  const windowWidth = window.innerWidth;
  const topview = () => {
    if (windowWidth >= 768) {
      return <LanguageDropdown />;
    }
    return null;
  };
  const topview1 = () => {
    if (windowWidth >= 768) {
      return (
        <div className="header-col1">
          <a className="navbar-brand" href="/" onClick={toggleMobileMenu}>
            <img src={mainlogo} alt="" />
          </a>
        </div>
      );
    }
    return null;
  };
  return (
    <>
      <div className="header" style={{ backgroundColor: "white" }}>
        {windowWidth < 768 && (
          <div className="row1">
            <div className="container-fluid">
              <div className="header-col1">
                <a className="navbar-brand" href="/" onClick={toggleMobileMenu}>
                  <img src={mainlogo} alt="" />
                </a>
              </div>
            </div>
          </div>
        )}
        <div className="row2">
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div
              className="container-fluid"
              style={{
                backgroundColor: "white ",
                borderBottom: "3px solid orange",
              }}
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
                style={{ color: "orange", justifyContent: "center" }}
              >
                <span className="navbar-toggler-icon" />
                Menu
              </button>{" "}
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
                  {topview1()}
                  <li
                    className="nav-item"
                    style={{
                      marginRight: "25px",
                      marginLeft: "25px",
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
                        marginLeft: "33px",
                        marginRight: "25px",
                        color: "White",
                      }}
                      aria-expanded="false"
                    >
                      Previous Year Question
                    </NavLink>
                    <ul className="dropdown-menu">
                      <li>
                        <NavLink
                          to="/pyq-jee-main-iit-academy"
                          className="dropdown-item"
                        >
                          <i
                            className="fas fa-angle-double-right"
                            style={{ color: "#f39c12", marginRight: "5px" }}
                          ></i>
                          JEE-Main
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/pyq-jee-advanced-iit-academy"
                          className="dropdown-item"
                        >
                          <i
                            className="fas fa-angle-double-right"
                            style={{ color: "#f39c12", marginRight: "5px" }}
                          ></i>
                          JEE_Advanced
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/pyq-neet-iit-academy"
                          className="dropdown-item"
                        >
                          <i
                            className="fas fa-angle-double-right"
                            style={{ color: "#f39c12", marginRight: "5px" }}
                          ></i>
                          NEET
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/pyq-cbse-boards-iit-academy"
                          className="dropdown-item"
                        >
                          <i
                            className="fas fa-angle-double-right"
                            style={{ color: "#f39c12", marginRight: "5px" }}
                          ></i>
                          CBSE Boards
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/pyq-ntse-iit-academy"
                          className="dropdown-item"
                        >
                          <i
                            className="fas fa-angle-double-right"
                            style={{ color: "#f39c12", marginRight: "5px" }}
                          ></i>
                          NTSE
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/pyq-kvpy-iit-academy"
                          className="dropdown-item"
                        >
                          <i
                            className="fas fa-angle-double-right"
                            style={{ color: "#f39c12", marginRight: "5px" }}
                          ></i>
                          KVPY
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown hover">
                    <NavLink
                      className="nav-link dropdown-toggle"
                      href=""
                      role="button"
                      data-bs-toggle="dropdown"
                      style={{
                        border: "none",
                        marginLeft: "33px",
                        marginRight: "25px",
                        color: "White",
                      }}
                      aria-expanded="false"
                    >
                      Exams
                    </NavLink>
                    <ul className="dropdown-menu">
                      <li>
                        <NavLink
                          to="/exam-jee-main-iit-academy"
                          className="dropdown-item"
                        >
                          <i
                            className="fas fa-angle-double-right"
                            style={{ color: "#f39c12", marginRight: "5px" }}
                          ></i>
                          JEE-Main
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/exam-jee-advanced-iit-academy"
                          className="dropdown-item"
                        >
                          <i
                            className="fas fa-angle-double-right"
                            style={{ color: "#f39c12", marginRight: "5px" }}
                          ></i>
                          JEE_Advanced
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/exam-neet-iit-academy"
                          className="dropdown-item"
                        >
                          <i
                            className="fas fa-angle-double-right"
                            style={{ color: "#f39c12", marginRight: "5px" }}
                          ></i>
                          NEET
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/exam-ntse-iit-academy"
                          className="dropdown-item"
                        >
                          <i
                            className="fas fa-angle-double-right"
                            style={{ color: "#f39c12", marginRight: "5px" }}
                          ></i>
                          NTSE
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/exam-kvpy-iit-academy"
                          className="dropdown-item"
                        >
                          <i
                            className="fas fa-angle-double-right"
                            style={{ color: "#f39c12", marginRight: "5px" }}
                          ></i>
                          KVPY
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown hover">
                    <NavLink
                      className="nav-link dropdown-toggle"
                      href=""
                      role="button"
                      data-bs-toggle="dropdown"
                      style={{
                        border: "none",
                        marginLeft: "33px",
                        marginRight: "25px",
                        color: "White",
                      }}
                      aria-expanded="false"
                    >
                      Syllabus
                    </NavLink>
                    <ul className="dropdown-menu">
                      <li>
                        <NavLink
                          to="/syllabus-jee-main-iit-academy"
                          className="dropdown-item"
                        >
                          <i
                            className="fas fa-angle-double-right"
                            style={{ color: "#f39c12", marginRight: "5px" }}
                          ></i>
                          JEE-Main
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/syllabus-jee-advanced-iit-academy"
                          className="dropdown-item"
                        >
                          <i
                            className="fas fa-angle-double-right"
                            style={{ color: "#f39c12", marginRight: "5px" }}
                          ></i>
                          JEE_Advanced
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/syllabus-neet-iit-academy"
                          className="dropdown-item"
                        >
                          <i
                            className="fas fa-angle-double-right"
                            style={{ color: "#f39c12", marginRight: "5px" }}
                          ></i>
                          NEET
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/syllabus-cbse-boards-iit-academy"
                          className="dropdown-item"
                        >
                          <i
                            className="fas fa-angle-double-right"
                            style={{ color: "#f39c12", marginRight: "5px" }}
                          ></i>
                          CBSE Boards
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/syllabus-ntse-iit-academy"
                          className="dropdown-item"
                        >
                          <i
                            className="fas fa-angle-double-right"
                            style={{ color: "#f39c12", marginRight: "5px" }}
                          ></i>
                          NTSE
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/syllabus-kvpy-iit-academy"
                          className="dropdown-item"
                        >
                          <i
                            className="fas fa-angle-double-right"
                            style={{ color: "#f39c12", marginRight: "5px" }}
                          ></i>
                          KVPY
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
                      Books
                    </NavLink>
                    <ul className="dropdown-menu">
                      <li>
                        <NavLink
                          to="/ncert-books-iit-academy"
                          className="dropdown-item"
                        >
                          <i
                            className="fas fa-angle-double-right"
                            style={{ color: "#f39c12", marginRight: "5px" }}
                          ></i>
                          NCERT
                        </NavLink>
                      </li>

                      <li>
                        <NavLink
                          to="/jee(mains+advanced)-books-iit-academy"
                          className="dropdown-item"
                        >
                          <i
                            className="fas fa-angle-double-right"
                            style={{ color: "#f39c12", marginRight: "5px" }}
                          ></i>
                          Jee(Mains+Advanced)
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/neet-books-iit-academy"
                          className="dropdown-item"
                        >
                          <i
                            className="fas fa-angle-double-right"
                            style={{ color: "#f39c12", marginRight: "5px" }}
                          ></i>
                          NEET
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  {topview()}
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
