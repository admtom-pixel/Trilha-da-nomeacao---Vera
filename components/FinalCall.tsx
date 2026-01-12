import React from 'react';

export const FinalCall: React.FC = () => {
  return (
    <section id="pricing" className="py-40 px-6 bg-vera-dark text-center relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_#e48e2115_0%,_transparent_60%)] opacity-70" />
      
      <div className="max-w-4xl mx-auto relative z-10 font-sans">
        <div className="glass-card p-10 md:p-16 border-vera-accent/30 bg-vera-navy/40 shadow-2xl">
          <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight text-white">
            Sua Nomeação <br />
            <span className="gradient-text italic">Começa Agora.</span>
          </h2>
          
          <div className="mb-12">
            <span className="text-slate-500 line-through text-lg">De: R$ 597,00</span>
            <div className="flex flex-col items-center">
              <span className="text-vera-accent font-bold text-xl uppercase tracking-widest mt-4">12x de</span>
              <span className="text-6xl md:text-8xl font-black text-white">R$ 29,64</span>
              <span className="text-slate-400 mt-2 text-xl italic">Ou R$ 297 à vista</span>
            </div>
          </div>

          <div className="flex flex-col items-center gap-8">
            <a 
              href="https://pay.voompcreators.com.br/12682/offer/RcTHEC"
              target="_blank"
              rel="noopener noreferrer"
              className="vera-btn px-14 py-7 rounded-2xl text-xl font-extrabold text-white tracking-tight w-full sm:w-auto text-center shadow-[0_20px_50px_rgba(228,142,33,0.3)]"
            >
              QUERO APRENDER A ESTUDAR CORRETAMENTE!
            </a>
            
            <div className="flex flex-wrap justify-center items-center gap-6 opacity-60">
              <div className="flex flex-col items-center">
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-slate-300">7 Dias de Garantia</span>
              </div>
              <div className="w-px h-6 bg-white/10" />
              <div className="flex flex-col items-center">
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-slate-300">Acesso por 12 Meses</span>
              </div>
              <div className="w-px h-6 bg-white/10" />
              <div className="flex flex-col items-center">
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-slate-300">Certificado 20h</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};