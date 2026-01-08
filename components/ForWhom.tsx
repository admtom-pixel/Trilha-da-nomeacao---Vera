
import React from 'react';

export const ForWhom: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-vera-navy/10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-black text-center mb-16 italic">Este curso é para você?</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* SIM */}
          <div className="glass-card p-10 border-vera-accent/20 bg-vera-accent/[0.02]">
            <h3 className="text-2xl font-bold text-vera-accent mb-8 flex items-center gap-2">
              <span className="text-3xl">✓</span> É para você que:
            </h3>
            <ul className="space-y-6">
              {[
                "Quer empreender ou já empreende;",
                "Atua como profissional liberal, gestor ou líder;",
                "Deseja desenvolver pensamento estratégico;",
                "Sente que precisa de mais clareza e consistência;",
                "Busca crescimento com sentido, não apenas resultado imediato."
              ].map((text, idx) => (
                <li key={idx} className="flex gap-4 text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-vera-accent mt-2 flex-shrink-0" />
                  {text}
                </li>
              ))}
            </ul>
          </div>

          {/* NÃO */}
          <div className="glass-card p-10 border-vera-rose/20 bg-vera-rose/[0.02]">
            <h3 className="text-2xl font-bold text-vera-rose mb-8 flex items-center gap-2">
              <span className="text-3xl">✕</span> NÃO é para quem:
            </h3>
            <ul className="space-y-6">
              {[
                "Procura fórmulas rápidas;",
                "Busca promessas milagrosas;",
                "Quer apenas técnicas sem reflexão;",
                "Não está disposto a revisar a própria forma de pensar."
              ].map((text, idx) => (
                <li key={idx} className="flex gap-4 text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-vera-rose mt-2 flex-shrink-0" />
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
