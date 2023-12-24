import React, { useEffect } from "react";
import Layout from "../../Layout";

const Advanced = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="JEE-Advanced-Exam-IIT-Academy">
      About JEE Advanced Exam
    </Layout>
  );
};

export default Advanced;
