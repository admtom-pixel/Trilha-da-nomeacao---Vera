
import React from 'react';

export const ForWhom: React.FC = () => {
  const targetAudience = [
    "Quer estudar para concursos públicos e não sabe por onde começar;",
    "Já estuda para concursos públicos, mas não consegue atingir a nota de corte para aprovação;",
    "Já estudou para concursos há muitos anos e não sabe como retomar um ritmo adequado para concorrer nos dias atuais;",
    "Precisa identificar seus pontos fracos para aumentar significativamente sua pontuação nas provas objetivas;",
    "Não consegue organizar e implementar uma rotina adequada e eficiente de estudo;",
    "Senta para estudar e não saber quais as matérias e temas mais relevantes para dar ênfase;",
    "Quer aprender técnicas de revisão de estudo cientificamente comprovadas para aumentar a retenção do conteúdo;",
    "Quer descobrir como ganhar posições nos concursos públicos na reta final do certame;"
  ];

  return (
    <section className="py-24 px-6 bg-vera-navy/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-16 italic text-white tracking-tight">
          A "Trilha da Nomeação" <br className="md:hidden"/> é para quem:
        </h2>
        
        <div className="grid md:grid-cols-1 max-w-5xl mx-auto">
          <div className="glass-card p-8 md:p-14 border-vera-accent/20 bg-vera-accent/[0.02] shadow-2xl">
            <ul className="grid md:grid-cols-2 gap-x-12 gap-y-8">
              {targetAudience.map((text, idx) => (
                <li key={idx} className="flex gap-4 text-slate-300 text-sm md:text-base leading-relaxed group">
                  <div className="w-6 h-6 rounded-full bg-vera-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5 border border-vera-accent/20 group-hover:bg-vera-accent/30 transition-colors">
                    <span className="text-vera-accent text-[12px] font-black">✓</span>
                  </div>
                  <span className="group-hover:text-white transition-colors">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
