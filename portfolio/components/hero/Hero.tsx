import React from 'react';
import { motion } from 'framer-motion';
import ScatteredPictures from './ScatteredPictures';
import dynamic from 'next/dynamic';

const Hero3DBackground = dynamic(() => import('./Hero3DBackground'), {
  ssr: false,
});

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-[95vh] flex flex-col items-center justify-start overflow-hidden pt-32 md:pt-40">

      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[var(--color-brand-accent)]/30 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="absolute top-1/5 left-1/3 -translate-x-1/2 w-[400px] h-[400px] bg-[var(--color-brand-secondary-accent)]/20 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />

      <Hero3DBackground />
      <ScatteredPictures />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="z-20 text-center flex flex-col items-center px-4 mix-blend-difference"
      >
        <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-widest uppercase mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-accent)] via-[#fff] to-[var(--color-brand-secondary-accent)]">
          PERCY PHAM
        </h1>
      </motion.div>
    </section>
  );
};

export default Hero;
