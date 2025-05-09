import React, { useEffect } from "react";
import Layout from "../../Layout";
import "./Jee.css";
import Breadcrumbs from "../../Breadcrumbs";

function JeeBooks() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="Jee(Mains+Advanced)-Books-IIT-Academy">
      <Breadcrumbs />
      <div className="others-container">
        <h1>Physics</h1>
        <div>
          <button className="others-card">Name</button>
        </div>
        <div>
          <button className="others-card">Name</button>
        </div>
        <div>
          <button className="others-card">Name</button>
        </div>
        <h1>Chemistry</h1>
        <div>
          <button className="others-card">Name</button>
        </div>
        <div>
          <button className="others-card">Name</button>
        </div>
        <div>
          <button className="others-card">Name</button>
        </div>
        <h1>Maths</h1>
        <div>
          <button className="others-card">Name</button>
        </div>
        <div>
          <button className="others-card">Name</button>
        </div>
        <div>
          <button className="others-card">Name</button>
        </div>
      </div>
    </Layout>
  );
}

export default JeeBooks;
