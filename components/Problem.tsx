
import React from 'react';

export const Problem: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-vera-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-vera-purple/20 to-transparent" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full border border-vera-accent/20 text-vera-accent font-bold tracking-[0.3em] uppercase text-[10px] mb-4">
            O Grande Dilema
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold mt-4 mb-8 text-white leading-tight">
            Por que estudar muito <br/>
            <span className="text-slate-500 italic font-light">não garante a sua vaga?</span>
          </h2>
        </div>
        
        <div className="grid gap-12 text-center">
          <p className="text-xl text-slate-400 font-light leading-relaxed max-w-2xl mx-auto">
            A maioria dos concurseiros foca apenas na quantidade de conteúdo, mas falha na estratégia. A aprovação exige domínio sobre:
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Gestão de tempo",
              "Diagnóstico real",
              "Método de revisão",
              "Resolução de questões"
            ].map((item, idx) => (
              <div key={idx} className="glass-card p-6 flex flex-col items-center justify-center border-vera-purple/10 hover:border-vera-accent/40 transition-all duration-500 group">
                <span className="text-vera-accent text-2xl mb-3 font-black opacity-20 group-hover:opacity-100 transition-opacity">0{idx + 1}</span>
                <span className="text-[11px] font-bold text-slate-300 uppercase tracking-widest leading-tight text-center">{item}</span>
              </div>
            ))}
          </div>

          <div className="relative py-14 px-10 glass-card border-none bg-gradient-to-br from-vera-navy/30 to-transparent shadow-2xl overflow-hidden group">
            <div className="absolute left-0 top-0 w-1.5 h-full bg-vera-accent rounded-full shadow-[0_0_15px_rgba(228,142,33,0.6)]" />
            <p className="text-2xl md:text-3xl text-white font-medium italic leading-relaxed relative z-10">
              "O segredo da aprovação não está na quantidade de estudo, mas sim na sua qualidade estratégica."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
