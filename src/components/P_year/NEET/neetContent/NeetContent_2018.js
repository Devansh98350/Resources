import React, { useEffect } from "react";
import Layout from "../../../Layout";
import "./NeetContent.css";
import physics from "../../../../assests/Pages/physics.png";
import chemistry from "../../../../assests/Pages/chemistry.png";
import biology from "../../../../assests/Pages/biology.png";
import Breadcrumbs from "../../../Breadcrumbs";

function NeetContent2018() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="NEET-PYQ-2018-IIT-Academy">
      <Breadcrumbs />
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
        </p>
        <p>
          The NATIONAL ELIGIBILITY CUM ENTRANCE TEST (UG) was concluded on
          Sunday, 6 May. The overall level of paper can be considered as
          average. Paper was prepared keeping in mind the level of NEET exam.
          biology will decide the rank, because there were some questions in the
          Botany paper that were of a difficult level and will determine the
          intelligence level of the student. The paper of chemistry was easy.
          The paper of physics can also be considered simple, but due to the
          numerical calculations, it became lengthy. Paper was based on NCERT.
          In Physics, out of total 45 questions, 7 can be determined as
          difficult. The same level of difficulty was seen in Chemistry
        </p>
        <p>
          <strong>Biology: </strong>
          The level of biology paper in NEET UG 2018 was estimated as medium.
          Botany covered most of the biology question paper as 59 questions were
          put up from Botany itself. Paper had 31 questions from Zoology, 57
          questions from the NCERT and 33 questions from outside. The level of
          45 questions in the paper was quite easy, while 39 questions were of
          average level and the level of remaining 6 questions was difficult. 47
          questions were asked from class 11th syllabus and 43 questions were
          asked from 12th Class Syllabus. The maximum number of 16 questions was
          asked from Genetics and Biotechnology.
        </p>
        <p>
          <strong>Physics: </strong>
          The paper of physics was easy, but due to more number of numerical
          calculations, the paper was lengthy. For this reason, the students
          took a lot of time in solving the paper. A total of 45 questions were
          asked. From the Class 11th syllabus, 23 questions were asked while 22
          were asked from Syllabus of 12th Class. 19 questions were of the easy
          level and 19 were of the medium level while 7 questions were tough.
          This paper mainly covered Mechanics, Thermal Physics, SHM & Waves,
          Electro Dynamics, Optics, Modern and Electronics Topics. The maximum
          of 31 percent was covered by Mechanics Topic.
        </p>
        <p>
          <strong>Chemistry: </strong>A total of 45 questions were asked in the
          chemistry. In which there were 15-15 questions from three major parts:
          organic, inorganic and physical. 24 questions came from Class 11th
          syllabus and 21 questions were asked from the 12th syllabus. Total 16
          questions were quite easy. The level of 22 questions was medium while
          the level of 7 questions was very difficult. Most questions were asked
          from the Physical topic of the 12th class syllabus. Paper was NCERT
          based. There was not a single question from outside in the paper, this
          time.
        </p>
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

export default NeetContent2018;
