import React, { useEffect } from "react";
import Layout from "../../../Layout";
import "./AdvContent.css";
import physics1 from "../../../../assests/Pages/physics1.png";
import chemistry1 from "../../../../assests/Pages/chemistry1.png";
import maths1 from "../../../../assests/Pages/maths1.png";
import physics2 from "../../../../assests/Pages/physics2.png";
import chemistry2 from "../../../../assests/Pages/chemistry2.png";
import maths2 from "../../../../assests/Pages/maths2.png";
import Breadcrumbs from "../../../Breadcrumbs";

function AdvContent2019() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="JEE-Advanced-PYQ-2019-IIT-Academy">
      <Breadcrumbs />
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
          The JEE Advanced 2019 was held on May 27th. The test was led by IIT
          Roorkee and around 1.70 lakh applicants showed up for the test. Paper
          1 was led toward the beginning of the day shift from 9:00 am to 12:00
          pm while paper 2 was led from 2:00 to 4:00 pm. The exam pattern was
          like 2018. In any case, since tests have finished up students can look
          at the paper examination on how the inquiry paper was set, its trouble
          level and different subtleties.
        </p>
        <p>
          Subject specialists at IIT Academy have completely investigated and
          given definite paper-wise and subjectwise examinations of the JEE
          Advanced inquiry papers. The paper, by and large, was somewhat harder
          contrasted with last year (2018).{" "}
        </p>
        <p>
          <strong>Paper-1: </strong> The general trouble of paper 1 was
          moderate. Not surprisingly, Maths was on the troublesome side while
          material science was on a moderate level. Chemistry was the simplest
          segment.
        </p>
        <p>
          <strong>Paper-2: </strong> Paper 2 was relatively simpler than paper
          1. In this paper, the math-related segment was somewhat extreme and
          extended, physics was extended additionally while chemistry was once
          more the simplest area.
        </p>
        <h4>
          <strong>Physics</strong>
        </h4>
        <div className="listdata">
          <ul>
            <li>
              ● Physics questions in paper 1 and paper 2 were on a moderate
              level but lengthy.
            </li>
            <li>
              ● The physics section in both the papers had questions that were
              concepts and applications based on some calculations.
            </li>
            <li>
              ● Most of the questions were from Thermodynamics, Optics and
              Thermodynamics and Electrostatics.
            </li>
          </ul>
        </div>
        <h4>
          <strong> Chemistry</strong>
        </h4>
        <div className="listdata">
          <ul>
            <li>
              ● The Chemistry section in both paper 1 and paper 2 was the
              easiest.
            </li>
            <li>
              ● The questions were mainly designed to test the candidates’
              understanding of the concepts.
            </li>
            <li>
              ● In this section, questions from inorganic and organic chemistry
              were balanced, while there were fewer questions from physical
              chemistry.
            </li>
          </ul>
        </div>
        <h4>
          <strong>Maths</strong>
        </h4>
        <div className="listdata">
          <ul>
            <li>
              ● The mathematics section in paper 1 and paper 2 had questions
              that were on a moderate to difficult level.
            </li>
            <li>
              ● Questions took a bit longer time to solve, and attempting all
              the questions was a difficult task.
            </li>
            <li>
              ● Questions were mainly set from Algebra, Coordinate Geometry, and
              Integral Calculus. Few questions were based on Probability,
              Quadratic Equation and Sequence & Series.
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

export default AdvContent2019;
