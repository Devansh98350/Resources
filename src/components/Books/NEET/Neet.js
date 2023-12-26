import React, { useEffect } from "react";
import Layout from "../../Layout";

function NeetBooks() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="NEET-Books-IIT-Academy">
      <h>Books for NEET Preparation</h>
    </Layout>
  );
}

export default NeetBooks;
