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

const AdvancedPYQ2022 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const questionsData = [
    {
      id: "",
      title: "Physics (Shift-I)",
      shift: "JEE Advanced 2022",
      bgColor: "bg-[#5dc298]",
      image: img7,
    },
    {
      id: "",
      title: "Chemistry (Shift-I)",
      shift: "JEE Advanced 2022",
      bgColor: "bg-[#5dc298]",
      image: img8,
    },
    {
      id: "",
      title: "Maths (Shift-I)",
      shift: "JEE Advanced 2022",
      bgColor: "bg-[#5dc298]",
      image: img9,
    },
    {
      id: "",
      title: "Physics (Shift-II)",
      shift: "JEE Advanced 2022",
      bgColor: "bg-[#5dc298]",
      image: img10,
    },
    {
      id: "",
      title: "Chemistry (Shift-II)",
      shift: "JEE Advanced 2022",
      bgColor: "bg-[#5dc298]",
      image: img7,
    },
    {
      id: "",
      title: "Maths (Shift-II)",
      shift: "JEE Advanced 2022",
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
      title="JEE Advanced 2022 PYQ - IIT Academy"
      keyword=""
      description=""
    >
      <Breadcrumbs />
      <div className="container mx-auto px-4">
        <div className="mb-10">
          <h1 className="text-[2rem] font-bold text-blue mb-4">
            JEE Advanced 2022 Paper Analysis
          </h1>
          <p className="text-gray-600">
            The overall difficulty of Paper 1 was moderate and comparatively a
            bit easier than Paper 2. The subject-wise analysis can be stated as
            follows compared to the previous year’s question paper.
          </p>
          <div className="listdata">
            <ul>
              <li className="text-gray-600">
                Physics was at the same level as the previous year.
              </li>
              <li className="text-gray-600">
                Chemistry was more difficult than the previous year.
              </li>
              <li className="text-gray-600">
                Mathematics was a bit easier than the last year.
              </li>
            </ul>
          </div>
          <p className="text-gray-600">
            The overall difficulty of Paper 2 was moderate and comparatively
            more difficult than Paper 1.
          </p>
          <div className="listdata">
            <ul>
              <li className="text-gray-600">
                Physics was at the same level as the previous year.{" "}
              </li>
              <li className="text-gray-600">
                Chemistry was more difficult than the previous year.{" "}
              </li>
              <li className="text-gray-600">
                Mathematics was a bit easier than the previous year.
              </li>
            </ul>
          </div>
          <p className="text-gray-600">
            However, the difficulty level of the JEE Advanced 2022 paper was a
            bit easier compared to previous years, as per our expert faculties.
            Mentioned below is summarised examination analysis of the JEE
            Advanced 2022 Question Paper.
          </p>
          <div className="listdata">
            <ul>
              <li className="text-gray-600">The paper was moderately tough.</li>
              <li className="text-gray-600">The Chemistry section was easy.</li>
              <li className="text-gray-600">
                Physics & Mathematics were moderately tough and lengthy.
              </li>
              <li className="text-gray-600">
                The chemistry section constituted questions from
                Electrochemistry, Mole Concept, Surface Chemistry,
                Thermodynamics & Chemical Kinetics.
              </li>
              <li className="text-gray-600">
                Organic chemistry was also given importance.
              </li>
              <li className="text-gray-600">
                The physics section was conceptual and questions were asked from
                all the chapters.
              </li>
              <li className="text-gray-600">
                Optics, Kinematics, Work Power & Energy, and Rotational Motion
                are some of the important chapters.
              </li>
              <li className="text-gray-600">
                The mathematics section was tough and lengthy.
              </li>
              <li className="text-gray-600">
                Calculus & Coordinate Geometry was given much importance.
              </li>
              <li className="text-gray-600">
                Questions were mixed concept questions clubbing the concepts of
                two chapters, these included, Functions & Progressions,
                Application of Derivatives clubbed with Differential Equation.
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

export default AdvancedPYQ2022;
