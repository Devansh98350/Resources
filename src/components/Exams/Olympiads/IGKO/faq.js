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
      question: "What is the SOF IGKO exam?",
      answer:
        "The SOF International General Knowledge Olympiad (IGKO) is a prestigious exam conducted by the Science Olympiad Foundation (SOF) that assesses students' awareness of current events, general knowledge, and life skills. It is open to students from Classes 1 to 10 and aims to develop curiosity and knowledge beyond academic textbooks.",
    },
    {
      question: "Who can participate in the IGKO exam?",
      answer:
        "Students from Classes 1 to 10 enrolled in recognized schools are eligible to participate. There are no specific academic performance criteria for registration.",
    },
    {
      question: "How can I register for the IGKO exam?",
      answer:
        "Students can register through their respective schools. The school must be registered with SOF to participate. Individual registrations are not accepted. The registration fee is ₹150 per student (₹125 for students with special needs).",
    },
    {
      question: "What is the exam pattern for IGKO?",
      answer: (
        <>
          The IGKO is a single-level exam with multiple-choice questions (MCQs).
          <ul>
            <li>Classes 1-4 have 35 questions (60 minutes duration).</li>
            <li>
              Classes 5-10 have 50 questions (60 minutes duration).The paper is
              divided into sections such as General Awareness, Current Affairs,
              Life Skills, and the Achievers Section.
            </li>
          </ul>
        </>
      ),
    },
    {
      question: "What is the marking scheme for IGKO?",
      answer:
        "The exam follows a structured marking scheme with different weightage assigned to various sections. The Achievers Section carries higher marks per question to test advanced knowledge",
    },
    {
      question: "How can I prepare for the IGKO exam effectively?",
      answer: (
        <>
          To excel in the IGKO, students should:
          <ul>
            <li> Stay updated with current events.</li>
            <li>
              Refer to recommended books like SOF IGKO Workbooks and MTG
              Publications.
            </li>
            <li> Practice sample papers to improve speed and accuracy.</li>
            <li>
              Use online learning platforms for additional resources and mock
              tests.
            </li>
          </ul>
        </>
      ),
    },
    {
      question: "When are the IGKO results declared?",
      answer:
        "Results are generally announced within 6-8 weeks after the exam. Students can check their results on the official SOF website using their roll number.",
    },
    {
      question: "What are the benefits of participating in the IGKO?",
      answer:
        "The IGKO enhances students’ general knowledge, awareness of global issues, and decision-making skills. Winners are awarded medals, certificates, and scholarships at the school, zonal, and international levels.",
    },
    {
      question:
        "Can students appear for the IGKO if their school is not registered with SOF?",
      answer:
        "No, individual participation is not allowed. Schools must register with SOF for their students to participate. Schools can contact SOF directly to initiate the registration process.",
    },
    {
      question: "Where can I find more details about the IGKO exam?",
      answer: (
        <>
          For the latest updates, exam dates, and detailed information, visit
          the official SOF website:
          <a href=" www.sofworld.org">www.sofworld.org</a>
        </>
      ),
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
