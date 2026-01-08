
import React from 'react';

export const Certification: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-vera-dark relative overflow-hidden font-sans">
      {/* Elemento de fundo sutil */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-vera-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="glass-card p-8 md:p-16 text-center border-white/5 relative overflow-hidden group">
          
          {/* Badge de Carga Horária */}
          <div className="absolute top-0 right-0 mt-4 mr-4 md:mt-8 md:mr-8">
            <div className="bg-vera-accent/10 border border-vera-accent/30 backdrop-blur-xl px-5 py-2.5 rounded-2xl flex items-center gap-3 shadow-2xl transition-transform group-hover:scale-105">
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-vera-accent/20">
                <svg className="w-4 h-4 text-vera-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-sm font-black text-vera-accent uppercase tracking-tighter">50 Horas Certificadas</span>
            </div>
          </div>

          <div className="mb-10 flex flex-col items-center">
            <div className="relative">
              {/* Efeito de brilho atrás do ícone */}
              <div className="absolute inset-0 bg-vera-accent/20 blur-3xl rounded-full animate-pulse" />
              
              <div className="relative w-28 h-28 bg-gradient-to-br from-vera-accent to-orange-600 rounded-[2rem] flex items-center justify-center shadow-[0_25px_60px_rgba(228,142,33,0.4)] rotate-3 transition-transform group-hover:rotate-6 duration-500">
                <svg className="w-14 h-14 text-vera-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-black mb-8 text-white tracking-tight leading-tight">
            Certificação Oficial <br/>Vêra Educação
          </h2>

          <div className="flex flex-col items-center gap-6 mb-12">
            <div className="h-1.5 w-24 bg-gradient-to-r from-transparent via-vera-accent to-transparent rounded-full shadow-lg" />
            <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed max-w-3xl mx-auto">
              Ao concluir esta jornada estratégica, você receberá o certificado oficial emitido pela <strong className="text-white font-bold">Vêra Educação</strong>, validando sua participação na <strong className="text-vera-accent font-black">Trilha da Nomeação com 50 horas</strong> de carga horária.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto pt-12 border-t border-white/10">
            <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/[0.02] border border-white/5">
              <span className="text-vera-accent font-black text-3xl">50h</span>
              <span className="text-[11px] uppercase tracking-[0.25em] text-slate-500 font-extrabold">Carga Horária</span>
            </div>
            <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/[0.02] border border-white/5">
              <span className="text-white font-black text-3xl italic">Vêra</span>
              <span className="text-[11px] uppercase tracking-[0.25em] text-slate-500 font-extrabold">Emissor Oficial</span>
            </div>
            <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/[0.02] border border-white/5">
              <span className="text-white font-black text-3xl">Digital</span>
              <span className="text-[11px] uppercase tracking-[0.25em] text-slate-500 font-extrabold">Acesso Imediato</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
