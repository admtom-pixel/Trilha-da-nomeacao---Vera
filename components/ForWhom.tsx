
import React from 'react';

export const ForWhom: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-vera-navy/10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-black text-center mb-16 italic">A "Trilha da Nomeação" é para quem:</h2>
        
        <div className="grid md:grid-cols-1 max-w-4xl mx-auto">
          <div className="glass-card p-10 border-vera-accent/20 bg-vera-accent/[0.02]">
            <ul className="grid md:grid-cols-2 gap-x-12 gap-y-6">
              {[
                "Quer estudar para concursos públicos e não sabe por onde começar;",
                "Já estuda para concursos públicos, mas não consegue atingir a nota de corte;",
                "Já estudou há muitos anos e não sabe como retomar o ritmo adequado;",
                "Precisa identificar pontos fracos para aumentar a pontuação objetiva;",
                "Não consegue organizar uma rotina adequada e eficiente de estudo;",
                "Senta para estudar e não sabe quais temas são mais relevantes;",
                "Quer aprender técnicas de revisão cientificamente comprovadas;",
                "Quer descobrir como ganhar posições na reta final do certame."
              ].map((text, idx) => (
                <li key={idx} className="flex gap-4 text-slate-300 text-sm leading-relaxed">
                  <div className="w-5 h-5 rounded-full bg-vera-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-vera-accent text-[10px] font-black">✓</span>
                  </div>
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
