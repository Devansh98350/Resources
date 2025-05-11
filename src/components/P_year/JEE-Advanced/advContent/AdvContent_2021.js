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

const AdvancedPYQ2021 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const questionsData = [
    {
      id: "",
      title: "Physics (Shift-I)",
      shift: "JEE Advanced 2021",
      bgColor: "bg-[#5dc298]",
      image: img7,
    },
    {
      id: "",
      title: "Chemistry (Shift-I)",
      shift: "JEE Advanced 2021",
      bgColor: "bg-[#5dc298]",
      image: img8,
    },
    {
      id: "",
      title: "Maths (Shift-I)",
      shift: "JEE Advanced 2021",
      bgColor: "bg-[#5dc298]",
      image: img9,
    },
    {
      id: "",
      title: "Physics (Shift-II)",
      shift: "JEE Advanced 2021",
      bgColor: "bg-[#5dc298]",
      image: img10,
    },
    {
      id: "",
      title: "Chemistry (Shift-II)",
      shift: "JEE Advanced 2021",
      bgColor: "bg-[#5dc298]",
      image: img7,
    },
    {
      id: "",
      title: "Maths (Shift-II)",
      shift: "JEE Advanced 2021",
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
      title="JEE Advanced 2021 PYQ - IIT Academy"
      keyword=""
      description=""
    >
      <Breadcrumbs />
      <div className="container mx-auto px-4">
        <div className="mb-10">
          <h1 className="text-[2rem] font-bold text-blue mb-4">
            JEE Advanced 2021 Paper Analysis
          </h1>
          <p className="text-gray-600">
            The JEE Advanced 2021 exam was conducted by IIT Kharagpur on 3rd
            October 2021. The JEE Advanced 2021 exam had two papers: Paper 1 and
            Paper 2. The duration of the JEE Advanced 2021 exam was three hours
            for each subject. There were 19 questions each from Physics, Maths
            and Chemistry. JEE Advanced 2021 paper analysis will help JEE
            aspirants to know the difficulty level of the JEE Advanced 2021
            exam.
          </p>
          <h4 className="mb-0 mt-0">
            <strong>Physics</strong>
          </h4>
          <div className="listdata">
            <ul>
              <li className="text-gray-600">
                Compared to Maths and Chemistry, Physics was the easiest subject
                in paper 1.
              </li>
              <li className="text-gray-600">
                More weightage was given to Class 11 topics in JEE Advanced 2021
                Physics Paper 1.
              </li>
              <li className="text-gray-600">
                Questions asked from Class 12 topics were tough in Paper 1.
              </li>
              <li className="text-gray-600">
                JEE Advanced 2021 Physics Paper 2 was tougher compared to Paper
                1.
              </li>
              <li className="text-gray-600">
                More weightage was given to Class 12 topics in Paper 2.
              </li>
            </ul>
          </div>
          <h4 className="mb-0 mt-0">
            <strong> Chemistry</strong>
          </h4>
          <div className="listdata">
            <ul>
              <li className="text-gray-600">MCQs were easy in Paper 1.</li>
              <li className="text-gray-600">
                Paper 1 was easier than Paper 2.
              </li>
              <li className="text-gray-600">
                States of Matter, Thermodynamics, Electrochemistry and Redox
                were the important topics covered in Paper 1.
              </li>
              <li className="text-gray-600">
                In Paper 2, equal weightage was given to Class 11 and Class 12.
              </li>
              <li className="text-gray-600">
                Atomic structure, Aldehydes, and p-block elements were the
                important topics covered in Paper 2.
              </li>
            </ul>
          </div>
          <h4 className="mb-0 mt-0">
            <strong>Maths</strong>
          </h4>
          <div className="listdata">
            <ul>
              <li className="text-gray-600">
                Paper 1 questions were difficult, tricky and toughest among all
                3 subjects.
              </li>
              <li className="text-gray-600">
                More weightage was given to Class 11 chapters in Paper 1.
              </li>
              <li className="text-gray-600">
                Paper 2 questions was tough and lengthy.
              </li>
              <li className="text-gray-600">
                In Paper 2, more questions were asked from Geometry, Calculus
                and Probability.
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

export default AdvancedPYQ2021;
