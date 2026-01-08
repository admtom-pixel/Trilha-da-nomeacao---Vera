
import React from 'react';

export const Proposal: React.FC = () => {
  return (
    <section className="py-24 px-6 relative bg-gradient-to-b from-vera-dark to-vera-navy/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-black mb-8 leading-tight">
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

          <div className="space-y-6">
            <h3 className="text-xl font-bold text-vera-accent uppercase tracking-widest mb-6">Diferenciais do Curso:</h3>
            {[
              { title: "Gestão do Estudo", desc: "Aprenda a organizar seu tempo para maximizar resultados." },
              { title: "Técnicas Eficazes", desc: "Métodos comprovados por quem já alcançou o topo." },
              { title: "Trilha da Nomeação", desc: "Um passo a passo do zero até a posse em qualquer concurso." },
              { title: "Certificado 50h", desc: "Valide sua jornada com o certificado oficial de conclusão." },
              { title: "Foco no Magistério", desc: "Conteúdo especializado para carreiras educacionais e prefeituras." }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 p-4 hover:bg-vera-purple/10 rounded-2xl transition-colors border border-transparent hover:border-vera-purple/20">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-vera-accent/10 flex items-center justify-center text-vera-accent font-bold">
                  {idx + 1}
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">{item.title}</h4>
                  <p className="text-sm text-slate-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
