import React, { useState } from "react";
import styles from "./header.module.css";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <span
          className={styles.brand}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          @prcpham-dev
        </span>

        {/* Hamburger button */}
        <button
          className={styles.burger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span className={styles.burgerLine}></span>
          <span className={styles.burgerLine}></span>
          <span className={styles.burgerLine}></span>
        </button>

        {/* Nav Links */}
        <nav className={`${styles.nav} ${menuOpen ? styles.showNav : ""}`}>
          <a href="#experience" className={styles.navLink}>Experience</a>
          <a href="#projects" className={styles.navLink}>Projects</a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className={styles.navLink}>
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
