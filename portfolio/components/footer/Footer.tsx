import React from 'react';
import styles from './footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.brand}>PRCPHAM &nbsp;·&nbsp; @ Phong (Percy) Pham</span>

        <div className={styles.links}>
          <a href="mailto:percypham279@gmail.com" className={styles.link}>Email</a>
          <a href="https://github.com/prcpham-dev" target="_blank" rel="noopener noreferrer" className={styles.link}>GitHub</a>
          <a href="https://www.linkedin.com/in/phong-pham-a0292229b/" target="_blank" rel="noopener noreferrer" className={styles.link}>LinkedIn</a>
          <a href="https://leetcode.com/u/prc_pham__/" target="_blank" rel="noopener noreferrer" className={styles.link}>LeetCode</a>
        </div>

        <p className={styles.credits}>
          Built by{' '}
          <a href="https://github.com/prcpham-dev" target="_blank" rel="noopener noreferrer" className={styles.creditLink}>Percy Pham</a>
          {' '}· Drawings &amp; artwork by Tai · 3D models by{' '}
          <a href="https://sketchfab.com/abhayexe" target="_blank" rel="noopener noreferrer" className={styles.creditLink}>abhayexe</a>
          {' '}and{' '}
          <a href="https://sketchfab.com/thomasnguyen" target="_blank" rel="noopener noreferrer" className={styles.creditLink}>Thomas Nguyen</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;