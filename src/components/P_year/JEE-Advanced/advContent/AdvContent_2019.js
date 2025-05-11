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

const AdvancedPYQ2019 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const questionsData = [
    {
      id: "",
      title: "Physics (Shift-I)",
      shift: "JEE Advanced 2019",
      bgColor: "bg-[#5dc298]",
      image: img7,
    },
    {
      id: "",
      title: "Chemistry (Shift-I)",
      shift: "JEE Advanced 2019",
      bgColor: "bg-[#5dc298]",
      image: img8,
    },
    {
      id: "",
      title: "Maths (Shift-I)",
      shift: "JEE Advanced 2019",
      bgColor: "bg-[#5dc298]",
      image: img9,
    },
    {
      id: "",
      title: "Physics (Shift-II)",
      shift: "JEE Advanced 2019",
      bgColor: "bg-[#5dc298]",
      image: img10,
    },
    {
      id: "",
      title: "Chemistry (Shift-II)",
      shift: "JEE Advanced 2019",
      bgColor: "bg-[#5dc298]",
      image: img7,
    },
    {
      id: "",
      title: "Maths (Shift-II)",
      shift: "JEE Advanced 2019",
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
      title="JEE Advanced 2019 PYQ - IIT Academy"
      keyword=""
      description=""
    >
      <Breadcrumbs />
      <div className="container mx-auto px-4">
        <div className="mb-10">
          <h1 className="text-[2rem] font-bold text-blue mb-4">
            JEE Advanced 2019 Paper Analysis
          </h1>
          <p className="text-gray-600">
            The JEE Advanced 2019 was held on May 27th. The test was led by IIT
            Roorkee and around 1.70 lakh applicants showed up for the test.
            Paper 1 was led toward the beginning of the day shift from 9:00 am
            to 12:00 pm while paper 2 was led from 2:00 to 4:00 pm. The exam
            pattern was like 2018. In any case, since tests have finished up
            students can look at the paper examination on how the inquiry paper
            was set, its trouble level and different subtleties.
          </p>
          <p className="text-gray-600">
            Subject specialists at IIT Academy have completely investigated and
            given definite paper-wise and subjectwise examinations of the JEE
            Advanced inquiry papers. The paper, by and large, was somewhat
            harder contrasted with last year (2018).
          </p>
          <p className="text-gray-600">
            <strong>Paper-1: </strong> The general trouble of paper 1 was
            moderate. Not surprisingly, Maths was on the troublesome side while
            material science was on a moderate level. Chemistry was the simplest
            segment.
          </p>
          <p className="text-gray-600">
            <strong>Paper-2: </strong> Paper 2 was relatively simpler than paper
            1. In this paper, the math-related segment was somewhat extreme and
            extended, physics was extended additionally while chemistry was once
            more the simplest area.
          </p>
          <h4 className="mb-0 mt-0">
            <strong>Physics</strong>
          </h4>
          <div className="listdata">
            <ul>
              <li className="text-gray-600">
                Physics questions in paper 1 and paper 2 were on a moderate
                level but lengthy.
              </li>
              <li className="text-gray-600">
                The physics section in both the papers had questions that were
                concepts and applications based on some calculations.
              </li>
              <li className="text-gray-600">
                Most of the questions were from Thermodynamics, Optics and
                Thermodynamics and Electrostatics.
              </li>
            </ul>
          </div>
          <h4 className="mb-0 mt-0">
            <strong> Chemistry</strong>
          </h4>
          <div className="listdata">
            <ul>
              <li className="text-gray-600">
                The Chemistry section in both paper 1 and paper 2 was the
                easiest.
              </li>
              <li className="text-gray-600">
                The questions were mainly designed to test the candidates’
                understanding of the concepts.
              </li>
              <li className="text-gray-600">
                In this section, questions from inorganic and organic chemistry
                were balanced, while there were fewer questions from physical
                chemistry.
              </li>
            </ul>
          </div>
          <h4 className="mb-0 mt-0">
            <strong>Maths</strong>
          </h4>
          <div className="listdata">
            <ul>
              <li className="text-gray-600">
                The mathematics section in paper 1 and paper 2 had questions
                that were on a moderate to difficult level.
              </li>
              <li className="text-gray-600">
                Questions took a bit longer time to solve, and attempting all
                the questions was a difficult task.
              </li>
              <li className="text-gray-600">
                Questions were mainly set from Algebra, Coordinate Geometry, and
                Integral Calculus. Few questions were based on Probability,
                Quadratic Equation and Sequence & Series.
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

export default AdvancedPYQ2019;
