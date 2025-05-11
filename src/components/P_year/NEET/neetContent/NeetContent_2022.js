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

const NeetPYQ2022 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const questionsData = [
    {
      id: "",
      title: "Physics",
      shift: "NEET 2022",
      bgColor: "bg-[#5dc298]",
      image: img7,
    },
    {
      id: "",
      title: "Chemistry",
      shift: "NEET 2022",
      bgColor: "bg-[#5dc298]",
      image: img8,
    },
    {
      id: "",
      title: "Biology",
      shift: "NEET 2022",
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
    <Layout title="NEET 2022 PYQ - IIT Academy" keyword="" description="">
      <Breadcrumbs />
      <div className="container mx-auto px-4">
        <div className="mb-10">
          <h1 className="text-[2rem] font-bold text-blue mb-4">
            NEET 2022 Paper Analysis
          </h1>
          <p>
            200 questions in the National Eligibility Completion Entrance Test
            (NEET) 2022 were divided into four categories: physics, chemistry,
            botany, and zoology. There were two sections of 50 questions for
            each subject. There are 35 questions in Part A, and they are all
            required. There are 15 questions in Part B, of which 10 must be
            answered. In other words, 45 questions from each subject must be
            answered. Out of 200 questions, there are now a total of 180 that
            need to be answered.
          </p>
          <p>
            NEET exam analysis is important since candidates studying for the
            upcoming exam can benefit from it. Let's now examine the analysis of
            each subject covered in the NEET 2022 exam.
          </p>
          <p>
            <b>1. Physics:</b> According to the chapter-by-chapter NEET Physics
            study, 58% of the questions came from the Class 12 NCERT Physics
            syllabus and 42% from Class 11. This year's physics paper was
            simpler than previous year's. Section A received 35 inquiries, while
            Section B received 15 inquiries. There were 12 questions about
            mechanics in Section A. While there were two queries about heat, one
            about SHM and waves, nine about electro and dynamics, four about
            optics, and seven about modern & electronics. In Section A, 62.9
            percent of the questions had an easy difficulty level, 34.3 percent
            had a moderate difficulty level, and 2.9 percent had a severe
            difficulty level. Six questions from the topic of electrodynamics
            and dynamics were asked in Section B. While there were 2 questions
            from Modern & Electronics, 1 each from Heat, SHM, Waves & Optics,
            and 4 questions from the area of mechanics. A little more difficult
            than Section A was Section B. The Section B
          </p>
          <p>
            <b>2. Chemistry:</b> In comparison to NEET UG 2021, the Chemistry
            paper in NEET UG 2022 was a little more challenging and conceptual.
            Section A received 35 inquiries, while Section B received 15
            inquiries. In Section A of Inorganic Chemistry, there were 13
            questions. While there were 11 questions each for physical and
            organic chemistry. Six questions each from organic chemistry and
            physical chemistry were included in section B. Only three questions,
            however, were related to inorganic chemistry. 42 percent of the
            questions came from class 12 and 58 percent came from class 11.
            There were 16 questions in Physical Chemistry on the NEET 2021, if
            we compare it to Organic and Inorganic Chemistry. 17 questions were
            asked this year as opposed to 14. Similarly, 17 questions were
            submitted for Inorganic Chemistry.
          </p>
          <p>
            <b>3. Biology:</b> Botany received 50 questions in total, of which
            35 were in section A and 15 in section B. The same was true for the
            50 questions in Zoology, of which 35 were in section A and 15 in
            section B. The paper was based on the NCERT curriculum. Regarding
            the questions on the basis of classes 11 and 12, 53% of the
            questions came from the syllabus for classes 11 and 47% from the
            syllabus for classes 12. This year, 44 percent of the questions had
            an easy level, 11 percent had a challenging level, and 45 percent
            had a moderate level.
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

export default NeetPYQ2022;
