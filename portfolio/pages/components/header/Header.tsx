import React from "react";
import styles from "./Header.module.css";

const Header: React.FC = () => (
  <header className={styles.header}>
    <div className={styles.container}>
      <span className={styles.brand}>@prcpham-dev</span>
      <nav className={styles.nav}>
        <a href="#experience" className={styles.navLink}>Experience</a>
        <a href="#projects" className={styles.navLink}>Projects</a>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className={styles.navLink}>Resume</a>
      </nav>
    </div>
  </header>
);

export default Header;
