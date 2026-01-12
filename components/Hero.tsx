import React from 'react';
import { Logo } from './Logo';

export const Hero: React.FC = () => {
  // Foto oficial do Professor Leonardo Lagos integrada via Google CDN
  const userPhotoUrl = "https://lh3.googleusercontent.com/d/1b34t8qpyh0JPvKUoCNLx-s4rZo0cOu_p=s1200-rw";

  return (
    <section className="relative pt-10 pb-20 lg:pt-16 lg:pb-0 px-6 overflow-hidden min-h-fit lg:min-h-[100dvh] flex items-center bg-vera-dark font-sans">
      {/* Atmosfera de Fundo */}
      <div className="glow-orb w-[600px] h-[600px] bg-vera-purple/20 -top-20 -right-40 animate-pulse" />
      <div className="glow-orb w-[800px] h-[800px] bg-vera-navy/30 -bottom-60 -left-40" />
      
      <div className="max-w-7xl mx-auto relative z-10 w-full h-full flex flex-col">
        {/* Logo */}
        <div className="mb-10 lg:mb-16 opacity-90 transition-opacity hover:opacity-100 shrink-0">
          <Logo className="h-9 lg:h-11 w-auto text-white drop-shadow-xl" />
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-4 items-center flex-grow">
          {/* Lado Esquerdo: Conteúdo */}
          <div className="lg:col-span-7 xl:col-span-7 z-20 flex flex-col items-start text-left py-10 lg:py-20">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-vera-navy/40 backdrop-blur-md border border-vera-accent/30 mb-8 shadow-inner group">
              <span className="w-2 h-2 rounded-full bg-vera-accent shadow-[0_0_12px_rgba(228,142,33,0.8)] group-hover:scale-125 transition-transform" />
              <span className="text-[10px] lg:text-[11px] font-extrabold tracking-[0.2em] lg:tracking-[0.25em] uppercase text-vera-accent">
                Trilha da Nomeação
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-6 lg:mb-8 leading-[1.1] tracking-tight text-white">
              A Trilha da <br />
              <span className="gradient-text block mt-1 lg:mt-2">Nomeação</span>
            </h1>
            
            <p className="text-base md:text-xl lg:text-2xl text-slate-400 font-light mb-10 max-w-2xl leading-relaxed">
              Descubra seus pontos fracos, aprenda técnicas eficazes de gestão do estudo e trilhe o caminho para a nomeação em concursos públicos.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6 w-full sm:w-auto">
              <a 
                href="#pricing"
                className="vera-btn px-10 py-5 rounded-2xl text-base lg:text-lg font-extrabold text-white tracking-tight text-center"
              >
                Garantir minha vaga agora
              </a>
              
              <div className="flex items-center justify-center sm:justify-start gap-4 px-4 py-2 border border-white/5 rounded-2xl bg-white/[0.02]">
                <div className="text-xs">
                  <span className="block font-extrabold text-white">Método PET</span>
                  <span className="text-vera-accent font-bold uppercase text-[9px] tracking-widest">Planejar • Executar • Treinar</span>
                </div>
              </div>
            </div>
          </div>

          {/* Lado Direito: Professor + Selo */}
          <div className="lg:col-span-5 xl:col-span-5 relative flex justify-center lg:justify-end self-end h-full">
            {/* SELO DE DESTAQUE: Certificado Incluso 20 horas */}
            <div className="absolute bottom-[22%] right-4 lg:-right-16 z-30 animate-bounce-slow">
              <div className="glass-card p-4 md:p-5 flex items-center gap-4 border-vera-accent/40 shadow-[0_20px_40px_rgba(0,0,0,0.5)] bg-vera-navy/80 border-r-4 border-r-vera-accent text-right flex-row-reverse">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-vera-accent to-orange-600 flex items-center justify-center shadow-lg">
                  <svg className="w-7 h-7 text-vera-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div>
                  <span className="block text-[10px] font-black uppercase tracking-widest text-vera-accent leading-none mb-1">Certificado Incluso</span>
                  <span className="block text-xl md:text-2xl font-black text-white leading-none">20 Horas</span>
                </div>
              </div>
            </div>

            <div className="relative w-full max-w-[500px] lg:max-w-none flex justify-center items-end h-full">
              {/* Glow atrás da imagem */}
              <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 w-[80%] h-[60%] bg-vera-accent/10 blur-[100px] rounded-full z-0 pointer-events-none opacity-40" />

              <div className="relative z-10 w-full flex justify-center lg:justify-end items-end">
                <img 
                  src={userPhotoUrl} 
                  alt="Professor Leonardo Lagos"
                  loading="eager" 
                  fetchPriority="high"
                  referrerPolicy="no-referrer"
                  crossOrigin="anonymous"
                  className="w-full h-auto max-h-[85dvh] object-contain drop-shadow-[0_15px_45px_rgba(0,0,0,0.30)] filter contrast-[1.01] brightness-[1.01] scale-100 lg:scale-110 lg:origin-bottom-right"
                  style={{
                    WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
                    maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};