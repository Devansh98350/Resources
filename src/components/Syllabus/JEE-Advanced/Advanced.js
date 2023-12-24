import React, { useEffect } from "react";
import Layout from "../../Layout";

const Advanced = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="JEE-Advanced-Syllabus-IIT-Academy">
      JEE Advanced Syllabus
    </Layout>
  );
};

export default Advanced;
