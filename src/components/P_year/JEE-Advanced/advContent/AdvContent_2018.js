import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "../../../Layout";
import Breadcrumbs from "../../../Breadcrumbs";
import Explore from "../../../Common/Explore";
import Banner from "../../../Common/Banner";
import img7 from "../../../../assests/home_page/dev1.png";
import img8 from "../../../../assests/home_page/dev2.png";
import img9 from "../../../../assests/home_page/dev3.png";
import img10 from "../../../../assests/home_page/dev4.png";

const AdvancedPYQ2018 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const questionsData = [
    {
      id: "",
      title: "Physics (Shift-I)",
      shift: "JEE Advanced 2018",
      bgColor: "bg-[#5dc298]",
      image: img7,
    },
    {
      id: "",
      title: "Chemistry (Shift-I)",
      shift: "JEE Advanced 2018",
      bgColor: "bg-[#5dc298]",
      image: img8,
    },
    {
      id: "",
      title: "Maths (Shift-I)",
      shift: "JEE Advanced 2018",
      bgColor: "bg-[#5dc298]",
      image: img9,
    },
    {
      id: "",
      title: "Physics (Shift-II)",
      shift: "JEE Advanced 2018",
      bgColor: "bg-[#5dc298]",
      image: img10,
    },
    {
      id: "",
      title: "Chemistry (Shift-II)",
      shift: "JEE Advanced 2018",
      bgColor: "bg-[#5dc298]",
      image: img7,
    },
    {
      id: "",
      title: "Maths (Shift-II)",
      shift: "JEE Advanced 2018",
      bgColor: "bg-[#5dc298]",
      image: img8,
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
    <Layout
      title="JEE Advanced 2018 PYQ - IIT Academy"
      keyword=""
      description=""
    >
      <Breadcrumbs />
      <div className="container mx-auto px-4">
        <div className="mb-10">
          <h1 className="text-[2rem] font-bold text-blue mb-4">
            JEE Advanced 2018 Paper Analysis
          </h1>
          <p className="text-gray-600">
            <strong>Paper-1: </strong>The overall difficulty of JEE Advanced
            2018 Question paper 1 was moderate. Surprisingly, Maths section was
            easy while Chemistry consisted of difficult questions. The Physics
            section was on the moderate side.
          </p>
          <p className="text-gray-600">
            <strong>Paper-2: </strong>Many candidates were of the opinion that
            paper 2 was more difficult compared to paper 1. Here the Maths
            section was a little tricky, Physics was lengthy but easier while
            Chemistry again was the most difficult.
          </p>
          <h4 className="mb-0 mt-0">
            <strong>Physics</strong>
          </h4>
          <div className="listdata">
            <ul>
              <li className="text-gray-600">
                The Physics section in both paper 1 and paper 2 was on a
                moderate level.
              </li>
              <li className="text-gray-600">
                The Physics questions were mostly analytical and
                application-based.
              </li>
              <li className="text-gray-600">
                There were fewer calculation based questions.
              </li>
              <li className="text-gray-600">
                Physics was comparatively easier than Chemistry and Maths.
              </li>
            </ul>
          </div>
          <h4 className="mb-0 mt-0">
            <strong> Chemistry</strong>
          </h4>
          <div className="listdata">
            <ul>
              <li className="text-gray-600">
                Chemistry section surprisingly was on the difficult side.
              </li>
              <li className="text-gray-600">
                In terms of weightage, Physical and Organic Chemistry were given
                more importance in comparison to Inorganic Chemistry.
              </li>
              <li className="text-gray-600">
                Some questions were asked outside of the NCERT books or
                syllabus.
              </li>
            </ul>
          </div>
          <h4 className="mb-0 mt-0">
            <strong> Maths</strong>
          </h4>
          <div className="listdata">
            <ul>
              <li className="text-gray-600">
                The Mathematics questions in paper 1 and paper 2 were on a
                moderate level.
              </li>
              <li className="text-gray-600">
                However, some questions were new and challenging as well as
                lengthy.
              </li>
              <li className="text-gray-600">
                There were few conceptual questions as well.
              </li>
              <li className="text-gray-600">
                Comparatively this section was easier with regards to Physics
                and Chemistry.
              </li>
            </ul>
          </div>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
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
                    <span className="text-white text-sm">{item.shift}</span>
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

export default AdvancedPYQ2018;
