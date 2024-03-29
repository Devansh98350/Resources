import React, { useEffect } from "react";
import Layout from "../../../Layout";
import "./MainContent.css";
import physics from "../../../../assests/Pages/physics.png";
import chemistry from "../../../../assests/Pages/chemistry.png";
import maths from "../../../../assests/Pages/maths.png";

function MainContent2020() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="JEE-Mains-PYQ-2020-IIT-Academy">
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
      </div>
    </Layout>
  );
}

export default MainContent2020;
