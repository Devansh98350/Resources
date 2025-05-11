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

const AdvancedPYQ2023 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const questionsData = [
    {
      id: "",
      title: "Physics (Shift-I)",
      shift: "JEE Advanced 2023",
      bgColor: "bg-[#5dc298]",
      image: img7,
    },
    {
      id: "",
      title: "Chemistry (Shift-I)",
      shift: "JEE Advanced 2023",
      bgColor: "bg-[#5dc298]",
      image: img8,
    },
    {
      id: "",
      title: "Maths (Shift-I)",
      shift: "JEE Advanced 2023",
      bgColor: "bg-[#5dc298]",
      image: img9,
    },
    {
      id: "",
      title: "Physics (Shift-II)",
      shift: "JEE Advanced 2023",
      bgColor: "bg-[#5dc298]",
      image: img10,
    },
    {
      id: "",
      title: "Chemistry (Shift-II)",
      shift: "JEE Advanced 2023",
      bgColor: "bg-[#5dc298]",
      image: img7,
    },
    {
      id: "",
      title: "Maths (Shift-II)",
      shift: "JEE Advanced 2023",
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
      title="JEE Advanced 2023 PYQ - IIT Academy"
      keyword=""
      description=""
    >
      <Breadcrumbs />
      <div className="container mx-auto px-4">
        <div className="mb-10">
          <h1 className="text-[2rem] font-bold text-blue mb-4">
            JEE Advanced 2023 Paper Analysis
          </h1>
          <h4 className="mb-[-1rem] mt-0">
            <strong>Paper 1 Pattern:</strong>
          </h4>
          <p className="text-gray-600">
            To help students to have a better understanding of the format of the
            questions that are followed in previous year question papers and the
            upcoming JEE Advanced examination 2023, we have provided a detailed
            paper pattern.
          </p>
          <div className="tabledata">
            <table>
              <tbody className="text-gray-600">
                <tr>
                  <th>Section</th>
                  <th>Types of Questions</th>
                  <th>No. of Questions</th>
                  <th>Maximum Marks</th>
                </tr>
                <tr>
                  <td>Section 1 </td>
                  <td>MCQs with Single Correct Option</td>
                  <td>6</td>
                  <td>18</td>
                </tr>
                <tr>
                  <td>Section 2</td>
                  <td>Single Correct Option</td>
                  <td>6</td>
                  <td>24</td>
                </tr>
                <tr>
                  <td>Section 3</td>
                  <td>Numerical Value Answer</td>
                  <td>6</td>
                  <td>24</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h4 className="mb-[-1rem] mt-0">
            <strong>Paper 2 Pattern:</strong>
          </h4>
          <p className="text-gray-600">
            Mentioned below is the detailed question paper pattern followed in
            the JEE Advanced 2023 question paper.
          </p>
          <div className="tabledata">
            <table>
              <tbody className="text-gray-600">
                <tr>
                  <th>Section</th>
                  <th>Types of Questions</th>
                  <th>No. of Questions</th>
                  <th>Maximum Marks</th>
                </tr>
                <tr>
                  <td>Section 1 </td>
                  <td>MCQs with one or more than one correct answer</td>
                  <td>6</td>
                  <td>24</td>
                </tr>
                <tr>
                  <td>Section 2</td>
                  <td>Numerical value answer type questions</td>
                  <td>6</td>
                  <td>24</td>
                </tr>
                <tr>
                  <td>Section 3</td>
                  <td>Single-digit integer answer (0-9)</td>
                  <td>6</td>
                  <td>18</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h4 className="mb-[-1rem] mt-0">
            <strong>Analysis of Paper-1:</strong>
          </h4>
          <p className="text-gray-600">
            Students found the overall level of paper Moderate to Difficult
            level but not easy. Some students have reported Physics was Easy,
            Chemistry was Moderate, but Maths was relatively difficult.
          </p>
          <div className="listdata">
            <ul>
              <li className="text-gray-600">
                <b>Physics</b> more weightage was given to chapters like
                Kinematics, Thermodynamics, Modern Physics, Capacitors, Current
                Electricity, Kinematics, Gravitation, Optics, and
                Electrostatics. Overall, Physics was Easy as compared to the
                other two subjects as per students. This was a Balanced Section
                as per students.
              </li>
              <li className="text-gray-600">
                <b>Chemistry</b> was not balanced as per students. Inorganic
                Chemistry had a few questions which were directly from NCERT. In
                Physical Chemistry, questions covered chapters of Chemical
                Kinetics, Ionic & Chemical Equilibrium, Electrochemistry, and
                Atomic Structure. Thermodynamics (with more than one question).
                In Organic Chemistry, questions mostly asked from Amines,
                Polymers, Biomolecules, Oxygen-containing Compounds, and some
                named reactions were also asked. Mixed concepts questions were
                asked. This section was reported Moderate as per students. More
                weightage is given to Organic Chemistry.
              </li>
              <li className="text-gray-600">
                <b>Mathematics</b> was tricky & difficult for students. There
                were tricky and lengthy questions from Vectors and 3D Geometry.
                There were questions from Functions, Matrices, Ellipse,
                Statistics & Probability. Some good questions were asked in
                chapters of Probability, Complex Numbers, 3-D Geometry, and
                Parabolas. Students felt this section was the Toughest.
              </li>
            </ul>
          </div>
          <h4 className="mb-[-1rem] mt-0">
            <strong>Analysis of Paper-2:</strong>
          </h4>
          <p className="text-gray-600">
            Students found the overall level of paper Moderate to Difficult
            level but not easy. Some students have reported Physics and
            Chemistry were Moderate, but Maths was relatively difficult.
          </p>
          <div className="listdata">
            <ul>
              <li className="text-gray-600">
                <b>Physics</b> had more weightage for chapters like Wave &
                Sound, Wave Optics, Fluids, EM Waves, Thermodynamics, Modern
                Physics, Current Electricity, Kinematics, Gravitation, and
                Electrostatics. Overall, Physics was Moderate as per students.
                Students felt this section was not balanced. Some questions had
                tricky & Lengthy calculations.
              </li>
              <li className="text-gray-600">
                <b>Chemistry</b> was Tricky as per students. More weightage was
                given to Organic & Physical Chemistry as compared to Inorganic.
                Inorganic Chemistry had a few questions which were directly from
                NCERT. In Physical Chemistry, questions covered Chemical
                Kinetics, Ionic & Chemical Equilibrium, Electrochemistry, and
                Thermodynamics (with more than one question). In Organic
                Chemistry, questions are mostly asked from Aryl & Alkyl halides,
                Amines, Polymers, Biomolecules, and Oxygen-containing Compounds.
                Mixed concepts questions were asked. This section was reported
                Moderate as per students.
              </li>
              <li className="text-gray-600">
                <b>Mathematics</b> was unbalanced & tricky as per students.
                There were questions from Functions, Differential Equations,
                Inverse Trigonometric functions, Differentiability, Vectors, 3D
                Geometry, Application of Derivatives, Complex Numbers, Matrices,
                Circle Permutation & Combination and Probability. Students felt
                this section was the Toughest.
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

export default AdvancedPYQ2023;
