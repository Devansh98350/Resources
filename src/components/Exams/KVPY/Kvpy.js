import React, { useEffect } from "react";
import Layout from "../../Layout";

const Kvpy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <Layout title="KVPY-Exam-IIT-Academy">About KVPY Exam</Layout>;
};

export default Kvpy;
