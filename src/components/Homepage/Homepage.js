import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "./../Layout";
import "./Homepage.css";
import jeeMain from "../../assests/Pages/jeeMain.png";
import jeeAdv from "../../assests/Pages/jeeAdv.png";
import neet from "../../assests/Pages/neet.png";
import boards from "../../assests/Pages/boards.png";
import ncert from "../../assests/Pages/ncert.png";
import kvpy from "../../assests/Pages/kvpy.png";
import others from "../../assests/Pages/others.png";

const Homepage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  return (
    <Layout title="Resources - IIT Academy">
      <h1>Resources</h1>
      <div className="resources-container">
        <div>
          <button
            onClick={() => navigate("/pyq-jee-main-iit-academy")}
            className="resources-card"
          >
            {/* <Flask size={60} color="#0112f3" weight="duotone" /> */}
            <img src={jeeMain} alt="jeeMain" />
          </button>
        </div>
        <div>
          <button
            onClick={() => navigate("/pyq-jee-advanced-iit-academy")}
            className="resources-card"
          >
            {/* <Atom size={52} color="#0112f3" weight="duotone" /> */}
            <img src={jeeAdv} alt="jeeAdv" />
          </button>
        </div>
        <div>
          <button
            onClick={() => navigate("/pyq-neet-iit-academy")}
            className="resources-card"
          >
            {/* <Bandaids size={52} color="#0112f3" weight="duotone" /> */}
            <img src={neet} alt="neet" />
          </button>
        </div>
        <div>
          <button
            onClick={() => navigate("/pyq-cbse-boards-iit-academy")}
            className="resources-card"
          >
            {/* <ClipboardText size={52} color="#0112f3" weight="duotone" /> */}
            <img src={boards} alt="boards" />
          </button>
        </div>
        <div>
          <button
            onClick={() => navigate("/pyq-kvpy-iit-academy")}
            className="resources-card"
          >
            {/* <BookOpen size={52} color="#0112f3" weight="duotone" /> */}
            <img src={kvpy} alt="kvpy" />
          </button>
        </div>
        <div>
          <button
            onClick={() => navigate("/ncert-books-iit-academy")}
            className="resources-card"
          >
            {/* <Book size={52} color="#0112f3" weight="duotone" /> */}
            <img src={ncert} alt="ncert" />
          </button>
        </div>
        <div>
          <button
            onClick={() => navigate("/jee(mains+advanced)-books-iit-academy")}
            className="resources-card"
          >
            <img src={others} alt="others" />
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Homepage;
