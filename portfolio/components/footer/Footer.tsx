import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-12 mt-20 border-t border-[var(--color-border)] bg-[var(--color-bg)] relative z-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
          <span className="text-2xl font-black uppercase tracking-tighter mb-2">Prcpham</span>
          <span className="text-sm text-[var(--color-secondary)]">@ Phong (Percy) Pham</span>
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
    </footer>
  );
};
export default Footer;
