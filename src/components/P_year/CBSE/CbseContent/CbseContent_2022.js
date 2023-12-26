import React, { useEffect } from "react";
import Layout from "../../../Layout";
import "./CbseContent.css";
import physics from "../../../../assests/Pages/physics.png";
import chemistry from "../../../../assests/Pages/chemistry.png";
import maths from "../../../../assests/Pages/maths.png";
import biology1 from "../../../../assests/Pages/biology1.png";
import english from "../../../../assests/Pages/english.png";
import painting from "../../../../assests/Pages/painting.png";

function CbseContent2022() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="CBSE-PYQ-2022-IIT-Academy">
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
            <img src={maths} alt="maths" />
          </button>
        </div>
        <div>
          <button className="jeeContent-card">
            <img src={biology1} alt="biology1" />
          </button>
        </div>
        <div>
          <button className="jeeContent-card">
            <img src={english} alt="english" />
          </button>
        </div>
        <div>
          <button className="jeeContent-card">
            <img src={painting} alt="painting" />
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default CbseContent2022;
