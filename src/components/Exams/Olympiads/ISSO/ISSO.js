import React, { useEffect } from "react";
import Layout from "../../../Layout";
import "../../Exam.css";
import Breadcrumbs from "../../../Breadcrumbs";
import Explore from "../../../Common/Explore";
import Banner from "../../../Common/Banner";
import FAQ from "./faq";

const Isso = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="ISSO - IIT Academy" description="" keywords="">
      <Breadcrumbs />
      <div className="main">
        <div className="container">
          <h1>What is ISSO?</h1>
          <p>
            The International Social Studies Olympiad (ISSO) is a prestigious
            competition conducted by the Science Olympiad Foundation (SOF) to
            assess and enhance students' knowledge of history, geography,
            civics, and economics. It is designed to develop analytical
            thinking, global awareness, and a deeper understanding of social
            sciences among students. The Olympiad is open to students from
            Classes 3 to 10 and follows a single-level format, making it
            accessible to a wide range of participants. The exam is conducted in
            offline mode (pen-and-paper format) and consists of multiple-choice
            questions (MCQs). It is held during school hours, allowing students
            to participate without affecting their regular academic schedule.
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
                  <td>Organizer</td>
                  <td>Science Olympiad Foundation (SOF)</td>
                </tr>
                <tr>
                  <td>Eligible Classes</td>
                  <td>3rd to 10th</td>
                </tr>
                <tr>
                  <td>Exam Mode</td>
                  <td>Offline (Pen-and-Paper)</td>
                </tr>
                <tr>
                  <td>Question Type</td>
                  <td>Multiple Choice Questions (MCQs)</td>
                </tr>
                <tr>
                  <td>Exam Duration</td>
                  <td>60 minutes</td>
                </tr>
                <tr>
                  <td>Language Medium</td>
                  <td>English</td>
                </tr>
                <tr>
                  <td> Exam Level</td>
                  <td> Single-level</td>
                </tr>
                <tr>
                  <td>Frequency</td>
                  <td>Annual</td>
                </tr>
                <tr>
                  <td>Recognition</td>
                  <td>Awards, medals, certificates, and scholarships</td>
                </tr>
                <tr>
                  <td>Official Website</td>
                  <td>
                    <a
                      href="https://sofworld.org/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      ipho-new.org
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            The ISSO serves as an excellent platform for students to test their
            conceptual knowledge, enhance critical thinking skills, and gain
            national and international recognition. It also helps in preparing
            students for future competitive exams by strengthening their grasp
            on key social science subjects.
          </p>

          <h1>Exam Date</h1>
          <p>
            The International Social Studies Olympiad (ISSO) is a single-level
            exam conducted annually by the Science Olympiad Foundation (SOF).
            The exam is usually held between December and January every year.
            SOF provides multiple exam dates, and schools have the flexibility
            to choose the date that best suits them. The exact exam dates vary
            each year and are announced on the official SOF website{" "}
            <a href="https://sofworld.org/"> (www.sofworld.org) </a>
            Students are advised to confirm their exam date with their
            respective schools and regularly check the official website for any
            updates regarding the examination schedule.
          </p>

          <h1>Eligibility</h1>
          <p>
            The International Social Studies Olympiad (ISSO) is open to students
            from Classes 3 to 10 who are enrolled in recognized schools across
            India and abroad. The exam assesses students' knowledge of history,
            geography, civics, and economics based on their respective class
            levels.
          </p>
          <p>Key Eligibility Points:</p>
          <ul>
            <li>
              <b> Class Levels: </b>Only students from Classes 3 to 10 are
              eligible to participate.
            </li>
            <li>
              <b> School Participation: </b>Students must register through their
              respective schools. Direct individual registrations are not
              allowed.
            </li>
            <li>
              <b> No Prior Qualification Needed: </b>There are no minimum marks
              or prior qualification required to appear for the ISSO. Any
              student from the eligible classes can participate.
            </li>
            <li>
              <b> Exam Format: </b>The ISSO is a single-level examination,
              meaning there is no second round.
            </li>
            <li>
              <b> International & National Participation: </b>Students from both
              Indian and international schools affiliated with recognized
              education boards (CBSE, ICSE, State Boards, IB, etc.) are
              eligible.
            </li>
          </ul>
          <p>
            Before registering, students should check with their school to
            confirm participation and exam dates.
          </p>

          <h1>Registration Process</h1>
          <p>
            The International Social Studies Olympiad (ISSO) registration
            process is straightforward and is conducted through schools
            registered with the Science Olympiad Foundation (SOF). Here’s how
            students can register for the exam:
          </p>
          <ol>
            <li>
              {" "}
              <b>School Registration:</b>
              <ul>
                <li>
                  {" "}
                  Schools must be registered with SOF to participate. If a
                  school is not yet registered, it can contact SOF to receive
                  the necessary registration forms.
                </li>
                <li>
                  {" "}
                  Schools can register students in bulk by submitting the filled
                  registration forms to SOF.
                </li>
              </ul>
            </li>
            <li>
              <b>Student Registration:</b>
              <ul>
                <li>
                  {" "}
                  Interested students should enroll through their respective
                  schools.
                </li>
                <li>
                  {" "}
                  Individual registrations are not accepted. Only schools can
                  register students for ISSO.
                </li>
              </ul>
            </li>
            <li>
              <b> Fee Payment:</b>
              <ul>
                <li>
                  {" "}
                  The registration fee for students in India, Nepal, Bhutan, and
                  Bangladesh is ₹125 per student (inclusive of GST).
                </li>
                <li>
                  Schools may charge an additional ₹25 per student for
                  administrative expenses.
                </li>
              </ul>
            </li>
            <li>
              <b> Submission Deadline:</b>
              <ul>
                <li>
                  {" "}
                  Schools are provided with a deadline for submission of
                  registration forms and fees. The exact deadline varies each
                  year, and schools need to adhere to the timeline specified by
                  SOF.
                </li>
              </ul>
            </li>
            <li>
              <b> Admit Cards & Exam Details:</b>
              <ul>
                <li>
                  {" "}
                  Once the registration is complete, SOF sends exam details,
                  including the schedule and roll numbers, to the respective
                  schools.
                </li>
                <li>
                  {" "}
                  Once the registration is complete, SOF sends exam details,
                  including the schedule and roll numbers, to the respective
                  schools.
                </li>
              </ul>
            </li>
          </ol>
          <p>
            For further details, students and schools can visit the official SOF
            website :<a href="https://sofworld.org/">www.sofworld.org</a>{" "}
          </p>

          <h1>Exam Pattern</h1>
          <p>
            The SOF International Social Studies Olympiad (ISSO) follows a
            structured single-level exam format that evaluates students’
            knowledge of history, geography, political science, and economics.
            The exam is designed to enhance students' awareness of social
            studies concepts while developing analytical thinking and
            problem-solving skills.
          </p>
          <p>
            The exam consists of multiple-choice questions (MCQs) and is
            conducted in offline mode at the respective schools. It follows a
            well-defined pattern, categorized into different sections based on
            classes.
          </p>
          <p>Exam Structure:</p>
          <ul>
            <li>
              {" "}
              The exam is objective-based (MCQs) with no negative marking.
            </li>
            <li>
              {" "}
              The difficulty level increases with higher classes, focusing on
              subject-specific knowledge and application-based questions.
            </li>
            <li> Each student is given 60 minutes to complete the exam.</li>
            <li>
              {" "}
              The question paper is divided into two sections:
              <ul>
                <li>
                  {" "}
                  <b>Social Studies Section –</b> Tests knowledge in history,
                  geography, political science, and economics (for higher
                  classes).
                </li>
                <li>
                  <b>Achievers Section –</b> Includes high-order thinking (HOTS)
                  questions that test critical analysis and conceptual
                  understanding.
                </li>
              </ul>
            </li>
          </ul>

          <div className="tabledata">
            <table>
              <thead>
                <tr>
                  <th>Class Group</th>
                  <th>Total Questions</th>
                  <th>Duration</th>
                  <th>Sections Covered</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Classes 3-5</td>
                  <td>35 Questions</td>
                  <td>60 minutes</td>
                  <td>Social Studies, Achievers Section</td>
                </tr>
                <tr>
                  <td>Classes 6-8</td>
                  <td>50 Questions</td>
                  <td>60 minutes</td>
                  <td>
                    History, Geography, Social & Political Life, Achievers
                    Section
                  </td>
                </tr>
                <tr>
                  <td>Classes 9-10</td>
                  <td>50 Questions</td>
                  <td>60 minutes</td>
                  <td>
                    History, Geography, Political Science, Economics, Achievers
                    Section
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            The Achievers Section consists of higher-order thinking questions
            that require deep conceptual understanding and reasoning.
          </p>
          <p>
            The exam pattern ensures that students develop a strong foundation
            in social studies, preparing them for competitive exams while
            improving their analytical and problem-solving abilities.
          </p>

          <h1>Marking Scheme</h1>
          <p>
            The SOF International Social Studies Olympiad (ISSO) follows a
            well-defined marking scheme to assess students’ knowledge in
            History, Geography, Civics, and Economics. The exam ensures a
            balanced evaluation by covering different aspects of Social Studies
            while emphasizing conceptual clarity and analytical skills.
          </p>
          <p>
            The exam consists of multiple-choice questions (MCQs), with an
            Achievers Section that carries higher weightage to test students’
            advanced reasoning and problem-solving abilities. There is no
            negative marking, encouraging students to attempt all questions
            without hesitation.
          </p>
          <p>
            The total marks vary across different class levels, ensuring an
            age-appropriate difficulty level. While the majority of questions
            carry equal weight, those in the Achievers Section have a higher
            mark allocation, rewarding students who demonstrate deeper
            conceptual understanding.
          </p>
          <p>
            This marking scheme is designed to identify and reward students’
            critical thinking and subject knowledge, making ISSO a prestigious
            and competitive examination for young learners.
          </p>
          <table>
            <thead>
              <tr>
                <th>Class</th>
                <th>TOPIC/ SECTION</th>
                <th>No. of Questions</th>
                <th>MARKS PER QUESTION</th>
                <th>Total Marks</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>3rd & 4th</td>
                <td>Section – 1: Social Studies</td>
                <td>30</td>
                <td>1</td>
                <td>30</td>
              </tr>
              <tr>
                <td></td>
                <td>Section – 2: Achievers Section</td>
                <td>5</td>
                <td>2</td>
                <td>10</td>
              </tr>
              <tr>
                <td></td>
                <td>GRAND TOTAL</td>
                <td>35</td>
                <td></td>
                <td>40</td>
              </tr>
              <tr>
                <td>5th</td>
                <td>Section – 1: Social Studies</td>
                <td>45</td>
                <td>1</td>
                <td>45</td>
              </tr>
              <tr>
                <td></td>
                <td>Section – 2: Achievers Section</td>
                <td>5</td>
                <td>3</td>
                <td>15</td>
              </tr>
              <tr>
                <td></td>
                <td>GRAND TOTAL</td>
                <td>50</td>
                <td></td>
                <td>60</td>
              </tr>
              <tr>
                <td>6th to 8th</td>
                <td>Section – 1: History</td>
                <td>20</td>
                <td>1</td>
                <td>20</td>
              </tr>
              <tr>
                <td></td>
                <td>Section – 2: Geography</td>
                <td>15</td>
                <td>1</td>
                <td>15</td>
              </tr>
              <tr>
                <td></td>
                <td>10</td>
                <td>1</td>
                <td>10</td>
              </tr>
              <tr>
                <td></td>
                <td>Section – 4: Achievers Section</td>
                <td>5</td>
                <td>3</td>
                <td>15s</td>
              </tr>
              <tr>
                <td></td>
                <td>GRAND TOTAL</td>
                <td>50</td>
                <td></td>
                <td>60</td>
              </tr>
              <tr>
                <td>9th & 10th</td>
                <td>Section – 1: History</td>
                <td>15</td>
                <td>1</td>
                <td>15</td>
              </tr>
              <tr>
                <td></td>
                <td>Section – 2: Geography</td>
                <td>10</td>
                <td>1</td>
                <td>10</td>
              </tr>
              <tr>
                <td></td>
                <td>Section – 3: Political Science</td>
                <td>10</td>
                <td>1</td>
                <td>10</td>
              </tr>
              <tr>
                <td></td>
                <td>Section – 4: Economics</td>
                <td>10</td>
                <td>1</td>
                <td>10</td>
              </tr>
              <tr>
                <td></td>
                <td>Section – 5: Achievers Section</td>
                <td>5</td>
                <td>3</td>
                <td>15</td>
              </tr>
              <tr>
                <td></td>
                <td>GRAND TOTAL</td>
                <td>50</td>
                <td></td>
                <td>60</td>
              </tr>
            </tbody>
          </table>
          <p>
            <b>NOTE:</b>
          </p>

          <ul>
            <li>
              {" "}
              Questions of Olympiad exams will be 70% from the current class
              syllabus and 30% from the previous class syllabus, e.g., class-7
              ISSO exam will have 70% questions from class-7 syllabus and 30%
              questions from class-6 syllabus.
            </li>
            <li>
              Questions in ACHIEVERS SECTION will be from current class syllabus
              only.
            </li>
          </ul>

          <h1>Awards and Recognition</h1>
          <p>
            The Science Olympiad Foundation (SOF) recognizes and rewards
            outstanding performers in the International Social Studies Olympiad
            (ISSO) through a structured system of awards at various levels. For
            the academic year 2024-25, the awards are as follows:
          </p>
          <p>
            <b>International Level Awards</b>
          </p>
          <ul>
            <li>
              <b> International Rank 1:</b> ₹50,000, a Gold Medal, and a
              Certificate of Outstanding Performance.
            </li>
            <li>
              {" "}
              <b>International Rank 2: </b>₹25,000, a Silver Medal, and a
              Certificate of Outstanding Performance.
            </li>
            <li>
              {" "}
              <b>International Rank 3:</b> ₹10,000, a Bronze Medal, and a
              Certificate of Outstanding Performance
            </li>
          </ul>
          <p>
            <b>Zonal Level Awards</b>
          </p>
          <ul>
            <li>
              {" "}
              <b>Zonal Rank 1:</b> ₹5,000, a Gold Medal, and a Certificate of
              Zonal Excellence.
            </li>
            <li>
              {" "}
              <b>Zonal Rank 2:</b> ₹2,500, a Silver Medal, and a Certificate of
              Zonal Excellence.
            </li>
            <li>
              {" "}
              <b>Zonal Rank 3:</b> ₹1,000, a Bronze Medal, and a Certificate of
              Zonal Excellence.
            </li>
          </ul>
          <p>
            <b>School Level Awards</b>
          </p>
          <ul>
            <li>
              {" "}
              <b>Gold Medal of Excellence: </b>Awarded to the top-performing
              student in each class at the school level.
            </li>
            <li>
              {" "}
              <b>Medals of Distinction and Certificates:</b> Awarded to students
              achieving top ranks within their school.
            </li>
            <li>
              {" "}
              <b>Certificates of Participation:</b> Provided to all
              participating students.
            </li>
          </ul>
          <p>
            Additionally, SOF allocates substantial funds annually for awards,
            scholarships, gifts, and other forms of recognition to honour and
            encourage academic excellence among students.{" "}
          </p>
          <p>
            This structured awards system aims to motivate students to excel in
            social studies and provides them with recognition at various levels,
            fostering a spirit of healthy competition and academic achievement.
          </p>

          <h1>Preparation Tips</h1>
          <p>
            Excelling in the SOF International Social Studies Olympiad (ISSO)
            requires a strategic approach, as it tests students’ knowledge of
            history, geography, civics, and economics. Here are the best ways to
            prepare effectively:
          </p>
          <ol>
            <li>
              <b>Understand the Syllabus Thoroughly</b>
              <br></br>Begin by reviewing the official syllabus and identifying
              the key topics covered for your class. Since ISSO follows the
              school curriculum, referring to NCERT textbooks and prescribed
              books will be beneficial.
            </li>
            <li>
              <b> Study from Reliable Sources</b>
              <br></br>Apart from textbooks, use additional resources like
              reference books, general knowledge books, and current affairs
              magazines. Keeping up with national and global events is crucial
              for sections related to civics and current affairs.
            </li>
            <li>
              <b> Make Notes for Quick Revision</b>
              <br></br>Writing down important points, timelines, and key facts
              will help in better retention. Use mind maps, flowcharts, and
              tables to organize information effectively.
            </li>
            <li>
              <b> Practice Previous Year Papers</b>
              <br></br>Solving previous years' question papers and sample papers
              gives insight into the exam pattern and helps identify important
              topics. It also improves speed and accuracy.
            </li>
            <li>
              <b>Focus on Conceptual Understanding</b>
              <br></br>Instead of rote learning, try to understand the concepts
              behind historical events, geographical phenomena, and economic
              principles. This will help you answer analytical questions with
              confidence.
            </li>
            <li>
              <b> Improve Time Management</b>
              <br></br>The ISSO exam is time-bound, so practicing with a timer
              is essential. Try to complete mock tests within the stipulated
              time to enhance your speed and efficiency.
            </li>
            <li>
              <b> Stay Updated with Current Affairs</b>
              <br></br>Social Studies is dynamic, especially in the areas of
              civics and economics. Regularly read newspapers, watch the news,
              and follow educational websites to stay updated with current
              events.
            </li>
            <li>
              <b>Revise Smartly Before the Exam</b>
              In the final days, revise the key historical dates, geographical
              locations, constitutional facts, and economic principles. Avoid
              studying new topics at the last moment and focus on strengthening
              what you already know.
            </li>
          </ol>
          <p>
            By following these structured preparation tips, students can
            significantly improve their chances of scoring well in ISSO and
            develop a deeper understanding of social studies concepts.
          </p>

          <h1>Benefits of Participating</h1>
          <p>
            The SOF International Social Studies Olympiad (ISSO) provides
            students with a unique platform to test and enhance their knowledge
            of history, geography, civics, and economics. Participating in ISSO
            comes with several advantages:
          </p>
          <ol>
            <li>
              <b> Enhances Subject Knowledge</b>
              <br></br>ISSO helps students develop a strong understanding of
              social studies, including historical events, geographical
              concepts, civic responsibilities, and economic principles, making
              them more aware and informed.
            </li>
            <li>
              <b> Boosts Analytical & Reasoning Skills</b>
              <br></br>The Olympiad encourages students to think critically,
              analyze information, and apply concepts to real-world scenarios,
              improving their problem-solving abilities.
            </li>
            <li>
              <b> Improves Academic Performance</b>
              <br></br>As ISSO aligns with school curriculums, participating in
              the Olympiad can reinforce classroom learning and improve overall
              academic performance in social science subjects.
            </li>
            <li>
              <b> Develops Competitive Spirit</b>
              <br></br>Competing at a national and international level instills
              confidence and a competitive mindset, helping students prepare for
              future academic and professional challenges.
            </li>
            <li>
              <b> Recognition & Scholarships</b>
              <br></br>High-achieving students receive certificates, medals, and
              cash prizes, adding value to their academic portfolio. These
              achievements can be beneficial for higher studies and
              scholarships.
            </li>
            <li>
              <b> Exposure to National & Global Issues</b>
              <br></br>ISSO encourages students to stay updated with current
              affairs, global issues, and societal changes, fostering a deeper
              understanding of the world.
            </li>
            <li>
              <b> Encourages Interest in Social Sciences</b>
              <br></br>By making learning engaging and practical, ISSO helps
              students develop a long-term interest in history, geography,
              civics, and economics, potentially guiding them towards careers in
              these fields.
            </li>
            <li>
              <b> Prepares for Competitive Exams</b>
              <br></br>The Olympiad format improves exam-taking skills,
              benefiting students preparing for UPSC, NDA, SSC, and other
              competitive exams that require a strong grasp of social studies.
            </li>
          </ol>

          <h1>Recommended Books</h1>
          <p>
            To excel in the SOF International Social Studies Olympiad (ISSO),
            students should refer to books that cover history, geography,
            civics, and economics in a structured and engaging manner. Below are
            some highly recommended books based on the exam syllabus and
            difficulty level:
          </p>
          <ol>
            <li>
              <b>SOF ISSO Olympiad Workbooks (Recommended for all classes)</b>
              <ul>
                <li>
                  {" "}
                  <b>Publisher:</b> SOF Olympiad Trainer / MTG Learning Media
                </li>
                <li>
                  {" "}
                  <b> Why? </b>These workbooks are specifically designed for
                  ISSO, covering previous years' questions, practice sets, and
                  concept-based learning.
                </li>
              </ul>
            </li>
            <li>
              <b>
                NCERT Textbooks (Social Science) (Recommended for Classes 3-10)
              </b>
              <ul>
                <li>
                  <b>Why? </b> ISSO follows the NCERT syllabus, so reading NCERT
                  books ensures a strong foundation in core concepts of history,
                  geography, civics, and economics.
                </li>
                <li>
                  {" "}
                  <b> Best for: </b> Class-wise preparation in Social Studies
                  (SST) subjects.
                </li>
              </ul>
            </li>
            <li>
              <b>
                Olympiad Prep Guide – Social Studies (Recommended for Classes
                6-10)
              </b>
              <ul>
                <li>
                  {" "}
                  <b>Publisher: </b> MTG Learning Media
                </li>
                <li>
                  <b>Why? </b>This book provides chapter-wise study material,
                  objective-type questions, and mock tests, helping students
                  practice effectively.
                </li>
              </ul>
            </li>
            <li>
              {" "}
              <b>
                Pearson Social Studies Olympiad Books (Recommended for Classes
                3-8)
              </b>
              <ul>
                <li>
                  <b>Why?</b> Covers concept explanations, MCQs, practice
                  questions, and sample papers based on ISSO guidelines.
                </li>
              </ul>
            </li>
            <li>
              <b>
                General Knowledge & Current Affairs Books (For Competitive Edge)
              </b>
              <ul>
                <li>
                  Books:
                  <ul>
                    <li>
                      Manorama Yearbook (for current affairs and global events)
                    </li>
                    <li>
                      {" "}
                      Manorama Yearbook (for current affairs and global events)
                    </li>
                  </ul>
                </li>
                <li>
                  <b> Why? </b>Helps students stay updated with important
                  national and international events relevant to ISSO.
                </li>
              </ul>
            </li>
            <li>
              <b>Online Learning Platforms & Apps (For Interactive Learning)</b>
              <ul>
                <li>
                  {" "}
                  <b>Platforms: </b>
                  <ul>
                    <li> SOF Olympiad Trainer App</li>
                    <li> EduRev Social Studies Olympiad Courses</li>
                  </ul>
                </li>
                <li>
                  <b>Why?</b>These provide digital practice tests, quizzes, and
                  video lessons tailored for ISSO preparation.
                </li>
              </ul>
            </li>
          </ol>
          <p>
            These provide digital practice tests, quizzes, and video lessons
            tailored for ISSO preparation.
          </p>
        </div>
      </div>
      <FAQ />
      <Banner />
      <Explore />
    </Layout>
  );
};

export default Isso;
