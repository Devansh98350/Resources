import React from "react";
import { FaRegKeyboard } from "react-icons/fa6";
import { FaHeadphones } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="container-fluid fullBlog-third">
      <h3>What to do next? Ask Our experts in a Free Counselling</h3>
      <p>
        A Legacy of Excellence in Classes for IIT-JEE | Medical. Now learn from
        the best teachers of India
      </p>
      <div className="button-container">
        <a
          href="https://www.iitacademy.in/Admission-form"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn">
            <FaRegKeyboard className="icon" />
            Enroll Now
          </button>
        </a>
        <a href="tel:9205704041">
          <button className="btn">
            <FaHeadphones className="icon" />
            Contact Us
          </button>
        </a>
      </div>
    </div>
  );
};

export default Banner;
