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
      question: "Who can participate in the SOF NSO?",
      answer:
        " Students from Class 1 to 12 studying in CBSE, ICSE, State Board, or other recognized boards are eligible to participate.",
    },
    {
      question: "How can I register for the NSO?",
      answer:
        " Students can register through their schools if their school is registered with SOF. If the school is not participating, students can register individually through the official SOF website.",
    },
    {
      question: "What is the exam format of the NSO?",
      answer:
        "The NSO exam is conducted in two levels:\n\n• Level 1: Three sections – Logical Reasoning, Science, and Achievers Section.\n• Level 2: Two sections – Science and Achievers Section (for students from Classes 3 to 12).",
    },
    {
      question: "What is the syllabus for the NSO?",
      answer:
        "  The syllabus is based on the CBSE, ICSE, and State Board curriculum for the respective classes.",
    },
    {
      question: "Is there any negative marking in the NSO exam?",
      answer: ": No, there is no negative marking in any stage of the exam.",
    },
    {
      question: "How can I check my NSO results?",
      answer:
        "Results are available on the SOF website, and participating schools also receive them. Students can check their results using their roll numbers.",
    },
    {
      question: "What are the benefits of participating in NSO?",
      answer:
        " The NSO helps students develop scientific aptitude, logical reasoning, and problem-solving skills. It also provides national and international-level recognition, boosting confidence for future competitive exams like JEE, NEET, and UPSC.",
    },
    {
      question: "What awards and recognition do students receive?",
      answer:
        "SOF provides certificates, medals, trophies, and scholarships to top-performing students at the school, zonal, and international levels.",
    },
    {
      question: "How should I prepare for the NSO?",
      answer:
        "Students should study from NCERT textbooks, practice with Olympiad workbooks and sample papers, and develop analytical skills through logical reasoning exercises.",
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
