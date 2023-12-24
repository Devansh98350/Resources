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
      <div className="jee-main">
        <div>
          <button
            className="jeemain-btn"
            onClick={() => {
              navigate("/advcontent");
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
              navigate("/advcontent");
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
              navigate("/advcontent");
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
              navigate("/advcontent");
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
              navigate("/advcontent");
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
              navigate("/advcontent");
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
              navigate("/advcontent");
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
