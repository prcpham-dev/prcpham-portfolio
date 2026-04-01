'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

const images = [
  "/ProfilePics/01-v2.jpeg",
  "/ProfilePics/02.jpeg",
  "/ProfilePics/04-v2.jpeg"
];

// Scattered positions and parallax speeds
const positions = [
  { top: "10%", left: "8%", width: "clamp(100px, 14vw, 180px)", height: "clamp(130px, 18vw, 240px)", speed: 0.1 },
  { top: "25%", right: "10%", width: "clamp(130px, 18vw, 240px)", height: "clamp(170px, 24vw, 320px)", speed: -0.15 },
  { top: "45%", left: "12%", width: "clamp(110px, 15vw, 200px)", height: "clamp(140px, 20vw, 270px)", speed: -0.05 },
];

const ParallaxImage = ({ src, pos }: { src: string; pos: { top: string, left?: string, right?: string, width: number | string, height: number | string, speed: number } }) => {
  const { scrollY } = useScroll();
  // We use the absolute pixel scroll value to shift the Y position
  const y = useTransform(scrollY, [0, 3000], [0, pos.speed * 3000]);

  return (
    <motion.div
      style={{
        position: 'absolute',
        top: pos.top,
        left: pos.left,
        right: pos.right,
        width: pos.width,
        height: pos.height,
        y
      }}
      initial={{ opacity: 0, filter: 'blur(10px)' }}
      animate={{ opacity: 0.4, filter: 'blur(0px)' }}
      whileHover={{ opacity: 1, filter: 'contrast(1.2)' }}
      transition={{ duration: 1 }}
      className="rounded-sm overflow-hidden shadow-[0_0_20px_rgba(0,240,255,0.15)] border border-[var(--color-brand-accent)]/30 mix-blend-luminosity hover:mix-blend-normal pointer-events-auto cursor-crosshair z-0"
    >
      <Image src={src} alt="Cyberpunk Aesthetic Scatter" fill className="object-cover" priority sizes="(max-width: 768px) 50vw, 25vw" />

      {/* Glitch Overlay Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#ff003c]/10 to-transparent mix-blend-overlay pointer-events-none" />
    </motion.div>
  );
};

const ScatteredPictures: React.FC = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 400, 800], [1, 1, 0]);

  return (
    <motion.div
      style={{ opacity }}
      className="fixed inset-0 w-full h-[150vh] pointer-events-none z-0 overflow-visible"
    >
      {images.map((src, idx) => (
        <ParallaxImage key={src} src={src} pos={positions[idx]} />
      ))}
    </motion.div>
  );
};

export default ScatteredPictures;
