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
      question: "What is the difference between JEE Main and JEE Advanced?",
      answer:
        "For candidates aspiring for B.Tech courses offered in NITs, IIITs, and other CFTIs, JEE Main is conducted. JEE Main can be considered as an eligibility test for candidates preparing for JEE Advanced, which paves the way to admission to IITs. The students can appear for JEE Main three consecutive times while only two consecutive chances are given to appear for JEE Advanced.",
    },
    {
      question: "What are the new exam dates for JEE Main 2025 sessions?",
      answer:
        "The JEE Main 2025 exam would be conducted in two sessions. The first session is from 24th January to 1st February 2025, while the second session is from 1st April 2025 to 15th April 2025.",
    },
    {
      question:
        "When will NTA release JEE Main 2025 Admit Card for the upcoming session?",
      answer:
        "After the applications are completed, the NTA would release the JEE Main admit card for 2025 on the official website. Candidates who have registered successfully can download the JEE Main admit card from nta.ac.in or jeemain.nta.nic.in on the specified dates.",
    },
    {
      question: "Is NCERT important for the JEE Main?",
      answer:
        "Around 35 to 40% of questions in JEE Main are picked directly from the concepts covered in the NCERT book. Hence, students are advised to go through the entire NCERT textbook while preparing for JEE Main.",
    },
    {
      question: "What should I do to get admission to an IIT?",
      answer:
        "On the basis of marks obtained in JEE Main, students are granted admission to IIITs, NITs, and GFTIs. In order to get a seat in IIT colleges, the student must clear the JEE Advanced exam. Only the top 2.50 lakh students qualifying for JEE Main will be eligible for JEE Advanced.",
    },
    {
      question: "How many attempts are granted for the JEE Main?",
      answer:
        "The JEE Main 2025 will be conducted in two sessions. It is entirely the choice of the student whether they are willing to appear in one session or both sessions.",
    },
    {
      question: "Can I change my paper appearing mode from Hindi to English?",
      answer:
        "Students must be very careful while selecting the mode of language in the application form online, as it cannot be changed later.",
    },
    {
      question: "Can I apply for two sessions together in JEE Main?",
      answer:
        "Yes, students can apply for both sessions together while filling out the application form. However, they also have the option to apply for the second session separately at a later date.",
    },
    {
      question:
        "Is it mandatory to appear for all the sessions of the JEE Main exam?",
      answer:
        "It is completely the choice of the candidate to appear for either one session or both sessions. In case the candidate has opted to appear for both sessions, then the better marks out of the two attempts would be considered.",
    },
    {
      question: "Is the syllabus of JEE Main and JEE Advanced the same?",
      answer:
        "There are a lot of topics that are a part of the JEE Main syllabus but are excluded from the JEE Advanced syllabus and vice versa. Hence, there are several differences in the syllabus of JEE Main and JEE Advanced.",
    },
    {
      question:
        "I uploaded the wrong photo in my JEE Main application form. What should I do?",
      answer:
        "Once the form has been submitted, no correction would be permitted.",
    },
    {
      question: "What are the new changes in the JEE Main exam pattern?",
      answer:
        "The JEE Main exam pattern more or less remains the same. The only major change this year is in terms of the marking scheme. There will be a negative marking for both Sections A and B.",
    },
    {
      question:
        "I got a 'Transaction Failed' message while paying the application fee online, but the money was deducted from my account. What should I do?",
      answer:
        "Due to some technical error with the payment network, this condition might have occurred. The amount would be refunded within 7 to 10 working days. In case of such a situation, the candidate should submit the application fees again.",
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
