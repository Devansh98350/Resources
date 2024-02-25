import React, { useEffect } from "react";
import Layout from "../../../Layout";
import "./NeetContent.css";
import physics from "../../../../assests/Pages/physics.png";
import chemistry from "../../../../assests/Pages/chemistry.png";
import biology from "../../../../assests/Pages/biology.png";
import StackBars from "./StackBars";

function NeetContent2023() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="NEET-PYQ-2023-IIT-Academy">
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
          NEET 2023 exam was generally moderate to difficult, according to
          students and experts. The difficulty level of the neet 2023 chemistry
          paper was moderate, and the Physics was a touch drawn out but easy to
          moderate, with a bigger weightage for numerical questions. It is
          considered that the easiest areas of the exam are zoology and botany.
        </p>
        <p>Subject-Wise Analysis of NEET UG 2023 Question Paper</p>
        <p>
          Physics, Chemistry, and Biology are the three key disciplines covered
          in the NEET UG 2023 exam. You can have a better idea of the types of
          questions asked in each subject and the distribution of marks by
          breaking down the question paper into its individual subjects. Here is
          a brief synopsis of each subject's contents.
        </p>
        <p>
          <b>• Physics:</b> To excel in the challenging topic of physics, one
          must have a full understanding of concepts and formulas. Physics
          questions on the NEET UG 2023 exam typically combine theory and
          numerical issues. The questions span subjects including magnetism,
          electricity, thermodynamics, and mechanics. To perform well in
          physics, you must possess a firm understanding of the key ideas and
          practice problem-solving techniques
        </p>
        <p>
          <b>• Chemistry:</b> Another crucial subject in the NEET UG 2023 exam
          is chemistry. Chemistry questions are frequently formula-based and
          necessitate a thorough knowledge of chemical equations, reactions, and
          mechanisms. Organic, inorganic, and physical chemistry are some of the
          subjects covered in the chemistry division. To perform well in
          chemistry, it is crucial to review the foundational ideas and practice
          problem-solving techniques.
        </p>
        <p>
          <b>• Biology:</b> The NEET UG 2023 exam's most important subject is
          biology because it has the highest weightage. Zoology and Botany are
          the two subsections of the biology subject. Biology exam questions are
          frequently conceptbased and call for a thorough knowledge of the human
          body, other species, and their operations. To do well in biology, you
          must have a firm grasp on the essential ideas and practice answering
          questions.
        </p>
        <div className="tabledata">
          <table>
            <tbody>
              <tr className="pink-col">
                <th rowSpan={2}>Subjects</th>
                <th colSpan={2}>Easy</th>
                <th colSpan={2}>Medium</th>
                <th colSpan={2}>Difficult</th>
                <th colSpan={2}>Grand Total</th>
              </tr>
              <tr className="pink-col">
                <th>No of Questions</th>
                <th>Total Marks</th>
                <th>No of Questions</th>
                <th>Total Marks</th>
                <th>No of Questions</th>
                <th>Total Marks</th>
                <th>No of Questions</th>
                <th>Total Marks</th>
              </tr>
              <tr>
                <td>Physics</td>
                <td>34</td>
                <td>136</td>
                <td>14</td>
                <td>56</td>
                <td>2</td>
                <td>8</td>
                <td>50</td>
                <td>200</td>
              </tr>
              <tr>
                <td>Chemistry</td>
                <td>34</td>
                <td>136</td>
                <td>13</td>
                <td>52</td>
                <td>3</td>
                <td>12</td>
                <td>50</td>
                <td>200</td>
              </tr>
              <tr>
                <td>Botany</td>
                <td>37</td>
                <td>148</td>
                <td>12</td>
                <td>48</td>
                <td>1</td>
                <td>4</td>
                <td>50</td>
                <td>200</td>
              </tr>
              <tr>
                <td>Zoology</td>
                <td>34</td>
                <td>136</td>
                <td>12</td>
                <td>48</td>
                <td>0</td>
                <td>0</td>
                <td>50</td>
                <td>200</td>
              </tr>
              <tr>
                <th>Grand Total</th>
                <th>139</th>
                <th>556</th>
                <th>55</th>
                <th>220</th>
                <th>6</th>
                <th>24</th>
                <th>200</th>
                <th>800</th>
              </tr>
            </tbody>
          </table>
        </div>
        <h1 className="center-h1 blck">Class Wise Question Distribution</h1>
        <StackBars />
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

export default NeetContent2023;
