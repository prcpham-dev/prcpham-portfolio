import React, { useState, useEffect } from "react";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 bg-[var(--color-bg)]/80 backdrop-blur-md border-b border-[var(--color-border)]' : 'py-6 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <span 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-xl font-black tracking-tighter cursor-pointer hover:text-[var(--color-brand-accent)] transition-colors"
        >
          PRCPHAM
        </span>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#experience" className="text-sm font-semibold tracking-widest uppercase text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors">Experience</a>
          <a href="#projects" className="text-sm font-semibold tracking-widest uppercase text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors">Projects</a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold tracking-widest uppercase px-4 py-2 rounded-full border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-colors">
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
};
export default Header;
