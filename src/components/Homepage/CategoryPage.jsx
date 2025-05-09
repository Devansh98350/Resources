import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "../Layout";
import { examData, questionsData, syllabusData, booksData } from "./constant";
import Breadcrumbs from "../Breadcrumbs";

const CategoryPage = () => {
  const { categoryId } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categoryId]);

  const getCategoryData = () => {
    switch (categoryId) {
      case "exams":
        return {
          title: "About Exams",
          data: examData,
          layoutTitle: "Exams - IIT Academy",
          keyword: "competitive exams, IIT exams, exam preparation",
          description:
            "Learn about various competitive exams with detailed insights, strategies, and preparation tips.",
          paragraphDescription: "",
        };
      case "pyq":
        return {
          title: "Previous Year Questions",
          data: questionsData,
          layoutTitle: "PYQ - IIT Academy",
          keyword: "previous year questions, exam questions, IIT past papers",
          description:
            "Access a collection of previous year exam questions to enhance your preparation.",
          paragraphDescription: "",
        };
      case "syllabus":
        return {
          title: "Syllabus",
          data: syllabusData,
          layoutTitle: "Syllabus - IIT Academy",
          keyword: "exam syllabus, IIT syllabus, course content",
          description:
            "Explore the complete syllabus for various exams to plan your study effectively.",
          paragraphDescription: "",
        };
      case "books":
        return {
          title: "Books",
          data: booksData,
          layoutTitle: "Books - IIT Academy",
          keyword: "best books for IIT, exam books, study material",
          description:
            "Discover the best books and study material recommended for cracking competitive exams.",
          paragraphDescription: "",
        };
      default:
        return { title: "Resources", data: [] };
    }
  };
  const {
    title,
    data,
    layoutTitle,
    keyword,
    description,
    paragraphDescription,
  } = getCategoryData();
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
    <Layout title={layoutTitle} keyword={keyword} description={description}>
      <Breadcrumbs />
      <div className="container mx-auto px-4">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{title}</h1>
          <p className="text-gray-600">{paragraphDescription}</p>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {data.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="h-64 relative rounded-xl overflow-hidden shadow-md transition-transform hover:shadow-lg"
            >
              <Link to={`/${categoryId}/${item.id}`}>
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
                    <span className="text-white text-sm">
                      Click to view details
                    </span>
                    <span className="px-3 py-1 bg-white bg-opacity-20 text-white text-sm rounded-full">
                      Learn More
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Layout>
  );
};

export default CategoryPage;
