import React, { useEffect } from "react";
import Layout from "../../Layout";

const Cbse = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <Layout title="CBSE-Syllabus-IIT-Academy">CBSE Syllabus</Layout>;
};

export default Cbse;
