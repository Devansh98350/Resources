import React, { useEffect } from "react";
import Layout from "../../Layout";
import Breadcrumbs from "../../Breadcrumbs";

function NeetBooks() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="NEET-Books-IIT-Academy">
      <Breadcrumbs />
      <h>Books for NEET Preparation</h>
    </Layout>
  );
}

export default NeetBooks;
