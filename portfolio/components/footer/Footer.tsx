import React from "react";
import styles from "./footer.module.css";

const Footer: React.FC = () => (
  <footer className={`${styles.footer} w-full mt-12`}>
    <div className="container mx-auto flex flex-col items-center px-4">
      <a
        href="https://github.com/prcpham-dev"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.footerText}
      >
        @prcpham-dev
      </a>
    </div>
  </footer>
);

export default Footer;
