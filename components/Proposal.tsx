
import React from 'react';

export const Proposal: React.FC = () => {
  const modulesPreview = [
    "Definindo um Destino",
    "Conhecendo o Desafio",
    "Organizando o Estudo",
    "Entendendo seu Cérebro",
    "Montando o Cronograma",
    "Fontes de Estudo",
    "Mão na Massa",
    "Estratégias de Revisão",
    "Como Resolver Questões e Simulados"
  ];

  return (
    <section className="py-24 px-6 relative bg-gradient-to-b from-vera-dark to-vera-navy/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-black mb-8 leading-tight text-white">
              O Poder do <br />
              <span className="text-vera-purple">Método PET</span>
            </h2>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Baseado em três premissas fundamentais, este roteiro claro e eficiente acelera o seu processo de aprovação.
            </p>
            <div className="grid grid-cols-1 gap-4">
              {[
                { label: "PLANEJAR", color: "bg-vera-accent" },
                { label: "EXECUTAR", color: "bg-vera-purple" },
                { label: "TREINAR", color: "bg-vera-rose" }
              ].map((step) => (
                <div key={step.label} className={`p-4 rounded-xl ${step.color} text-white font-black text-center tracking-[0.2em] shadow-lg`}>
                  {step.label}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-vera-accent uppercase tracking-widest mb-6 italic">Módulos da Jornada:</h3>
            <div className="grid grid-cols-1 gap-3">
              {modulesPreview.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 p-3 hover:bg-vera-purple/10 rounded-xl transition-colors border border-white/5 bg-white/[0.01]">
                  <div className="flex-shrink-0 w-6 h-6 rounded-lg bg-vera-accent/20 flex items-center justify-center text-vera-accent text-xs font-black">
                    {idx + 1}
                  </div>
                  <span className="text-sm font-medium text-slate-200">{item}</span>
                </div>
              ))}
              <div className="pt-2 text-[10px] text-vera-rose font-bold uppercase tracking-[0.2em]">E mais módulos estratégicos para o dia da prova...</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
