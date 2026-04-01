import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ScatteredPictures from './ScatteredPictures';
import dynamic from 'next/dynamic';

const Hero3DBackground = dynamic(() => import('./Hero3DBackground'), {
  ssr: false,
});

const Hero: React.FC = () => {
  const [activeModel, setActiveModel] = useState<'station' | 'building'>('station');

  return (
    <section className="relative w-full min-h-[95vh] flex flex-col items-center justify-start overflow-hidden pt-32 md:pt-40">

      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[var(--color-brand-accent)]/30 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="absolute top-1/5 left-1/3 -translate-x-1/2 w-[400px] h-[400px] bg-[var(--color-brand-secondary-accent)]/20 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />

      <Hero3DBackground activeModel={activeModel} />
      <ScatteredPictures />

      {/* Touch-Scroll Safe Zones for Mobile (Pass touch directly to browser) */}
      <div className="md:hidden absolute inset-y-0 left-0 w-24 z-30 pointer-events-auto" style={{ touchAction: 'pan-y' }} />
      <div className="md:hidden absolute inset-y-0 right-0 w-24 z-30 pointer-events-auto" style={{ touchAction: 'pan-y' }} />
      <div className="md:hidden absolute bottom-0 w-full h-48 z-30 pointer-events-auto" style={{ touchAction: 'pan-y' }} />
      <div className="md:hidden absolute top-0 w-full h-32 z-30 pointer-events-auto" style={{ touchAction: 'pan-y' }} />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="z-20 text-center flex flex-col items-center px-4 mix-blend-difference"
      >
        <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-widest uppercase mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-accent)] via-[#fff] to-[var(--color-brand-secondary-accent)]">
          PERCY PHAM
        </h1>

        {/* Environment Toggle Switch */}
        <button
          onClick={() => setActiveModel(prev => prev === 'station' ? 'building' : 'station')}
          className={`hidden md:block relative px-8 py-3 bg-[var(--color-bg)]/80 backdrop-blur-sm border font-bold tracking-widest uppercase transition-all duration-300 hover:text-[#000] pointer-events-auto rounded-sm group overflow-hidden ${
            activeModel === 'station' 
              ? 'border-[var(--color-brand-secondary-accent)] text-[var(--color-brand-secondary-accent)] hover:bg-[var(--color-brand-secondary-accent)] hover:shadow-[0_0_20px_var(--color-brand-secondary-accent)]'
              : 'border-[var(--color-brand-accent)] text-[var(--color-brand-accent)] hover:bg-[var(--color-brand-accent)] hover:shadow-[0_0_20px_var(--color-brand-accent)]'
          }`}
        >
          <span className="relative z-10">Switch Reality</span>
          {/* Glitch line effect */}
          <div className="absolute inset-0 w-full h-[2px] bg-white opacity-0 group-hover:opacity-50 group-hover:animate-pulse z-0" style={{ top: '50%' }} />
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;
