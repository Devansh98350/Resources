import React, { useEffect } from "react";
import Layout from "../../../Layout";
import "./NeetContent.css";
import physics from "../../../../assests/Pages/physics.png";
import chemistry from "../../../../assests/Pages/chemistry.png";
import biology from "../../../../assests/Pages/biology.png";
import Breadcrumbs from "../../../Breadcrumbs";
function NeetContent2021() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="NEET-PYQ-2021-IIT-Academy">
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
          The NEET 2021 question paper as per experts and students fared between
          easy to moderate on the difficulty meter. However, some students felt
          that the paper was lengthy. While in general, the Chemistry and
          Biology sections were between easy and moderate, Physics this time was
          challenging. Experts believe that the level of the NEET paper has
          improved this year in comparison to last year. The quality of the NEET
          question paper was good.
        </p>
        <p>
          Also, the NEET 2021 paper this time had many questions in the match
          and column format, in addition to an increase in the number of
          assertion and reasoning questions. All in all, while the paper could
          be categorized as an easy to moderate level paper, the difficulty
          level was slightly greater. However, the paper was NCERT centric.
        </p>
        <p>
          The cut-off for NEET 2021 hence is expected to be higher this time, as
          students who were well-versed with NCERT can comfortably score well on
          an average. Let us now take a look at the subject-wise analysis of the
          NEET 2021 question paper.
        </p>
        <h4>
          <strong>Physics:</strong>
        </h4>
        <div className="listdata">
          <ul>
            <li>
              ● The Physics section of the NEET 2021 question paper was said to
              be between moderate to difficult on the difficulty meter{" "}
            </li>
            <li>
              ● Most numbers of questions appeared from Mechanics, around 13
              questions
            </li>
            <li>
              ● Compared to previous years, this time around this section was
              dominated by numerical based questions; 70% higher compared to
              previous years
            </li>
            <li>
              ● There were some tricky questions too, which required students to
              have a sound knowledge and in-depth understanding of concepts to
              be able to answer them. To be precise, questions from Optics,
              semiconductors and photoelectric effect required some extra
              attention to be answered
            </li>
            <li>
              ● Four to five questions from section A and B were twisted and
              tricky
            </li>
          </ul>
        </div>
        <h4>
          <strong>Chemistry:</strong>
        </h4>
        <div className="listdata">
          <ul>
            <li>
              ● The chemistry section fared between easy to moderate on the
              difficulty scale
            </li>
            <li>
              ● Most questions appeared on the NCERT facts, figures and tables
            </li>
            <li>
              ● Around 19 questions appeared from the Inorganic chemistry
              section
            </li>
            <li>
              ● Any student who was well-versed with NCERT could comfortably
              crack this section as most questions were on basics from NCERT. A
              larger section of questions were statement based questions
            </li>
            <li>● A good number of questions were numerical based</li>
            <li>
              ● From the acidic strength of halogen acids, question was found to
              be repeated
            </li>
            <li>
              ● While 5 questions were matrix match type, 3 questions were
              graphical
            </li>
            <li>● All in all, this section was not as lengthy</li>
          </ul>
        </div>
        <h4>
          <strong>Botony:</strong>
        </h4>
        <div className="listdata">
          <ul>
            <li>
              ● The botany section of Biology was between easy to moderate
            </li>
            <li>
              ● However, there were some tricky and difficult questions, but a
              good understanding of the basics could help students in answering
              such questions
            </li>
            <li>● Most questions in this section were NCERT centric</li>
            <li>● Numerous questions were factual</li>
            <li>● Some of the questions were concept-based</li>
            <li>
              ● Overall, it was a typical Botany section, with an interesting
              mix of questions
            </li>
          </ul>
        </div>
        <h4>
          <strong>Zoology:</strong>
        </h4>
        <div className="listdata">
          <ul>
            <li>● Zoology section of NEET was moderate</li>
            <li>
              ● Questions that initially appeared easy to answer, were actually
              tricky. Such questions necessitated complete focus and
              distinctness on the keywords of the question and options
            </li>
            <li>
              ● Question on earthworm was a surprise to many students. Those
              students who knew inside of the NCERT content could answer this
              question
            </li>
            <li>● Questions were highly NCERT-centric</li>
            <li>
              ● There were a handful of questions that were extremely
              interlinked, demanding a complete comprehension
            </li>
            <li>
              ● Biotechnology topic dominated this section, close to 11-12
              questions appeared
            </li>
            <li>
              ● From human Physiology, 4 questions were asked from locomotion
              and movement
            </li>
            <li>
              ● Overall, the section could be answered with a sound knowledge of
              basics and NCERT
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

export default NeetContent2021;
