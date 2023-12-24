import React, { useEffect } from "react";
import Layout from "../../Layout";

const Neet = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <Layout title="NEET-Exam-IIT-Academy">About NEET Exam</Layout>;
};

export default Neet;
