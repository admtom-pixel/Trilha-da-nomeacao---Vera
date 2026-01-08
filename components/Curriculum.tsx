import React from 'react';

export const Curriculum: React.FC = () => {
  const modules = [
    { num: 1, title: "Definindo um Destino", desc: "Estabeleça seus objetivos e trace um caminho claro." },
    { num: 2, title: "Conhecendo o Desafio", desc: "Entenda a essência dos concursos e o que é necessário." },
    { num: 3, title: "Organizando o Estudo", desc: "Aprenda a estruturar seus estudos de forma eficiente." },
    { num: 4, title: "Entendendo seu Cérebro", desc: "Como seu cérebro funciona e como isso impacta sua aprendizagem." },
    { num: 5, title: "Montando o Cronograma", desc: "Crie um cronograma de estudos personalizado e eficaz." },
    { num: 6, title: "Fontes de Estudo", desc: "Identifique e utilize os melhores materiais para concursos." },
    { num: 7, title: "Mão na Massa", desc: "Coloque seu cronograma em prática e aprenda a estudar corretamente." },
    { num: 8, title: "Estratégias de Revisão", desc: "Técnicas eficazes para revisar e consolidar o aprendizado." },
    { num: 9, title: "Questões e Simulados", desc: "Melhore suas habilidades e mensure a qualidade do seu estudo." },
    { num: 10, title: "Concursos Paralelos", desc: "A importância de participar de concursos durante a preparação." },
    { num: 11, title: "Diagnóstico de Desempenho", desc: "Avalie seu progresso e ajuste sua estratégia de estudo." },
    { num: 12, title: "Estratégia Esquecida", desc: "Como ganhar pontos e ultrapassar concorrentes no final." },
    { num: 13, title: "O Grande Dia", desc: "Saiba quais estratégias utilizar no dia da prova para o sucesso." },
    { num: "+", title: "Certificação Oficial", desc: "Emissão do certificado de conclusão com carga horária de 50h." }
  ];

  return (
    <section className="py-32 px-6 bg-vera-dark">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-black mb-6 italic">A Trilha Completa</h2>
          <div className="h-1.5 w-32 bg-vera-accent rounded-full shadow-[0_0_10px_rgba(228,142,33,0.3)]" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:col-cols-4 gap-6">
          {modules.map((m, idx) => (
            <div key={idx} className="glass-card p-6 group flex flex-col justify-between min-h-[220px]">
              <div>
                <div className="text-4xl font-black text-white/5 group-hover:text-vera-accent/10 transition-colors mb-2 leading-none">
                  {/* Fix: Added typeof check to satisfy TypeScript when comparing 'num' which can be number or string */}
                  {m.num === "+" ? "+" : (typeof m.num === 'number' && m.num < 10 ? `0${m.num}` : m.num)}
                </div>
                <h3 className="text-lg font-bold mb-3 text-white group-hover:text-vera-accent transition-colors leading-tight">{m.title}</h3>
                <p className="text-slate-400 text-xs font-light leading-relaxed">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};