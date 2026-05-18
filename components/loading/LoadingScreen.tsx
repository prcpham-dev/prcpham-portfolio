'use client';

import { useEffect, useState } from 'react';
import styles from './loading.module.css';

interface LoadingScreenProps {
  /** Label shown under the progress bar. Defaults to "Initializing System" */
  label?: string;
  /** How long (ms) to show the loader before auto-hiding. Defaults to 2200 */
  duration?: number;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({
  label = 'Initializing System',
  duration = 2200,
}) => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  return (
    <div className={`${styles.overlay} ${hidden ? styles.hidden : ''}`}>
      {/* CRT scanlines */}
      <div className={styles.scanline} aria-hidden="true" />

      {/* Glitch logo */}
      <span className={styles.logo} data-text="PRCPHAM">
        PRCPHAM
      </span>

      {/* Progress bar */}
      <div className={styles.barWrap}>
        <div className={styles.bar} />
      </div>

      {/* Status */}
      <p className={styles.status}>{label}</p>
    </div>
  );
};

export default LoadingScreen;
