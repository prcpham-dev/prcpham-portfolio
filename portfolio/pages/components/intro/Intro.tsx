import React from "react";
import Image from "next/image";
import styles from "./intro.module.css";

const Intro: React.FC = () => (
  <section id="intro" className={styles.section}>
    <div className={styles.title}>About Me</div>
    <div className={`grid grid-cols-12`}>
      <div className="col-span-12 lg:col-span-8">
        <div className={styles.introContent}>
          <h2 className={styles.heading}>Hi, I am Phong (Percy)</h2>
          <p className={styles.paragraph}>
            I am currently developing my skills as a software developer by building personal projects
            and exploring new tools. My main focus right now is creating web applications, but I would
            also love to make a game since I enjoy gaming. I have always enjoyed
            creating things and building tools.
          </p>
          <p className={styles.paragraph}>
            Outside of coding, I enjoy going to the gym, playing games, and watching Netflix,
            YouTube, or anything new in the cinema. Oh, and food is definitely one of my biggest passions.
            I cannot go a day without it 🍜!
          </p>
        </div>
      </div>

      <div className="col-span-12 lg:col-span-4">
        <div className={styles.imageSetUp}>
          <Image src="/Items/Teddy.png" className={styles.teddy} alt="Teddy" />
          <Image src="/Items/turnip_head.png" className={styles.turnip_head} alt="Turnip Head" />
        </div>
      </div>
    </div>
  </section>
);

export default Intro;
