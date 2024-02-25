import React, { useEffect } from "react";
import Layout from "../../Layout";

const Schedule = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <Layout title="Exam-Schedule-2024">Exam Schedule 2024</Layout>;
};

export default Schedule;
