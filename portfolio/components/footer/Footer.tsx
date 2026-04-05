import React from 'react';
import styles from './footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <span className={styles.brandName}>Prcpham</span>
          <span className={styles.brandSub}>© Phong (Percy) Pham</span>
        </div>

        <div className={styles.links}>
          <a href="mailto:percypham279@gmail.com" className={styles.link}>Email</a>
          <a href="https://github.com/prcpham-dev" target="_blank" rel="noopener noreferrer" className={styles.link}>GitHub</a>
          <a href="https://www.linkedin.com/in/phong-pham-a0292229b/" target="_blank" rel="noopener noreferrer" className={styles.link}>LinkedIn</a>
          <a href="https://leetcode.com/u/prc_pham__/" target="_blank" rel="noopener noreferrer" className={styles.link}>LeetCode</a>
        </div>
      </div>

      {/* Credits */}
      <div className={styles.credits}>
        Built by{' '}
        <a href="https://github.com/prcpham-dev" target="_blank" rel="noopener noreferrer" className={styles.creditLink}>Percy Pham</a>
        {' '}· Drawings &amp; artwork by Tai · 3D models by{' '}
        <a href="https://sketchfab.com/abhayexe" target="_blank" rel="noopener noreferrer" className={styles.creditLink}>abhayexe</a>
        {' '}and{' '}
        <a href="https://sketchfab.com/alexis.eginard" target="_blank" rel="noopener noreferrer" className={styles.creditLink}>Alexis</a>
        {' '}· Editor {' '}
        <a target="_blank" rel="noopener noreferrer" className={styles.creditLink}>Bubson</a>
      </div>
    </footer>
  );
};

export default Footer;