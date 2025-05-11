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

const NeetPYQ2018 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const questionsData = [
    {
      id: "",
      title: "Physics",
      shift: "NEET 2018",
      bgColor: "bg-[#5dc298]",
      image: img7,
    },
    {
      id: "",
      title: "Chemistry",
      shift: "NEET 2018",
      bgColor: "bg-[#5dc298]",
      image: img8,
    },
    {
      id: "",
      title: "Biology",
      shift: "NEET 2018",
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
    <Layout title="NEET 2018 PYQ - IIT Academy" keyword="" description="">
      <Breadcrumbs />
      <div className="container mx-auto px-4">
        <div className="mb-10">
          <h1 className="text-[2rem] font-bold text-blue mb-4">
            NEET 2018 Paper Analysis
          </h1>
          <p className="text-gray-600">
            The NATIONAL ELIGIBILITY CUM ENTRANCE TEST (UG) was concluded on
            Sunday, 6 May. The overall level of paper can be considered as
            average. Paper was prepared keeping in mind the level of NEET exam.
            biology will decide the rank, because there were some questions in
            the Botany paper that were of a difficult level and will determine
            the intelligence level of the student. The paper of chemistry was
            easy. The paper of physics can also be considered simple, but due to
            the numerical calculations, it became lengthy. Paper was based on
            NCERT. In Physics, out of total 45 questions, 7 can be determined as
            difficult. The same level of difficulty was seen in Chemistry
          </p>
          <p className="text-gray-600">
            <strong>Biology: </strong>
            The level of biology paper in NEET UG 2018 was estimated as medium.
            Botany covered most of the biology question paper as 59 questions
            were put up from Botany itself. Paper had 31 questions from Zoology,
            57 questions from the NCERT and 33 questions from outside. The level
            of 45 questions in the paper was quite easy, while 39 questions were
            of average level and the level of remaining 6 questions was
            difficult. 47 questions were asked from class 11th syllabus and 43
            questions were asked from 12th Class Syllabus. The maximum number of
            16 questions was asked from Genetics and Biotechnology.
          </p>
          <p className="text-gray-600">
            <strong>Physics: </strong>
            The paper of physics was easy, but due to more number of numerical
            calculations, the paper was lengthy. For this reason, the students
            took a lot of time in solving the paper. A total of 45 questions
            were asked. From the Class 11th syllabus, 23 questions were asked
            while 22 were asked from Syllabus of 12th Class. 19 questions were
            of the easy level and 19 were of the medium level while 7 questions
            were tough. This paper mainly covered Mechanics, Thermal Physics,
            SHM & Waves, Electro Dynamics, Optics, Modern and Electronics
            Topics. The maximum of 31 percent was covered by Mechanics Topic.
          </p>
          <p className="text-gray-600">
            <strong>Chemistry: </strong>A total of 45 questions were asked in
            the chemistry. In which there were 15-15 questions from three major
            parts: organic, inorganic and physical. 24 questions came from Class
            11th syllabus and 21 questions were asked from the 12th syllabus.
            Total 16 questions were quite easy. The level of 22 questions was
            medium while the level of 7 questions was very difficult. Most
            questions were asked from the Physical topic of the 12th class
            syllabus. Paper was NCERT based. There was not a single question
            from outside in the paper, this time.
          </p>
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

export default NeetPYQ2018;
