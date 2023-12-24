import React, { useEffect } from "react";
import Layout from "../../Layout";

const Kvpy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <Layout title="KVPY-PYQ-IIT-Academy">KVPY PYQ</Layout>;
};

export default Kvpy;
