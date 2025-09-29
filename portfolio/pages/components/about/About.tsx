import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./about.module.css";

const hats: { [key: string]: { src: string; alt: string } } = {
  "9-27": { src: "/Items/birthday_hat.png", alt: "Birthday Hat" },
};

const images = [
  "/ProfilePics/01.jpeg",
  "/ProfilePics/02-v2.jpeg",
  "/ProfilePics/03-v2.jpeg",
  "/ProfilePics/04.jpeg",
  "/ProfilePics/05-v2.jpeg"
];

const About: React.FC = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // rotate profile pictures
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  // check screen width
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className={`grid grid-cols-12 ${styles.aboutWrapper}`}>
      {/* Avatar + Info Card */}
      <div className="col-span-12 lg:col-span-4">
        <div className={styles.avatarCard}>
          <div className={styles.avatarStack}>
            {(() => {
              const today = new Date();
              const key = `${today.getMonth() + 1}-${today.getDate()}`;
              const hat = hats[key];
              if (hat) {
                return (
                  <Image
                    src={hat.src}
                    className={styles.birthdayHat}
                    alt={hat.alt}
                    width={80}
                    height={80}
                    priority
                  />
                );
              }
              return null;
            })()}
            <Image
              src={images[currentIndex]}
              className={styles.avatarImg}
              alt="Profile"
              priority
              width={224}
              height={224}
            />
          </div>
          <div className={styles.avatarMeta}>
            <h1>Phong Pham (Percy)</h1>
            <p>prcpham-dev</p>
          </div>
        </div>

        <div className={styles.infoCard}>
          <div className={styles.aboutTitle}>Basic info:</div>
          <div className={styles.row}>
            <span className={styles.rowText}>
              University of British Columbia
            </span>
            <span className={styles.subText}> (2022 – 2026, Anticipated)
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
              GitHub: @prcpham-dev
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

      {/* Code Card + Game */}
      <div className="col-span-12 lg:col-span-8">
        <div className={styles.codeCard}>
          <div className={styles.cardHeader}>
            <span className={styles.fileLabel}>prcpham-dev / README.md</span>
          </div>
          <pre className={styles.code}>
{isMobile ? (
`💬 Quickstart:
🛌 Born to sleep  
💻 Forced to work 

          (ദ്ദി˙ᗜ˙)
`
) : (
`💬 Quick start: (ദ്ദി˙ᗜ˙)
🛌 Born to sleep  
💻 Forced to work  
🔁 Surviving with

            while (alive) {
                  eatSomething();              // 🍣 Sushi, 🥩 anything edible...
                  writeCode();                 // Bugs. Debugs. More bugs.
                  sleep();                     // 😴 Maybe 7+ hours.
                  if (isWeekend) {
                        haveALife();           // 🌤️ Go outside...
                  }
            }`
)}
          </pre>
        </div>

        <iframe
          src="/GhostRun/index.html"
          className={styles.gameFrame}
          title="GhostRun Game"
        />
      </div>
    </section>
  );
};

export default About;
