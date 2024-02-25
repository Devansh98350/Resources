import React, { useEffect } from "react";
import Layout from "../../../Layout";
import "./AdvContent.css";
import physics1 from "../../../../assests/Pages/physics1.png";
import chemistry1 from "../../../../assests/Pages/chemistry1.png";
import maths1 from "../../../../assests/Pages/maths1.png";
import physics2 from "../../../../assests/Pages/physics2.png";
import chemistry2 from "../../../../assests/Pages/chemistry2.png";
import maths2 from "../../../../assests/Pages/maths2.png";

function AdvContent2017() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="JEE-Advanced-PYQ-2017-IIT-Academy">
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
          As per the experts, the difficulty level of the two papers was given
          as follows:
        </p>
        <div className="tabledata">
          <table>
            <tbody>
              <tr>
                <th>Physics</th>
                <td>Between medium to difficult</td>
              </tr>
              <tr>
                <th>Chemistry</th>
                <td>
                  On the difficult side due to the application-based approach of
                  the questions
                </td>
              </tr>
              <tr>
                <th>Maths</th>
                <td>Comparatively easier than Physics and Chemistry</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Overall On a moderate level. The paper was relatively easy than last
          year (2016).
        </p>
        <h4>
          <strong>Physics</strong>
        </h4>
        <div className="listdata">
          <ul>
            <li>
              ● The physics section in both papers was moderate in terms of
              difficulty level.
            </li>
            <li>
              ● Questions consisted of both a mixture of conceptual and
              formula-based ones.
            </li>
            <li>
              ● Some of the questions were lengthy and calculative in nature as
              well.
            </li>
            <li>
              ● The overall paper was slightly easier compared to last year.
            </li>
            <li>
              ● Electromagnetics chapter had the majority of the questions,
              followed by Mechanics.
            </li>
          </ul>
        </div>
        <h4>
          <strong>Chemistry</strong>
        </h4>
        <div className="listdata">
          <ul>
            <li>
              ● The chemistry section consisted of questions that were a bit
              difficult compared to Maths and Physics.
            </li>
            <li>
              ● The Chemistry section was difficult mainly because of the
              application-based approach to the questions.
            </li>
            <li>● This section also had calculation-based questions.</li>
            <li>● Inorganic chemistry had the highest weightage.</li>
            <li>● Compared to last year, it was a tough paper</li>
          </ul>
        </div>
        <h4>
          <strong>Maths</strong>
        </h4>
        <div className="listdata">
          <ul>
            <li>● Mathematics was on a moderate level this time.</li>
            <li>
              ● Students with a good understanding of the concepts should be
              able to do well.
            </li>
            <li>
              ● Most of the questions were asked from Calculus and Algebra,
              followed by Coordinate Geometry.
            </li>
            <li>● Compared to last year, it was significantly easier.</li>
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

export default AdvContent2017;
