import React, { useEffect } from "react";
import Layout from "../../Layout";

const Main = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <Layout title="JEE-Mains-Syllabus-IIT-Academy">Main Syllabus</Layout>;
};

export default Main;
