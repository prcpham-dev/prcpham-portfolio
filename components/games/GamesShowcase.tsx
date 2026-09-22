import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './games.module.css';
import { GamesType } from '@/types/games';

const GamesShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("ghostrun");
  const [playing, setPlaying] = useState<boolean>(false);

  const games: GamesType[] = [
    {
      id: "ghostrun",
      title: "Ghost Run",
      src: "/GhostRun/play.html",
      color: "#00f0ff"
    },
    {
      id: "frankenstein",
      title: "Frankenstein Story",
      src: "/StoryBuilder-GameEngine/play.html",
      color: "#ff003c"
    },
    {
      id: "upvotedle",
      title: "Upvotedle",
      src: "https://www.reddit.com/r/upvotedle/",
      color: "#ff4500",
      isExternal: true
    }
  ];

  const activeGame = games.find(g => g.id === activeTab)!;

  const handleTabChange = (id: string) => {
    if (activeTab === id) return;
    setActiveTab(id);
    setPlaying(false);
  };

  return (
    <section id="games" className={styles.section}>
      <div className={styles.container}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={styles.sectionTitle}
          style={{ color: activeGame.color, textShadow: `0 0 15px ${activeGame.color}` }}
        >
          TEST GAMEPLAY
        </motion.h2>

        <div className={styles.tabRow}>
          {games.map(game => (
            <button
              key={game.id}
              onClick={() => handleTabChange(game.id)}
              className={styles.tabButton}
              data-active={activeTab === game.id}
              style={{ '--game-color': game.color } as React.CSSProperties}
            >
              <div className={styles.tabWrapper}>
                <span>{game.title}</span>
                <span className={styles.tabTextOverlay} aria-hidden="true">{game.title}</span>
              </div>
            </button>
          ))}
        </div>

        <div
          className={styles.showcaseContainer}
          style={{ '--game-color-alpha': `${activeGame.color}33` } as React.CSSProperties}
        >
          <AnimatePresence mode="wait">
            {!playing ? (
              <motion.div
                key={`overlay-${activeGame.id}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.4 }}
                className={styles.playOverlay}
                style={{ '--game-color': activeGame.color } as React.CSSProperties}
                onClick={() => {
                  if (activeGame.isExternal) {
                    window.open(activeGame.src, '_blank');
                  } else {
                    setPlaying(true);
                  }
                }}
              >
                <div className={styles.playIconWrapper}>
                  <svg className="w-9 h-9 md:w-12 md:h-12 text-[#000] ml-1 md:ml-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <span className={styles.playText}>
                  {activeGame.isExternal ? `Play ${activeGame.title}` : `Load ${activeGame.title}`}
                </span>
              </motion.div>
            ) : null}
          </AnimatePresence>

          {/* Iframe renders the exported game */}
          {playing && (
            <iframe
              src={activeGame.src}
              className={styles.iframe}
              title={activeGame.title}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default GamesShowcase;
