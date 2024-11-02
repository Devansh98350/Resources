import React, { useEffect } from "react";
import { FaRegKeyboard } from "react-icons/fa6";
import { FaHeadphones } from "react-icons/fa";
import Layout from "../../Layout";
import "./Ntse.css";

const Ntse = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout
      title="NTSE Syllabus - IIT Academy"
      description="Discover the NTSE Syllabus at IIT Academy! Our comprehensive guide covers the complete NTSE 2025 syllabus for Class 10, including exam patterns, important topics across subjects like Mathematics, Science, and Social Science. Prepare effectively with our expert tips, best study materials, and access to previous year papers and sample questions. Whether you're looking for coaching classes or online resources, IIT Academy provides all the tools you need to excel in the NTSE exam. Start your journey to success today!"
      keywords="NTSE Syllabus, NTSE 2025 Syllabus, NTSE Exam Pattern, NTSE Class 10 Syllabus, NTSE Subject Topics, NTSE Study Material, NTSE Preparation Tips, NTSE Eligibility Criteria, NTSE Previous Year Papers, NTSE Sample Papers, NTSE Marks Distribution, NTSE Important Topics, NTSE Mathematics Syllabus, NTSE Science Syllabus, NTSE Social Science Syllabus, NTSE Language Proficiency Test, NTSE Exam Dates, How to Prepare for NTSE Exam, NTSE Syllabus for Class 10 Science, NTSE Syllabus and Exam Pattern for 2025, NTSE Preparation Guide for Students, Best Books for NTSE Preparation, NTSE Coaching Classes Near Me, NTSE Exam Tips and Strategies, NTSE Syllabus for Social Science, NTSE Eligibility for Class 10, NTSE 2025 Exam Date, NTSE Scholarship Exam, NTSE Study Plan, NTSE Online Resources, NTSE Coaching Institutes"
    >
      <div style={{ width: "100%" }}>
        <div
          className="jee-main-syllabus"
          style={{ marginLeft: "5%", marginRight: "5%", textAlign: "justify" }}
        >
          <h1 style={{ fontWeight: "bold", textAlign: "center" }}>
            Syllabus for NTSE
          </h1>
          <p>
            <strong>MATHEMATICS:</strong> <br />
            Arithmetic Progressions, Number Systems, Polynomials, Real Numbers,
            Quadratic Equations, Percentage, Square Roots and Cube Roots, Direct
            and Inverse Variation, Mensuration, Rational Numbers, Circles,
            Trigonometry, Surface Areas and Volumes, Simple and Compound
            Interest, Triangles, Arithmetic Progression, Coordinate Geometry,
            Statistics and Probability, Introduction to Euclid’s Geometry,
            Linear Equations in Two Variables, Quadrilateral, and Parallelogram.
          </p>
          <p>
            <strong>PHYSICS:</strong> <br />
            Magnetism and Electricity, Motion and Force, Measurements, Work and
            Energy, The Universe, Light and Sound, and Source of Energy.
          </p>
          <p>
            <strong>CHEMISTRY:</strong> <br />
            Acid, Bases, Salt, Metals and Non-metals, Periodic Classification of
            Elements, Structure of Atom, Carbon and its Compounds, Physical and
            Chemical, Changes Fibres and Plastics.
          </p>
          <p>
            <strong>BIOLOGY:</strong> <br />
            Air, Soil, Water, Micro-organisms, Life Processes, Reproduction,
            Heredity and Evolution, Food Production and Management, Plant and
            Animal, Nutrition, Diversity in Living Organisms, Cellular Level of
            Organisation, Human Body, Some Common Diseases, and Our Environment.
          </p>
          <p>
            <strong>HISTORY:</strong> <br /> French Revolution, Industrial
            Revolution, Mughal Empire, British Raj, Maurya Empire, Indian
            Freedom Struggle, Medieval Architecture and Culture, Early Medieval
            Period, Early States, Indus Valley Civilization, Conquerors from
            Distant Lands, Jainism and Buddhism Popular Movements and Social
            Reforms, Nationalism in Various Countries, Introduction and Sources
            of Ancient Indian History, World War I and II, Vedic Period, New
            Empires and Kingdoms, World History, and UN and International
            Agencies.
          </p>
          <p>
            <strong>GEOGRAPHY:</strong> <br />
            Biosphere, Water Resources, Atmosphere, Agriculture, Diversity and
            Livelihood, Resources and Development, Internal Structure of the
            Earth and Rocks, Maps and Globe, Natural Vegetation, Our Country –
            India, Motion of the Earth India and its Neighbors, Climate – India
            and World, Indian Physiographic Division, Drainage in India, Solar
            System ,Major Domains and landforms, and Population.
          </p>
          <p>
            <strong>CIVICS:</strong> <br />
            Indian Constitution, Local and State Government, Indian Government,
            and Judiciary.
          </p>
          <p>
            <strong>REASONING:</strong>
            <br />
            Verbal and Non Verbal Analogy, Verbal and Non-Verbal Series,
            Classification, Coding-Decoding, Alphabet and Number Test, Blood
            Relations, Distance and Direction, Paper Cutting and Folding, Venn
            Diagrams, Mathematical Operations, Calendar, Time and Clock, Missing
            Characters, Embedded Figures, Ranking and Arrangements, Word
            Problems, Cube and Dice, Water and Mirror Images.
          </p>
        </div>
        <div className="container-fluid fullBlog-third">
          <h3>What to do next? Ask Our experts in a Free Counselling</h3>
          <p>
            Years of Trusted Excellence in Classes for IIT-JEE | Medical |
            Foundation, Now learn from the best teachers of India
          </p>
          <div className="button-container">
            <a
              href="https://www.iitacademy.in/Admission-form"
              rel="noopener noreferrer"
            >
              <button className="btn">
                <FaRegKeyboard className="icon" />
                Enroll Now
              </button>
            </a>
            <a href="tel:9205704041">
              <button className="btn">
                <FaHeadphones className="icon" />
                Contact Us
              </button>
            </a>
          </div>
        </div>
        <div className="aders">
          <p>
            <i
              className="fas fa-angle-double-right"
              style={{
                color: "#f39c12",
                marginRight: "5px",
              }}
            ></i>{" "}
            Explore More about different batches offered by IIT Academy.
          </p>
          <div className="all_batches">
            {" "}
            <a
              href="https://www.iitacademy.in/engineering-courses"
              rel="noopener noreferrer"
            >
              <button className="details4-btn">Engineering Batches</button>
            </a>
            <a
              href="https://www.iitacademy.in/medical-courses"
              rel="noopener noreferrer"
            >
              <button className="details4-btn">Medical Batches</button>
            </a>
            <a
              href="https://www.iitacademy.in/foundation-courses"
              rel="noopener noreferrer"
            >
              <button className="details4-btn">Foundation Batches</button>
            </a>
            <a
              href="https://www.iitacademy.in/board-courses"
              rel="noopener noreferrer"
            >
              <button className="details4-btn">Boards Batches</button>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Ntse;
