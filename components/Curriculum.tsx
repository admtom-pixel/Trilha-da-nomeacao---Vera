
import React from 'react';

export const Curriculum: React.FC = () => {
  const modules = [
    { num: 1, title: "Definindo um Destino", desc: "Escolha o concurso ideal para você e trace seu objetivo." },
    { num: 2, title: "Conhecendo o Desafio", desc: "Entenda a essência dos concursos e o que é necessário para enfrentá-los." },
    { num: 3, title: "Organizando o Estudo", desc: "Aprenda a estruturar seus estudos de forma eficiente e profissional." },
    { num: 4, title: "Entendendo seu Cérebro", desc: "Descubra como o cérebro funciona e como otimizar sua aprendizagem." },
    { num: 5, title: "Montando o Cronograma", desc: "Crie um cronograma de estudos personalizado e realmente eficaz." },
    { num: 6, title: "Fontes de Estudo", desc: "Identifique e utilize as melhores fontes de estudo para cada disciplina." },
    { num: 7, title: "Mão na Massa", desc: "Coloque seu cronograma em prática aprendendo a estudar da forma correta." },
    { num: 8, title: "Estratégias de Revisão", desc: "Técnicas eficazes para revisar e consolidar o aprendizado na memória." },
    { num: 9, title: "Como Resolver Questões e Simulados", desc: "Aperfeiçoe sua técnica de resolução e meça seu desempenho real." },
    { num: 10, title: "Faça Concursos Paralelos", desc: "A importância estratégica de participar de concursos durante a sua preparação." },
    { num: 11, title: "Diagnóstico de Desempenho", desc: "Avalie seu progresso e ajuste sua estratégia de estudo constantemente." },
    { num: 12, title: "Uma estratégia esquecida", desc: "Como ganhar pontos e ultrapassar concorrentes na reta final." },
    { num: 13, title: "O grande dia", desc: "Comportamento no dia da prova: estratégias para evitar nervosismo e performar no topo." }
  ];

  const bonus = [
    { title: "Análise das Bancas", desc: "Perfil detalhado das bancas FGV, CEBRASPE e VUNESP." },
    { title: "Jurisprudência Descomplicada", desc: "Descontos exclusivos na plataforma de entendimento jurídico." },
    { title: "Decorando a Lei Seca", desc: "Descontos exclusivos na plataforma líder em memorização legislativa." }
  ];

  return (
    <section className="py-32 px-6 bg-vera-dark relative font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center md:text-left">
          <p className="text-vera-accent font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs mb-4 italic">Conteúdo Programático</p>
          <h2 className="text-4xl md:text-6xl font-black mb-6 italic leading-tight text-white">
            Estrutura Meticulosa
          </h2>
          <p className="text-slate-400 max-w-4xl text-base md:text-xl font-light leading-relaxed">
            Este curso foi meticulosamente estruturado em módulos que cobrem todos os aspectos essenciais da preparação para qualquer concurso público, desde a escolha do concurso ideal para você até como se comportar no dia da sua prova.
          </p>
          <div className="h-1.5 w-32 bg-vera-accent rounded-full mt-8 shadow-[0_0_15px_rgba(228,142,33,0.3)] mx-auto md:mx-0" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20">
          {modules.map((m, idx) => (
            <div key={idx} className="glass-card p-6 group flex flex-col justify-between min-h-[220px] hover:border-vera-accent/40 transition-all border-white/5 bg-white/[0.02]">
              <div>
                <div className="text-4xl font-black text-white/5 group-hover:text-vera-accent/10 transition-colors mb-2 leading-none">
                  {m.num < 10 ? `0${m.num}` : m.num}
                </div>
                <h3 className="text-lg font-bold mb-3 text-white group-hover:text-vera-accent transition-colors leading-tight">
                  {m.title}
                </h3>
                <p className="text-slate-400 text-xs font-light leading-relaxed">
                  {m.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-black mb-10 text-white italic tracking-wider flex items-center gap-4">
            <span className="w-12 h-px bg-vera-accent/50" />
            BÔNUS EXCLUSIVOS
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {bonus.map((b, idx) => (
              <div key={idx} className="p-8 border border-vera-purple/20 bg-vera-purple/5 rounded-3xl relative group overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                   <span className="text-4xl font-black text-vera-accent">✓</span>
                </div>
                <h4 className="text-vera-accent font-black text-sm uppercase tracking-widest mb-3">Bônus Especial</h4>
                <h5 className="text-white font-bold text-lg mb-2">{b.title}</h5>
                <p className="text-slate-400 text-xs leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
