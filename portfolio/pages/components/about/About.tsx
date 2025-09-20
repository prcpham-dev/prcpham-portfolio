import React from "react";
import styles from "./about.module.css";

const About: React.FC = () => {
  return (
    <section className={`grid grid-cols-12 ${styles.aboutWrapper}`}>
      <div className="col-span-12 lg:col-span-4">
        <div className={styles.avatarCard}>
          <img
            src="" 
            alt="Phong Pham (Percy)"
            className={styles.avatarImg}
            loading="lazy"
          />
          <div className={styles.avatarMeta}>
            <h1>Phong Pham (Percy)</h1>
            <p>prcpham-dev</p>
          </div>
        </div>
        
        <div className={styles.infoCard}>
          <div className={styles.aboutTitle}>About Me:</div>
          <div className={styles.row}>
            <span className={styles.rowText}>
              University of British Columbia
            </span>
            <span className={styles.subText}>
              Computer Science · 3rd Year
            </span>
          </div>
          <div className={styles.row}>
            <a href="mailto:percypham279@gmail.com" className={styles.link}>
              Email: percypham279@gmail.com
            </a>
          </div>
          <div className={styles.row}>
            <a
              href="https://www.linkedin.com/in/phong-pham-a0292229b/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              LinkedIn: Phong Pham
            </a>
          </div>
          <div className={styles.row}>
            <a
              href="https://github.com/prcpham-dev"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              Github: @prcpham-dev
            </a>
          </div>
          <div className={styles.row}>
            <a
              href="https://leetcode.com/u/prc_pham__/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              LeetCode: @prc_pham__
            </a>
          </div>
        </div>
      </div>
      <div className="col-span-12 lg:col-span-8">
        <div className={styles.codeCard}>
          <div className={styles.cardHeader}>
            <span className={styles.fileLabel}>prcpham-dev / README.md</span>
          </div>
          <pre className={styles.code}>
{`
💬 About Me:
🛌 Born to sleep  
💻 Forced to work  
🔁 Surviving with
            
            while (alive) {
                  eatSomething();     // 🍣 Sushi, 🥩 anything edible...
                  writeCode();        // Bugs. Debugs. More bugs.
                  sleep();            // 😴 Maybe 7+ hours.
                  if (isWeekend) {
                        haveALife();         // 🌤️ Go outside...
                  }
            }
`}
          </pre>
        </div>
        <iframe
          src="/GhostRun/index.html"
          width="100%"
          height="100%"
          style={{ border: "none", display: "block", overflow: "hidden" }}
          title="GhostRun Game"
        />
      </div>
    </section>
  );
};

export default About;
