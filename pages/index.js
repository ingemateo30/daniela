import React, { useState, useEffect, useRef } from "react";

// Componente Card con efectos 3D avanzados
const Card = ({ children, className = "", ...props }) => (
  <div
    className={`card-3d bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-2xl border border-gray-700/30 rounded-3xl shadow-2xl overflow-hidden ${className}`}
    {...props}
  >
    <div className="card-shine"></div>
    {children}
  </div>
);

const CardContent = ({ children, className = "", ...props }) => (
  <div className={`p-8 relative z-10 ${className}`} {...props}>
    {children}
  </div>
);

export default function PerfilDeGustos() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const gustos = [
    {
      categoria: "🍔 Comida y Bebida",
      emoji: "🍽️",
      gradient: "from-orange-500 via-red-500 to-pink-500",
      bgPattern: "radial-gradient(circle at 20% 80%, rgba(255, 165, 0, 0.3) 0%, transparent 50%)",
      items: [
        "Hamburguesas 🍔",
        "Pizza 🍕", 
        "Comida de mar 🦐",
        "Comida italiana y mexicana 🇮🇹🇲🇽",
        "Probar cosas exóticas",
        "Café ☕",
        "Jugo de maracuyá y mora 🍹",
        "Cerveza Club Colombia 🍻",
        "Aguardiente",
      ],
    },
    {
      categoria: "🎮 Juegos y Entretenimiento",
      emoji: "🎯",
      gradient: "from-purple-500 via-pink-500 to-rose-500",
      bgPattern: "radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.3) 0%, transparent 50%)",
      items: [
        "Jugar PlayStation 🎮",
        "Juegos de deportes (FIFA especialmente) ⚽",
        "Consola antes que PC o móvil",
      ],
    },
    {
      categoria: "👔 Ropa y Estilo",
      emoji: "✨",
      gradient: "from-gray-500 via-slate-600 to-blue-500",
      bgPattern: "radial-gradient(circle at 50% 50%, rgba(100, 116, 139, 0.3) 0%, transparent 50%)",
      items: [
        "Vestir casual",
        "Colores favoritos: negro y gris 🖤",
        "Me gusta arreglarme y usar productos de belleza (cremas)",
      ],
    },
    {
      categoria: "💻 Tecnología y Trabajo", 
      emoji: "🚀",
      gradient: "from-cyan-500 via-blue-500 to-indigo-500",
      bgPattern: "radial-gradient(circle at 30% 70%, rgba(6, 182, 212, 0.3) 0%, transparent 50%)",
      items: [
        "Prefiero trabajar en equipo",
        "Me gusta la tecnología, pero sin exceso de redes sociales",
      ],
    },
    {
      categoria: "👥 Relaciones y Social",
      emoji: "💫",
      gradient: "from-green-500 via-emerald-500 to-teal-500",
      bgPattern: "radial-gradient(circle at 70% 30%, rgba(34, 197, 94, 0.3) 0%, transparent 50%)",
      items: [
        "Me gusta la gente que muestra interés genuino",
        "Prefiero charlas útiles y personas que aporten, a conversaciones vacías",
      ],
    },
    {
      categoria: "🎵 Música",
      emoji: "🎤",
      gradient: "from-pink-500 via-rose-500 to-red-500",
      bgPattern: "radial-gradient(circle at 90% 10%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)",
      items: [
        "Me gustan los artistas urbanos: Anuel, Maluma y Ozuna 🎤",
        "Prefiero escuchar música en casa antes que ir a una discoteca",
      ],
    },
    {
      categoria: "🗺️ Viajes y Tiempo Libre",
      emoji: "🌄",
      gradient: "from-emerald-500 via-green-500 to-lime-500",
      bgPattern: "radial-gradient(circle at 10% 90%, rgba(16, 185, 129, 0.3) 0%, transparent 50%)",
      items: [
        "Me gusta viajar y quiero conocer Asia, especialmente China 🗺️",
        "Prefiero montañas antes que playa o ciudad",
        "En mi tiempo libre disfruto dormir 😴",
      ],
    },
    {
      categoria: "🧠 Personalidad",
      emoji: "💎",
      gradient: "from-violet-500 via-purple-600 to-indigo-500",
      bgPattern: "radial-gradient(circle at 60% 40%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)",
      items: [
        "Soy más lógico que emocional, pero en el amor soy intenso ❤️‍🔥",
        "Me gusta improvisar",
        "Me da tranquilidad tener estabilidad económica y ver bien a los míos",
        "Odio la ignorancia hablada (\"la gente que habla sin saber\")",
      ],
    },
  ];

  const noGustos = [
    {
      categoria: "🚫 Comida",
      emoji: "🙅‍♂️",
      gradient: "from-red-500 via-orange-500 to-yellow-500",
      bgPattern: "radial-gradient(circle at 25% 75%, rgba(239, 68, 68, 0.3) 0%, transparent 50%)",
      items: [
        "Chocolate líquido",
        "Ahuyama", 
        "Sopa de pastas",
        "TODO lo que sepa a ajo ❗",
      ],
    },
    {
      categoria: "🚫 Entretenimiento",
      emoji: "📺",
      gradient: "from-red-600 via-pink-500 to-purple-500",
      bgPattern: "radial-gradient(circle at 75% 25%, rgba(220, 38, 127, 0.3) 0%, transparent 50%)",
      items: ["No me gusta repetir películas"],
    },
    {
      categoria: "🚫 Ropa y Estilo",
      emoji: "👞", 
      gradient: "from-red-500 via-gray-500 to-slate-500",
      bgPattern: "radial-gradient(circle at 50% 80%, rgba(239, 68, 68, 0.3) 0%, transparent 50%)",
      items: ["No me gustan los colores vivos", "Odio usar zapatos formales 👞"],
    },
    {
      categoria: "🚫 Tecnología y Social",
      emoji: "📱",
      gradient: "from-red-400 via-pink-400 to-purple-500",
      bgPattern: "radial-gradient(circle at 80% 60%, rgba(248, 113, 113, 0.3) 0%, transparent 50%)",
      items: [
        "Odio las redes sociales y a quienes publican mucho",
        "Detesto las mentiras y la falta de interés",
      ],
    },
    {
      categoria: "🚫 Música",
      emoji: "🎸",
      gradient: "from-red-500 via-pink-500 to-rose-500",
      bgPattern: "radial-gradient(circle at 40% 20%, rgba(239, 68, 68, 0.3) 0%, transparent 50%)",
      items: ["No me gusta el rock", "No me gustan \"cosas musicales exóticas\", no me gusta FEID"],
    },
  ];

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        
        body {
          cursor: none;
        }
        
        .custom-cursor {
          position: fixed;
          width: 20px;
          height: 20px;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.8) 0%, rgba(147, 51, 234, 0.4) 100%);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          mix-blend-mode: difference;
          transition: transform 0.1s ease;
        }
        
        .animated-bg {
          background: linear-gradient(-45deg, #000, #0a0a1a, #1a0a2e, #16213e, #0f3460, #162447);
          background-size: 600% 600%;
          animation: gradientShift 20s ease infinite;
          position: relative;
          overflow: hidden;
        }

        .animated-bg::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.3) 100%);
          pointer-events: none;
        }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          25% { background-position: 100% 25%; }
          50% { background-position: 100% 50%; }
          75% { background-position: 0% 75%; }
          100% { background-position: 0% 50%; }
        }

        .floating {
          animation: floating 4s ease-in-out infinite;
        }

        @keyframes floating {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-15px) rotate(2deg); }
          50% { transform: translateY(-10px) rotate(0deg); }
          75% { transform: translateY(-20px) rotate(-2deg); }
        }

        .fade-in-up {
          animation: fadeInUp 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          opacity: 0;
          transform: translateY(60px) scale(0.9);
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
        .stagger-4 { animation-delay: 0.4s; }
        .stagger-5 { animation-delay: 0.5s; }
        .stagger-6 { animation-delay: 0.6s; }
        .stagger-7 { animation-delay: 0.7s; }
        .stagger-8 { animation-delay: 0.8s; }
        .stagger-9 { animation-delay: 0.9s; }
        .stagger-10 { animation-delay: 1.0s; }

        .glass {
          backdrop-filter: blur(20px) saturate(200%);
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }

        .card-3d {
          transform-style: preserve-3d;
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .card-3d::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: var(--bg-pattern);
          opacity: 0;
          transition: opacity 0.6s ease;
          pointer-events: none;
        }

        .card-3d:hover::before {
          opacity: 1;
        }

        .card-3d:hover {
          transform: perspective(1000px) rotateX(2deg) rotateY(5deg) translateZ(20px);
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.4), 0 0 50px rgba(59, 130, 246, 0.1);
        }

        .card-shine {
          position: absolute;
          top: -100%;
          left: -100%;
          width: 300%;
          height: 300%;
          background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          transform: rotate(45deg);
          transition: all 0.8s ease;
          pointer-events: none;
        }

        .card-3d:hover .card-shine {
          animation: shine 0.8s ease-in-out;
        }

        @keyframes shine {
          0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
          100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
        }

        .text-glow {
          text-shadow: 0 0 30px rgba(59, 130, 246, 0.6), 0 0 60px rgba(147, 51, 234, 0.4);
        }

        .morphing-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(40px);
          animation: morphing 8s ease-in-out infinite;
          opacity: 0.7;
        }

        @keyframes morphing {
          0%, 100% { 
            border-radius: 50% 40% 30% 70%;
            transform: scale(1) rotate(0deg);
          }
          25% { 
            border-radius: 30% 60% 70% 40%;
            transform: scale(1.1) rotate(90deg);
          }
          50% { 
            border-radius: 70% 30% 40% 60%;
            transform: scale(0.9) rotate(180deg);
          }
          75% { 
            border-radius: 40% 70% 60% 30%;
            transform: scale(1.05) rotate(270deg);
          }
        }

        .particles {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        .particle {
          position: absolute;
          width: 6px;
          height: 6px;
          background: linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899);
          border-radius: 50%;
          animation: particleFloat 12s linear infinite;
          opacity: 0;
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.8);
        }

        @keyframes particleFloat {
          0% {
            transform: translateY(100vh) translateX(0px) rotate(0deg) scale(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
            transform: scale(1);
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-10vh) translateX(100px) rotate(360deg) scale(0);
            opacity: 0;
          }
        }

        .interactive-item {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
        }

        .interactive-item:hover {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05));
          transform: translateX(10px) scale(1.02);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }

        .category-icon {
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .card-3d:hover .category-icon {
          transform: scale(1.1) rotate(10deg);
          filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.3));
        }

        .title-main {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%);
          background-size: 300% 300%;
          animation: titleGradient 6s ease infinite;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        @keyframes titleGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .section-divider {
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.6), rgba(147, 51, 234, 0.6), transparent);
          margin: 3rem 0;
          position: relative;
        }

        .section-divider::before {
          content: '';
          position: absolute;
          top: -4px;
          left: 50%;
          transform: translateX(-50%);
          width: 10px;
          height: 10px;
          background: radial-gradient(circle, rgba(59, 130, 246, 1), rgba(147, 51, 234, 1));
          border-radius: 50%;
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.8);
        }
      `}</style>

      <div 
        ref={containerRef}
        className="animated-bg min-h-screen font-['Inter'] relative"
        style={{ cursor: 'none' }}
      >
        {/* Cursor personalizado */}
        <div 
          className="custom-cursor"
          style={{
            left: mousePosition.x - 10,
            top: mousePosition.y - 10,
            transform: activeSection ? 'scale(2)' : 'scale(1)'
          }}
        />

        {/* Blobs morfológicos de fondo */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div 
            className="morphing-blob w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20"
            style={{
              top: '10%',
              left: '10%',
              animationDelay: '0s'
            }}
          />
          <div 
            className="morphing-blob w-80 h-80 bg-gradient-to-r from-pink-500/20 to-red-500/20"
            style={{
              top: '60%',
              right: '10%',
              animationDelay: '4s'
            }}
          />
          <div 
            className="morphing-blob w-72 h-72 bg-gradient-to-r from-green-500/20 to-teal-500/20"
            style={{
              bottom: '20%',
              left: '50%',
              animationDelay: '2s'
            }}
          />
        </div>

        {/* Sistema de partículas mejorado */}
        <div className="particles">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 12}s`,
                animationDuration: `${8 + Math.random() * 8}s`,
                '--random-x': `${(Math.random() - 0.5) * 200}px`
              }}
            />
          ))}
        </div>

        <main className="relative z-10 p-4 sm:p-6 lg:p-8">
          {/* Header espectacular */}
          <div className={`text-center mb-20 ${isVisible ? 'fade-in-up' : ''}`}>
            <div className="floating relative">
              <h1 className="title-main text-6xl sm:text-7xl lg:text-8xl font-black mb-6 text-glow">
                Conóceme Mejor
              </h1>
              <div 
                className="text-7xl mb-8 floating" 
                style={{
                  animationDelay: '1s',
                  filter: 'drop-shadow(0 0 30px rgba(255, 255, 255, 0.3))'
                }}
              >
                ✨
              </div>
            </div>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Un viaje inmersivo por mis gustos, preferencias y lo que me hace único
            </p>
            <div className="section-divider mt-12"></div>
          </div>

          {/* Grid principal con animaciones mejoradas */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 max-w-8xl mx-auto">
            
            {/* Sección ME GUSTA */}
            <div className="space-y-8">
              <div className={`text-center mb-12 ${isVisible ? 'fade-in-up stagger-1' : ''}`}>
                <div className="glass inline-flex items-center gap-4 px-8 py-4 rounded-full">
                  <span className="text-4xl">✅</span>
                  <h2 className="text-4xl font-bold bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
                    Lo que me gusta
                  </h2>
                </div>
              </div>

              {gustos.map((gusto, index) => (
                <Card 
                  key={gusto.categoria}
                  className={`card-3d ${isVisible ? `fade-in-up stagger-${index + 2}` : ''}`}
                  style={{ '--bg-pattern': gusto.bgPattern }}
                  onMouseEnter={() => setActiveSection(gusto.categoria)}
                  onMouseLeave={() => setActiveSection(null)}
                >
                  <CardContent>
                    <div className="flex items-center gap-6 mb-8">
                      <div className={`category-icon w-16 h-16 rounded-2xl bg-gradient-to-br ${gusto.gradient} flex items-center justify-center text-3xl shadow-xl`}>
                        {gusto.emoji}
                      </div>
                      <h3 className="text-2xl font-bold text-white tracking-tight">
                        {gusto.categoria}
                      </h3>
                    </div>
                    
                    <div className="grid gap-4">
                      {gusto.items.map((item, idx) => (
                        <div
                          key={idx}
                          className={`interactive-item flex items-center gap-4 p-4 rounded-xl transition-all duration-300 ${
                            activeSection === gusto.categoria 
                              ? 'bg-white/15 transform translate-x-3 scale-105' 
                              : 'bg-white/5'
                          }`}
                        >
                          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex-shrink-0"></div>
                          <span className="text-gray-200 text-lg">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Sección NO ME GUSTA */}
            <div className="space-y-8">
              <div className={`text-center mb-12 ${isVisible ? 'fade-in-up stagger-1' : ''}`}>
                <div className="glass inline-flex items-center gap-4 px-8 py-4 rounded-full">
                  <span className="text-4xl">❌</span>
                  <h2 className="text-4xl font-bold bg-gradient-to-r from-red-400 via-pink-500 to-rose-500 bg-clip-text text-transparent">
                    Lo que NO me gusta
                  </h2>
                </div>
              </div>

              {noGustos.map((noGusto, index) => (
                <Card 
                  key={noGusto.categoria}
                  className={`card-3d ${isVisible ? `fade-in-up stagger-${index + 2}` : ''}`}
                  style={{ '--bg-pattern': noGusto.bgPattern }}
                  onMouseEnter={() => setActiveSection(noGusto.categoria)}
                  onMouseLeave={() => setActiveSection(null)}
                >
                  <CardContent>
                    <div className="flex items-center gap-6 mb-8">
                      <div className={`category-icon w-16 h-16 rounded-2xl bg-gradient-to-br ${noGusto.gradient} flex items-center justify-center text-3xl shadow-xl`}>
                        {noGusto.emoji}
                      </div>
                      <h3 className="text-2xl font-bold text-white tracking-tight">
                        {noGusto.categoria}
                      </h3>
                    </div>
                    
                    <div className="grid gap-4">
                      {noGusto.items.map((item, idx) => (
                        <div
                          key={idx}
                          className={`interactive-item flex items-center gap-4 p-4 rounded-xl transition-all duration-300 ${
                            activeSection === noGusto.categoria 
                              ? 'bg-white/15 transform translate-x-3 scale-105' 
                              : 'bg-white/5'
                          }`}
                        >
                          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-red-400 to-pink-500 flex-shrink-0"></div>
                          <span className="text-gray-200 text-lg">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Footer con efectos especiales */}
          <footer className={`mt-24 text-center ${isVisible ? 'fade-in-up stagger-10' : ''}`}>
            <div className="section-divider mb-12"></div>
            <div className="glass inline-flex items-center gap-4 px-12 py-6 rounded-full">
              <span className="text-3xl">❤️</span>
              <p className="text-xl text-gray-300">
                Hecho con amor - Este soy yo 😎
              </p>
            </div>
          </footer>
        </main>
      </div>
    </>
  );
}