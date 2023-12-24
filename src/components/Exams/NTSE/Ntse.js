import React, { useEffect } from "react";
import Layout from "../../Layout";

const Ntse = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <Layout title="NTSE-Exam-IIT-Academy">About NTSE Exam</Layout>;
};

export default Ntse;
