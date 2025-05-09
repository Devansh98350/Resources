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

function AdvContent2020() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="JEE-Advanced-PYQ-2020-IIT-Academy">
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
          Paper 2 pattern was a little different from the last year and was
          difficult and calculative due to pattern change as compared to the
          last year.
        </p>
        <h4>
          <strong>Physics</strong>
        </h4>
        <p>
          Paper 1 was little difficult and almost all questions from within the
          syllabus, though a little calculative. Paper was calculative and
          lengthy but covered most of syllabus as expected. Class XI & XII
          syllabus almost equal in the overall paper. Electromagnetism, heat and
          thermodynamics and mechanics covering a major portion.
        </p>
        <h4>
          <strong> Chemistry</strong>
        </h4>
        <p>
          Paper 1 was easy to moderate and questions asked were within syllabus.
          Physical chemistry had little higher percentage of questions as
          compared to Organic and Inorganic chemistry. The questions were based
          on NCERT text books. Paper II was easy to moderate but calculative.
          Physical and Organic chemistry portion was higher.
        </p>
        <h4>
          <strong>Maths</strong>
        </h4>
        <p>
          Paper 1 was little calculative and lengthy, and the Algebra and
          Calculus portions were higher, similar to last year. Paper 2 was
          Moderate to difficult and calculative as expected. Paper had questions
          from the syllabus and multicorrect type of questions consumed time due
          to calculations.
        </p>
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

export default AdvContent2020;
