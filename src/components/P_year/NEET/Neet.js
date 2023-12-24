import React, { useEffect } from "react";
import Layout from "../../Layout";

const Neet = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <Layout title="NEET-PYQ-IIT-Academy">NEET PYQ</Layout>;
};

export default Neet;
