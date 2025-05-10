// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import Layout from "../../Layout";
// import "./cbse.css";
// import { CbseData } from "./CbseData";
// import seventeen from "../../../assests/Pages/2017.png";
// import eight from "../../../assests/Pages/2018.png";
// import nine from "../../../assests/Pages/2019.png";
// import ten from "../../../assests/Pages/2020.png";
// import one from "../../../assests/Pages/2021.png";
// import two from "../../../assests/Pages/2022.png";
// import three from "../../../assests/Pages/2023.png";
// import Breadcrumbs from "../../Breadcrumbs";

// function Cbse() {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);
//   const navigate = useNavigate();
//   const [tab, setTab] = useState(1);

//   function activeTab(tabNumber) {
//     setTab(tabNumber);
//   }

//   const sevenTeen = CbseData.filter((data) => data.name === "2017");
//   const eighteen = CbseData.filter((data) => data.name === "2018");
//   const nineTeen = CbseData.filter((data) => data.name === "2019");
//   const twenty = CbseData.filter((data) => data.name === "2020");
//   const twentyOne = CbseData.filter((data) => data.name === "2021");
//   const twentyTwo = CbseData.filter((data) => data.name === "2022");
//   const twentyThree = CbseData.filter((data) => data.name === "2023");

//   const boards =
//     tab === 1
//       ? sevenTeen
//       : tab === 2
//       ? eighteen
//       : tab === 3
//       ? nineTeen
//       : tab === 4
//       ? twenty
//       : tab === 5
//       ? twentyOne
//       : tab === 6
//       ? twentyTwo
//       : tab === 7
//       ? twentyThree
//       : null;
//   return (
//     <Layout title="CBSE-PYQ-IIT-Academy">
//       <Breadcrumbs />
//       <div className="jee-main">
//         <div>
//           <button
//             className="jeemain-btn"
//             onClick={() => {
//               navigate("/pyq/cbse-board/2017");
//               activeTab(1);
//             }}
//           >
//             <img src={seventeen} alt="Seven" />
//           </button>
//         </div>
//         <div>
//           <button
//             className="jeemain-btn"
//             onClick={() => {
//               navigate("/pyq/cbse-board/2018");
//               activeTab(2);
//             }}
//           >
//             <img src={eight} alt="Seven" />
//           </button>
//         </div>
//         <div>
//           <button
//             className="jeemain-btn"
//             onClick={() => {
//               navigate("/pyq/cbse-board/2019");
//               activeTab(3);
//             }}
//           >
//             <img src={nine} alt="Seven" />
//           </button>
//         </div>
//         <div>
//           <button
//             className="jeemain-btn"
//             onClick={() => {
//               navigate("/pyq/cbse-board/2020");
//               activeTab(4);
//             }}
//           >
//             <img src={ten} alt="Sten" />
//           </button>
//         </div>
//         <div>
//           <button
//             className="jeemain-btn"
//             onClick={() => {
//               navigate("/pyq/cbse-board/2021");
//               activeTab(5);
//             }}
//           >
//             <img src={one} alt="one" />
//           </button>
//         </div>
//         <div>
//           <button
//             className="jeemain-btn"
//             onClick={() => {
//               navigate("/pyq/cbse-board/2022");
//               activeTab(6);
//             }}
//           >
//             <img src={two} alt="two" />
//           </button>
//         </div>
//         <div>
//           <button
//             className="jeemain-btn"
//             onClick={() => {
//               navigate("/pyq/cbse-board/2023");
//               activeTab(1);
//             }}
//           >
//             <img src={three} alt="three" />
//           </button>
//         </div>
//       </div>
//       {boards &&
//         boards.map((value, index) => {
//           return (
//             <div key={index}>
//               <button>
//                 <h1>{value.title}</h1>
//               </button>
//             </div>
//           );
//         })}
//     </Layout>
//   );
// }

// export default Cbse;

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

const Cbse = () => {
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
    <Layout title="CBSE PYQ - IIT Academy" keyword="" description="">
      <Breadcrumbs />
      <div className="container mx-auto px-4">
        <div className="mb-10">
          <h1 className="text-[2rem] font-bold text-blue mb-4">
            CBSE Previous Year Questions
          </h1>
          <p className="text-gray-600">
            Practicing previous year CBSE board papers is one of the most
            effective strategies for scoring well in the exams. It not only
            helps students understand the question format but also reinforces
            key concepts and builds exam confidence.
          </p>
          <div className="listdata">
            <ol>
              <li>
                <b>Understand Question Pattern:</b> Gain clarity on the types of
                questions, marking scheme, and section-wise structure.
              </li>
              <li>
                <b>Identify Important Topics:</b> Spot commonly repeated
                questions and focus on chapters with higher weightage.
              </li>
              <li>
                <b>Enhance Speed & Accuracy:</b> Regular practice sharpens
                writing speed and reduces silly mistakes.
              </li>
              <li>
                <b>Effective Self-Evaluation:</b> Assess your preparation and
                recognize areas that need more attention.
              </li>
              <li>
                <b>Build Exam Confidence:</b> Solving actual board-level
                questions lowers exam stress and boosts performance.
              </li>
            </ol>
          </div>
          <p className="text-gray-600">
            Click on any of the year cards below to access the CBSE previous
            year question board papers for that specific year.
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
                    <span className="text-white text-sm">CBSE PYQ</span>
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

export default Cbse;
