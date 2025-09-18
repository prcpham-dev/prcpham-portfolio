import React from "react";
import styles from "./skills.module.css";

const skills = [
  {
    category: "Languages",
    items: [
      "JavaScript", "TypeScript", "Python", "Java", "Swift", "SQL", "HTML/CSS", "C++"
    ],
  },
  {
    category: "Frameworks/Libraries",
    items: [
      "React.js", "Node.js", "SwiftUI", "Tailwind CSS", "Three.js", "MoviePy", "LangChain", "FastAPI"
    ],
  },
  {
    category: "Tools/Technologies",
    items: [
      "Docker", "Git", "Postman", "Redis", "Celery", "Uvicorn", "FFmpeg", "REST APIs", "OpenAI API", "AssemblyAI", "Selenium/WebDriver", "Nginx"
    ],
  },
];

const Skills: React.FC = () => (
  <section className={styles.skillsSection}>
    <h2 className={styles.skillsTitle}>Skills</h2>
    <div className={styles.skillsRow}>
      {skills.map((skill, idx) => (
        <div key={idx} className={styles.skillsBlock}>
          <h3 className={styles.skillsCategory}>{skill.category}</h3>
          <ul className={styles.skillsList}>
            {skill.items.map((item, i) => (
              <li key={i} className={styles.skillsItem}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
