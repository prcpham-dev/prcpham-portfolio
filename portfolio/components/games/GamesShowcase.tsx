import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const GamesShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("ghostrun");
  const [playing, setPlaying] = useState<boolean>(false);

  const games = [
    {
      id: "ghostrun",
      title: "Ghost Run",
      src: "/GhostRun/index.html",
      color: "var(--color-brand-accent)"
    },
    {
      id: "frankenstein",
      title: "Frankenstein Story",
      src: "/StoryBuilder-GameEngine/index.html",
      color: "var(--color-brand-secondary-accent)"
    }
  ];

  const activeGame = games.find(g => g.id === activeTab)!;

  const handleTabChange = (id: string) => {
    if (activeTab === id) return;
    setActiveTab(id);
    setPlaying(false);
  };

  return (
    <section className="relative w-full py-24 flex flex-col items-center justify-center bg-[var(--color-bg)] text-center">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-black uppercase tracking-widest mb-12 text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-accent)] to-[var(--color-brand-secondary-accent)]"
        >
          Interactive Prototypes
        </motion.h2>

        <div className="flex gap-4 md:gap-8 justify-center mb-8">
          {games.map(game => (
            <button
              key={game.id}
              onClick={() => handleTabChange(game.id)}
              className={`text-sm md:text-base px-4 md:px-6 py-3 font-bold tracking-widest uppercase transition-all duration-300 border-b-2`}
              style={{
                color: activeTab === game.id ? game.color : 'var(--color-secondary)',
                borderColor: activeTab === game.id ? game.color : 'transparent',
                textShadow: activeTab === game.id ? `0 0 10px ${game.color}` : 'none'
              }}
            >
              {game.title}
            </button>
          ))}
        </div>

        <div className="relative w-full aspect-video min-h-[450px] md:h-[600px] border border-[var(--color-border)] rounded-sm overflow-hidden bg-[var(--color-surface)] shadow-[0_0_50px_rgba(0,0,0,0.5)] transition-all duration-700 hover:shadow-[0_0_80px_rgba(0,0,0,0.8)]"
          style={{ boxShadow: activeTab ? `0 0 30px ${activeGame.color}33` : undefined }}>
          <AnimatePresence mode="wait">
            {!playing ? (
              <motion.div 
                key={`overlay-${activeGame.id}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[var(--color-bg)]/80 backdrop-blur-md cursor-pointer border border-transparent transition-colors hover:bg-[var(--color-bg)]/60"
                style={{ borderColor: activeGame.color }}
                onClick={() => setPlaying(true)}
              >
                <div 
                  className="w-24 h-24 rounded-none flex items-center justify-center mb-6 transition-transform duration-300 hover:scale-110"
                  style={{ backgroundColor: activeGame.color, boxShadow: `0 0 30px ${activeGame.color}` }}
                >
                  <svg className="w-12 h-12 text-[#000] ml-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <span className="text-xl font-black tracking-widest uppercase" style={{ color: activeGame.color }}>
                  Load {activeGame.title}
                </span>
              </motion.div>
            ) : null}
          </AnimatePresence>

          {/* Iframe renders the exported game */}
          {playing && (
            <iframe 
              src={activeGame.src} 
              className="w-full h-full border-none pointer-events-auto bg-[#000]"
              title={activeGame.title}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default GamesShowcase;
