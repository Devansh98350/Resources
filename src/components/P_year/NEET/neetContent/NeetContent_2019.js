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

const NeetPYQ2019 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const questionsData = [
    {
      id: "",
      title: "Physics",
      shift: "NEET 2019",
      bgColor: "bg-[#5dc298]",
      image: img7,
    },
    {
      id: "",
      title: "Chemistry",
      shift: "NEET 2019",
      bgColor: "bg-[#5dc298]",
      image: img8,
    },
    {
      id: "",
      title: "Biology",
      shift: "NEET 2019",
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
    <Layout title="NEET 2019 PYQ - IIT Academy" keyword="" description="">
      <Breadcrumbs />
      <div className="container mx-auto px-4">
        <div className="mb-10">
          <h1 className="text-[2rem] font-bold text-blue mb-4">
            NEET 2019 Paper Analysis
          </h1>
          <p>
            NEET 2019, which took place on May 5th, 2019, saw a large number of
            students compete for limited places at prominent medical and
            dentistry institutes around the country. Here, we will go into the
            NEET 2019 paper analysis, providing an in- depth look at candidate
            performance in each subject.
          </p>
          <p>
            The NEET 2019 examination consisted of a single question paper with
            180 multiple-choice questions covering three major subjects:
            physics, chemistry, and biology. Each subject was worth 180 points,
            for a total of 720 points. Let us analyze the NEET 2019 question
            paper in each subject separately.
          </p>
          <p>
            <b>1. Physics:</b> Physics has always been regarded as a difficult
            subject by many NEET candidates, and NEET 2019 was no exception. The
            Physics component of the NEET 2019 was moderate to challenging in
            difficulty. The questions ranged from Mechanics through Optics,
            Thermodynamics, and Modern Physics. Many candidates found topics in
            modern physics and optics to be very difficult.
          </p>
          <div className="listdata">
            <ul>
              <li>
                Mechanics, which included topics like Laws of Motion, Work,
                Energy, and Power, comprised approximately 30% of the Physics
                section.
              </li>
              <li>
                Modern Physics, covering topics like Dual Nature of Matter and
                Radiation, Atoms and Nuclei, and Electronicn Devices,
                constituted around 20% of the questions.
              </li>
              <li>
                The remaining questions were distributed among Optics,
                Thermodynamics, Electrostatics, and Current Electricity.
              </li>
            </ul>
          </div>
          <p>
            <b>2. Chemistry:</b> The Chemistry segment of the NEET 2019 exam was
            fairly balanced, with a mix of theoretical and numerical questions.
            The Chemistry part ranged in difficulty from easy to moderate. The
            questions mostly focused on Organic Chemistry, Inorganic Chemistry,
            and Physical Chemistry. Some students struggled with issues about
            Chemical Equilibrium and Thermodynamics, while others battled with
            Organic Chemistry.
          </p>
          <div className="listdata">
            <ul>
              <li>
                Organic Chemistry made up over 40% of the Chemistry part, with
                questions on topics such as Alcohols, Phenols, Ethers, Carbonyl
                Compounds, and Polymers.
              </li>
              <li>
                Inorganic Chemistry, which included topics such as the Periodic
                Table, Chemical Bonding, and Coordination Compounds, accounted
                for almost 30% of the problems.
              </li>
              <li>
                The remaining 30% of the portion was devoted to Physical
                Chemistry, which covered topics such as Mole Concept, Chemical
                Equilibrium, and Thermodynamics.
              </li>
            </ul>
          </div>
          <p>
            <b>3. Biology:</b> Biology has long been regarded the
            highest-scoring subject in NEET, and this year was no exception. The
            Biology portion was separated into two equal parts: Botany and
            Zoology. The Biology portion was generally moderate in difficulty.
            The questions ranged from Cell Biology through Genetics, Ecology,
            and Human Physiology. This portion was significantly easier for
            candidates who had a solid background in NCERT textbooks.
          </p>

          <div className="listdata">
            <ul>
              <li>
                The Botany portion, which accounted for over 60% of the Biology
                section, was largely concerned with themes such as Plant
                Diversity, Cell Biology, and Plant Anatomy.
              </li>
              <li>
                The remaining 40% of the questions were in the Zoology portion,
                which included themes such as Human Physiology, Animal
                Diversity, and Structural Organisation in Animals.
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

export default NeetPYQ2019;
