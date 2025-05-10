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

const Advanced = () => {
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
    <Layout title="JEE Advanced PYQ - IIT Academy" keyword="" description="">
      <Breadcrumbs />
      <div className="container mx-auto px-4">
        <div className="mb-10">
          <h1 className="text-[2rem] font-bold text-blue mb-4">
            JEE Advanced Previous Year Questions
          </h1>
          <p className="text-gray-600">
            Solving JEE advanced PYQ papers will help the JEE aspirants to
            manage time, speed and accuracy, and by working on the speed and
            accuracy, candidates can improve their rank in the JEE Advanced
            exam.
          </p>
          <div className="listdata">
            <ol>
              <li>
                <b>Better Understanding of The Exam Pattern:</b> The JEE
                advanced pyq will help the candidates to get familiar with the
                exam pattern, marking scheme, questions distribution or
                weightage of the topics.
              </li>
              <li>
                <b>Help in Evaluating Strengths And Weaknesses:</b> The rich
                collection of JEE advanced previous year question papers will
                facilitate the candidates to know their strengths and
                weaknesses, and they can work on them accordingly.
              </li>
              <li>
                <b>Realistic Exam Exposure:</b> Once a student gets the last 5
                to 10 years of IIT JEE advanced solved question paper, he can
                easily find out the exam format and pattern over the years,
                which will definitely reduce anxiety and increase his
                confidence.
              </li>
              <li>
                <b>Confidence Boost:</b> Solving's JEE advanced question paper
                will boost confidence mentally.
              </li>
              <li>
                <b>Relief from Examination Anxiety:</b> Solving IIT JEE advanced
                pyq gives exam-like feeling to the students, which helps in
                reducing the anxiety before the exam.
              </li>
              <li>
                <b>Simulate Real Exam Environment:</b> Always try to keep your
                mobile/laptop/tablet off, maintain noise-free realexam type
                conditions so that focus should only be on solving the JEE
                advanced previous year question paper. Any sort of distraction
                will break the concentration of the student.
              </li>
              <li>
                <b>Analyze Your Mistakes:</b> After matching the solutions, a
                student should always carefully analyze the mistakes and
                identify the topics/concepts where he/she is struggling. This is
                one of the major advantages of the JEE advanced previous year
                papers with the solutions on IIT Academy.
              </li>
            </ol>
          </div>
          <p className="text-gray-600">
            Click on any of the year cards below to access the JEE Advanced
            previous year question papers for that specific year.
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
                    <span className="text-white text-sm">JEE Advanced PYQ</span>
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

export default Advanced;
