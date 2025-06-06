import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer-outer-wrapper">
          <div className="footer-inner-wrapper">
            <div className="footer-col">
              <div className="footer-row">
                <h2>Corporate Office</h2>
                <p>
                  Sobha Sadan
                  <br />
                  Veer Kunwar Singh Colony
                  <br />
                  Kashipur, Samastipur, Bihar
                  <br />
                  India – 848101
                </p>
                <p>
                  Email:-
                  <a href="mailto:info@iitacademy.in"> info@iitacademy.in</a>
                </p>
                <p>
                  Ph:-
                  <a href="tel:9205704041">+91-9205704041</a>
                </p>
              </div>
              <div className="footer-row">
                <p className="text-center mt-3">
                  <a
                    href="https://www.instagram.com/iit_academy2.0/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className="linkedin-icon"
                    />
                  </a>{" "}
                  <a
                    href="https://www.linkedin.com/company/iit-aacademy/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      className="linkedin-icon"
                    />
                  </a>{" "}
                  <a
                    href="https://www.facebook.com/profile.php?id=100095357977617"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faFacebook}
                      className="linkedin-icon"
                    />
                  </a>{" "}
                  <a
                    href="mailto:info@iitacademy.in"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="linkedin-icon"
                    />
                  </a>{" "}
                  <a
                    href="tel:9205704041"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faPhone} className="linkedin-icon" />
                  </a>{" "}
                  <a
                    href="https://wa.me/919205704041?text=I have a query.&utm_medium=&utm_campaign=&utm_term=&utm_content=&lang=en"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faWhatsapp}
                      className="whatsapp-icon"
                    />
                  </a>
                </p>
              </div>
            </div>
            <div className="footer-col">
              <h2 style={{ textAlign: "center" }}>Main Website</h2>
              <p>
                <Link to="https://www.iitacademy.in/Admission-form">
                  Apply Online
                </Link>
              </p>
              <p>
                <Link to="https://www.iitacademy.in/fees-structure">
                  Fee Structure
                </Link>
              </p>
              <p>
                <a
                  href="https://www.iitacademy.in/board-batches"
                  rel="noopener noreferrer"
                >
                  Board Batches
                </a>
              </p>
              <p>
                <a
                  href="https://www.iitacademy.in/engineering-batches"
                  rel="noopener noreferrer"
                >
                  Engineering Batches
                </a>
              </p>
              <p>
                <a
                  href="https://www.iitacademy.in/medical-batches"
                  rel="noopener noreferrer"
                >
                  Medical Batches
                </a>
              </p>
              <p>
                <a
                  href="https://www.iitacademy.in/foundation-batches"
                  rel="noopener noreferrer"
                >
                  Foundation Batches
                </a>
              </p>
              <p>
                <Link to="https://www.iitacademy.in/careers">Careers</Link>
              </p>
            </div>
            <div className="footer-col">
              <h2 style={{ textAlign: "center" }}>Quick Links</h2>
              <p>
                <Link to="/pyq/neet">NEET PYQ</Link>
              </p>
              <p>
                <Link to="/books/ncert">NCERT Books</Link>
              </p>
              <p>
                <Link to="/pyq/jee-main">JEE Mains PYQ</Link>
              </p>
              <p>
                <Link to="/books/jee">JEE (Mains+Adv.) Books</Link>
              </p>
              <p>
                <Link to="/pyq/jee-advanced">JEE Advanced PYQ</Link>
              </p>
              <p>
                <a
                  href="https://www.internship.iitacademy.in"
                  rel="noopener noreferrer"
                >
                  Internships
                </a>
              </p>
              <p>
                <a
                  href="https://www.counselling.iitacademy.in"
                  rel="noopener noreferrer"
                >
                  Counselling
                </a>
              </p>
              {/* <p>
                <Link to="https://www.counselling.iitacademy.in/">
                  Counseling
                </Link>
              </p>
              */}
            </div>
          </div>
          <div
            className="footer-row"
            style={{
              color: "orange",
              fontSize: "20px",
              fontWeight: "bold",
              marginTop: "5px",
            }}
          >
            All Rights Reserved @ IIT Academy 2024
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
