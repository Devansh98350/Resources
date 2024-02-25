import React, { useEffect } from "react";
import Layout from "../../../Layout";
import "./NeetContent.css";
import physics from "../../../../assests/Pages/physics.png";
import chemistry from "../../../../assests/Pages/chemistry.png";
import biology from "../../../../assests/Pages/biology.png";

function NeetContent2019() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="NEET-PYQ-2019-IIT-Academy">
      <div className="content">
        <p
          style={{
            color: "blue",
            fontWeight: "bold",
            fontSize: "25px",
            textAlign: "center",
          }}
        >
          Paper Analysis
        </p>{" "}
        <p>
          NEET 2019, which took place on May 5th, 2019, saw a large number of
          students compete for limited places at prominent medical and dentistry
          institutes around the country. Here, we will go into the NEET 2019
          paper analysis, providing an in- depth look at candidate performance
          in each subject.
        </p>
        <p>
          The NEET 2019 examination consisted of a single question paper with
          180 multiple-choice questions covering three major subjects: physics,
          chemistry, and biology. Each subject was worth 180 points, for a total
          of 720 points. Let us analyze the NEET 2019 question paper in each
          subject separately.
        </p>
        <p>
          <b>1. Physics:</b> Physics has always been regarded as a difficult
          subject by many NEET candidates, and NEET 2019 was no exception. The
          Physics component of the NEET 2019 was moderate to challenging in
          difficulty. The questions ranged from Mechanics through Optics,
          Thermodynamics, and Modern Physics. Many candidates found topics in
          modern physics and optics to be very difficult.
        </p>
        <p>
          <b>2. Chemistry:</b> The Chemistry segment of the NEET 2019 exam was
          fairly balanced, with a mix of theoretical and numerical questions.
          The Chemistry part ranged in difficulty from easy to moderate. The
          questions mostly focused on Organic Chemistry, Inorganic Chemistry,
          and Physical Chemistry. Some students struggled with issues about
          Chemical Equilibrium and Thermodynamics, while others battled with
          Organic Chemistry.
        </p>
        <p>
          <b>3. Biology:</b> Biology has long been regarded the highest-scoring
          subject in NEET, and this year was no exception. The Biology portion
          was separated into two equal parts: Botany and Zoology. The Biology
          portion was generally moderate in difficulty. The questions ranged
          from Cell Biology through Genetics, Ecology, and Human Physiology.
          This portion was significantly easier for candidates who had a solid
          background in NCERT textbooks.
        </p>
        <h4
          style={{
            fontWeight: "bold",
            fontSize: "20px",
            textAlign: "center",
          }}
        >
          Subject- Wise Analysis
        </h4>
        <p>
          Now let's delve deeper into the subject-wise analysis of NEET 2019,
          considering both the difficulty level and the distribution of
          questions across different topics.
        </p>
        <h4
          style={{
            fontSize: "19px",
          }}
        >
          <strong>Physics</strong>
        </h4>
        <div className="listdata">
          <ul>
            <li>
              ● Mechanics, which included topics like Laws of Motion, Work,
              Energy, and Power, comprised approximately 30% of the Physics
              section.
            </li>
            <li>
              ● Modern Physics, covering topics like Dual Nature of Matter and
              Radiation, Atoms and Nuclei, and Electronicn Devices, constituted
              around 20% of the questions.
            </li>
            <li>
              ● The remaining questions were distributed among Optics,
              Thermodynamics, Electrostatics, and Current Electricity.
            </li>
          </ul>
        </div>
        <h4
          style={{
            fontSize: "19px",
          }}
        >
          <strong>Chemistry</strong>
        </h4>
        <div className="listdata">
          <ul>
            <li>
              ● Organic Chemistry made up over 40% of the Chemistry part, with
              questions on topics such as Alcohols, Phenols, Ethers, Carbonyl
              Compounds, and Polymers.
            </li>
            <li>
              ● Inorganic Chemistry, which included topics such as the Periodic
              Table, Chemical Bonding, and Coordination Compounds, accounted for
              almost 30% of the problems.
            </li>
            <li>
              ● The remaining 30% of the portion was devoted to Physical
              Chemistry, which covered topics such as Mole Concept, Chemical
              Equilibrium, and Thermodynamics.
            </li>
          </ul>
        </div>
        <h4
          style={{
            fontSize: "19px",
          }}
        >
          <strong>Biology</strong>
        </h4>
        <div className="listdata">
          <ul>
            <li>
              ● The Botany portion, which accounted for over 60% of the Biology
              section, was largely concerned with themes such as Plant
              Diversity, Cell Biology, and Plant Anatomy.
            </li>
            <li>
              ● The remaining 40% of the questions were in the Zoology portion,
              which included themes such as Human Physiology, Animal Diversity,
              and Structural Organisation in Animals.
            </li>
          </ul>
        </div>
      </div>
      <div className="jeeContent-container">
        <div>
          <button className="jeeContent-card">
            <img src={physics} alt="physics" />
          </button>
        </div>
        <div>
          <button className="jeeContent-card">
            <img src={chemistry} alt="chemistry" />
          </button>
        </div>
        <div>
          <button className="jeeContent-card">
            <img src={biology} alt="biology" />
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default NeetContent2019;
