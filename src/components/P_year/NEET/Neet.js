import React, { useEffect } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "../../Layout";
import Breadcrumbs from "../../Breadcrumbs";
import Explore from "../../Common/Explore";
import Banner from "../../Common/Banner";
import img7 from "../../../assests/home_page/dev1.png";
import img8 from "../../../assests/home_page/dev2.png";
import img9 from "../../../assests/home_page/dev3.png";
import img10 from "../../../assests/home_page/dev4.png";

const Neet = () => {
  const { categoryId } = useParams();
  const location = useLocation();
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
    {
      id: "2024",
      title: "2024",
      bgColor: "bg-[#5dc298]",
      image: img10,
    },
    {
      id: "2025",
      title: "2025",
      bgColor: "bg-[#5dc298]",
      image: img7,
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
    <Layout title="NEET PYQ - IIT Academy" keyword="" description="">
      <Breadcrumbs />
      <div className="container mx-auto px-4">
        <div className="mb-10">
          <h1 className="text-[2rem] font-bold text-blue mb-4">
            NEET Previous Year Questions
          </h1>
          <p className="text-gray-600">
            NEET is one of the most competitive medical entrance exams in India.
            To succeed, smart preparation is key. Toppers often emphasize
            solving NEET previous year question papers, as it gives a clear
            edge—helping understand the exam pattern, improving speed, and
            boosting confidence to outperform others. Regular practice with PYQs
            also highlights important topics and enhances time management during
            the exam.
          </p>
          <div className="listdata">
            <ol>
              <li>
                <b>Enhances Time Management:</b> Practicing previous papers
                helps you understand how to allocate time across Physics,
                Chemistry, and Math, improving overall speed and accuracy during
                the actual exam.
              </li>
              <li>
                <b>Best for Quick Revision:</b> Solving past papers is an
                effective revision tool that reinforces concepts and boosts
                confidence.
              </li>
              <li>
                <b>Identifies Strengths & Weaknesses:</b> Regular practice
                highlights your weak areas, allowing focused improvement.
              </li>
              <li>
                <b>Understands Exam Pattern:</b> It helps you get familiar with
                question trends, formats, and difficulty levels.
              </li>
              <li>
                <b>Builds Confidence:</b> Practicing real exam questions reduces
                anxiety and increases exam-day confidence.
              </li>
            </ol>
          </div>
          <p className="text-gray-600">
            Click on any of the year cards below to access the NEET previous
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
              <Link to={`${location.pathname}/${item.id}`}>
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
                    <span className="text-white text-sm">NEET PYQ</span>
                    <span className="px-3 py-1 bg-white bg-opacity-20 text-white text-sm rounded-full">
                      View More
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

export default Neet;
