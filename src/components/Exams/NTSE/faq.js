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
      question: "Who is eligible for NTSE?",
      answer:
        "Class 10 students from recognized schools with at least 60% in Class 9 (55% for SC/ST) can participate.",
    },
    {
      question: "How do I register for NTSE?",
      answer:
        "Register through your school by obtaining the form from SCERT; no individual registration for Stage 1.",
    },
    {
      question: "What is the NTSE exam format?",
      answer:
        "Two papers—MAT (100 questions) and SAT (100 questions), each 2 hours, MCQ-based.",
    },
    {
      question: "Is there negative marking in NTSE?",
      answer:
        "No, there’s no negative marking; each correct answer awards 1 mark.",
    },
    {
      question: "How many students receive the NTSE scholarship?",
      answer: "Approximately 2000 students are awarded scholarships annually.",
    },
    {
      question: "What is the syllabus for NTSE?",
      answer:
        "Based on NCERT Class 9 and 10 curriculum for Science, Maths, and Social Science, plus mental ability.",
    },
    {
      question: "How can I check NTSE results?",
      answer:
        "Stage 1 results are available via SCERT; Stage 2 results on www.ncert.nic.in using roll numbers.",
    },
    {
      question: "What are the benefits of NTSE?",
      answer:
        "Scholarships, recognition, and enhanced skills for future competitive exams.",
    },
    {
      question: "How should I prepare for NTSE?",
      answer:
        "Study NCERT books, practice reasoning, solve past papers, and take mock tests regularly.",
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
