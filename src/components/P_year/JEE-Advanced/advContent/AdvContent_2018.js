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

function AdvContent2018() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="JEE-Advanced-PYQ-2018-IIT-Academy">
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
          <strong>Paper-1: </strong>The overall difficulty of JEE Advanced 2018
          Question paper 1 was moderate. Surprisingly, Maths section was easy
          while Chemistry consisted of difficult questions. The Physics section
          was on the moderate side.
        </p>
        <p>
          <strong>Paper-2: </strong>Many candidates were of the opinion that
          paper 2 was more difficult compared to paper 1. Here the Maths section
          was a little tricky, Physics was lengthy but easier while Chemistry
          again was the most difficult.
        </p>
        <h4>
          <strong>Physics</strong>
        </h4>
        <div className="listdata">
          <ul>
            <li>
              ● The Physics section in both paper 1 and paper 2 was on a
              moderate level.
            </li>
            <li>
              ● The Physics questions were mostly analytical and
              application-based.
            </li>
            <li>● There were fewer calculation based questions.</li>
            <li>
              ● Physics was comparatively easier than Chemistry and Maths.
            </li>
          </ul>
        </div>
        <h4>
          <strong> Chemistry</strong>
        </h4>
        <div className="listdata">
          <ul>
            <li>● Chemistry section surprisingly was on the difficult side.</li>
            <li>
              ● In terms of weightage, Physical and Organic Chemistry were given
              more importance in comparison to Inorganic Chemistry.
            </li>
            <li>
              ● Some questions were asked outside of the NCERT books or
              syllabus.
            </li>
          </ul>
        </div>
        <h4>
          <strong> Maths</strong>
        </h4>
        <div className="listdata">
          <ul>
            <li>
              ● The Mathematics questions in paper 1 and paper 2 were on a
              moderate level.
            </li>
            <li>
              ● However, some questions were new and challenging as well as
              lengthy.
            </li>
            <li>● There were few conceptual questions as well.</li>
            <li>
              ● Comparatively this section was easier with regards to Physics
              and Chemistry.
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

export default AdvContent2018;
