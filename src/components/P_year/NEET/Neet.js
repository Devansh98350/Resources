import React, { useState, useEffect } from "react";
import Layout from "../../Layout";
import { neetData } from "./neetData";
import { useNavigate } from "react-router-dom";
import seventeen from "../../../assests/Pages/2017.png";
import eight from "../../../assests/Pages/2018.png";
import nine from "../../../assests/Pages/2019.png";
import ten from "../../../assests/Pages/2020.png";
import one from "../../../assests/Pages/2021.png";
import two from "../../../assests/Pages/2022.png";
import three from "../../../assests/Pages/2023.png";
import "./Neet.css";
import Breadcrumbs from "../../Breadcrumbs";

function Neet() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const [tab, setTab] = useState(1);

  function activeTab(tabNumber) {
    setTab(tabNumber);
  }

  const sevenTeen = neetData.filter((data) => data.name === "2017");
  const eighteen = neetData.filter((data) => data.name === "2018");
  const nineTeen = neetData.filter((data) => data.name === "2019");
  const twenty = neetData.filter((data) => data.name === "2020");
  const twentyOne = neetData.filter((data) => data.name === "2021");
  const twentyTwo = neetData.filter((data) => data.name === "2022");
  const twentyThree = neetData.filter((data) => data.name === "2023");

  const neetMainData =
    tab === 1
      ? sevenTeen
      : tab === 2
      ? eighteen
      : tab === 3
      ? nineTeen
      : tab === 4
      ? twenty
      : tab === 5
      ? twentyOne
      : tab === 6
      ? twentyTwo
      : tab === 7
      ? twentyThree
      : null;
  return (
    <Layout title="NEET-PYQ-IIT-Academy">
      <Breadcrumbs />
      <div className="content">
        <p
          style={{
            textAlign: "center",
            color: "blue",
            fontWeight: "bold",
            fontSize: "25px",
          }}
        >
          Advantages of solving NEET PYQ questions
        </p>
        <p>
          One of the major exams in the nation, NEET, allows candidates to apply
          for admission to medical programmes. When the stakes are high,
          preparation must be thorough and persistent. Many candidates struggle
          to pass the NEET exam in order to enroll in reputable medical schools.
          To be referred to as what they are, top performers work smart rather
          than hard, and the top advice on their list is to solve NEET previous
          year's question papers. This can undoubtedly provide one an advantage
          over others and greatly aid in outperforming them.
        </p>
        <p>
          Here, we've compiled some ground-breaking advice that will enable you
          to appreciate the significance of answering questions correctly and
          earning the highest possible score.
        </p>
        <div className="listdata">
          <ol>
            <li>
              <b>i) Increase Effective Time Management:</b> As you begin to
              solve papers, you will have a good notion of how much time you
              spend on each area (Physics, Chemistry, and Biology each have 45
              questions, and each section has 90 questions). Technically, you
              have one minute to answer each question, thus time management
              skills are your only chance for success. There is only the
              requirement to practice with papers as a substitute. Along with
              many other advantages, solving papers also helps with time
              management. You spend less time on each area and merely add buffer
              time to the next section that needs to be solved. Extra time at
              the exam is only advantageous since bubbling the OMR sheet becomes
              a less demanding task.
            </li>
            <li>
              <b>ii) Best Revision Tool:</b> The best study buddy one may have
              for revision is solving papers. NEET past year question paper
              books are widely available; candidates can use these materials to
              solve papers. This is a fantastic method to look back on your
              preparation. It fosters self-assurance.
            </li>
            <li>
              <b>iii) Recognise Your Strengths and Weaknesses:</b> You must
              analyze your level of readiness and identify your weaknesses. Each
              pupil has different weak spots. When one is learning in general,
              it might not be apparent. Examining sample questions from prior
              years and practice examinations would highlight the student's
              specific areas of weakness. The NEET tutors would have the ability
              to put corrective measures in place for directing them
              appropriately. The weaknesses must be fixed as part of the NEET
              preparation process. Everyone has some sort of defect; winning is
              about overcoming it.
            </li>
            <li>
              <b>iv) A Clear Pattern Understanding:</b> You must be able to
              manage your time well and perform well if you want to be a NEET
              candidate. Our knowledgeable professors have been giving the
              students pointers, shortcuts, and tactics to enable them to
              swiftly respond to the most questions possible. Another way to
              increase your speed is by answering previous NEET questions. It
              would make it apparent what the pattern is that is used in NEET.
              As a result, you can plan your strategy in advance to achieve your
              best NEET test score.
            </li>
            <li>
              <b>v) Greater Confidence:</b> The secret to succeeding in NEET is
              having a confident mindset. Your NEET dreams could be seriously
              destroyed by any internal negativity. Every candidate preparing
              for a competitive exam should engage in all the activities that
              will boost their motivation and confidence. By answering the
              questions from prior NEET exams, you can determine how prepared
              you are. Studying the subjects you find challenging will boost
              your self-assurance and success chances more than you might
              imagine.
            </li>
          </ol>
        </div>
      </div>
      <div className="jee-main">
        <div>
          <button
            className="jeemain-btn"
            onClick={() => {
              navigate("/pyq/neet/2017");
              activeTab(1);
            }}
          >
            <img src={seventeen} alt="Seven" />
          </button>
        </div>
        <div>
          <button
            className="jeemain-btn"
            onClick={() => {
              navigate("/pyq/neet/2018");
              activeTab(2);
            }}
          >
            <img src={eight} alt="Seven" />
          </button>
        </div>
        <div>
          <button
            className="jeemain-btn"
            onClick={() => {
              navigate("/pyq/neet/2019");
              activeTab(3);
            }}
          >
            <img src={nine} alt="Seven" />
          </button>
        </div>
        <div>
          <button
            className="jeemain-btn"
            onClick={() => {
              navigate("/pyq/neet/2020");
              activeTab(4);
            }}
          >
            <img src={ten} alt="Sten" />
          </button>
        </div>
        <div>
          <button
            className="jeemain-btn"
            onClick={() => {
              navigate("/pyq/neet/2021");
              activeTab(5);
            }}
          >
            <img src={one} alt="one" />
          </button>
        </div>
        <div>
          <button
            className="jeemain-btn"
            onClick={() => {
              navigate("/pyq/neet/2022");
              activeTab(6);
            }}
          >
            <img src={two} alt="two" />
          </button>
        </div>
        <div>
          <button
            className="jeemain-btn"
            onClick={() => {
              navigate("/pyq/neet/2023");
              activeTab(1);
            }}
          >
            <img src={three} alt="three" />
          </button>
        </div>
      </div>
      {neetMainData &&
        neetMainData.map((value, index) => {
          return (
            <div key={index}>
              <button>
                <h1>{value.title}</h1>
              </button>
            </div>
          );
        })}
    </Layout>
  );
}

export default Neet;
