import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "../../../Layout";
import Breadcrumbs from "../../../Breadcrumbs";
import Explore from "../../../Common/Explore";
import Banner from "../../../Common/Banner";
import img1 from "../../../../assests/home_page/learn1.png";
import img2 from "../../../../assests/home_page/learn4.png";

const NcertClass6 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const questionsData = [
    {
      id: "",
      title: "Mathematics",
      class: "Class 6",
      bgColor: "bg-[#12bd84]",
      image: img1,
    },
    {
      id: "",
      title: "Science",
      class: "Class 6",
      bgColor: "bg-[#12bd84]",
      image: img2,
    },
    {
      id: "",
      title: "Sanskrit",
      class: "Class 6",
      bgColor: "bg-[#12bd84]",
      image: img1,
    },
    {
      id: "",
      title: "History",
      class: "Class 6",
      bgColor: "bg-[#12bd84]",
      image: img2,
    },
    {
      id: "",
      title: "Political Science",
      class: "Class 6",
      bgColor: "bg-[#12bd84]",
      image: img1,
    },
    {
      id: "",
      title: "Geography",
      class: "Class 6",
      bgColor: "bg-[#12bd84]",
      image: img1,
    },
    {
      id: "",
      title: "English",
      class: "Class 6",
      bgColor: "bg-[#12bd84]",
      image: img2,
    },
  ];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <Layout title="NCERT Class 6 Books - IIT Academy" keyword="" description="">
      <Breadcrumbs />
      <div className="container mx-auto px-4">
        <div className="mb-10">
          <h1 className="text-[2rem] font-bold text-blue mb-4">
            NCERT Class 6 Textbooks
          </h1>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {questionsData.map((item) => (
            <motion.div
              whileHover={{
                scale: 1.03,
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
              }}
              key={item.id}
              variants={itemVariants}
              className="h-64 relative rounded-xl overflow-hidden shadow-md transition-transform hover:shadow-lg"
            >
              <Link to={`#`}>
                <div
                  className={`absolute inset-0 ${
                    item.bgColor || "bg-blue-500"
                  } bg-opacity-80`}
                >
                  <img
                    src={item.image}
                    alt=""
                    className="w-full h-full object-cover opacity-60 "
                  />
                </div>
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <h2 className="text-white text-2xl font-bold">
                    {item.title}
                  </h2>
                  <div className="flex items-center justify-between">
                    <span className="text-white text-sm">{item.class}</span>
                    <span className="px-3 py-1 bg-white bg-opacity-20 text-white text-sm rounded-full">
                      Click Here
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="mt-6">
        <Banner />
      </div>
      <Explore />
    </Layout>
  );
};

export default NcertClass6;
