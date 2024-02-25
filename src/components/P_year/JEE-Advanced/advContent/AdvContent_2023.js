import React, { useEffect } from "react";
import Layout from "../../../Layout";
import "./AdvContent.css";
import physics1 from "../../../../assests/Pages/physics1.png";
import chemistry1 from "../../../../assests/Pages/chemistry1.png";
import maths1 from "../../../../assests/Pages/maths1.png";
import physics2 from "../../../../assests/Pages/physics2.png";
import chemistry2 from "../../../../assests/Pages/chemistry2.png";
import maths2 from "../../../../assests/Pages/maths2.png";

function AdvContent2023() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="JEE-Advanced-PYQ-2023-IIT-Academy">
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
        <h4>
          <strong>Paper 1 Pattern:</strong>
        </h4>
        <p>
          To help students to have a better understanding of the format of the
          questions that are followed in previous year question papers and the
          upcoming JEE Advanced examination 2023, we have provided a detailed
          paper pattern.
        </p>
        <div className="tabledata">
          <table>
            <tbody>
              <tr>
                <th>Section</th>
                <th>Types of Questions</th>
                <th>No. of Questions</th>
                <th>Maximum Marks</th>
              </tr>
              <tr>
                <td>Section 1 </td>
                <td>MCQs with Single Correct Option</td>
                <td>6</td>
                <td>18</td>
              </tr>
              <tr>
                <td>Section 2</td>
                <td>Single Correct Option</td>
                <td>6</td>
                <td>24</td>
              </tr>
              <tr>
                <td>Section 3</td>
                <td>Numerical Value Answer</td>
                <td>6</td>
                <td>24</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h4>
          <strong>Paper 2 Pattern:</strong>
        </h4>
        <p>
          Mentioned below is the detailed question paper pattern followed in the
          JEE Advanced 2023 question paper.
        </p>
        <div className="tabledata">
          <table>
            <tbody>
              <tr>
                <th>Section</th>
                <th>Types of Questions</th>
                <th>No. of Questions</th>
                <th>Maximum Marks</th>
              </tr>
              <tr>
                <td>Section 1 </td>
                <td>MCQs with one or more than one correct answer</td>
                <td>6</td>
                <td>24</td>
              </tr>
              <tr>
                <td>Section 2</td>
                <td>Numerical value answer type questions</td>
                <td>6</td>
                <td>24</td>
              </tr>
              <tr>
                <td>Section 3</td>
                <td>Single-digit integer answer (0-9)</td>
                <td>6</td>
                <td>18</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h4>
          <strong>Analysis of Paper-1:</strong>
        </h4>
        <p>
          Students found the overall level of paper Moderate to Difficult level
          but not easy. Some students have reported Physics was Easy, Chemistry
          was Moderate, but Maths was relatively difficult.
        </p>
        <div className="listdata">
          <ul>
            <li>
              ● <b>Physics</b> more weightage was given to chapters like
              Kinematics, Thermodynamics, Modern Physics, Capacitors, Current
              Electricity, Kinematics, Gravitation, Optics, and Electrostatics.
              Overall, Physics was Easy as compared to the other two subjects as
              per students. This was a Balanced Section as per students.
            </li>
            <li>
              ● <b>Chemistry</b> was not balanced as per students. Inorganic
              Chemistry had a few questions which were directly from NCERT. In
              Physical Chemistry, questions covered chapters of Chemical
              Kinetics, Ionic & Chemical Equilibrium, Electrochemistry, and
              Atomic Structure. Thermodynamics (with more than one question). In
              Organic Chemistry, questions mostly asked from Amines, Polymers,
              Biomolecules, Oxygen-containing Compounds, and some named
              reactions were also asked. Mixed concepts questions were asked.
              This section was reported Moderate as per students. More weightage
              is given to Organic Chemistry.
            </li>
            <li>
              ● <b>Mathematics</b> was tricky & difficult for students. There
              were tricky and lengthy questions from Vectors and 3D Geometry.
              There were questions from Functions, Matrices, Ellipse, Statistics
              & Probability. Some good questions were asked in chapters of
              Probability, Complex Numbers, 3-D Geometry, and Parabolas.
              Students felt this section was the Toughest.
            </li>
          </ul>
        </div>
        <h4>
          <strong>Analysis of Paper-2:</strong>
        </h4>
        <p>
          Students found the overall level of paper Moderate to Difficult level
          but not easy. Some students have reported Physics and Chemistry were
          Moderate, but Maths was relatively difficult.
        </p>
        <div className="listdata">
          <ul>
            <li>
              ● <b>Physics</b> had more weightage for chapters like Wave &
              Sound, Wave Optics, Fluids, EM Waves, Thermodynamics, Modern
              Physics, Current Electricity, Kinematics, Gravitation, and
              Electrostatics. Overall, Physics was Moderate as per students.
              Students felt this section was not balanced. Some questions had
              tricky & Lengthy calculations.
            </li>
            <li>
              ● <b>Chemistry</b> was Tricky as per students. More weightage was
              given to Organic & Physical Chemistry as compared to Inorganic.
              Inorganic Chemistry had a few questions which were directly from
              NCERT. In Physical Chemistry, questions covered Chemical Kinetics,
              Ionic & Chemical Equilibrium, Electrochemistry, and Thermodynamics
              (with more than one question). In Organic Chemistry, questions are
              mostly asked from Aryl & Alkyl halides, Amines, Polymers,
              Biomolecules, and Oxygen-containing Compounds. Mixed concepts
              questions were asked. This section was reported Moderate as per
              students.
            </li>
            <li>
              ● <b>Mathematics</b> was unbalanced & tricky as per students.
              There were questions from Functions, Differential Equations,
              Inverse Trigonometric functions, Differentiability, Vectors, 3D
              Geometry, Application of Derivatives, Complex Numbers, Matrices,
              Circle Permutation & Combination and Probability. Students felt
              this section was the Toughest.
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

export default AdvContent2023;
