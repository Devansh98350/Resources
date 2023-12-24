import React, { useEffect } from "react";
import Layout from "../../Layout";

const Main = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <Layout title="JEE-Mains-PYQ-IIT-Academy">Main PYQ</Layout>;
};

export default Main;
