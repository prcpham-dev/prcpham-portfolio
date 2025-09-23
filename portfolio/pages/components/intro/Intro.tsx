import React from "react";
import styles from "./intro.module.css";

const Intro: React.FC = () => (
  <section id="intro" className={styles.section}>
    <div className={styles.title}>About Me</div>
    <div className={`grid grid-cols-12`}>
      <div className="col-span-12 lg:col-span-8">
        <div className={styles.introContent}>
          <h2 className={styles.heading}>Hi, I’m Phong (Percy)</h2>
          <p className={styles.paragraph}>
            I’m currently developing my skills as a software developer by building personal projects
            and exploring new tools. My main focus right now is creating web applications, but I’d
            also love to make a game since I enjoy gaming. I’ve always enjoyed
            creating things and building tools.
          </p>
          <p className={styles.paragraph}>
            Outside of coding, I enjoy going to the gym, playing games, and watching Netflix,
            YouTube, or anything new in the cinema. Oh, and food is definitely one of my biggest passions.
            Can't go a day without it 🍜!
          </p>
        </div>
      </div>

      <div className="col-span-12 lg:col-span-4">
        <div className={styles.imageSetUp}>
          <img src="/Items/Teddy.png" className={styles.teddy}/>
          <img src="/Items/turnip_head.png" className={styles.turnip_head}/>
        </div>
      </div>
    </div>
  </section>
);

export default Intro;
