import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "../../../Layout";
import Breadcrumbs from "../../../Breadcrumbs";
import Explore from "../../../Common/Explore";
import StackBars from "./StackBars";
import Banner from "../../../Common/Banner";
import img7 from "../../../../assests/home_page/dev1.png";
import img8 from "../../../../assests/home_page/dev2.png";
import img9 from "../../../../assests/home_page/dev3.png";

const NeetPYQ2023 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const questionsData = [
    {
      id: "",
      title: "Physics",
      shift: "NEET 2023",
      bgColor: "bg-[#5dc298]",
      image: img7,
    },
    {
      id: "",
      title: "Chemistry",
      shift: "NEET 2023",
      bgColor: "bg-[#5dc298]",
      image: img8,
    },
    {
      id: "",
      title: "Biology",
      shift: "NEET 2023",
      bgColor: "bg-[#5dc298]",
      image: img9,
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
    <Layout title="NEET 2023 PYQ - IIT Academy" keyword="" description="">
      <Breadcrumbs />
      <div className="container mx-auto px-4">
        <div className="mb-10">
          <h1 className="text-[2rem] font-bold text-blue mb-4">
            NEET 2023 Paper Analysis
          </h1>
          <p>
            NEET 2023 exam was generally moderate to difficult, according to
            students and experts. The difficulty level of the neet 2023
            chemistry paper was moderate, and the Physics was a touch drawn out
            but easy to moderate, with a bigger weightage for numerical
            questions. It is considered that the easiest areas of the exam are
            zoology and botany.
          </p>
          <p>
            Physics, Chemistry, and Biology are the three key disciplines
            covered in the NEET UG 2023 exam. You can have a better idea of the
            types of questions asked in each subject and the distribution of
            marks by breaking down the question paper into its individual
            subjects. Here is a brief synopsis of each subject's contents.
          </p>
          <p>
            <b>1. Physics:</b> To excel in the challenging topic of physics, one
            must have a full understanding of concepts and formulas. Physics
            questions on the NEET UG 2023 exam typically combine theory and
            numerical issues. The questions span subjects including magnetism,
            electricity, thermodynamics, and mechanics. To perform well in
            physics, you must possess a firm understanding of the key ideas and
            practice problem-solving techniques
          </p>
          <p>
            <b>2. Chemistry:</b> Another crucial subject in the NEET UG 2023
            exam is chemistry. Chemistry questions are frequently formula-based
            and necessitate a thorough knowledge of chemical equations,
            reactions, and mechanisms. Organic, inorganic, and physical
            chemistry are some of the subjects covered in the chemistry
            division. To perform well in chemistry, it is crucial to review the
            foundational ideas and practice problem-solving techniques.
          </p>
          <p>
            <b>3. Biology:</b> The NEET UG 2023 exam's most important subject is
            biology because it has the highest weightage. Zoology and Botany are
            the two subsections of the biology subject. Biology exam questions
            are frequently conceptbased and call for a thorough knowledge of the
            human body, other species, and their operations. To do well in
            biology, you must have a firm grasp on the essential ideas and
            practice answering questions.
          </p>
          <div className="tabledata">
            <table>
              <tbody>
                <tr className="pink-col">
                  <th rowSpan={2}>Subjects</th>
                  <th colSpan={2}>Easy</th>
                  <th colSpan={2}>Medium</th>
                  <th colSpan={2}>Difficult</th>
                  <th colSpan={2}>Grand Total</th>
                </tr>
                <tr className="pink-col">
                  <th>No of Questions</th>
                  <th>Total Marks</th>
                  <th>No of Questions</th>
                  <th>Total Marks</th>
                  <th>No of Questions</th>
                  <th>Total Marks</th>
                  <th>No of Questions</th>
                  <th>Total Marks</th>
                </tr>
                <tr>
                  <td>Physics</td>
                  <td>34</td>
                  <td>136</td>
                  <td>14</td>
                  <td>56</td>
                  <td>2</td>
                  <td>8</td>
                  <td>50</td>
                  <td>200</td>
                </tr>
                <tr>
                  <td>Chemistry</td>
                  <td>34</td>
                  <td>136</td>
                  <td>13</td>
                  <td>52</td>
                  <td>3</td>
                  <td>12</td>
                  <td>50</td>
                  <td>200</td>
                </tr>
                <tr>
                  <td>Botany</td>
                  <td>37</td>
                  <td>148</td>
                  <td>12</td>
                  <td>48</td>
                  <td>1</td>
                  <td>4</td>
                  <td>50</td>
                  <td>200</td>
                </tr>
                <tr>
                  <td>Zoology</td>
                  <td>34</td>
                  <td>136</td>
                  <td>12</td>
                  <td>48</td>
                  <td>0</td>
                  <td>0</td>
                  <td>50</td>
                  <td>200</td>
                </tr>
                <tr>
                  <th>Grand Total</th>
                  <th>139</th>
                  <th>556</th>
                  <th>55</th>
                  <th>220</th>
                  <th>6</th>
                  <th>24</th>
                  <th>200</th>
                  <th>800</th>
                </tr>
              </tbody>
            </table>
          </div>
          <h4 className="center-h1 blck">Class Wise Question Distribution</h4>
          <StackBars />
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

export default NeetPYQ2023;
