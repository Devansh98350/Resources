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
      question: "Who can apply for NSTSE?",
      answer:
        "Students from Class 1 to 12 (only PCM/PCB groups for Class 11 and 12) are eligible to apply for the NSTSE.",
    },
    {
      question: "How can I register for NSTSE individually?",
      answer:
        "Visit the official Unified Council website www.unifiedcouncil.com, click on NSTSE, and select 'Individual Registration' to fill in details and pay the fee online.",
    },
    {
      question: "What is the registration fee for NSTSE?",
      answer:
        "The registration fee for individual applicants is ₹300 (inclusive of GST). For school registrations, the fee is ₹150, with an optional ₹15 for Student Performance Report and Model Question Paper (total ₹165).",
    },
    {
      question: "What is the exam mode and pattern?",
      answer:
        "NSTSE is conducted in offline mode (pen and paper) and includes objective-type questions. The number of questions and subjects varies according to the class level.",
    },
    {
      question: "Is there negative marking in NSTSE?",
      answer: "No, there is no negative marking in the NSTSE exam.",
    },
    {
      question: "Can I take NSTSE if my school is not registered?",
      answer:
        "Yes, students can apply individually even if their school is not registered with Unified Council.",
    },
    {
      question: "How will I get my admit card?",
      answer:
        "Students who register individually will receive their admit cards online via the Unified Council website. Those who apply through schools will get them from the school coordinator.",
    },
    {
      question: "When is the NSTSE usually conducted?",
      answer:
        "The NSTSE is usually conducted in the months of January or February each year.",
    },
    {
      question: "What are the awards for NSTSE toppers?",
      answer:
        "The top 100 rankers receive cash prizes, tablets, or medals, and all participants get a Participation Certificate and Student Performance Report (SPR) if opted.",
    },
    {
      question: "What is the benefit of the Student Performance Report (SPR)?",
      answer:
        "SPR provides detailed analysis of strengths and weaknesses subject-wise and helps students understand where they need to improve.",
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
