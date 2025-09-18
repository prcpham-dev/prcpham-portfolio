import React from "react";
import styles from "./Header.module.css";

const Header: React.FC = () => (
  <header className={styles["header-custom"]}>
    <h1 className={styles["header-title"]}>Thuc Nguyen Phong Pham</h1>
    <p className={styles["header-subtitle"]}>
      Computer Science, 3rd Year | University of British Columbia
    </p>
    <div className={`flex flex-wrap justify-center ${styles["header-row"]}`}>
      <span>
        <strong>Email:</strong>{" "}
        <a
          href="mailto:percypham279@gmail.com"
          className={styles["header-link"]}
        >
          percypham279@gmail.com
        </a>
      </span>
      <span>
        <strong>LinkedIn:</strong>{" "}
        <a
          href="https://www.linkedin.com/in/phong-pham-a0292229b/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles["header-link"]}
        >
          linkedin.com/in/phong-pham-a0292229b
        </a>
      </span>
      <span>
        <strong>GitHub:</strong>{" "}
        <a
          href="https://github.com/prcpham-dev"
          target="_blank"
          rel="noopener noreferrer"
          className={styles["header-link"]}
        >
          github.com/prcpham-dev
        </a>
      </span>
    </div>
  </header>
);

export default Header;
