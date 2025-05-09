import React, { useEffect } from "react";
import Layout from "../../../Layout";
import "./NeetContent.css";
import physics from "../../../../assests/Pages/physics.png";
import chemistry from "../../../../assests/Pages/chemistry.png";
import biology from "../../../../assests/Pages/biology.png";
import Breadcrumbs from "../../../Breadcrumbs";
function NeetContent2020() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="NEET-PYQ-2020-IIT-Academy">
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
          The NEET 2020 question paper was precisely linked with the NCERT
          syllabus for NEET. While there were various opinions to the question
          paper, most students believed that the NEET question paper 2020 was
          easier than the previous year. Biology contained some difficult
          questions, but overall it was simple. Physics, which is traditionally
          thought to be the most difficult, had some lengthy questions that
          might be answered. Chemistry was also NCERTbased, with several
          difficult questions in organic chemistry.
        </p>
        <p>
          Overall, most students and professionals agreed that the NEET 2020
          Question Paper was simple because students had adequate time to
          prepare.
        </p>
        <h4
          style={{
            fontWeight: "bold",
            fontSize: "21px",
            textAlign: "center",
          }}
        >
          Subject-Wise Analysis of Paper
        </h4>
        <h4
          style={{
            color: "blue",
            fontWeight: "bold",
            fontSize: "20px",
            textAlign: "left",
          }}
        >
          1. Physics Paper Analysis
        </h4>
        <p>
          Physics was deemed easier than in prior years, with questions drawn
          from the NCERT syllabus for NEET. The majority of the questions were
          based on NCERT, and the computations were not as lengthy. The majority
          of the questions came from the Mechanics unit.
        </p>
        <p>
          <b>Important Topics of Physics</b>
        </p>
        <div className="listdata">
          <ul>
            <li>● Heat and Thermodynamics</li>
            <li>● Wave</li>
            <li>● Mechanics</li>
            <li>● Electricity</li>
            <li>● Magnetism</li>
            <li>● Modern Physics</li>
            <li>● Optics</li>
          </ul>
        </div>
        <h4
          style={{
            color: "blue",
            fontWeight: "bold",
            fontSize: "20px",
            textAlign: "left",
          }}
        >
          2. Chemistry Paper Analysis
        </h4>
        <p>
          The chemical section could be divided into two categories: easy and
          ordinary. Typically, 15 questions from each of the Chemistry areas
          Physical, Organic, and Inorganic are asked. However, fewer questions
          (12) were asked from the Inorganic section this time, whereas the most
          questions (18) were asked from the Organic chemistry section. The
          chemistry segment was also dominated by NCERT-based questions.
        </p>
        <p>
          <b>Important Topics of Chemistry</b>
        </p>
        <div className="listdata">
          <ul>
            <li>● Molecular Structure</li>
            <li>● Equilibrium</li>
            <li>● Coordination Compounds</li>
            <li>● Thermodynamics</li>
            <li>● P-Block Elements</li>
            <li>● Solutions</li>
            <li>● D-Block & F-Block Element</li>
            <li>● Alcohols, Phenols and Ethers</li>
            <li>● Aldehydes, Ketones and Carboxylic Acid</li>
          </ul>
        </div>
        <h4
          style={{
            color: "blue",
            fontWeight: "bold",
            fontSize: "20px",
            textAlign: "left",
          }}
        >
          3. Botany Paper Analysis
        </h4>
        <p>
          The questions were intellectual in nature and demanded extensive
          conceptual and application-based knowledge. There were a few
          fact-based questions as well. Plant Physiology led the way with nine
          questions, followed by Ecology and Genetics, each with seven. Overall,
          the Botany section was short and should have been done in the allotted
          time. In comparison to prior years, the Botany section was extremely
          challenging. There were 25 questions from the class 11 syllabus and 18
          questions from the class 12 syllabus. There were two contentious
          questions with multiple right answers. Despite the fact that the
          majority of the questions were from the mandated syllabus and were
          based on the NCERT textbook.
        </p>
        <p>
          <b>Important Topics of Botany</b>
        </p>
        <div className="listdata">
          <ul>
            <li>● Cell and Cell Cycle</li>
            <li>● Plant Physiology</li>
            <li>● Diversity of Life</li>
            <li>● Ecology</li>
            <li>● Structural Organization in Plants</li>
            <li>● Biology in Human Welfare</li>
            <li>● Genetics</li>
            <li>● Reproduction and Sexual Reproduction</li>
          </ul>
        </div>
        <h4
          style={{
            color: "blue",
            fontWeight: "bold",
            fontSize: "20px",
            textAlign: "left",
          }}
        >
          4. Zoology Paper Analysis
        </h4>
        <p>
          With a few exceptions, the Zoology section was of moderate difficulty.
          Some questions were difficult and got lost in the jargon. A few terms
          were also outside the scope of the NCERT. The questions were
          multi-conceptual in nature, requiring pupils to analyze critically and
          precisely. Two questions assessed linguistic ability, while others
          needed comprehension, application, and synthesis to interpret the
          questions. Human Physiology led the way with 12 questions, followed by
          Animal Husbandry & Biotechnology with 10 and Biomolecules with 6.
          Overall, the questions were thought-provoking and demanded mental
          acuity and a critical approach.
        </p>
        <p>
          <b>Important Topics of Zoology</b>
        </p>
        <div className="listdata">
          <ul>
            <li>● Animal Kingdom</li>
            <li>● Human Physiology</li>
            <li>● Biomolecules</li>
            <li>● Animal Husbandry and Biotechnology</li>
            <li>● Evolutions Theories and Evidences</li>
            <li>● Evolutions Theories and Evidences</li>
            <li>● Structural Organization of Animals</li>
            <li>● Human Reproduction and Reproductive Health</li>
            <li>● Human Health and Diseases</li>
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

export default NeetContent2020;
