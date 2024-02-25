import React, { useEffect } from "react";
import Layout from "../../../Layout";
import "./AdvContent.css";
import physics1 from "../../../../assests/Pages/physics1.png";
import chemistry1 from "../../../../assests/Pages/chemistry1.png";
import maths1 from "../../../../assests/Pages/maths1.png";
import physics2 from "../../../../assests/Pages/physics2.png";
import chemistry2 from "../../../../assests/Pages/chemistry2.png";
import maths2 from "../../../../assests/Pages/maths2.png";

function AdvContent2022() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="JEE-Advanced-PYQ-2022-IIT-Academy">
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
          The overall difficulty of Paper 1 was moderate and comparatively a bit
          easier than Paper 2. The subject-wise analysis can be stated as
          follows compared to the previous year’s question paper.
        </p>
        <div className="listdata">
          <ul>
            <li>● Physics was at the same level as the previous year.</li>
            <li>● Chemistry was more difficult than the previous year.</li>
            <li>● Mathematics was a bit easier than the last year.</li>
          </ul>
        </div>
        <p>
          The overall difficulty of Paper 2 was moderate and comparatively more
          difficult than Paper 1.
        </p>
        <div className="listdata">
          <ul>
            <li>● Physics was at the same level as the previous year. </li>
            <li>● Chemistry was more difficult than the previous year. </li>
            <li>● Mathematics was a bit easier than the previous year.</li>
          </ul>
        </div>
        <p>
          However, the difficulty level of the JEE Advanced 2022 paper was a bit
          easier compared to previous years, as per our expert faculties.
          Mentioned below is summarised examination analysis of the JEE Advanced
          2022 Question Paper.
        </p>
        <div className="listdata">
          <ul>
            <li>● The paper was moderately tough.</li>
            <li>● The Chemistry section was easy.</li>
            <li>● Physics & Mathematics were moderately tough and lengthy.</li>
            <li>
              ● The chemistry section constituted questions from
              Electrochemistry, Mole Concept, Surface Chemistry, Thermodynamics
              & Chemical Kinetics.
            </li>
            <li>● Organic chemistry was also given importance.</li>
            <li>
              ● The physics section was conceptual and questions were asked from
              all the chapters.
            </li>
            <li>
              ● Optics, Kinematics, Work Power & Energy, and Rotational Motion
              are some of the important chapters.
            </li>
            <li>● The mathematics section was tough and lengthy.</li>
            <li>● Calculus & Coordinate Geometry was given much importance.</li>
            <li>
              ● Questions were mixed concept questions clubbing the concepts of
              two chapters, these included, Functions & Progressions,
              Application of Derivatives clubbed with Differential Equation.
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

export default AdvContent2022;
