
import React from 'react';

export const TheoreticalBase: React.FC = () => {
  const authors = [
    { name: "Carol Dweck", concept: "Mindset e aprendizagem" },
    { name: "Angela Duckworth", concept: "Grit e perseverança" },
    { name: "Ryan Holiday", concept: "Filosofia estoica aplicada" },
    { name: "Simon Sinek", concept: "Propósito e liderança" },
    { name: "Viktor Frankl", concept: "Sentido e resiliência humana" }
  ];

  return (
    <section className="py-24 px-6 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 italic">Base científica comprovada</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            O curso é fundamentado em autores e estudos amplamente reconhecidos, conectando ideias profundas à realidade contemporânea.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {authors.map((author, idx) => (
            <div key={idx} className="p-8 border-b-2 border-orange-500/30 hover:bg-white/5 transition-colors">
              <h3 className="text-xl font-black mb-2 text-white">{author.name}</h3>
              <p className="text-sm text-gray-500 uppercase tracking-widest">{author.concept}</p>
            </div>
          ))}
          <div className="p-8 flex items-center">
            <p className="text-gray-400 italic">...e muitos outros estudos aplicados de comportamento humano.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
