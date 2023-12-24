import React, { useEffect } from "react";
import Layout from "../../Layout";

const Neet = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <Layout title="NEET-Syllabus-IIT-Academy">NEET Syllabus</Layout>;
};

export default Neet;
