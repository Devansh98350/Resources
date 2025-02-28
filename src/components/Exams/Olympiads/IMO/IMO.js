import React, { useEffect } from "react";
import Layout from "../../../Layout";
import "../../Exam.css";
import Breadcrumbs from "../../../Breadcrumbs";
import Explore from "../../../Common/Explore";
import Banner from "../../../Common/Banner";
import FAQ from "./faq";

const Imo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="IMO - IIT Academy" description="" keywords="">
      <Breadcrumbs />{" "}
      <div className="main">
        <div className="container">
          <h1>What is IMO?</h1>
          <p>
            The International Mathematics Olympiad (IMO) is a globally
            recognized competitive exam conducted annually by the Science
            Olympiad Foundation (SOF). It is a highly recognized and esteemed
            competition for students in classes 1 to 12. The Mathematics
            Olympiad aims to promote mathematical reasoning and problem-solving
            skills. It challenges students to develop a deep understanding of
            mathematical concepts and apply them to solve complex problems. The
            exam is designed to test not only the knowledge of students but also
            their logical reasoning, analytical thinking, and problem-solving
            abilities, helping to build a strong foundation for future academic
            pursuits in mathematics and related fields.
          </p>
          <h1>Exam Overview</h1>
          <div className="tabledata">
            <table>
              <thead>
                <tr>
                  <th>Features</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Conducting Body</td>
                  <td>Science Olympiad Foundation (SOF)</td>
                </tr>
                <tr>
                  <td>Exam Name</td>
                  <td>International Mathematics Olympiad (IMO)</td>
                </tr>
                <tr>
                  <td>Exam Level</td>
                  <td>Level 1 and Level 2</td>
                </tr>
                <tr>
                  <td>Target Audience</td>
                  <td>Students from Class 1 to Class 12</td>
                </tr>
                <tr>
                  <td>Exam Mode</td>
                  <td>Offline (Pen and Paper)</td>
                </tr>

                <tr>
                  <td>Official Website</td>
                  <td>
                    <a
                      href="https://sofworld.org/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      sofworld.org
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <h1>Exam Date</h1>
          <p>
            The SOF International Mathematics Olympiad (IMO) is conducted
            annually in two levels, each with distinct exam dates and results
            timelines.
          </p>
          <p class="subsection">
            <strong>Level 1 Exam: </strong>
            The Level 1 exam is conducted at the school level, generally in the
            winter months between October and December each year. Schools are
            provided with multiple date options, allowing them to choose the
            most convenient one
          </p>
          <ul>
            <li>
              <b>Date: </b>The exact date is chosen by your school from the
              available options
            </li>
            <li>
              <b>Important Note:</b>
              Confirm with your school about the specific exam date.
            </li>
          </ul>

          <p class="subsection">
            <strong>Level 1 Results:</strong>
            {/* The Level 1 exam is conducted at the school level, generally in the winter months between October and December each year. Schools are provided with multiple date options, allowing them to choose the most convenient one */}
          </p>
          <ul>
            <li>
              After the completion of the Level 1 exam, the results are
              typically announced within a few weeks.
            </li>
            <li>
              The Level 1 results determine which students qualify for the Level
              2 exam.
            </li>
            <li>
              Students will be notified of their results, and those who qualify
              will receive an invitation to the Level 2 exam.
            </li>
          </ul>

          <p>
            <strong>Level 2 Exam: </strong>
            The Level 2 exam is held for students who perform exceptionally well
            in Level 1. The exam date for Level 2 is usually in February of the
            following year.
          </p>

          <ul>
            <li>
              {" "}
              <b>Date: </b> The exact date is announced after the Level 1
              results.
            </li>
            <li>
              {" "}
              <b>Important Note:</b> Only students who qualify based on their
              Level 1 performance are eligible to appear for Level 2.
            </li>
          </ul>

          <p class="subsection">
            <strong>Level 2 Results:</strong>
          </p>

          <ul>
            <li>
              After the Level 2 exam, the results are generally declared a few
              weeks after the exam.
            </li>
            <li>
              The Level 2 results determine the final winners of the IMO, and
              qualifying students are awarded various prizes, medals, and
              certificates.
            </li>
          </ul>

          <h1>Eligibility</h1>
          <p>
            <b>Level 1: </b>Open to students from Class 1 to Class 12 enrolled
            in schools recognized by SOF.
          </p>
          <p>
            <b>Level 2: </b>Applicable to students from Class 3 to Class 12.
            Qualification criteria include:
          </p>
          <ul>
            <li>
              Top 5% of students, class-wise, who appear for the Level 1 exam.
            </li>
            <li>Top 25 rank holders from each zone.</li>
            <li>
              Class toppers from each participating school where at least 10
              students from a class appear in the exam and score 50% or more.
            </li>
          </ul>

          <h1>Registration Process</h1>
          <p>
            The SOF International Mathematics Olympiad exam application process
            usually happens through schools in India. Schools registered with
            the SOF receive a prospectus containing registration forms. Schools
            not registered with SOF can request a prospectus by contacting them.
            The school's coordinating teacher fills out the School Registration
            Form (SRF) and Students' Registration Sheet. Duly filled forms are
            sent to SOF before the deadline.
          </p>
          <p>
            <b>School Registration: </b>Students cannot register individually
            for Level 1. The school registers students who wish to participate.
            You need to inform your school if you want to take part in the exam.
            The registration fee for Level 1 is ₹125, which is paid through the
            school. The school submits the total amount to SOF. An additional
            ₹25 may be charged for administration expenses or other
            miscellaneous costs.
          </p>

          <p class="subsection">
            <strong>Fees: </strong>
            ₹125
          </p>

          <h1>Exam Pattern</h1>
          <p>
            Level 1 of the International Mathematics Olympiad exam is organised
            in the respective schools of the participants during school hours.
            <br></br>
            The level 1 competition is a test of 60 minutes duration. It
            comprises 35 objective-type (Multiple Choice) questions for classes
            1 to 4 and 50 objective-type (Multiple Choice) questions for classes
            5 to 12. The exam is only conducted in English Language.
          </p>
          <div className="tabledata">
            <table>
              <thead>
                <tr>
                  <th>Class Group</th>
                  <th>No. of Questions</th>
                  <th>Duration</th>
                  <th>Sections(Topics Covered)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Classes 1 to 4</td>
                  <td>35</td>
                  <td>60 mins</td>
                  <td>
                    Logical Reasoning, Mathematical Reasoning, Everyday Maths,
                    Achievers Section
                  </td>
                </tr>
                <tr>
                  <td>Classes 5 to 12</td>
                  <td>50</td>
                  <td>60 mins</td>
                  <td>
                    Logical Reasoning, Mathematical Reasoning, Everyday Maths,
                    Achievers Section
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h1>Marking Scheme</h1>
          <p>
            <b>IMO Level 1 Marking Scheme for Classes 1 to 4 </b>.
          </p>

          <div className="tabledata">
            <table>
              <thead>
                <tr>
                  <th>Section</th>
                  <th>No. of Questions</th>
                  <th>Marks/Questions</th>
                  <th>Total Marks</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Section 1: Logical Reasoning</td>
                  <td>10</td>
                  <td>1</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>Section 2: Mathematical Reasoning</td>
                  <td>10</td>
                  <td>1</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>Section 3: Everyday Mathematics</td>
                  <td>10</td>
                  <td>1</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>Section 4: Achievers Section</td>
                  <td>5</td>
                  <td>2</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>Grand Total</td>
                  <td>35</td>
                  <td></td>
                  <td>40</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            <b>IMO Level 1 Marking Scheme for Classes 5 to 12</b>
          </p>
          <div className="tabledata">
            <table>
              <thead>
                <tr>
                  <th>Section</th>
                  <th>No. of Questions</th>
                  <th>Marks/Questions</th>
                  <th>Total Marks</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Section 1: Logical Reasoning</td>
                  <td>15</td>
                  <td>1</td>
                  <td>15</td>
                </tr>
                <tr>
                  <td>
                    Section 2: Mathematical Reasoning/ Applied Mathematics (for
                    11th & 12th)
                  </td>
                  <td>20</td>
                  <td>1</td>
                  <td>20</td>
                </tr>
                <tr>
                  <td>Section 3: Everyday Mathematics</td>
                  <td>10</td>
                  <td>1</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>Section 4: Achievers Section</td>
                  <td>5</td>
                  <td>3</td>
                  <td>15</td>
                </tr>
                <tr>
                  <td>Grand Total</td>
                  <td>50</td>
                  <td></td>
                  <td>60</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            <b>IMO Level 2 Marking Scheme</b>
          </p>
          <div className="tabledata">
            <table>
              <thead>
                <tr>
                  <th>Class</th>
                  <th>Section</th>
                  <th>No. of Questions</th>
                  <th>Marks/Questions</th>
                  <th>Total Marks</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>3 to 4</td>
                  <td>Mathematics</td>
                  <td>30</td>
                  <td>1</td>
                  <td>30</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Achievers Section</td>
                  <td>5</td>
                  <td>2</td>
                  <td>10</td>
                </tr>

                <tr>
                  <td></td>
                  <td>Grand Total</td>
                  <td>35</td>
                  <td></td>
                  <td>40</td>
                </tr>
                <tr>
                  <td>5 to 12</td>
                  <td>Mathematics</td>
                  <td>45</td>
                  <td>1</td>
                  <td>45</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Achievers Section</td>
                  <td>5</td>
                  <td>3</td>
                  <td>15</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Grand Total</td>
                  <td>50</td>
                  <td></td>
                  <td>60</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            <b>Note: </b>There is no negative marking for any incorrect answer.
          </p>

          <h1>Awards and Recognition</h1>
          <ul>
            <li>
              <b>Medal: </b>
              Gold, Silver, and bronze medals awarded to top performers.
            </li>
            <li>
              <b>Certificates: </b>Participation and merit certificates for
              students.
            </li>
            <li>
              <b>Cash Prizes and Scholarships: </b>Awarded at zonal and
              international levels.
            </li>
            <li>
              <b>Teacher and School Awards: </b>Recognizing the contribution of
              teachers and schools.
            </li>
          </ul>
          <p>
            <b>At International Level:</b>
          </p>
          <div className="tabledata">
            <table>
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>Scholarships</th>
                  <th>no. of awards</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1st</td>
                  <td>
                    Rs.50,000/- Each + Gold Medal*+ Certificate of Outstanding
                    Performance
                  </td>
                  <td>12</td>
                  {/* <td>10</td> */}
                </tr>
                <tr>
                  <td>2nd</td>
                  <td>
                    Rs.25,000/- Each + Silver Medal*+ Certificate of Outstanding
                    Performance
                  </td>
                  <td>12</td>
                  {/* <td>10</td> */}
                </tr>
                <tr>
                  <td>3rd</td>
                  <td>
                    Rs.10,000/- Each + Bronze Medal*+ Certificate of Outstanding
                    Performance
                  </td>
                  <td>12</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            {" "}
            <b>At Zonal Level:</b>
          </p>

          <div className="tabledata">
            <table>
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>Scholarships</th>
                  <th>no. of awards</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1st</td>
                  <td>
                    Rs.5,000/- Each + Gold Medal*+ Certificate of Zonal
                    Excellence
                  </td>
                  <td>252</td>
                  {/* <td>10</td> */}
                </tr>
                <tr>
                  <td>2nd</td>
                  <td>
                    Rs.2,500/- Each + Silver Medal*+ Certificate of Zonal
                    Excellence
                  </td>
                  <td>252</td>
                  {/* <td>10</td> */}
                </tr>
                <tr>
                  <td>3rd</td>
                  <td>
                    Rs.1,000/- Each + Bronze Medal*+ Certificate of Zonal
                    Excellence
                  </td>
                  <td>252</td>
                </tr>
                <tr>
                  <td>4th to 10th</td>
                  <td>
                    Gifts Worth Rs.1000/- Each + *Medal of Distinction +
                    *Certificate of Distinction + **Certificate of Zonal
                    Excellence
                  </td>
                  <td>1764</td>
                </tr>
                <tr>
                  <td>11th to 25th</td>
                  <td>
                    **Certificate of Zonal Excellence + *Medal of Distinction +
                    *Certificate of Distinction
                  </td>
                  <td>3780</td>
                </tr>
                <tr>
                  <td>Rank 26+</td>
                  <td>Merit Certificate</td>
                  <td>All</td>
                </tr>
              </tbody>
            </table>
          </div>
          <ul>
            <li>
              Medal of Distinction + Certificate of Distinction will be awarded
              for 1st level Ranks.
            </li>
            <li>
              Certificate of Zonal Excellence will be awarded for final Ranks.
            </li>
            <li>
              Medals are Gold / Silver / Bronze colour plated as applicable.
            </li>
          </ul>
          <p>
            In case two or more students achieve the same rank, cash award in
            the applicable category will be distributed as under:
          </p>
          <p>
            <b>International Winners:</b>
            <ul>
              <li>
                Up to 9 students with the same rank split the award equally.
              </li>
              <li>
                10 or more students with the same rank receive gifts worth
                Rs.1,000 each.
              </li>
            </ul>
          </p>

          <p>
            <b>Zonal Winners:</b>
            <ul>
              <li>
                Up to 4 students with the same rank split the award equally.
              </li>
              <li>
                5 or more students with the same rank receive gifts worth
                Rs.1,000 each.
              </li>
            </ul>
          </p>

          <p>
            <b>At School Level:</b>
            <ul>
              <li>Class Toppers receive medals.</li>
              <li>
                Top three rank holders in classes with 10 or more students
                receive gold, silver, and bronze medals.
              </li>
              <li>
                Toppers in classes with 5 to 9 students receive gold medals.
              </li>
              <li>
                Top three rank holders in each section with 10 or more students
                receive gold, silver, and bronze medals.
              </li>
              <li>All students receive a Participation Certification.</li>
              <li>Second-level participants receive a Merit Certificate.</li>
              <li>
                Top 25 rank holders in each class and each Olympiad exam receive
                Medals of Distinction. Applies to winners from 21 Zones.
              </li>
            </ul>
          </p>
        </div>
      </div>
      <FAQ />
      <Banner />
      <Explore />
    </Layout>
  );
};

export default Imo;
