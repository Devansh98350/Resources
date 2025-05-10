import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "../../Layout";
import Breadcrumbs from "../../Breadcrumbs";
import Explore from "../../Common/Explore";
import Banner from "../../Common/Banner";
import img7 from "../../../assests/home_page/dev1.png";
import img8 from "../../../assests/home_page/dev2.png";
import img9 from "../../../assests/home_page/dev3.png";
import img10 from "../../../assests/home_page/dev4.png";

const Ntse = () => {
  const { categoryId } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categoryId]);
  const questionsData = [
    {
      id: "2017",
      title: "2017",
      bgColor: "bg-[#5dc298]",
      image: img7,
    },
    {
      id: "2018",
      title: "2018",
      bgColor: "bg-[#5dc298]",
      image: img8,
    },
    {
      id: "2019",
      title: "2019",
      bgColor: "bg-[#5dc298]",
      image: img9,
    },
    {
      id: "2020",
      title: "2020",
      bgColor: "bg-[#5dc298]",
      image: img10,
    },
    {
      id: "2021",
      title: "2021",
      bgColor: "bg-[#5dc298]",
      image: img7,
    },
    {
      id: "2022",
      title: "2022",
      bgColor: "bg-[#5dc298]",
      image: img8,
    },
    {
      id: "2023",
      title: "2023",
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
    <Layout title="NTSE PYQ - IIT Academy" keyword="" description="">
      <Breadcrumbs />
      <div className="container mx-auto px-4">
        <div className="mb-10">
          <h1 className="text-[2rem] font-bold text-blue mb-4">
            NTSE Previous Year Questions
          </h1>
          <p className="text-gray-600">
            Solving NTSE question papers is one of the best ways to practice and
            prepare effectively for the National Talent Search Examination
            (NTSE) exam. It is a prestigious examination conducted by NCERT
            across India to provide scholarships to successful candidates. The
            NTSE Exam is conducted in two phases i.e. Phase 1 and Phase 2. Only
            those students who qualify for the Stage 1 examination will be
            allowed to appear for the Stage 2 examination. So students must
            prepare effectively with dedication if they want to crack the
            examination. The NTSE exam question papers will further help
            students to get familiar with the type and difficulty level of
            questions as well as the pattern of the exam.
          </p>
          <p>
            Students planning to appear for the NTSE exam are advised to solve
            previous years NTSE question papers as part of their study exercise
            on a regular basis. This will also help candidates to develop their
            speed and accuracy as well as better time management skills. Some
            advantages of solving the NTSE Question Paper are:
          </p>
          <div className="listdata">
            <ol>
              <li>A better understanding of theories and principals.</li>
              <li>Helps candidates develop better time management skills.</li>
              <li>Helps in a revision of the concepts.</li>
              <li>Improves general knowledge.</li>
              <li>Strengthens the basic and fundamental knowledge.</li>
              <li>
                Facilitates the development of stronger reasoning and critical
                thinking skills
              </li>
            </ol>
          </div>
          <p className="text-gray-600">
            Click on any of the year cards below to access the NTSE previous
            year question papers for that specific year.
          </p>
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
                    <span className="text-white text-sm">NTSE PYQ</span>
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

export default Ntse;
