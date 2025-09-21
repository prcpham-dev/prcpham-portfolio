import React from "react";
import styles from "./footer.module.css";

const Footer: React.FC = () => (
  <footer className={`${styles.footer} w-full mt-12`}>
    <div className="container mx-auto flex flex-col items-center px-4">
      <span className="font-semibold text-lg">@prcpham-dev</span>
    </div>
  </footer>
);

export default Footer;
