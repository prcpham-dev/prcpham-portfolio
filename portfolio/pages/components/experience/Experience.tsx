import React, { useState } from "react";
import styles from "./experience.module.css";

type Experience = {
  title: string;
  company: string;
  date: string;
  details: string[];
};

const experiences: Experience[] = [
  {
    title: "Software Engineer Intern (Frontend)",
    company: "Tinh Van Software",
    date: "Apr 2023 – Aug 2023",
    details: [
      "Developed responsive web components using **React.js**, **Node.js**, **TypeScript**, **Bootstrap**, and **Tailwind CSS** for a client-facing platform.",
      "Collaborated with backend engineers to integrate and test **RESTful APIs** using **Postman**.",
      "Participated in sprints, design reviews, and deployment planning using **Git**.",
      "Gained hands-on exposure to backend infrastructure involving **FastAPI** and **Uvicorn**.",
    ],
  },
  {
    title: "Software Engineer Intern (Full-Stack)",
    company: "Tinh Van Software",
    date: "Apr 2024 – Aug 2024",
    details: [
      "Designed and developed a production-ready **Retrieval-Augmented Generation (RAG)** web app with PDF ingestion and contextual AI chat capabilities.",
      "Implemented backend services in **Python** using **FastAPI**, **LangChain**, and **Google Gemini Pro** to support semantic search and response generation.",
      "Integrated **Redis** and **Celery** for asynchronous task queues, improving responsiveness and scalability.",
      "Built a responsive frontend using **React.js** and **Bootstrap** for file uploads, chat interaction, and displaying AI-generated insights.",
      "Deployed on a cloud VPS using **Docker**, **Nginx**, **HTTPS (SSL)**, and environment-managed API keys.",
      "Created **RESTful API** endpoints for document processing and chat flow, supporting up to 3MB PDF uploads.",
      "Performed data preprocessing using exploratory **data analysis (EDA)** and **KNN-based filtering**.",
    ],
  },
];

const Experience: React.FC = () => {
  // Reverse display order but preserve original data order
  const reversed = [...experiences].reverse();
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section aria-labelledby="exp-title">
      <h2 id="exp-title" className={styles.title}>
        <span className={styles.titleText}>Experience</span>
        <img src="/Items/Quacky.gif" className={styles.quackyImg} alt="Quacky" />
      </h2>

      {reversed.map((exp, idx) => {
        const isOpen = openIndex === idx;

        return (
          <article
            key={idx}
            className={`${styles.experienceBlock} ${isOpen ? styles.open : ""}`}
          >
            <button
              className={styles.experienceHeader}
              aria-expanded={isOpen}
              aria-controls={`exp-panel-${idx}`}
              onClick={() => setOpenIndex(isOpen ? -1 : idx)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setOpenIndex(isOpen ? -1 : idx);
                }
              }}
            >
              <span className={styles.roleBlock}>
                <span className={styles.roleText}>{exp.title}</span>
                <span className={styles.companyDateRow}>
                  <span className={styles.dot} aria-hidden="true"></span>
                  <span className={styles.company}>{exp.company}</span>
                  <time className={styles.date}>{exp.date}</time>
                </span>
              </span>
              <span className={styles.chevron} aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" style={{ display: "block" }}>
                  <polyline points="7,5 15,11 7,17" stroke="#6ee7b7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </button>

            {/* Collapsible details */}
            <div
              id={`exp-panel-${idx}`}
              className={styles.panel}
              role="region"
              aria-label={`${exp.title} details`}
            >
              <ul className={styles.detailList}>
                {exp.details.map((d, i) => {
                  const html = d.replace(/\*\*(.+?)\*\*/g, `<span class="${styles.highlight}">$1</span>`);
                  return (
                    <li
                      key={i}
                      className={styles.detailItem}
                      dangerouslySetInnerHTML={{ __html: html }}
                    />
                  );
                })}
              </ul>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Experience;
