import React, { useEffect } from "react";
import Layout from "../../Layout";

const Ntse = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="NTSE-Syllabus-IIT-Academy">
      <div
        className="jee-main-syllabus"
        style={{ marginLeft: "5%", marginRight: "5%", textAlign: "justify" }}
      >
        <h2>Syllabus for NTSE</h2>
        <p>
          <strong>MATHEMATICS:</strong> <br />
          Arithmetic Progressions, Number Systems, Polynomials, Real Numbers,
          Quadratic Equations, Percentage, Square Roots and Cube Roots, Direct
          and Inverse Variation, Mensuration, Rational Numbers, Circles,
          Trigonometry, Surface Areas and Volumes, Simple and Compound Interest,
          Triangles, Arithmetic Progression, Coordinate Geometry, Statistics and
          Probability, Introduction to Euclid’s Geometry, Linear Equations in
          Two Variables, Quadrilateral, and Parallelogram.
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
          Revolution, Mughal Empire, British Raj, Maurya Empire, Indian Freedom
          Struggle, Medieval Architecture and Culture, Early Medieval Period,
          Early States, Indus Valley Civilization, Conquerors from Distant
          Lands, Jainism and Buddhism Popular Movements and Social Reforms,
          Nationalism in Various Countries, Introduction and Sources of Ancient
          Indian History, World War I and II, Vedic Period, New Empires and
          Kingdoms, World History, and UN and International Agencies.
        </p>
        <p>
          <strong>GEOGRAPHY:</strong> <br />
          Biosphere, Water Resources, Atmosphere, Agriculture, Diversity and
          Livelihood, Resources and Development, Internal Structure of the Earth
          and Rocks, Maps and Globe, Natural Vegetation, Our Country – India,
          Motion of the Earth India and its Neighbors, Climate – India and
          World, Indian Physiographic Division, Drainage in India, Solar System
          ,Major Domains and landforms, and Population.
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
          Characters, Embedded Figures, Ranking and Arrangements, Word Problems,
          Cube and Dice, Water and Mirror Images.
        </p>
      </div>
    </Layout>
  );
};

export default Ntse;
