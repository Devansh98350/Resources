import React, { useEffect } from "react";
import Layout from "../../../Layout";
import "./NeetContent.css";
import physics from "../../../../assests/Pages/physics.png";
import chemistry from "../../../../assests/Pages/chemistry.png";
import biology from "../../../../assests/Pages/biology.png";
import Breadcrumbs from "../../../Breadcrumbs";

function NeetContent2017() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="NEET-PYQ-2017-IIT-Academy">
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
        <h4>
          <strong>Physics</strong>
        </h4>
        <div className="listdata">
          <ul>
            <li>
              ● Overall it was average but difficult as compared to previous
              years’ papers
            </li>
            <li>
              ● Distribution of Class 11 and Class 12 syllabus is almost equal
            </li>
            <li>
              ● In one question from RLC circuit, none of the options was
              correct and should be a bonus and one question from photoelectric
              effect has 2 same options.
            </li>
          </ul>
        </div>
        <h4>
          <strong>Chemistry</strong>
        </h4>
        <div className="listdata">
          <ul>
            <li>● The overall level of chemistry part was average</li>
            <li>● Organic part was mechanism based</li>
            <li>● Inorganic part was easy and 2 questions were conceptual</li>
            <li>
              ● 2 questions in physical chemistry were conceptual while others
              were formula based
            </li>
          </ul>
        </div>
        <h4>
          <strong>Biology</strong>
        </h4>
        <div className="listdata">
          <ul>
            <li>
              ● Overall the paper was standard with very little ambiguity or
              controversy
            </li>
            <li>
              ● As compared to last year, the level was slightly higher than
              NEET 1 and much higher than NEET 2
            </li>
            <li>
              ● Few (5 to 6) questions were out of NCERT/prescribed syllabus.
            </li>
          </ul>
        </div>
      </div>
      <div className="jeeContent-container">
        <div>
          <button className="jeeContent-card">
            <img src={physics} alt="physics" />
          </button>
        </div>
        <div>
          <button className="jeeContent-card">
            <img src={chemistry} alt="chemistry" />
          </button>
        </div>
        <div>
          <button className="jeeContent-card">
            <img src={biology} alt="biology" />
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default NeetContent2017;
