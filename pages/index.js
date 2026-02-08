import React, { useState, useEffect } from 'react';

const PoemaParaDaniela = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrolled / maxScroll) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const poema = `Llegaste sin ruido y cuando menos lo esperé,
pero desde entonces el mundo suena distinto.
Como si la vida hubiera aprendido
una forma más suave de pronunciar mi nombre.

Cuando todo me falta,
tú has sido mi abrigo.
Cuando dudo de mí,
tú tienes fe sin preguntas.
Me llenaste de amor justo ahí
donde antes solo había cansancio y vacío.

Tus ojitos lindos
pequeños universos
me miran y el día se ordena,
el miedo se encoge,
y entiendo que la felicidad
a veces cabe en una sola mirada.

Desde que estás, la vida no pesa igual.
Caminar se vuelve sencillo,
respirar se vuelve hogar,
y el futuro deja de asustar
cuando tu mano acompaña el camino.

No prometo perfección,
pero sí presencia.
No prometo ausencia de tormentas,
pero sí quedarme contigo cuando llueva.

Porque amarte, Daniela,
no es solo quererte:
es agradecerle a la vida y a Dios
el día exacto en que decidió juntarnos`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      
      {/* Barra de progreso minimalista */}
      <div className="fixed top-0 left-0 w-full h-0.5 bg-white/10 z-50">
        <div 
          className="h-full bg-gradient-to-r from-pink-400 to-violet-400 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Efecto de partículas sutiles en el fondo */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(236, 72, 153, 0.03) 0%, transparent 50%),
                           radial-gradient(circle at 80% 80%, rgba(167, 139, 250, 0.03) 0%, transparent 50%),
                           radial-gradient(circle at 40% 20%, rgba(244, 114, 182, 0.02) 0%, transparent 50%)`
        }}></div>
      </div>

      {/* Contenedor principal */}
      <div className="relative max-w-4xl mx-auto px-6 py-20 md:py-32">
        
        {/* Header elegante */}
        <header className={`mb-20 md:mb-32 text-center transform transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}>
          <div className="inline-block mb-8">
            <div className="w-1 h-16 bg-gradient-to-b from-transparent via-pink-400 to-transparent mx-auto"></div>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-6 tracking-tight">
            <span className="block text-white/40 text-2xl md:text-3xl mb-4 font-extralight">Para</span>
            <span className="bg-gradient-to-r from-pink-200 via-pink-100 to-violet-200 text-transparent bg-clip-text font-serif">
              Daniela
            </span>
          </h1>
          
          <div className="w-1 h-16 bg-gradient-to-b from-transparent via-violet-400 to-transparent mx-auto mt-8"></div>
        </header>

        {/* El poema */}
        <main className={`mb-32 transform transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <article className="relative">
            {/* Línea decorativa lateral */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-pink-400/20 to-transparent hidden md:block"></div>
            
            {/* Contenido del poema */}
            <div className="md:pl-16">
              <div className="prose prose-invert prose-lg md:prose-xl lg:prose-2xl max-w-none">
                <div className="text-gray-100 leading-relaxed space-y-8 font-light">
                  {poema.split('\n\n').map((estrofa, index) => (
                    <p 
                      key={index}
                      className="whitespace-pre-line text-lg md:text-xl lg:text-2xl leading-relaxed opacity-0 animate-fadeInUp"
                      style={{
                        animationDelay: `${index * 200}ms`,
                        animationFillMode: 'forwards'
                      }}
                    >
                      {estrofa}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </main>

        {/* Footer minimalista */}
        <footer className={`text-center transform transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-block mb-8">
            <div className="w-1 h-16 bg-gradient-to-b from-transparent via-violet-400 to-transparent mx-auto"></div>
          </div>
          
          <p className="text-white/60 text-sm md:text-base font-light tracking-widest uppercase mb-2">
            Con todo mi amor
          </p>
          
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto mt-8"></div>
          
          <time className="block mt-8 text-white/30 text-xs font-light tracking-wider">
            {new Date().toLocaleDateString('es-ES', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </time>
        </footer>

      </div>

      {/* Estilos personalizados */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out;
        }

        @media (max-width: 768px) {
          .prose {
            font-size: 1.125rem;
          }
        }

        /* Smooth scroll */
        html {
          scroll-behavior: smooth;
        }

        /* Selección de texto personalizada */
        ::selection {
          background-color: rgba(236, 72, 153, 0.3);
          color: white;
        }

        /* Fuente optimizada para lectura */
        body {
          font-family: 'Georgia', 'Times New Roman', serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}</style>
    </div>
  );
};

export default PoemaParaDaniela;