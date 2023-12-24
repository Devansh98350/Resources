import React, { useEffect } from "react";
import Layout from "../../Layout";

const Main = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <Layout title="JEE-Mains-Exam-IIT-Academy">About Main Exam</Layout>;
};

export default Main;
