import React, { useEffect } from "react";
import Layout from "../../Layout";

const Ntse = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <Layout title="NTSE-Syllabus-IIT-Academy">NTSE Syllabus</Layout>;
};

export default Ntse;
