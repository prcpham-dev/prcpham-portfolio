'use client';

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from './header.module.css';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled || mobileMenuOpen ? 'py-4 bg-[var(--color-bg)]/95 backdrop-blur-md border-b border-[var(--color-border)]' : 'py-6 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={styles.brand}
        >
          <span>PRCPHAM</span>
          <span className={styles.textOverlay} aria-hidden="true">PRCPHAM</span>
          <span className={styles.brandUnderline}></span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#experience" className={styles.navLink}>
            <span>Experience</span>
            <span className={styles.textOverlay} aria-hidden="true">Experience</span>
            <span className={styles.navUnderline}></span>
          </a>
          <a href="#projects" className={styles.navLink}>
            <span>Projects</span>
            <span className={styles.textOverlay} aria-hidden="true">Projects</span>
            <span className={styles.navUnderline}></span>
          </a>
          <a href="/sitemap/resume" className={styles.navLink}>
            <span>Resume</span>
            <span className={styles.textOverlay} aria-hidden="true">Resume</span>
            <span className={styles.navUnderline}></span>
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-[var(--color-primary)] p-2 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, filter: 'blur(5px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -20, filter: 'blur(5px)' }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="md:hidden absolute top-full left-0 w-full bg-[var(--color-bg)]/95 backdrop-blur-md border-b border-[var(--color-border)] shadow-xl flex flex-col items-center py-8 gap-8"
          >
            <a href="#experience" onClick={() => setMobileMenuOpen(false)} className={styles.navLink}>
              <span>Experience</span>
              <span className={styles.textOverlay} aria-hidden="true">Experience</span>
              <span className={styles.navUnderline}></span>
            </a>
            <a href="#projects" onClick={() => setMobileMenuOpen(false)} className={styles.navLink}>
              <span>Projects</span>
              <span className={styles.textOverlay} aria-hidden="true">Projects</span>
              <span className={styles.navUnderline}></span>
            </a>
            <a href="/sitemap/resume" onClick={() => setMobileMenuOpen(false)} className={styles.navLink}>
              <span>Resume</span>
              <span className={styles.textOverlay} aria-hidden="true">Resume</span>
              <span className={styles.navUnderline}></span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
