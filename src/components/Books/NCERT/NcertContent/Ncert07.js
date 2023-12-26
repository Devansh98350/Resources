import React, { useEffect } from "react";
import Layout from "../../../Layout";
import "./NcertContent.css";
import maths from "../../../../assests/Pages/maths.png";
import science from "../../../../assests/Pages/science.png";

function Ncert7() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="NCERT-Class-7-IIT-Academy">
      <div className="class7-container">
        <div>
          <button className="class7-card">
            <img src={maths} alt="maths" />
          </button>
        </div>
        <div>
          <button className="class7-card">
            <img src={science} alt="science" />
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default Ncert7;
