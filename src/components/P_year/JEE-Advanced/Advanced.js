import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../Layout";
import "./Advanced.css";
import { jeeAdvData } from "./JeeAdvData";
import seventeen from "../../../assests/Pages/2017.png";
import eight from "../../../assests/Pages/2018.png";
import nine from "../../../assests/Pages/2019.png";
import ten from "../../../assests/Pages/2020.png";
import one from "../../../assests/Pages/2021.png";
import two from "../../../assests/Pages/2022.png";
import three from "../../../assests/Pages/2023.png";
import Breadcrumbs from "../../Breadcrumbs";

function Advanced() {
  const navigate = useNavigate();
  const [tab, setTab] = useState(1);

  function activeTab(tabNumber) {
    setTab(tabNumber);
  }

  const sevenTeen = jeeAdvData.filter((data) => data.name === "2017");
  const eighteen = jeeAdvData.filter((data) => data.name === "2018");
  const nineTeen = jeeAdvData.filter((data) => data.name === "2019");
  const twenty = jeeAdvData.filter((data) => data.name === "2020");
  const twentyOne = jeeAdvData.filter((data) => data.name === "2021");
  const twentyTwo = jeeAdvData.filter((data) => data.name === "2022");
  const twentyThree = jeeAdvData.filter((data) => data.name === "2023");

  const jeeAdv =
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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="JEE-Advanced-PYQ-IIT-Academy">
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
          Advantages of solving JEE-Advanced PYQ questions
        </p>
        <p>
          Solving JEE advanced PYQ papers will help the JEE aspirants to manage
          time, speed and accuracy, and by working on the speed and accuracy,
          candidates can improve their rank in the JEE Advanced exam.
        </p>
        <div className="listdata">
          <ol>
            <li>
              <b>i) Better Understanding of The Exam Pattern -</b> The JEE
              advanced pyq will help the candidates to get familiar with the
              exam pattern, marking scheme, questions distribution or weightage
              of the topics.
            </li>
            <li>
              <b>ii) Help in Evaluating Strengths And Weaknesses -</b> The rich
              collection of JEE advanced previous year question papers will
              facilitate the candidates to know their strengths and weaknesses,
              and they can work on them accordingly.
            </li>
            <li>
              <b>iii) Realistic Exam Exposure -</b> Once a student gets the last
              5 to 10 years of IIT JEE advanced solved question paper, he can
              easily find out the exam format and pattern over the years, which
              will definitely reduce anxiety and increase his confidence
            </li>
            <li>
              <b>iv) Confidence Boost -</b> Solving's JEE advanced question
              paper will boost confidence mentally.
            </li>
            <li>
              <b>v) Revelation of varied difficulty levels -</b> Solving JEE
              advanced last year question papers can increase patience and
              perseverance of the students, as they get accustomed with each and
              every level of the difficulties.
            </li>
            <li>
              <b>vi) Relief from Examination Anxiety -</b> Solving IIT JEE
              advanced pyq gives exam-like feeling to the students, which helps
              in reducing the anxiety before the exam.
            </li>
            <li>
              <b>vii) Simulate Real Exam Environment -</b> Always try to keep
              your mobile/laptop/tablet off, maintain noise-free realexam type
              conditions so that focus should only be on solving the JEE
              advanced previous year question paper. Any sort of distraction
              will break the concentration of the student.
            </li>
            <li>
              <b>viii) One Paper Per Sitting -</b> As the exam is going to be
              lengthy, it is always advised to do the entire JEE advance pyq
              paper in one go. It will not only give real exam conditions, but
              also test the grit and guts of the students.
            </li>
            <li>
              <b>ix) Time Management -</b> The students should always set a time
              limit for solving the JEE advanced pyq paper as it will improve
              their time management.
            </li>
            <li>
              <b>x) No Help From Outside - </b> If a student really wants to
              assess his/her preparation while solving the JEE advanced last
              year paper, he/she should never take any external help from
              anyone. Not even from the textbooks, notes or online materials.
              This will give him/her the exact assessment of current knowledge,
              and the areas which need improvement.
            </li>
            <li>
              <b>xi) Match Solution -</b> Once a student is done with the paper,
              he/she should compare the solution with the JEE advanced pyq paper
              solution which is present on the IIT Academy website/app. Maybe
              the provided solution is more optimized and time-efficient.
            </li>
            <li>
              <b>xii) Analyze Your Mistakes - </b> After matching the solutions,
              a student should always carefully analyze the mistakes and
              identify the topics/concepts where he/she is struggling. This is
              one of the major advantages of the JEE advanced previous year
              papers with the solutions on IIT Academy.
            </li>
            <li>
              <b>xiii) Analysis of Time Taken -</b> A JEE aspirant should always
              analyze time taken to solve the questions and sections from the
              JEE advanced previous year paper. It will aid him/her with better
              time management.
            </li>
            <li>
              <b>xiv) Solve Multiple Papers From Different Years -</b> One thing
              students should always keep in mind to increase their chances of
              selection in the JEE is to try to complete/solve as many papers as
              possible from different years.
            </li>
            <li>
              <b>xv) Revision Along With Practice -</b> While practicing the JEE
              advance pyq, it is extremely important that a student should also
              revise his/her concepts from time to time. Completely relying only
              on the advanced JEE previous year papers is not going to do any
              good. So, one should always revise the important topics and
              questions from a wide variety of textbooks, and online resources.
            </li>
          </ol>
        </div>
        <p>
          Overall, one can easily understand that having the JEE advance pyq
          paper along with the solutions in one place is going to be immensely
          helpful in the preparation of the examination, as it can facilitate
          the students in effective practice, identifying areas of improvement,
          getting accustomed to the exam pattern and boosting confidence.
        </p>
      </div>
      <div className="jee-main">
        <div>
          <button
            className="jeemain-btn"
            onClick={() => {
              navigate("/pyq/jee-advanced/2017");
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
              navigate("/pyq/jee-advanced/2018");
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
              navigate("/pyq/jee-advanced/2019");
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
              navigate("/pyq/jee-advanced/2020");
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
              navigate("/pyq/jee-advanced/2021");
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
              navigate("/pyq/jee-advanced/2022");
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
              navigate("/pyq/jee-advanced/2023");
              activeTab(1);
            }}
          >
            <img src={three} alt="three" />
          </button>
        </div>
      </div>
      {jeeAdv &&
        jeeAdv.map((value, index) => {
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

export default Advanced;
