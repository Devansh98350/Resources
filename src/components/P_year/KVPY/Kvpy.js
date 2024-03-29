import React, { useState, useEffect } from "react";
import Layout from "../../Layout";
import { kvpyData } from "./kvpyData";
import seventeen from "../../../assests/Pages/2017.png";
import eight from "../../../assests/Pages/2018.png";
import nine from "../../../assests/Pages/2019.png";
import ten from "../../../assests/Pages/2020.png";
import one from "../../../assests/Pages/2021.png";
import two from "../../../assests/Pages/2022.png";
import three from "../../../assests/Pages/2023.png";

const Kvpy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [tab, setTab] = useState(1);

  function activeTab(tabNumber) {
    setTab(tabNumber);
  }

  const sevenTeen = kvpyData.filter((data) => data.name === "2017");
  const eighteen = kvpyData.filter((data) => data.name === "2018");
  const nineTeen = kvpyData.filter((data) => data.name === "2019");
  const twenty = kvpyData.filter((data) => data.name === "2020");
  const twentyOne = kvpyData.filter((data) => data.name === "2021");
  const twentyTwo = kvpyData.filter((data) => data.name === "2022");
  const twentyThree = kvpyData.filter((data) => data.name === "2023");

  const kvpy =
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
    <Layout title="KVPY-PYQ-IIT-Academy">
      <div className="content">
        <p
          style={{
            textAlign: "center",
            color: "blue",
            fontWeight: "bold",
            fontSize: "25px",
          }}
        >
          KVPY Previous Year questions
        </p>
        <p>
          KVPY or Kishore Vaigyanik Protsahan Yojana is a national level
          scholarship exam. The KVPY scholarship exam was started by the (DST)
          Department of Science and Technology to encourage and attract
          exceptionally motivated students to pursue a career in basic science
          and research-related fields. Before jumping onto the other vital
          details of the scholarship program, let us know what exactly a KVPY
          scholarship is. Indian Institute of Science gives KVPY scholarships to
          Class 11 and 12 science students and 1st-year undergraduate students
          in the primary science stream. The candidates or students must pass
          the two stages of KVPY exam to be eligible for KVPY scholarship. The
          first is the aptitude test, and the second is the interview round; the
          selected students are given scholarships up to the pre-Ph.D level.
        </p>
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
      {kvpy &&
        kvpy.map((value, index) => {
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

export default Kvpy;
