import React, { useState, useEffect } from "react";
import Layout from "../../Layout";
import { ntseData } from "./ntseData";
import seventeen from "../../../assests/Pages/2017.png";
import eight from "../../../assests/Pages/2018.png";
import nine from "../../../assests/Pages/2019.png";
import ten from "../../../assests/Pages/2020.png";
import one from "../../../assests/Pages/2021.png";
import two from "../../../assests/Pages/2022.png";
import three from "../../../assests/Pages/2023.png";

const Ntse = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [tab, setTab] = useState(1);

  function activeTab(tabNumber) {
    setTab(tabNumber);
  }

  const sevenTeen = ntseData.filter((data) => data.name === "2017");
  const eighteen = ntseData.filter((data) => data.name === "2018");
  const nineTeen = ntseData.filter((data) => data.name === "2019");
  const twenty = ntseData.filter((data) => data.name === "2020");
  const twentyOne = ntseData.filter((data) => data.name === "2021");
  const twentyTwo = ntseData.filter((data) => data.name === "2022");
  const twentyThree = ntseData.filter((data) => data.name === "2023");

  const ntse =
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
    <Layout title="NTSE-PYQ-IIT-Academy">
      <div className="content">
        <p
          style={{
            textAlign: "center",
            color: "blue",
            fontWeight: "bold",
            fontSize: "25px",
          }}
        >
          Advantages of solving NTSE PYQ questions
        </p>
        <p>
          Solving NTSE question papers is one of the best ways to practice and
          prepare effectively for the National Talent Search Examination (NTSE)
          exam. It is a prestigious examination conducted by NCERT across India
          to provide scholarships to successful candidates. The NTSE Exam is
          conducted in two phases i.e. Phase 1 and Phase 2. Only those students
          who qualify for the Stage 1 examination will be allowed to appear for
          the Stage 2 examination. So students must prepare effectively with
          dedication if they want to crack the examination. The NTSE exam
          question papers will further help students to get familiar with the
          type and difficulty level of questions as well as the pattern of the
          exam.
        </p>
        <p>
          Students planning to appear for the NTSE exam are advised to solve
          previous years NTSE question papers as part of their study exercise on
          a regular basis. This will also help candidates to develop their speed
          and accuracy as well as better time management skills.
        </p>
        <p>
          <b>Some advantages of solving the NTSE Question Paper are:</b>
        </p>
        <div className="listdata">
          <ol>
            <li>● A better understanding of theories and principals.</li>
            <li>● Helps candidates develop better time management skills.</li>
            <li>● Helps in a revision of the concepts.</li>
            <li>● Improves general knowledge.</li>
            <li>● Strengthens the basic and fundamental knowledge.</li>
            <li>
              ● Facilitates the development of stronger reasoning and critical
              thinking skills
            </li>
          </ol>
        </div>
      </div>
      <div className="jee-main">
        <div>
          <button
            className="jeemain-btn"
            onClick={() => {
              // navigate("/advcontent");
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
              // navigate("/advcontent");
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
              // navigate("/advcontent");
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
              // navigate("/advcontent");
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
              // navigate("/advcontent");
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
              // navigate("/advcontent");
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
              // navigate("/advcontent");
              activeTab(1);
            }}
          >
            <img src={three} alt="three" />
          </button>
        </div>
      </div>
      {ntse &&
        ntse.map((value, index) => {
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
};

export default Ntse;
