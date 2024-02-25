import React, { useEffect } from "react";
import Layout from "../../Layout";

const Sample = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <Layout title="NTSE-Exam-IIT-Academy">All CBSE Sample Paper</Layout>;
};

export default Sample;
