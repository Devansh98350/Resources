import React from "react";
import { Toaster } from "react-hot-toast";
import Footer from "./Footer/Footer";
import Header from "../components/Header/Header.js";
import LeftSide from "./Layout/Left.js";
import { Helmet } from "react-helmet";
import RightSide from "./Layout/Right.js";

const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Header />
      <LeftSide />
      <RightSide />
      <main style={{ minHeight: "68.4vh" }}>
        <Toaster /> {children}
      </main>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: "IIT Academy",
  description: "Best Institute for JEE and NEET",
  keywords: "mern,react,node,mongodb",
  author: "Devanshu Kumar",
};

export default Layout;
