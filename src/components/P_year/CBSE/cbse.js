import React, { useEffect } from "react";
import Layout from "../../Layout";

const Cbse = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <Layout title="CBSE-PYQ-IIT-Academy">CBSE PYQ</Layout>;
};

export default Cbse;
