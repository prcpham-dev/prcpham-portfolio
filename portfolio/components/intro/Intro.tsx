import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./intro.module.css";

const Intro: React.FC = () => (
  <section id="intro" className={styles.section}>
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={styles.title}
    >
      About Me
    </motion.h2>
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
            Outside of coding, I enjoy going to the gym, playing games, and watching movies.
            I’ve been especially into films lately, so feel free to check out my{" "}
            <a
              href="https://letterboxd.com/prc_mp4/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6ee7b7] hover:text-white hover:underline transition-colors font-bold whitespace-nowrap"
            >
              (Letterboxd ↗)
            </a>.
            You can also check out my{" "}
            <a
              href="https://ca.pinterest.com/prc_png/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6ee7b7] hover:text-white hover:underline transition-colors font-bold whitespace-nowrap"
            >
              (Pinterest ↗)
            </a>
            to get a feel for interests and aesthetic.
            Oh! Food is also one of my biggest passions 🍜!

          </p>
        </div>
      </div>

      <div className="col-span-12 lg:col-span-4">
        <div className={styles.imageSetUp}>
          <Image src="/Items/Teddy.png" className={styles.teddy} alt="Teddy" width={64} height={90} />
          <Image src="/Items/turnip_head.png" className={styles.turnip_head} alt="Turnip Head" width={229} height={343} />
        </div>
      </div>
    </div>
  </section>
);

export default Intro;
