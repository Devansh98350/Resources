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
      question: "Is there any negative marking in IMO exam for wrong attempt?",
      answer:
        " There is no negative marking for any wrong attempts in the IMO exam.",
    },
    {
      question: "When and where will the IMO results be announced?",
      answer:
        " The results of Level 1 are generally announced a few weeks after the exam, and the results for Level 2 are declared within a similar timeframe. The results are available on the official SOF website, and schools will also be informed directly.",
    },
    {
      question: "What is the syllabus for the IMO?",
      answer:
        "The syllabus for IMO is based on the school curriculum but also includes higher-level mathematical concepts that challenge students’ problem-solving skills. The specific syllabus is available on the SOF website.",
    },
    {
      question: "How can I check the IMO results?",
      answer:
        " Results are published on the official SOF website. Schools will also receive results, and they will be communicated to students through their respective schools.",
    },
    {
      question: "Can I participate in the IMO multiple times?",
      answer:
        "Yes, students can participate in the IMO each year as long as they fall within the eligibility age group (classes 1-12).",
    },
    {
      question: "Where can I find previous year’s question papers?",
      answer:
        "Previous year’s question papers are available on the official SOF IMO website or may be distributed by the school. These papers can help in better preparation and understanding of the exam pattern.",
    },
    {
      question: "Are the Olympiads conducted in English only?",
      answer: " Yes",
    },
    {
      question: "Can I get a certificate if I don't win a medal?",
      answer:
        "Yes, students who perform well but do not win a medal receive Certificates of Merit at the national and international levels. These certificates recognize the student's hard work and achievements.",
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
