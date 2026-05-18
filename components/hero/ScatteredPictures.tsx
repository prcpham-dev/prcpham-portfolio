'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

const images = [
  "/ProfilePics/01-v2.jpeg",
  "/ProfilePics/02.jpeg",
  "/ProfilePics/04-v2.jpeg",
  "/ProfilePics/03-v3.jpeg",
  "/ProfilePics/05-v3.jpeg",
  "/ProfilePics/06-v3.jpeg",
  "/ProfilePics/07-v1.jpeg"
];

const positions = [
  { top: "45%", left: "15%", width: "clamp(160px, 14vw, 240px)", height: "clamp(200px, 19vw, 320px)", speed: 0.1, displayClass: "hidden sm:block" },
  { top: "15%", right: "7%", width: "clamp(160px, 15vw, 260px)", height: "clamp(210px, 22vw, 380px)", speed: -0.15, displayClass: "block" },
  { top: "35%", left: "4%", width: "clamp(140px, 12vw, 220px)", height: "clamp(180px, 16vw, 290px)", speed: -0.05, displayClass: "block" },
  { top: "12%", left: "6%", width: "clamp(130px, 12vw, 220px)", height: "clamp(130px, 12vw, 220px)", speed: 0.12, displayClass: "block" },
  { top: "4%", left: "22%", width: "clamp(190px, 16vw, 280px)", height: "clamp(130px, 11vw, 190px)", speed: -0.1, displayClass: "hidden lg:block" },
  { top: "42%", right: "26%", width: "clamp(210px, 18vw, 320px)", height: "clamp(130px, 11vw, 190px)", speed: -0.08, displayClass: "hidden lg:block" },
  { top: "46%", right: "6%", width: "clamp(210px, 18vw, 320px)", height: "clamp(130px, 11vw, 190px)", speed: -0.08, displayClass: "hidden lg:block" },
];

const ParallaxImage = ({ src, pos }: { src: string; pos: { top: string, left?: string, right?: string, width: string, height: string, speed: number, displayClass: string } }) => {
  const { scrollY } = useScroll();
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
      className={`rounded-sm overflow-hidden shadow-[0_0_20px_rgba(0,240,255,0.15)] border border-[var(--color-brand-accent)]/30 mix-blend-luminosity hover:mix-blend-normal pointer-events-auto cursor-crosshair z-0 ${pos.displayClass}`}
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
