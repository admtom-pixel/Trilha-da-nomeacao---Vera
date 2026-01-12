
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
    { num: 9, title: "Questões e Simulados", desc: "Como resolver questões e realizar simulados para medir seu desempenho." },
    { num: 10, title: "Concursos Paralelos", desc: "A importância estratégica de participar de concursos durante a sua preparação." },
    { num: 11, title: "Diagnóstico de Desempenho", desc: "Avalie seu progresso e ajuste sua estratégia de estudo constantemente." },
    { num: 12, title: "Estratégia Esquecida", desc: "Como ganhar pontos e ultrapassar concorrentes na reta final." },
    { num: 13, title: "O Grande Dia", desc: "Comportamento e estratégias para o dia da prova para evitar nervosismo." },
    { num: "B", title: "Bônus: Perfil das Bancas", desc: "Análise completa das bancas FGV, CEBRASPE e VUNESP." },
    { num: "B", title: "Bônus: Jurisprudência", desc: "Acesso com desconto à plataforma Jurisprudência Descomplicada." },
    { num: "B", title: "Bônus: Lei Seca", desc: "Descontos exclusivos na Plataforma Decorando a Lei Seca." }
  ];

  return (
    <section className="py-32 px-6 bg-vera-dark">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center md:text-left">
          <p className="text-vera-accent font-bold uppercase tracking-[0.3em] text-xs mb-4 italic">Conteúdo Programático</p>
          <h2 className="text-4xl md:text-6xl font-black mb-6 italic leading-tight">
            Módulos Estruturados
          </h2>
          <p className="text-slate-400 max-w-3xl text-sm md:text-base font-light leading-relaxed">
            Este curso foi meticulosamente estruturado em módulos que cobrem todos os aspectos essenciais da preparação para qualquer concurso público, desde a escolha do concurso ideal para você até como se comportar no dia da sua prova.
          </p>
          <div className="h-1.5 w-32 bg-vera-accent rounded-full mt-8 shadow-[0_0_10px_rgba(228,142,33,0.3)] mx-auto md:mx-0" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {modules.map((m, idx) => (
            <div key={idx} className="glass-card p-6 group flex flex-col justify-between min-h-[220px] hover:border-vera-accent/40 transition-all">
              <div>
                <div className="text-4xl font-black text-white/5 group-hover:text-vera-accent/10 transition-colors mb-2 leading-none">
                  {typeof m.num === 'number' ? (m.num < 10 ? `0${m.num}` : m.num) : m.num}
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
      </div>
    </section>
  );
};
