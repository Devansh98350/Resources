import React, { useEffect } from "react";
import Layout from "../../Layout";
import "../Exam.css";
import Breadcrumbs from "../../Breadcrumbs";
import FAQ from "./faq";
import Explore from "../../Common/Explore";
import Banner from "../../Common/Banner";

const Ntse = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout
      title="NTSE Exam - IIT Academy"
      description="Prepare for the NTSE Exam with IIT Academy's comprehensive resources! Our expert guidance covers the National Talent Search Examination syllabus, eligibility criteria, exam pattern, and preparation tips for NTSE 2025. Access valuable study materials, previous year papers, and mock tests to boost your chances of success. Join our coaching classes to excel in talent search exams and secure scholarships for your academic journey. Start your path to success with IIT Academy today!"
      keywords="ntse, NTSE Exam, National Talent Search Examination, NTSE 2025, NTSE Application Form, NTSE Syllabus, NTSE Eligibility Criteria, NTSE Exam Pattern, NTSE Preparation Tips, NTSE Previous Year Papers, NTSE Result, NTSE Coaching Classes, How to prepare for NTSE, NTSE Scholarship, NTSE Admit Card, NTSE Study Material, NTSE Mock Tests, NTSE Cut Off Marks, NTSE Exam Date, NTSE Answer Key, NTSE Success Stories, How to fill NTSE application form online, Best books for NTSE preparation, Tips for cracking the NTSE exam, NTSE exam date and schedule for 2025, NTSE preparation strategies for students, What is the format of the NTSE exam?, Importance of NTSE for students in India, NTSE exam centers, How to check NTSE results online, NTSE interview preparation tips, Talent search exams in India, National scholarships for students, Competitive exams for school students, Indian talent search programs, Educational assessments in India"
    >
      <Breadcrumbs />
      <div className="main">
        <div className="container">
          <h1>WHAT IS NTSE ?</h1>
          <p>
            The National Talent Search Examination (NTSE), organized by the
            National Council of Educational Research and Training (NCERT), is a
            prestigious scholarship program designed to identify and nurture
            talented students across India. Aimed at Class 10 students, NTSE
            evaluates intellectual aptitude, academic proficiency, and
            problem-solving skills through a rigorous two-stage examination
            process—Stage 1 at the state level and Stage 2 at the national
            level. Beyond testing textbook knowledge, NTSE fosters critical
            thinking and analytical abilities, offering students a platform to
            excel academically while securing financial support for their future
            education. Recognized nationally, this examination is a stepping
            stone for students aspiring to achieve excellence in academics and
            competitive fields.
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
                  <td>
                    National Council of Educational Research and Training
                    (NCERT)
                  </td>
                </tr>
                <tr>
                  <td>Exam Name</td>
                  <td>National Talent Search Examination (NTSE)</td>
                </tr>
                <tr>
                  <td>Exam Level</td>
                  <td>Stage 1 (State Level) and Stage 2 (National Level)</td>
                </tr>
                <tr>
                  <td>Target Audience</td>
                  <td>Students in Class 10</td>
                </tr>
                <tr>
                  <td>Exam Mode</td>
                  <td>Offline (Pen and Paper)</td>
                </tr>
                <tr>
                  <td>Official Website</td>
                  <td>
                    <a
                      href="http://www.ncert.nic.in"
                      target="_blank"
                      rel="noreferrer"
                    >
                      www.ncert.nic.in
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <h1>Exam Date</h1>
          <p>
            The National Talent Search Examination (NTSE) is conducted annually
            in two stages, with specific timelines for each. As of March 23,
            2025, the exact dates for NTSE 2025-26 are yet to be officially
            announced by NCERT. However, based on historical trends:
          </p>
          <div className="listdata">
            <ul>
              <li>
                <b>Stage 1 Exam:</b>
                <ul>
                  <li>
                    Conducted at the state/UT level, typically between November
                    and December 2025.
                  </li>
                  <li>
                    Date: Varies by state/UT; schools and students must confirm
                    with their respective State Council of Educational Research
                    and Training (SCERT).
                  </li>
                  <li>
                    Results: Declared within a few weeks post-examination;
                    qualifiers proceed to Stage 2.
                  </li>
                </ul>
              </li>
              <li>
                <b>Stage 2 Exam:</b>
                <ul>
                  <li>
                    Held nationally for Stage 1 qualifiers, generally in May or
                    June 2026.
                  </li>
                  <li>Date: Announced by NCERT after Stage 1 results.</li>
                  <li>
                    Results: Results released a few weeks after the exam,
                    determining scholarship recipients.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <p>
            Important Note: Students are advised to regularly check the NCERT
            website (
            <a
              href="https://www.ncert.nic.in"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.ncert.nic.in
            </a>
            ) and their state’s SCERT portal for confirmed dates.
          </p>
          <h1>Eligibility</h1>
          <p>
            Eligibility for NTSE is structured to ensure a fair opportunity for
            deserving students:
          </p>
          <p>
            <b>Key Eligibility Points:</b>
          </p>
          <div className="listdata">
            <ul>
              <li>
                <b>Stage 1:</b>
                <ul>
                  <li>
                    Open to students enrolled in Class 10 in recognized schools
                    (government, private, or open schools under NIOS).
                  </li>
                  <li>
                    Minimum 60% marks in Class 9 (relaxed to 55% for SC/ST
                    candidates).
                  </li>
                  <li>
                    Age limit: Below 18 years as of July 1 of the exam year.
                  </li>
                </ul>
              </li>
              <li>
                <b>Stage 2:</b>
                <ul>
                  <li>Only students qualifying Stage 1 are eligible.</li>
                  <li>
                    Indian students studying abroad in Class 10 can directly
                    appear for Stage 2, provided they secure 60% in their
                    previous examination.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <p>
            <b>No parental income criteria:</b> No parental income criteria
            apply, making NTSE accessible to all eligible talent.
          </p>
          <h1>Registration Process</h1>
          <p>
            The NTSE registration process is streamlined through schools and
            state authorities:
          </p>
          <div className="listdata">
            <ul>
              <li>
                <b>Stage 1:</b>
                <ul>
                  <li>
                    Schools affiliated with SCERT/NCERT facilitate registration.
                  </li>
                  <li>
                    Students obtain application forms from their school or the
                    state’s SCERT website (online/offline based on state norms).
                  </li>
                  <li>
                    Required Documents: Class 9 marksheet, photograph, and
                    category certificate (if applicable).
                  </li>
                  <li>
                    Registration Fee: Varies by state (typically ₹100-₹250);
                    some states offer it free.
                  </li>
                  <li>
                    Submission: Forms are submitted via schools to SCERT before
                    the state-specific deadline.
                  </li>
                </ul>
              </li>
              <li>
                <b>Stage 2:</b>
                <ul>
                  <li>
                    No separate registration required; NCERT directly invites
                    Stage 1 qualifiers.
                  </li>
                  <li>Admit cards are issued by NCERT post-qualification.</li>
                </ul>
              </li>
            </ul>
          </div>
          <p>
            <b>Note:</b> Students must coordinate with their school for timely
            submission and fee details.
          </p>
          <h1>Exam Pattern</h1>
          <p>
            The NTSE is conducted in two stages with a uniform pattern, testing
            mental aptitude and scholastic skills:
          </p>
          <div className="listdata">
            <ul>
              <li>
                <b>Stage 1 & Stage 2:</b>
                <ul>
                  <li>
                    <b>Mode:</b> Offline (Pen and Paper).
                  </li>
                  <li>
                    <b>Papers:</b> Two—Mental Ability Test (MAT) and Scholastic
                    Aptitude Test (SAT).
                  </li>
                  <li>
                    <b>Duration:</b> 2 hours per paper (total 4 hours).
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="tabledata">
            <table>
              <thead>
                <tr>
                  <th>Paper</th>
                  <th>No. of Questions</th>
                  <th>Duration</th>
                  <th>Sections (Topics Covered)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>MAT</td>
                  <td>100</td>
                  <td>120 mins</td>
                  <td>Logical Reasoning, Analytical Thinking</td>
                </tr>
                <tr>
                  <td>SAT</td>
                  <td>100</td>
                  <td>120 mins</td>
                  <td>Science (40), Maths (20), Social Science (40)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="listdata">
            <ul>
              <li>
                <b>Question Type:</b> Objective (Multiple Choice Questions) with
                4 options.
              </li>
              <li>
                <b>Language:</b> Available in English, Hindi, and select
                regional languages (varies by state for Stage 1; English/Hindi
                for Stage 2).
              </li>
            </ul>
          </div>
          <h1>Marking Scheme</h1>
          <p>
            The NTSE marking scheme is straightforward and encourages accuracy:
          </p>
          <div className="tabledata">
            <table>
              <thead>
                <tr>
                  <th>Paper</th>
                  <th>Section</th>
                  <th>No. of Questions</th>
                  <th>Marks per Question</th>
                  <th>Total Marks</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>MAT</td>
                  <td>Logical Reasoning</td>
                  <td>100</td>
                  <td>1</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>SAT</td>
                  <td>Science</td>
                  <td>40</td>
                  <td>1</td>
                  <td>40</td>
                </tr>
                <tr>
                  <td>SAT</td>
                  <td>Mathematics</td>
                  <td>20</td>
                  <td>1</td>
                  <td>20</td>
                </tr>
                <tr>
                  <td>SAT</td>
                  <td>Social Science</td>
                  <td>40</td>
                  <td>1</td>
                  <td>40</td>
                </tr>
                <tr>
                  <td colSpan="2">
                    <b>Total</b>
                  </td>
                  <td>
                    <b>200</b>
                  </td>
                  <td></td>
                  <td>
                    <b>200</b>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="listdata">
            <ul>
              <li>
                <b>Scoring:</b> +1 mark for each correct answer.
              </li>
              <li>
                <b>Negative Marking:</b> None.
              </li>
              <li>
                <b>Qualifying Criteria:</b>
                <ul>
                  <li>
                    <b>General/OBC:</b> Minimum 40% in each paper (MAT and SAT
                    separately).
                  </li>
                  <li>
                    <b>SC/ST/PH:</b> Minimum 32% in each paper.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <h1>Awards and Recognition</h1>
          <p>NTSE offers substantial rewards to its scholars:</p>
          <div className="listdata">
            <ul>
              <li>
                <b>Scholarship:</b>
                <ul>
                  <li>₹1250/month for Class 11 and 12.</li>
                  <li>
                    ₹2000/month for undergraduate and postgraduate studies.
                  </li>
                  <li>As per UGC norms for PhD.</li>
                </ul>
              </li>
              <li>
                <b>Recognition:</b> Approximately 2000 students are selected
                annually as NTSE Scholars, listed on the national merit list.
              </li>
              <li>
                <b>Additional Benefits:</b> Priority in college admissions, job
                applications, and international scholarship programs.
              </li>
            </ul>
          </div>
          <p>
            <b>Note:</b> Scholarships are disbursed subject to continued
            academic performance.
          </p>
          <h1>Preparation Tips</h1>
          <p>
            Effective preparation for NTSE requires a disciplined and focused
            approach:
          </p>
          <div className="listdata">
            <ul>
              <li>
                <b>Master the Syllabus:</b> Study the NCERT syllabus for Class 9
                and 10 (Science, Maths, Social Science).
              </li>
              <li>
                <b>Strengthen MAT Skills:</b> Practice logical reasoning,
                series, and analogies using standard resources.
              </li>
              <li>
                <b>Use NCERT Textbooks:</b> Build a strong foundation in core
                subjects.
              </li>
              <li>
                <b>Solve Past Papers:</b> Analyze previous NTSE papers for
                question trends and difficulty.
              </li>
              <li>
                <b>Take Mock Tests:</b> Simulate exam conditions to improve
                speed and accuracy.
              </li>
              <li>
                <b>Focus on Weak Areas:</b> Identify and address gaps through
                targeted practice.
              </li>
              <li>
                <b>Time Management:</b> Allocate daily study hours for MAT and
                SAT preparation.
              </li>
              <li>
                <b>Revise Regularly:</b> Use short notes for quick revision of
                key concepts.
              </li>
              <li>
                <b>Stay Updated:</b> Refer to NCERT updates for syllabus
                changes.
              </li>
              <li>
                <b>Maintain Balance:</b> Ensure adequate rest and a healthy
                routine to stay sharp.
              </li>
            </ul>
          </div>
          <h1>Benefits of Participating</h1>
          <p>Participating in NTSE offers multifaceted advantages:</p>
          <div className="listdata">
            <ul>
              <li>
                <b>Financial Support:</b> Scholarships reduce the burden of
                educational expenses.
              </li>
              <li>
                <b>Academic Excellence:</b> Enhances understanding of core
                subjects and reasoning skills.
              </li>
              <li>
                <b>National Recognition:</b> Adds prestige to academic profiles.
              </li>
              <li>
                <b>Competitive Edge:</b> Prepares students for exams like JEE,
                NEET, and UPSC.
              </li>
              <li>
                <b>Confidence Building:</b> Success in NTSE boosts self-esteem
                and motivation.
              </li>
              <li>
                <b>Career Opportunities:</b> NTSE scholars gain preference in
                higher education and jobs.
              </li>
              <li>
                <b>Skill Development:</b> Sharpens analytical and
                problem-solving abilities.
              </li>
              <li>
                <b>Early Talent Identification:</b> Helps students realize their
                potential early.
              </li>
              <li>
                <b>Certificate Value:</b> Strengthens applications for
                scholarships and admissions.
              </li>
            </ul>
          </div>
          <h1>Recommended Books</h1>
          <p>The right study materials are crucial for NTSE success:</p>
          <div className="tabledata">
            <table>
              <thead>
                <tr>
                  <th>Book Title</th>
                  <th>Author/Publisher</th>
                  <th>Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>NCERT Textbooks (Class 9 & 10)</td>
                  <td>NCERT</td>
                  <td>Science, Maths, Social Science</td>
                </tr>
                <tr>
                  <td>Verbal & Non-Verbal Reasoning</td>
                  <td>R.S. Aggarwal</td>
                  <td>MAT preparation</td>
                </tr>
                <tr>
                  <td>NTSE Study Package</td>
                  <td>Arihant</td>
                  <td>Comprehensive practice</td>
                </tr>
                <tr>
                  <td>MTG NTSE Explorer</td>
                  <td>MTG</td>
                  <td>Past papers and solutions</td>
                </tr>
                <tr>
                  <td>Foundation Course for NTSE</td>
                  <td>Tata McGraw Hill</td>
                  <td>Conceptual clarity and practice</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            <b>Additional Resources:</b> NCERT exemplar books, online mock tests
            (e.g., IIT Academy).
          </p>
        </div>
      </div>
      <FAQ />
      <Banner />
      <Explore />
    </Layout>
  );
};

export default Ntse;
