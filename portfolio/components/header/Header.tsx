import React, { useState } from "react";
import styles from "./header.module.css";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerContainer}>
          <span
            className={`${styles.brand} ${styles.gradientText}`}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            @prcpham-dev
          </span>
          {/* Desktop Nav */}
          <nav className={styles.navDesktop}>
            <a href="#experience" className={`${styles.navLink} ${styles.gradientText}`}>Experience</a>
            <a href="#projects" className={`${styles.navLink} ${styles.gradientText}`}>Projects</a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className={`${styles.navLink} ${styles.gradientText}`}>
              Resume
            </a>
          </nav>
          {/* Hamburger button (mobile only) */}
          <button
            className={styles.burger}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            <span className={styles.burgerLine}></span>
            <span className={styles.burgerLine}></span>
            <span className={styles.burgerLine}></span>
          </button>
        </div>
        {/* Mobile Dropdown Nav (outside headerContainer for blur separation) */}
        <nav className={`${styles.navMobile} ${menuOpen ? styles.showNav : ""}`}>
          <a href="#experience" className={`${styles.navLink} ${styles.gradientText}`}>Experience</a>
          <a href="#projects" className={`${styles.navLink} ${styles.gradientText}`}>Projects</a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className={`${styles.navLink} ${styles.gradientText}`}>
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
