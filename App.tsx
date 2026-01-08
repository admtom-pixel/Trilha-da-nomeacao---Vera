
import React, { useEffect } from 'react';
import { Hero } from './components/Hero.tsx';
import { Problem } from './components/Problem.tsx';
import { Proposal } from './components/Proposal.tsx';
import { ForWhom } from './components/ForWhom.tsx';
import { WhatYouDevelop } from './components/WhatYouDevelop.tsx';
import { Curriculum } from './components/Curriculum.tsx';
import { TheoreticalBase } from './components/TheoreticalBase.tsx';
import { Instructor } from './components/Instructor.tsx';
import { Certification } from './components/Certification.tsx';
import { FinalCall } from './components/FinalCall.tsx';
import { Logo } from './components/Logo.tsx';

const App: React.FC = () => {
  useEffect(() => {
    // Reveal animation on scroll could be added here
  }, []);

  return (
    <div className="min-h-screen selection:bg-vera-accent selection:text-white">
      <main>
        <Hero />
        <Problem />
        <Proposal />
        <ForWhom />
        <WhatYouDevelop />
        <Curriculum />
        <TheoreticalBase />
        <Instructor />
        <Certification />
        <FinalCall />
      </main>
      <footer className="py-20 px-6 text-center border-t border-vera-purple/10 bg-vera-dark">
        <div className="flex flex-col items-center gap-6 max-w-7xl mx-auto">
          <div className="text-white">
            <Logo className="h-14 w-auto" />
          </div>
          <p className="text-slate-500 text-sm max-w-xs font-light leading-relaxed">
            A verdadeira transformação pela educação
          </p>
          <div className="text-[10px] text-slate-700 font-bold uppercase tracking-[0.3em] pt-8 border-t border-white/5 w-full">
            &copy; {new Date().getFullYear()} Vêra Educação. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
