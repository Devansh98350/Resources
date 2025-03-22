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
      question:
        " Who is eligible to participate in the SOF International English Olympiad (IEO)?",
      answer:
        "Students from Classes 1 to 12 studying in recognized schools can participate. There are no minimum percentage criteria for eligibility.",
    },
    {
      question: "How can students register for the SOF IEO?",
      answer:
        "Students must register through their respective schools. SOF does not accept individual registrations for Level 1. Schools can request a prospectus from SOF if they are not already registered.",
    },
    {
      question: "What is the format of the SOF IEO exam?",
      answer:
        "The exam is conducted in English and is divided into sections such as Word and Structure Knowledge, Reading, and Achievers Section. The number of questions varies by class.",
    },
    {
      question: "Are there separate question papers for each class?",
      answer:
        "Yes, each class receives a unique and class-specific question paper designed according to the syllabus for that grade.",
    },
    {
      question: "Is the SOF IEO syllabus based on school curricula?",
      answer:
        "Yes, the syllabus aligns with the CBSE, ICSE/ISC, and various state board standards to ensure relevance to school studies.",
    },
    {
      question: "How are students selected for Level 2 of the IEO?",
      answer:
        "Top-performing students from each class in their respective schools, along with top-ranking students at the state and zonal level, qualify for Level 2.",
    },
    {
      question: "When and how are the IEO results declared?",
      answer:
        "Results are usually declared within 6-8 weeks after the exam and are accessible through the official SOF website. Schools are also informed directly about their students' performance.",
    },
    {
      question: "What awards are given to top-performing students in the IEO?",
      answer:
        "The SOF offers a variety of awards, including cash prizes, medals, certificates, and trophies for outstanding performers at the international, zonal, and school levels",
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
