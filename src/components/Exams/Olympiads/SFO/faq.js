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
      question: " Who can participate in the SilverZone Olympiads?",
      answer:
        " The SilverZone Foundation Examination is open to students from Class 1 to Class 12. Students from all schools across India and abroad can participate in the Olympiads, as long as they meet the eligibility requirements.",
    },
    {
      question: "How can I register for the SilverZone Olympiad?",
      answer:
        " Students must register through their school, as individual registration is not permitted. Schools will collect the necessary forms, submit them to SilverZone, and pay the registration fees on behalf of students.",
    },
    {
      question: "What is the exam pattern for the SilverZone Olympiad?",
      answer:
        "The SilverZone Olympiad typically consists of multiple-choice questions (MCQs). The exam duration ranges from 40 to 60 minutes, and each correct answer earns 1 mark, with no negative marking for incorrect answers.",
    },
    {
      question: "What are the awards for top performers?",
      answer:
        " Top-performing students receive Gold, Silver, and Bronze medals. Additionally, they are awarded certificates, cash prizes, and scholarships, depending on their rank and level of achievement. Recognition is given at the International, Zonal, and School levels.",
    },
    {
      question: "How do I prepare for the SilverZone Olympiad?",
      answer:
        "To prepare, it is recommended to use NCERT textbooks for building a strong foundation in subjects like Mathematics, Science, and English. You can also refer to SilverZone practice papers and other Olympiad-specific books for practice. Regular mock tests and reviewing previous year's papers will also help boost your performance.",
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
