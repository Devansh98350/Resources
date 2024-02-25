import React, { useEffect } from "react";
import Layout from "../../../Layout";
import "./AdvContent.css";
import physics1 from "../../../../assests/Pages/physics1.png";
import chemistry1 from "../../../../assests/Pages/chemistry1.png";
import maths1 from "../../../../assests/Pages/maths1.png";
import physics2 from "../../../../assests/Pages/physics2.png";
import chemistry2 from "../../../../assests/Pages/chemistry2.png";
import maths2 from "../../../../assests/Pages/maths2.png";

function AdvContent2021() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="JEE-Advanced-PYQ-2021-IIT-Academy">
      <div className="content">
        <p
          style={{
            color: "blue",
            fontWeight: "bold",
            fontSize: "25px",
            textAlign: "center",
          }}
        >
          Paper Analysis
        </p>
        <p>
          The JEE Advanced 2021 exam was conducted by IIT Kharagpur on 3rd
          October 2021. The JEE Advanced 2021 exam had two papers: Paper 1 and
          Paper 2. The duration of the JEE Advanced 2021 exam was three hours
          for each subject. There were 19 questions each from Physics, Maths and
          Chemistry. JEE Advanced 2021 paper analysis will help JEE aspirants to
          know the difficulty level of the JEE Advanced 2021 exam.
        </p>
        <h4>
          <strong>Physics</strong>
        </h4>
        <div className="listdata">
          <ul>
            <li>
              ● Compared to Maths and Chemistry, Physics was the easiest subject
              in paper 1.
            </li>
            <li>
              ● More weightage was given to Class 11 topics in JEE Advanced 2021
              Physics Paper 1.
            </li>
            <li>
              ● Questions asked from Class 12 topics were tough in Paper 1.
            </li>
            <li>
              ● JEE Advanced 2021 Physics Paper 2 was tougher compared to Paper
              1.
            </li>
            <li>● More weightage was given to Class 12 topics in Paper 2.</li>
          </ul>
        </div>
        <h4>
          <strong> Chemistry</strong>
        </h4>
        <div className="listdata">
          <ul>
            <li>● MCQs were easy in Paper 1.</li>
            <li>● Paper 1 was easier than Paper 2.</li>
            <li>
              ● States of Matter, Thermodynamics, Electrochemistry and Redox
              were the important topics covered in Paper 1.
            </li>
            <li>
              ● In Paper 2, equal weightage was given to Class 11 and Class 12.
            </li>
            <li>
              ● Atomic structure, Aldehydes, and p-block elements were the
              important topics covered in Paper 2.
            </li>
          </ul>
        </div>
        <h4>
          <strong>Maths</strong>
        </h4>
        <div className="listdata">
          <ul>
            <li>
              ● Paper 1 questions were difficult, tricky and toughest among all
              3 subjects.
            </li>
            <li>● More weightage was given to Class 11 chapters in Paper 1.</li>
            <li>● Paper 2 questions was tough and lengthy.</li>
            <li>
              ● In Paper 2, more questions were asked from Geometry, Calculus
              and Probability.
            </li>
          </ul>
        </div>
      </div>
      <div className="jeeContent-container">
        <div>
          <button className="jeeContent-card">
            <img src={physics1} alt="physics1" />
          </button>
        </div>
        <div>
          <button className="jeeContent-card">
            <img src={chemistry1} alt="chemistry1" />
          </button>
        </div>
        <div>
          <button className="jeeContent-card">
            <img src={maths1} alt="maths1" />
          </button>
        </div>
        <div>
          <button className="jeeContent-card">
            <img src={physics2} alt="physics2" />
          </button>
        </div>
        <div>
          <button className="jeeContent-card">
            <img src={chemistry2} alt="chemistry2" />
          </button>
        </div>
        <div>
          <button className="jeeContent-card">
            <img src={maths2} alt="maths2" />
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default AdvContent2021;
