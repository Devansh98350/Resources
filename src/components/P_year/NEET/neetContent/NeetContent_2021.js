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

const NeetPYQ2021 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const questionsData = [
    {
      id: "",
      title: "Physics",
      shift: "NEET 2021",
      bgColor: "bg-[#5dc298]",
      image: img7,
    },
    {
      id: "",
      title: "Chemistry",
      shift: "NEET 2021",
      bgColor: "bg-[#5dc298]",
      image: img8,
    },
    {
      id: "",
      title: "Biology",
      shift: "NEET 2021",
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
    <Layout title="NEET 2021 PYQ - IIT Academy" keyword="" description="">
      <Breadcrumbs />
      <div className="container mx-auto px-4">
        <div className="mb-10">
          <h1 className="text-[2rem] font-bold text-blue mb-4">
            NEET 2021 Paper Analysis
          </h1>
          <p>
            The NEET 2021 question paper as per experts and students fared
            between easy to moderate on the difficulty meter. However, some
            students felt that the paper was lengthy. While in general, the
            Chemistry and Biology sections were between easy and moderate,
            Physics this time was challenging. Experts believe that the level of
            the NEET paper has improved this year in comparison to last year.
            The quality of the NEET question paper was good.
          </p>
          <p>
            Also, the NEET 2021 paper this time had many questions in the match
            and column format, in addition to an increase in the number of
            assertion and reasoning questions. All in all, while the paper could
            be categorized as an easy to moderate level paper, the difficulty
            level was slightly greater. However, the paper was NCERT centric.
          </p>
          <p>
            The cut-off for NEET 2021 hence is expected to be higher this time,
            as students who were well-versed with NCERT can comfortably score
            well on an average. Let us now take a look at the subject-wise
            analysis of the NEET 2021 question paper.
          </p>
          <h4 className="mb-0 mt-0">
            <strong>Physics:</strong>
          </h4>
          <div className="listdata">
            <ul>
              <li>
                The Physics section of the NEET 2021 question paper was said to
                be between moderate to difficult on the difficulty meter{" "}
              </li>
              <li>
                Most numbers of questions appeared from Mechanics, around 13
                questions
              </li>
              <li>
                Compared to previous years, this time around this section was
                dominated by numerical based questions; 70% higher compared to
                previous years
              </li>
              <li>
                There were some tricky questions too, which required students to
                have a sound knowledge and in-depth understanding of concepts to
                be able to answer them. To be precise, questions from Optics,
                semiconductors and photoelectric effect required some extra
                attention to be answered
              </li>
              <li>
                Four to five questions from section A and B were twisted and
                tricky
              </li>
            </ul>
          </div>
          <h4 className="mb-0 mt-0">
            <strong>Chemistry:</strong>
          </h4>
          <div className="listdata">
            <ul>
              <li>
                The chemistry section fared between easy to moderate on the
                difficulty scale
              </li>
              <li>
                Most questions appeared on the NCERT facts, figures and tables
              </li>
              <li>
                Around 19 questions appeared from the Inorganic chemistry
                section
              </li>
              <li>
                Any student who was well-versed with NCERT could comfortably
                crack this section as most questions were on basics from NCERT.
                A larger section of questions were statement based questions
              </li>
              <li>A good number of questions were numerical based</li>
              <li>
                From the acidic strength of halogen acids, question was found to
                be repeated
              </li>
              <li>
                While 5 questions were matrix match type, 3 questions were
                graphical
              </li>
              <li>All in all, this section was not as lengthy</li>
            </ul>
          </div>
          <h4 className="mb-0 mt-0">
            <strong>Botony:</strong>
          </h4>
          <div className="listdata">
            <ul>
              <li>
                The botany section of Biology was between easy to moderate
              </li>
              <li>
                However, there were some tricky and difficult questions, but a
                good understanding of the basics could help students in
                answering such questions
              </li>
              <li>Most questions in this section were NCERT centric</li>
              <li>Numerous questions were factual</li>
              <li>Some of the questions were concept-based</li>
              <li>
                Overall, it was a typical Botany section, with an interesting
                mix of questions
              </li>
            </ul>
          </div>
          <h4 className="mb-0 mt-0">
            <strong>Zoology:</strong>
          </h4>
          <div className="listdata">
            <ul>
              <li>Zoology section of NEET was moderate</li>
              <li>
                Questions that initially appeared easy to answer, were actually
                tricky. Such questions necessitated complete focus and
                distinctness on the keywords of the question and options
              </li>
              <li>
                Question on earthworm was a surprise to many students. Those
                students who knew inside of the NCERT content could answer this
                question
              </li>
              <li>Questions were highly NCERT-centric</li>
              <li>
                There were a handful of questions that were extremely
                interlinked, demanding a complete comprehension
              </li>
              <li>
                Biotechnology topic dominated this section, close to 11-12
                questions appeared
              </li>
              <li>
                From human Physiology, 4 questions were asked from locomotion
                and movement
              </li>
              <li>
                Overall, the section could be answered with a sound knowledge of
                basics and NCERT
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

export default NeetPYQ2021;
