import React from "react";
import styles from "./experience.module.css";

const experiences = [
  {
    title: "Software Engineering Intern – Frontend Focus",
    company: "Tinh Van Software",
    date: "Apr 2023 -- Aug 2023",
    details: [
      "Developed responsive web components using React.js, Node.js, TypeScript, Bootstrap, and Tailwind CSS for a client-facing platform.",
      "Collaborated with backend engineers to integrate and test RESTful APIs using Postman.",
      "Participated in sprints, design reviews, and deployment planning using Git.",
      "Gained hands-on exposure to backend infrastructure involving FastAPI and Uvicorn.",
    ],
  },
  {
    title: "Software Engineering Intern – Full-Stack",
    company: "Tinh Van Software",
    date: "Apr 2024 -- Aug 2024",
    details: [
      "Designed and developed a production-ready Retrieval-Augmented Generation (RAG) web app with PDF ingestion and contextual AI chat capabilities.",
      "Implemented backend services in Python using FastAPI, LangChain, and Google Gemini Pro to support semantic search and response generation.",
      "Integrated Redis and Celery for asynchronous task queues, improving responsiveness and scalability.",
      "Built a responsive frontend using React.js and Bootstrap for file upload, chat interaction, and displaying AI-generated insights.",
      "Deployed on a cloud VPS using Docker, Nginx, HTTPS (SSL), and environment-managed API keys.",
      "Created RESTful API endpoints for document processing and chat flow, supporting up to 3MB PDF uploads.",
      "Performed data preprocessing using exploratory data analysis (EDA) and KNN-based filtering.",
    ],
  },
];

const Experience: React.FC = () => (
  <section className={styles.experienceSection}>
    <h2 className={styles.experienceTitle}>Experience</h2>
    {experiences.map((exp, idx) => (
      <div key={idx} className={styles.experienceBlock}>
        <div className={`flex flex-wrap items-baseline ${styles.experienceRow}`}>
          <span className={styles.experienceRole}>{exp.title}</span>
          <span className={styles.experienceCompany}>{exp.company}</span>
          <span className={styles.experienceDate}>{exp.date}</span>
        </div>
        <ul className={styles.experienceList}>
          {exp.details.map((detail, i) => (
            <li key={i} className={styles.experienceDetail}>{detail}</li>
          ))}
        </ul>
      </div>
    ))}
  </section>
);

export default Experience;
