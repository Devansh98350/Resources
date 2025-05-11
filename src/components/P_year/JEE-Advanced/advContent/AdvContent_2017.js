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

const AdvancedPYQ2017 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const questionsData = [
    {
      id: "",
      title: "Physics (Shift-I)",
      shift: "JEE Advanced 2017",
      bgColor: "bg-[#5dc298]",
      image: img7,
    },
    {
      id: "",
      title: "Chemistry (Shift-I)",
      shift: "JEE Advanced 2017",
      bgColor: "bg-[#5dc298]",
      image: img8,
    },
    {
      id: "",
      title: "Maths (Shift-I)",
      shift: "JEE Advanced 2017",
      bgColor: "bg-[#5dc298]",
      image: img9,
    },
    {
      id: "",
      title: "Physics (Shift-II)",
      shift: "JEE Advanced 2017",
      bgColor: "bg-[#5dc298]",
      image: img10,
    },
    {
      id: "",
      title: "Chemistry (Shift-II)",
      shift: "JEE Advanced 2017",
      bgColor: "bg-[#5dc298]",
      image: img7,
    },
    {
      id: "",
      title: "Maths (Shift-II)",
      shift: "JEE Advanced 2017",
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
      title="JEE Advanced 2017 PYQ - IIT Academy"
      keyword=""
      description=""
    >
      <Breadcrumbs />
      <div className="container mx-auto px-4">
        <div className="mb-10">
          <h1 className="text-[2rem] font-bold text-blue mb-4">
            JEE Advanced 2017 Paper Analysis
          </h1>
          <p className="text-gray-600">
            As per the experts, the difficulty level of the two papers was given
            as follows:
          </p>
          <div className="tabledata">
            <table>
              <tbody>
                <tr>
                  <th>Physics</th>
                  <td>Between medium to difficult</td>
                </tr>
                <tr>
                  <th>Chemistry</th>
                  <td>
                    On the difficult side due to the application-based approach
                    of the questions
                  </td>
                </tr>
                <tr>
                  <th>Maths</th>
                  <td>Comparatively easier than Physics and Chemistry</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600">
            Overall On a moderate level. The paper was relatively easy than last
            year (2016).
          </p>
          <h4 className="mb-0 mt-0">
            <strong>Physics</strong>
          </h4>
          <div className="listdata">
            <ul>
              <li className="text-gray-600">
                The physics section in both papers was moderate in terms of
                difficulty level.
              </li>
              <li className="text-gray-600">
                Questions consisted of both a mixture of conceptual and
                formula-based ones.
              </li>
              <li className="text-gray-600">
                Some of the questions were lengthy and calculative in nature as
                well.
              </li>
              <li className="text-gray-600">
                The overall paper was slightly easier compared to last year.
              </li>
              <li className="text-gray-600">
                Electromagnetics chapter had the majority of the questions,
                followed by Mechanics.
              </li>
            </ul>
          </div>
          <h4 className="mb-0 mt-0">
            <strong>Chemistry</strong>
          </h4>
          <div className="listdata">
            <ul>
              <li className="text-gray-600">
                The chemistry section consisted of questions that were a bit
                difficult compared to Maths and Physics.
              </li>
              <li className="text-gray-600">
                The Chemistry section was difficult mainly because of the
                application-based approach to the questions.
              </li>
              <li className="text-gray-600">
                This section also had calculation-based questions.
              </li>
              <li className="text-gray-600">
                Inorganic chemistry had the highest weightage.
              </li>
              <li className="text-gray-600">
                Compared to last year, it was a tough paper
              </li>
            </ul>
          </div>
          <h4 className="mb-0 mt-0">
            <strong>Maths</strong>
          </h4>
          <div className="listdata">
            <ul>
              <li className="text-gray-600">
                Mathematics was on a moderate level this time.
              </li>
              <li className="text-gray-600">
                Students with a good understanding of the concepts should be
                able to do well.
              </li>
              <li className="text-gray-600">
                Most of the questions were asked from Calculus and Algebra,
                followed by Coordinate Geometry.
              </li>
              <li className="text-gray-600">
                Compared to last year, it was significantly easier.
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

export default AdvancedPYQ2017;
