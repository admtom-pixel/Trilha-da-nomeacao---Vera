
import React from 'react';

export const WhatYouDevelop: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-vera-navy/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black mb-16 text-center">Bônus <span className="text-vera-accent">Exclusivos</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Perfis de Bancas",
              desc: "Análise profunda do perfil das bancas FGV, CEBRASPE e VUNESP.",
              icon: "🎯"
            },
            {
              title: "Jurisprudência Descomplicada",
              desc: "Descontos exclusivos na plataforma para acelerar seu entendimento jurídico.",
              icon: "⚖️"
            },
            {
              title: "Decorando a Lei Seca",
              desc: "Acesso com condições especiais à plataforma líder em memorização legislativa.",
              icon: "🧠"
            }
          ].map((bonus, idx) => (
            <div key={idx} className="glass-card p-8 border-vera-accent/20 hover:border-vera-accent transition-all duration-300">
              <div className="text-4xl mb-4">{bonus.icon}</div>
              <h4 className="text-xl font-bold text-white mb-2">{bonus.title}</h4>
              <p className="text-slate-400 text-sm font-light leading-relaxed">{bonus.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
