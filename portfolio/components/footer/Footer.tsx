import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-12 mt-20 border-t border-[var(--color-brand-border)] bg-[var(--color-brand-bg)] relative z-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
          <span className="text-2xl font-black uppercase tracking-tighter mb-2">Prcpham</span>
          <span className="text-sm text-[var(--color-secondary)]">© Phong (Percy) Pham</span>
        </div>

        <div className="flex gap-6">
          <a href="mailto:percypham279@gmail.com" className="text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors">
            Email
          </a>
          <a href="https://github.com/prcpham-dev" target="_blank" rel="noopener noreferrer" className="text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/phong-pham-a0292229b/" target="_blank" rel="noopener noreferrer" className="text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors">
            LinkedIn
          </a>
          <a href="https://leetcode.com/u/prc_pham__/" target="_blank" rel="noopener noreferrer" className="text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors">
            LeetCode
          </a>
        </div>
      </div>

      {/* Credits */}
      <div className="container mx-auto px-6 mt-8 pt-6 border-t">
        <p className="text-xs text-center text-[var(--color-secondary)] tracking-wide">
          Built by{' '}
          <a href="https://github.com/prcpham-dev" target="_blank" rel="noopener noreferrer" className="text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors">
            Percy Pham
          </a>
          {' '}· Drawings & artwork by Tai · 3D models by{' '}
          <a href="https://sketchfab.com/abhayexe" target="_blank" rel="noopener noreferrer" className="text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors">
            abhayexe
          </a>
          {' '}and{' '}
          <a href="https://sketchfab.com/thomasnguyen" target="_blank" rel="noopener noreferrer" className="text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors">
            Thomas Nguyen
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;