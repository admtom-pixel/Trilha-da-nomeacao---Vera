
import React from 'react';
import { Logo } from './Logo';

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center text-white">
          <Logo className="h-10 w-auto" />
        </div>
        <a 
          href="#checkout" 
          className="text-xs sm:text-sm font-semibold text-vera-accent hover:text-orange-400 transition-colors uppercase tracking-[0.2em]"
        >
          CURSOS VÊRA
        </a>
      </div>
    </nav>
  );
};
