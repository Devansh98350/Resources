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
      question: "What is the International Physics Olympiad (IPhO)?",
      answer:
        "The IPhO is an annual international competition for secondary school students to showcase their physics skills. It includes both theoretical and experimental challenges, allowing students to demonstrate their understanding of physics concepts.",
    },
    {
      question: "Who is eligible to participate in the IPhO?",
      answer:
        "Students must be under 20 years of age as of June 30th of the competition year. They should also still be in secondary school or have graduated in the same year. Additionally, they must not have attended university before the competition.",
    },
    {
      question: "How is the IPhO structured?",
      answer:
        "The competition consists of two main components: a theoretical exam, which includes three difficult physics problems, and an experimental exam where students perform experiments and analyze data.",
    },
    {
      question: "What is the role of the delegation?",
      answer:
        "Each country sends a team of up to five students, selected through their national physics Olympiad. The team is accompanied by two leaders who assist with the translation and clarification of exam questions during the event.",
    },
    {
      question: "How are participants graded and awarded?",
      answer:
        "Participants are graded based on their performance in the theoretical and experimental exams. The maximum score is 50 points, with 30 points from the theory exam and 20 points from the experimental exam. Awards are given in the form of gold, silver, and bronze medals, as well as honorable mentions for top performers.",
    },
    {
      question: "Is there a registration fee for the IPhO?",
      answer:
        "The registration fee varies each year and is set by the host country. The fee typically covers the cost of accommodation, meals, and participation in the event. Additional costs may apply for extra delegation members.",
    },
    {
      question: "How can I prepare for the IPhO?",
      answer:
        "Preparation for the IPhO involves studying advanced topics in physics, such as mechanics, thermodynamics, electromagnetism, and optics. Students should solve problems from past IPhO papers and national Olympiad exams and gain practical experience in laboratory experiments and data analysis.",
    },
    {
      question: "What are the benefits of participating in the IPhO?",
      answer:
        "Participating in the IPhO offers a prestigious recognition of physics talent, enhances a student’s academic profile, and provides opportunities for scholarships, university admissions, and internships. It also allows students to build valuable problem-solving and experimental skills while connecting with peers from around the world.",
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
