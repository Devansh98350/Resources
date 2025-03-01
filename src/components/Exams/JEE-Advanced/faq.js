import React, { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const styles = {
    sectionStyle: {
      padding: "20px",
      // paddingTop: "calc(20px + 50px)",
      backgroundColor: "#ffffff",
      fontFamily: "Segoe UI",
      lineHeight: "1",
      textAlign: "justify",
      overflowX: "hidden",
    },
    faqContainer: {
      marginTop: "40px",
      maxWidth: "95%",
      margin: "0 auto",
      padding: "20px",
      backgroundColor: "#f9f9f9",
      borderRadius: "8px",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    },
    faqHeading: {
      color: "rgb(0,0,255)",
      fontSize: "32px",
      fontWeight: "700",
      textAlign: "center",
      lineHeight: "48px",
    },
    faq: {
      marginBottom: "2.5px",
      borderBottom: "1px solid #ccc",
      paddingBottom: "2.5px",
    },
    question: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      cursor: "pointer",
      margin: 0,
    },
    questionText: {
      fontSize: "16px",
      lineHeight: "1",
      fontWeight: "700",
    },
    icon: {
      fontSize: "24px",
      color: "#333",
      transition: "transform 0.2s, color 0.2s",
    },
    iconActive: {
      transform: "rotate(45deg)",
      color: "#007bff",
    },
    answer: {
      display: "none",
      marginTop: "10px",
      //   color: "#666",
      fontSize: "16px",
      fontFamily: "Segoe UI",
    },
    answerVisible: {
      display: "block",
    },
    pstyle: {
      paddingTop: "0",
      marginTop: "0%",
      fontSize: "16px",
      fontFamily: "Segoe UI",
    },
  };

  const faqData = [
    {
      question: "When will the JEE Advanced 2025 exam be conducted?",
      answer:
        "JEE Advanced 2025 is expected to take place in June 2025. The exam conducting authority for 2025 is IIT Madras.",
    },
    {
      question: "When will the JEE Advanced application form be released?",
      answer:
        "It is expected that the online application form for JEE Advanced 2025 will begin in the fourth week of May 2025. To fill out the application form for JEE Advanced 2025, candidates can check at jeeadv.nic.in.",
    },
    {
      question: "How to download the JEE Advanced 2025 admit card?",
      answer:
        "To download the JEE Advanced 2025 admit card, candidates should visit the official website where they will be able to access and download their admit card.",
    },
    {
      question:
        "Are candidates who cleared their qualifying exams in 2022 eligible for JEE Advanced 2025 if they did not appear for it in 2023?",
      answer:
        "No, such candidates will not be eligible. However, if the result of the qualifying exam was declared after June 2022, they may be eligible, subject to other eligibility criteria.",
    },
    {
      question:
        "Can aspirants who missed JEE Advanced 2023 appear in JEE Advanced 2025?",
      answer:
        "Yes, students who missed JEE Advanced 2023 will be allowed to appear in the entrance exam in 2025.",
    },
    {
      question: "How many seats will be available in IITs in 2025?",
      answer:
        "The number of seats in IITs varies every year. In 2023, there were 17,385 seats. The exact number for 2025 will be announced by the exam authorities.",
    },
    {
      question:
        "How much do I have to score in JEE Main to qualify for JEE Advanced 2025?",
      answer:
        "A candidate must secure a rank among the top 2,50,000 in JEE Main 2025 to be eligible for JEE Advanced 2025.",
    },
    {
      question: "Are both Paper-I and Paper-II mandatory in JEE Advanced 2025?",
      answer:
        "Yes, both papers are mandatory. The candidate’s total score and rank will be calculated based on their scores in JEE Advanced 2025 Paper-I and Paper-II.",
    },
    {
      question: "Is there any change in the JEE Advanced eligibility?",
      answer:
        "Yes, the 75% eligibility criteria for admission to IITs were scrapped in 2022 based on student requests.",
    },
    {
      question:
        "How is the top 20 percentile calculated for the qualifying exam?",
      answer:
        "The aggregate marks of all subjects in the qualifying exam are considered. Institutions will publish cut-off marks for the top 20 percentile for different categories on IIT websites.",
    },
    {
      question: "Which login ID must be used to apply for JEE Advanced 2025?",
      answer:
        "The JEE Main roll number serves as the candidate’s login ID for JEE Advanced 2025. The password remains the same as JEE Main.",
    },
    {
      question: "What kind of questions can I expect in JEE Advanced?",
      answer:
        "JEE Advanced questions are mostly multiple-choice and cover Physics, Chemistry, and Mathematics. The questions are analytical and tricky, requiring thorough preparation.",
    },
    {
      question:
        "Is there any way to confirm the registration status for the exam?",
      answer:
        "Candidates can check the official website to confirm their registration status. The status is updated within 72 hours of fee payment. If not updated, candidates should contact the admission authorities immediately.",
    },
    {
      question:
        "Apart from IITs, which other premier institutes offer admissions based on JEE Advanced scores?",
      answer:
        "Apart from IITs, nine other institutes offer admissions based on JEE Advanced scores: IISc Bangalore, IISER Bhopal, IISER Kolkata, IISER Mohali, IISER Thiruvananthapuram, IISER Pune, IIST Thiruvananthapuram, RGIPT Rae Bareli, and IIPE Visakhapatnam.",
    },
    {
      question: "How to develop better skills for solving JEE questions?",
      answer:
        "Solving JEE Advanced question papers, sample papers, and mock tests is the best way to develop problem-solving skills. These help familiarize candidates with the exam pattern and time management.",
    },
    {
      question: "JEE Advanced 2025 will be held in how many languages?",
      answer:
        "JEE Advanced 2025 will be conducted in two languages: English and Hindi.",
    },
    {
      question: "Do I need to apply for JEE Advanced separately?",
      answer:
        "Yes, after the announcement of JEE Main results, JEE Advanced applications will be released. Only the top 2,50,000 candidates from JEE Main can apply for JEE Advanced.",
    },
  ];

  return (
    <section id="faq" style={styles.sectionStyle}>
      <div style={styles.faqContainer} className="faq-container">
        <h2 style={styles.faqHeading} className="faqh2">
          Frequently Asked Questions
        </h2>
        {faqData.map((faqItem, index) => (
          <div style={styles.faq} key={index} className="faq">
            <div
              style={styles.question}
              className={`question ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              <h3 style={styles.questionText}>{faqItem.question}</h3>
              <span
                style={{
                  ...styles.icon,
                  ...(activeIndex === index ? styles.iconActive : {}),
                }}
              >
                +
              </span>
            </div>
            <div
              style={{
                ...styles.answer,
                ...(activeIndex === index ? styles.answerVisible : {}),
              }}
              className="answer"
            >
              <p styles={styles.pstyle} className="mt-0">
                {faqItem.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
