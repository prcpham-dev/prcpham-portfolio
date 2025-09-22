import React from "react";
import styles from "./intro.module.css";

const Intro: React.FC = () => (
  <section id="intro" className={styles.section}>
    <div className={styles.title}>Intro</div>
    <h2 className={styles.heading}>Hi, I’m Pham.</h2>
    <p className={styles.paragraph}>
      Blah blah blah. I will write something later.
    </p>
  </section>
);

export default Intro;
