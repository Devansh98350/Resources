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
    <Layout title="SFO - IIT Academy" description="" keywords="">
      <Breadcrumbs />{" "}
      <div className="main">
        <div className="container">
          <h1>What is Silverzone Foundation Examinations ?</h1>
          <p>
            The SilverZone Foundation Examination is a prestigious series of
            Olympiads designed to assess and enhance students' academic
            abilities from Class 1 to Class 12. Conducted annually by the
            SilverZone Foundation, these Olympiads cover Mathematics, Science,
            English, General Knowledge, Computer Science, and more. They
            encourage students to go beyond their regular school curriculum,
            developing strong analytical, logical, and problem-solving skills.
            <br></br>
            With 12 subject-specific Olympiads, students get the opportunity to
            test their knowledge at both national and international levels.
            These exams foster intellectual curiosity and prepare young minds
            for future competitive exams. Participants are awarded medals,
            certificates, cash prizes, and scholarships, offering them
            well-deserved recognition for their achievements.
            <br></br>By promoting academic excellence and critical thinking, the
            SilverZone Olympiads not only boost confidence but also create a
            strong foundation for students to excel in their future academic and
            professional pursuits.
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
                  <td>SilverZone Foundation</td>
                </tr>
                <tr>
                  <td>Eligibility</td>
                  <td>Class 1 to Class 12</td>
                </tr>
                <tr>
                  <td>Subjects</td>
                  <td>
                    Mathematics, Science, English, GK, Computer Science, Social
                    Studies, Reasoning, Commerce, and more
                  </td>
                </tr>
                <tr>
                  <td>Total Olympiads</td>
                  <td> 12</td>
                </tr>
                <tr>
                  <td>Exam Mode</td>
                  <td>Offline & Online (varies by Olympiad)</td>
                </tr>

                <tr>
                  <td>Question Type</td>
                  <td>MCQs (for all Olympiads)</td>
                </tr>
                <tr>
                  <td>Duration</td>
                  <td>Varies by Olympiad (typically 40-60 minutes)</td>
                </tr>
                <tr>
                  <td>Awards</td>
                  <td>Medals, Certificates, Cash Prizes, Scholarships</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h1>Exam Date</h1>
          <p>
            The SilverZone Foundation Examination is held annually, typically
            between November and December, for most of its Olympiads. However,
            the exact dates for each Olympiad may vary from year to year. The
            Foundation conducts exams for 12 different subjects, and students
            can participate in these Olympiads based on their grade level and
            subject preference.
          </p>
          <p>
            {" "}
            Key Information:
            <ul>
              <li>
                {" "}
                <b>Annual Examination:</b> The exams are held once every year,
                usually in the last quarter (November to December).
              </li>
              <li>
                {" "}
                <b>Multiple Sessions: </b>Some Olympiads might offer additional
                sessions, especially if schools require alternate dates for
                larger groups.
              </li>
              <li>
                {" "}
                <b>Official Announcements: </b>Exam dates and registration
                deadlines are communicated well in advance via the official
                SilverZone Foundation website and may also be sent directly to
                schools participating in the Olympiad.
              </li>
            </ul>
          </p>
          <p>
            To get the most accurate and up-to-date exam dates, always check the
            official website:{" "}
            <a href="www.silverzone.org.">www.silverzone.org.</a>
          </p>

          <h1>Eligibility</h1>
          <p>
            The SilverZone Foundation Examination is open to students from Class
            1 to Class 12, providing a platform for young learners to excel in a
            variety of subjects. Each Olympiad is designed to challenge students
            beyond their regular school curriculum, helping them build their
            knowledge and problem-solving skills.
          </p>
          <p>
            Eligibility Criteria:
            <ul>
              <li>
                {" "}
                <b>Class 1 to Class 12:</b> Students from all school levels are
                eligible to participate in the various subject Olympiads,
                ranging from Mathematics to General Knowledge, English, Science,
                and more.
              </li>
              <li>
                {" "}
                <b>Subjects Offered:</b> Students can choose from 12 Olympiads
                based on their interest and academic strengths.
              </li>
              <li>
                {" "}
                <b>Age Limit: </b>There is no strict age limit; the Olympiad is
                open to all students who meet the grade-based criteria.
              </li>
            </ul>
          </p>

          <h1>Registration Process</h1>
          <p>
            The registration process for the SilverZone Foundation Examination
            is simple, but it must be done through schools. Individual students
            cannot register on their own for these Olympiads. Schools need to
            collect the registration forms and submit them to the SilverZone
            Foundation for all participating students. Below is a step-by-step
            guide to the registration process, including the applicable fees.
          </p>
          <p>
            <b>Steps for Registration:</b>
            <ol>
              <li>
                <b>Contact Your School : </b>
                If you are a student wishing to participate in the SilverZone
                Olympiads, you must check with your school. Schools must
                register the students collectively. Direct registration by
                individual students is not allowed. Ensure your school has opted
                to participate in the Olympiad.
              </li>
              <li>
                {" "}
                <b>Download the Registration Form : </b>
                The school coordinator can download the Registration Form for
                the desired Olympiad(s) from the SilverZone Foundation website:{" "}
                <a href=" www.silverzone.org"> www.silverzone.org</a>
                <br></br>
                Schools will need to fill out the form with details of all
                participating students (names, class, subjects, etc.).
              </li>
              <li>
                {" "}
                <b>Complete the Registration Form : </b>
                The school coordinator will fill out the registration form with
                the following details:
                <ul>
                  <li> Student name</li>
                  <li> Class</li>
                  <li> School name and address</li>
                  <li> Contact details</li>
                  <li>
                    Olympiad(s) selected (e.g., Math, Science, English, etc.)
                  </li>
                </ul>
              </li>
              <li>
                {" "}
                <b>Submit the Registration Form : </b>
                After filling out the form, the school coordinator will submit
                it to the SilverZone Foundation. This can be done online through
                the website or by submitting the printed forms to the
                Foundation’s office, depending on the instructions for that
                year.
              </li>
              <li>
                <b>Payment of Registration Fee :</b>
                <ul>
                  <li>
                    {" "}
                    The registration fee for each Olympiad is paid by the school
                    on behalf of the students.
                  </li>
                  <li>
                    {" "}
                    <b>Fee for Schools in India :</b>
                    <ul>
                      <li>
                        {" "}
                        For each Olympiad, the fee is generally ₹125 per
                        student, including GST.
                      </li>
                      <li>
                        {" "}
                        For the Reasoning Aptitude Olympiad: ₹175 per student.
                      </li>
                      <li> For the STEM Olympiad: ₹275 per student.</li>
                      <li>
                        {" "}
                        An additional ₹25 may be charged per student for teacher
                        remuneration and other expenses.
                      </li>
                    </ul>
                  </li>
                  <li>
                    {" "}
                    <b>Fee for Schools Outside India :</b>
                    <ul>
                      <li> The fee is USD 8 per student for each Olympiad.</li>
                      <li>
                        {" "}
                        For the STEM Olympiad: The fee is USD 20 per student.
                      </li>
                      <li>
                        {" "}
                        An additional USD 2 may be charged per student for
                        teacher remuneration and other miscellaneous expenses.
                      </li>
                    </ul>
                  </li>
                  <li>
                    {" "}
                    Payment can be made by cheque, demand draft, or online
                    transfer, depending on the school’s preference.
                  </li>
                </ul>
              </li>
              <li>
                {" "}
                <b>Receipt of Confirmation : </b>After submitting the
                registration form and making the payment, the school will
                receive a confirmation from the SilverZone Foundation. This
                confirmation will include:
                <ul>
                  <li> The exam date and timing</li>
                  <li> The admit card for each student</li>
                  <li> Any other relevant instructions</li>
                </ul>
              </li>
              <li>
                <b>Admit Card : </b>
                Once the registration is processed, SilverZone Foundation will
                issue an admit card to each student. This card contains
                important information, including the exam center, exam date, and
                roll number.
              </li>
            </ol>
          </p>

          <p>
            <b>Important Notes : </b>
            <ul>
              <li>
                {" "}
                Registration Deadlines: Schools must ensure they complete the
                registration process before the deadline set by the SilverZone
                Foundation. Late registrations may not be accepted.
              </li>
              <li>
                {" "}
                No Individual Registration: Direct registration by individual
                students is not permitted. Registration must be done through the
                school.
              </li>
              <li>
                {" "}
                Fee Payment: The fee is collected and paid by the school, and
                the amount may vary depending on the Olympiad and the number of
                students participating.
              </li>
              <li>
                {" "}
                Additional Charges: Some Olympiads may have extra charges (for
                example, for special Olympiads like the STEM Olympiad).
              </li>
            </ul>
          </p>

          <h1>Exam Pattern</h1>
          <p>
            The SilverZone Foundation Examination follows a structured and
            consistent exam pattern across its 12 Olympiads. These Olympiads are
            designed to assess students' knowledge and analytical abilities in a
            variety of subjects, and the exam pattern is set to challenge
            students at different academic levels. The questions are primarily
            multiple-choice (MCQs), ensuring a fair and objective evaluation of
            students' abilities.
          </p>
          <p>
            <b>General Exam Pattern for All Olympiads:</b>
            <ol>
              <li>
                <b>Mode of Examination : </b>
                The Olympiads are usually conducted in offline mode at
                participating schools or online, depending on the specific
                Olympiad and the facilities available.
              </li>
              <li>
                {" "}
                <b>Number of Questions : </b>
                The number of questions varies by Olympiad and class level, but
                typically ranges from 40 to 60 questions. This varies based on
                the subject and grade group.
              </li>
              <li>
                <b>Question Type : </b>
                <ul>
                  <li>
                    {" "}
                    All Olympiads feature Multiple Choice Questions (MCQs),
                    where each question has four possible answers, and the
                    student must choose the correct one.
                  </li>
                  <li>
                    {" "}
                    Some Olympiads may also include reasoning-based or
                    problem-solving questions, particularly in subjects like
                    Mathematics and Science.
                  </li>
                </ul>
              </li>
              <li>
                {" "}
                <b>Duration : </b>
                The exam duration generally ranges between 40 to 60 minutes,
                depending on the Olympiad and grade level.
              </li>
              <li>
                {" "}
                <b>Marking Scheme : </b>
                <ul>
                  <li>
                    {" "}
                    <b>Correct Answer : </b> Each correct answer generally earns
                    1 mark.
                  </li>
                  <li>
                    {" "}
                    <b>Incorrect Answer : </b> There is no negative marking for
                    incorrect answers.
                  </li>
                  <li>
                    {" "}
                    <b>Unanswered Questions : </b> No marks for unanswered
                    questions.
                  </li>
                </ul>
              </li>
            </ol>
          </p>
          <p>
            SilverZone Olympiads are structured into three levels:
            <ol>
              <li>
                {" "}
                <b>Level 1 : </b> This is the initial stage where all students
                from Class 1 to Class 12 are eligible to participate.
              </li>
              <li>
                {" "}
                <b>Level 2 : </b> Top performers from Level 1 advance to this
                stage. Eligibility criteria for Level 2 include:
                <ul>
                  <li> The top 500 rank holders from each class in Level 1.</li>
                  <li> Students who scored at least 75% in Level 1.</li>
                </ul>
              </li>
              <li>
                {" "}
                <b>Level 3 : </b> This is the final stage, and eligibility is
                typically reserved for:
                <ul>
                  <li>
                    {" "}
                    First-place finishers in Level 2 from Classes 6 to 12
                  </li>
                </ul>
              </li>
            </ol>
            Each level serves to progressively challenge students, with Level 3
            being the most advanced. The exams are conducted in English and are
            designed to assess students' knowledge and analytical abilities in
            various subjects.
            <ul>
              <li>
                The three levels apply mainly to the core Olympiads, like
                Mathematics, Science, and some others.
              </li>
              <li>
                Other Olympiads may only have Level 1, or the levels may vary
                based on the subject.
              </li>
            </ul>
          </p>
          <p>
            {" "}
            The SilverZone Foundation conducts 12 Olympiads, each focused on a
            different academic area. Here’s the list:
            <ol>
              <li> International Olympiad of Mathematics (IOM)</li>
              <li> International Olympiad of Science (IOS)</li>
              <li> International Olympiad of English Language (IOEL)</li>
              <li> International Informatics Olympiad (IIO)</li>
              <li> STEM Innovation Olympiad (STEM)</li>
              <li> Akhil Bhartiya Hindi Olympiad (ABHO)</li>
              <li> Smart Kid General Knowledge Olympiad (SKGKO)</li>
              <li> International Social Studies Olympiad (ISSO)</li>
              <li> International Reasoning and Aptitude Olympiad (IRAO)</li>
              <li>1 International Talent Hunt Olympiad (ITHO)</li>
              <li>1 Little Star Olympiad (for Nursery, LKG, UKG)</li>
              <li>1 Commerce Olympiad (CO)</li>
            </ol>
            Each Olympiad is designed to test knowledge in its respective field,
            ranging from general knowledge and language proficiency to advanced
            topics in mathematics and science. The questions are formulated to
            assess both the depth and breadth of the students' understanding of
            the subjec
          </p>

          <h1>Marking Scheme</h1>
          <ol>
            <li>
              <b>Correct Answer : </b>
              <ul>
                <li> Each correct answer is awarded 1 mark.</li>
                <li>
                  {" "}
                  The questions are primarily designed to assess a student's
                  understanding of key concepts in the respective subjects.
                </li>
              </ul>
            </li>
            <li>
              <b> Incorrect Answer : </b>
              <ul>
                <li>
                  {" "}
                  There is no negative marking for incorrect answers. Students
                  are not penalized for wrong answers, which encourages them to
                  attempt every question.
                </li>
              </ul>
            </li>
            <li>
              <b>Unanswered Questions : </b>
              <ul>
                <li>
                  {" "}
                  If a student leaves a question unanswered, they will receive 0
                  marks for that particular question.
                </li>
              </ul>
            </li>
            <li>
              <b>Question Type : </b>
              <ul>
                <li>
                  The exams consist of multiple-choice questions (MCQs), each
                  with four options.
                </li>
                <li>
                  {" "}
                  Students must choose the correct option, and if correct, they
                  earn 1 mark.
                </li>
              </ul>
            </li>
            <li>
              {" "}
              <b>No Negative Marking : </b>
              <ul>
                <li>
                  {" "}
                  The absence of negative marking allows students to attempt all
                  questions without the risk of losing marks for incorrect
                  answers, which helps build confidence and encourages broad
                  participation.
                </li>
              </ul>
            </li>
            <li>
              {" "}
              <b>Final Score : </b>
              <ul>
                <li>
                  {" "}
                  The final score is calculated by adding up all the correct
                  answers. Since there is no penalty for incorrect answers, the
                  total score is simply the number of correct answers.
                </li>
              </ul>
            </li>
          </ol>
          <p>
            <b>Example : </b>
            If a student answers 40 questions correctly, their total score would
            be 40 marks.
          </p>

          <h1>Awards and Recognition</h1>

          <div className="tabledata">
            <table>
              <thead>
                <tr>
                  <th>Rank No.</th>

                  <th>Awards</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1st</td>
                  {/* <td>Rs.50,000/- Each + Gold Medal*+ Certificate of Outstanding Performance</td> */}
                  <td>
                    1st Intl. Olympiad Rank holder in each class will be awarded
                    with a cash prize of Rs.7,500/-
                  </td>
                  {/* <td>10</td> */}
                </tr>
                <tr>
                  <td>2nd</td>
                  {/* <td>Rs.25,000/- Each + Silver Medal*+ Certificate of Outstanding Performance</td> */}
                  {/* <td>12</td> */}
                  {/* <td>10</td> */}
                  <td>
                    2st Intl. Olympiad Rank holder in each class will be awarded
                    with a cash prize of Rs.5000/-
                  </td>
                </tr>
                <tr>
                  <td>3rd</td>
                  {/* <td>Rs.10,000/- Each + Bronze Medal*+ Certificate of Outstanding Performance</td> */}
                  {/* <td>12</td> */}
                  <td>
                    3rd Intl. Olympiad Rank holder in each class will be awarded
                    with a cash prize of Rs.2,500/-
                  </td>
                </tr>

                <tr>
                  <td>4th to 10th</td>
                  <td>
                    4th to 10th Intl. Olympiad Rank holder in each class will be
                    awarded with medals of excellence
                  </td>
                </tr>

                <tr>
                  <td>11th to 500th</td>
                  <td>
                    11th to 500th Intl. Olympiad Rank holder in each class will
                    be awarded with the topper achievement Certificate
                  </td>
                </tr>

                <tr>
                  <td>1st,2nd and 3rd</td>
                  <td>
                    {" "}
                    All Zonal rank 1st, 2nd and 3rd rank holders of all classes
                    will be awarded with medals of excellence
                  </td>
                </tr>

                <tr>
                  <td>1st,2nd and 3rd</td>
                  <td>
                    Class topper of 1st, 2nd and 3rd rank holders of every class
                    will be awarded with medals of excellence, provided the
                    topper obtains at least 50% marks
                  </td>
                </tr>

                <tr>
                  <td>All</td>
                  <td>
                    All the participants will be awarded with the participation
                    certificate reflecting their Class/Zonal/Olympiad Ranks and
                    marks
                  </td>
                </tr>
              </tbody>
            </table>
            <p>
              For up to 10 students getting the same rank, the award amount will
              be divided & distributed equally. In addition, each winner will be
              awarded a Symbolic Golden Medal of Excellence in the relevant
              category and Certificate.
            </p>
            <p>
              In case 11 & more students get the same rank, in lieu of cash
              award, each winner will be awarded with a Medal of Excellence ( in
              the relevant category) and a Certificate.
            </p>
            <ul>
              <li>
                <b> Certificates : </b>All participants receive participation
                certificates acknowledging their effort and performance.
              </li>

              <li>
                <b> Ranking : </b>Students are ranked nationally and regionally
                based on their scores, recognising their academic excellence.
              </li>
              <li>
                {" "}
                <b>Medals and Prizes : </b>Top-performing students are awarded
                gold, silver, and bronze medals and exciting prizes.
              </li>
              <li>
                {" "}
                <b>Overall Winner : </b>SilverZone also recognises the winners
                who display exceptional talent and dedication.
              </li>
              <li>
                {" "}
                <b>Scholarships :</b> Some Olympiads offer scholarships to
                exceptional performers, supporting their future education
              </li>
            </ul>
            <p>
              The general prize structure remains consistent across the 12
              Olympiads, but there may be small variations depending on the
              specific Olympiad and level. Most Olympiads provide medals,
              certificates, cash prizes, and recognition for top performers at
              international, zonal, and school levels.
              <br></br>
              For the most accurate and detailed prize information, always refer
              to the official SilverZone Foundation website:{" "}
              <a href="https://www.silverzone.org/">silverzone.org.</a>
            </p>
          </div>

          <h1>Preparation Tips</h1>
          <p>
            To perform well in the SilverZone Foundation Examination, follow
            these essential preparation tips:
            <ul>
              <li>
                {" "}
                <b>Understand the Syllabus and Exam Pattern : </b> Familiarize
                yourself with the topics and question types for your chosen
                Olympiad.
              </li>
              <li>
                {" "}
                <b>Build Strong Basics : </b> Focus on mastering key concepts
                from subjects like Mathematics, Science, and English.
              </li>
              <li>
                {" "}
                <b>Practice Regularly : </b> Solve previous year papers and take
                mock tests to improve speed and accuracy.
              </li>
              <li>
                {" "}
                <b>Manage Time Effectively : </b> Create a study plan and track
                your progress. Ensure consistent revision and focus on
                high-weightage topics.
              </li>
              <li>
                {" "}
                <b>Use the Right Resources : </b> Refer to Olympiad-specific
                books and online platforms for additional practice.
              </li>
              <li>
                {" "}
                <b>Stay Calm and Confident : </b> Avoid stress before the exam.
                Focus on solving problems and keep a positive attitude.
              </li>
            </ul>
            By staying consistent with these strategies, you'll improve your
            chances of excelling in the SilverZone Olympiads.
          </p>

          <h1>Benefits of Participating:</h1>
          <p>
            Participating in the SilverZone Foundation Examination offers
            several advantages:
            <ol>
              <li>
                {" "}
                <b>Academic Growth : </b>Enhances your knowledge and critical
                thinking skills in subjects like Mathematics, Science, and
                English.
              </li>
              <li>
                {" "}
                <b>Recognition : </b>Top performers receive medals,
                certificates, and national/international recognition for their
                achievements.
              </li>
              <li>
                {" "}
                <b>Scholarships and Prizes : </b> Win cash prizes and
                scholarships, supporting your future academic pursuits.
              </li>
              <li>
                {" "}
                <b>Confidence Boost : </b>Achieving success in the Olympiad
                strengthens your confidence and encourages further academic
                challenges.
              </li>
              <li>
                {" "}
                <b>Exam Preparation : </b>It helps you develop skills for future
                competitive exams like JEE and NEET.
              </li>
              <li>
                {" "}
                <b>Personal Growth : </b> Learn valuable skills like time
                management, discipline, and perseverance.
              </li>
            </ol>
            By participating, you unlock opportunities for academic excellence,
            recognition, and future success.
          </p>

          <h1>Recommended Books</h1>
          <ul>
            <li> Ncerts</li>
            <li> Book by Silverzone Foundations</li>
            <li> Past Year Question Papers</li>
            <li> Advanced book as per the Olympiad</li>
          </ul>
          <p>
            Using NCERT textbooks as a base along with these extra resources
            will help strengthen your understanding and problem-solving
            abilities. "For Olympiad preparation, SilverZone Foundation provides
            practice papers which align with the Olympiad syllabus and exam
            pattern. Refer to these practice papers along with NCERT books to
            build a strong foundation."
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
