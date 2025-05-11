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

const NeetPYQ2020 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const questionsData = [
    {
      id: "",
      title: "Physics",
      shift: "NEET 2020",
      bgColor: "bg-[#5dc298]",
      image: img7,
    },
    {
      id: "",
      title: "Chemistry",
      shift: "NEET 2020",
      bgColor: "bg-[#5dc298]",
      image: img8,
    },
    {
      id: "",
      title: "Biology",
      shift: "NEET 2020",
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
    <Layout title="NEET 2020 PYQ - IIT Academy" keyword="" description="">
      <Breadcrumbs />
      <div className="container mx-auto px-4">
        <div className="mb-10">
          <h1 className="text-[2rem] font-bold text-blue mb-4">
            NEET 2020 Paper Analysis
          </h1>
          <p>
            The NEET 2020 question paper was precisely linked with the NCERT
            syllabus for NEET. While there were various opinions to the question
            paper, most students believed that the NEET question paper 2020 was
            easier than the previous year. Biology contained some difficult
            questions, but overall it was simple. Physics, which is
            traditionally thought to be the most difficult, had some lengthy
            questions that might be answered. Chemistry was also NCERTbased,
            with several difficult questions in organic chemistry.
          </p>
          <p>
            Overall, most students and professionals agreed that the NEET 2020
            Question Paper was simple because students had adequate time to
            prepare.
          </p>
          <p>
            <b>1. Physics:</b> Physics was deemed easier than in prior years,
            with questions drawn from the NCERT syllabus for NEET. The majority
            of the questions were based on NCERT, and the computations were not
            as lengthy. The majority of the questions came from the Mechanics
            unit. Important Topics of Physics are given below:
          </p>
          <div className="listdata">
            <ul>
              <li>Heat and Thermodynamics</li>
              <li>Wave</li>
              <li>Mechanics</li>
              <li>Electricity</li>
              <li>Magnetism</li>
              <li>Modern Physics</li>
              <li>Optics</li>
            </ul>
          </div>
          <p>
            <b>2. Chemistry:</b> The chemical section could be divided into two
            categories: easy and ordinary. Typically, 15 questions from each of
            the Chemistry areas Physical, Organic, and Inorganic are asked.
            However, fewer questions (12) were asked from the Inorganic section
            this time, whereas the most questions (18) were asked from the
            Organic chemistry section. The chemistry segment was also dominated
            by NCERT-based questions. Important Topics of Chemistry are given
            below:
          </p>
          <div className="listdata">
            <ul>
              <li>Molecular Structure</li>
              <li>Equilibrium</li>
              <li>Coordination Compounds</li>
              <li>Thermodynamics</li>
              <li>P-Block Elements</li>
              <li>Solutions</li>
              <li>D-Block & F-Block Element</li>
              <li>Alcohols, Phenols and Ethers</li>
              <li>Aldehydes, Ketones and Carboxylic Acid</li>
            </ul>
          </div>
          <p>
            <b>3. Botony:</b> The questions were intellectual in nature and
            demanded extensive conceptual and application-based knowledge. There
            were a few fact-based questions as well. Plant Physiology led the
            way with nine questions, followed by Ecology and Genetics, each with
            seven. Overall, the Botany section was short and should have been
            done in the allotted time. In comparison to prior years, the Botany
            section was extremely challenging. There were 25 questions from the
            class 11 syllabus and 18 questions from the class 12 syllabus. There
            were two contentious questions with multiple right answers. Despite
            the fact that the majority of the questions were from the mandated
            syllabus and were based on the NCERT textbook.
          </p>
          <div className="listdata">
            <ul>
              <li>Cell and Cell Cycle</li>
              <li>Plant Physiology</li>
              <li>Diversity of Life</li>
              <li>Ecology</li>
              <li>Structural Organization in Plants</li>
              <li>Biology in Human Welfare</li>
              <li>Genetics</li>
              <li>Reproduction and Sexual Reproduction</li>
            </ul>
          </div>
          <p>
            <b>4. Zoology:</b> With a few exceptions, the Zoology section was of
            moderate difficulty. Some questions were difficult and got lost in
            the jargon. A few terms were also outside the scope of the NCERT.
            The questions were multi-conceptual in nature, requiring pupils to
            analyze critically and precisely. Two questions assessed linguistic
            ability, while others needed comprehension, application, and
            synthesis to interpret the questions. Human Physiology led the way
            with 12 questions, followed by Animal Husbandry & Biotechnology with
            10 and Biomolecules with 6. Overall, the questions were
            thought-provoking and demanded mental acuity and a critical
            approach.
          </p>
          <div className="listdata">
            <ul>
              <li>Animal Kingdom</li>
              <li>Human Physiology</li>
              <li>Biomolecules</li>
              <li>Animal Husbandry and Biotechnology</li>
              <li>Evolutions Theories and Evidences</li>
              <li>Evolutions Theories and Evidences</li>
              <li>Structural Organization of Animals</li>
              <li>Human Reproduction and Reproductive Health</li>
              <li>Human Health and Diseases</li>
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

export default NeetPYQ2020;
