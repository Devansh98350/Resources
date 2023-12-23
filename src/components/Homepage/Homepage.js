import React, { useEffect } from "react";
import Layout from "./../Layout";
const Homepage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <Layout title="Resources - IIT Academy">Hello</Layout>;
};

export default Homepage;
