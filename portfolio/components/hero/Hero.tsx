import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ScatteredPictures from './ScatteredPictures';
import dynamic from 'next/dynamic';
import styles from './hero.module.css';

const Hero3DBackground = dynamic(() => import('./Hero3DBackground'), {
  ssr: false,
});

const Hero: React.FC = () => {
  const [activeModel, setActiveModel] = useState<'station' | 'building'>('station');

  return (
    <section className={styles.section}>

      <div className={styles.glowCyan} />
      <div className={styles.glowRed} />

      <Hero3DBackground activeModel={activeModel} />
      <ScatteredPictures />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className={styles.content}
      >
        <h1 className={styles.title} data-text="PERCY PHAM">
          PERCY PHAM
        </h1>

        <button
          onClick={() => setActiveModel(prev => prev === 'station' ? 'building' : 'station')}
          className={`${styles.switchBtn} ${activeModel === 'station' ? styles.switchBtnStation : styles.switchBtnBuilding}`}
        >
          <span className={styles.switchBtnLabel}>Switch Reality</span>
          <div className={styles.switchBtnGlitch} />
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;
