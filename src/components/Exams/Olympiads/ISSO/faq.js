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
      question: "Who can participate in the SOF ISSO?",
      answer:
        "Students from Classes 3 to 10 studying in schools affiliated with recognized education boards (CBSE, ICSE, State Boards, etc.) can participate in ISSO.",
    },
    {
      question: "How many levels are there in ISSO?",
      answer:
        "ISSO is a single-level Olympiad exam conducted at the school level. There is no Level 2 for this competition.",
    },
    {
      question: "What is the exam pattern for ISSO?",
      answer: (
        <>
          The exam consists of MCQ-based questions divided into four sections:
          <ul>
            <li> History</li>
            <li> Geography</li>
            <li> Civics</li>
            <li> Economics (for higher classes)</li>
          </ul>
          The number of questions varies based on the grade category:
          <ul>
            <li> Classes 3-5: 35 questions</li>
            <li> Classes 6-8: 50 questions</li>
            <li> Classes 9-10: 50 questions</li>
          </ul>
        </>
      ),
    },
    {
      question: "What is the duration of the ISSO exam?",
      answer: "The exam is conducted for 60 minutes.",
    },
    {
      question: "How can I register for ISSO?",
      answer:
        "Students can register through their school, provided the school is registered with SOF. If the school is not registered, they can email SOF directly for participation details. Individual registrations are generally not accepted.",
    },
    {
      question: "What is the registration fee for ISSO?",
      answer:
        "The registration fee is ₹150 for Indian students. For international students, the fee may vary based on location and currency exchange rates.",
    },
    {
      question: "Where is the ISSO exam conducted?",
      answer:
        "The exam is held in schools during school hours. Schools act as the exam centers for ISSO.",
    },
    {
      question: "What is the syllabus for ISSO?",
      answer:
        "The ISSO syllabus is based on the NCERT curriculum and includes topics from History, Geography, Civics, and Economics (for senior classes).",
    },
    {
      question: "How can I prepare for ISSO?",
      answer: (
        <>
          Students should:
          <ul>
            <li> Refer to NCERT books and Olympiad-specific workbooks</li>
            <li> Solve previous years' question papers</li>
            <li> Take mock tests for better time management</li>
            <li>
              {" "}
              Stay updated with current affairs related to social studies topics
            </li>
          </ul>
        </>
      ),
    },
    {
      question: "How are ISSO results declared?",
      answer:
        "The results are announced online on the SOF official website (www.sofworld.org) and are also sent to the respective schools.",
    },
    {
      question: "What are the awards for ISSO winners?",
      answer: (
        <>
          Top-performing students receive:
          <ul>
            <li> International and Zonal level ranks</li>
            <li> Gold, silver, and bronze medals</li>
            <li> Certificates of excellence</li>
            <li> Cash prizes and scholarships (for top-ranking students)</li>
          </ul>
        </>
      ),
    },
    {
      question: "Can students participate in ISSO multiple times?",
      answer:
        "Yes, students can participate every year as long as they meet the eligibility criteria for their class.",
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
