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
      question: "When is NEET 2025?",
      answer:
        "Considering the previous years’ schedule trend, it is possible that the NEET 2025 exam would be conducted on 5th May 2025.",
    },
    {
      question: "How many students will appear for NEET?",
      answer:
        "It is expected that the registration would be the same as last year or could be more. With every passing year, more students are taking interest in pursuing medicine, hence the number is increasing.",
    },
    {
      question: "What is the full form of NEET?",
      answer:
        "The full form of NEET is National Eligibility cum Entrance Test.",
    },
    {
      question: "Is qualifying class 12th enough to appear for NEET 2025?",
      answer:
        "To appear for the NEET exam, it is mandatory for the candidate to qualify class 12th exam. The candidate should be appearing for the board exam the same year or might have given the class 12th examination in the previous year.",
    },
    {
      question: "How many marks are required to pursue MBBS in NEET?",
      answer:
        "In the case of the General category: 50% marks are required, whereas for OBC, SC & ST: 40% marks. Visit the official website to know more about the category-wise requirements.",
    },
    {
      question: "When do the NEET 2025 registrations start?",
      answer:
        "The official authority has not declared NEET 2025 registration dates yet. The candidate can check this section for updates on when the NEET 2025 exam dates would be released.",
    },
    {
      question: "Will NEET be held twice in 2025?",
      answer:
        "The NTA has made no official statement regarding the conduction of NEET 2025 twice. Keep visiting this section for updates on the same.",
    },
    {
      question: "When will the NEET 2025 form date be announced?",
      answer:
        "Though the release date for NEET 2025 exam forms is not announced, as per previous years' trends, it can be expected that the forms would be released in April 2025.",
    },
    {
      question: "Will NEET be held in 2025?",
      answer:
        "For young graduates seeking to pursue a career in medicine, the NEET 2025 medical entrance test will be conducted. The NEET 2025 will be held at several centers in India and even abroad. As competition is high and the syllabus is vast, students are advised to have a proper preparation strategy to score well.",
    },
    {
      question: "Is there any change in the NEET 2025 syllabus?",
      answer:
        "India will conduct the NEET 2025 examination based on the NEET syllabus specified by the officials. The complete syllabus of NEET 2025 is provided in detail here. In case of any changes, the same will be updated on this page.",
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
              <p styles={styles.pstyle}>{faqItem.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
