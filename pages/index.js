import React, { useState, useEffect } from 'react';
import { Heart, Star, Sparkles, Moon, Sun, Music, Coffee, Camera, Flower, Eye, Lock, Key, Search } from 'lucide-react';

const MysteriousPage = () => {
  const [phase, setPhase] = useState('mystery'); // mystery -> riddle -> reveal -> romantic
  const [mysteryText, setMysteryText] = useState('');
  const [riddleInput, setRiddleInput] = useState('');
  const [showHint, setShowHint] = useState(false);
  const [floatingHearts, setFloatingHearts] = useState([]);
  const [clickHearts, setClickHearts] = useState([]);
  const [currentQuote, setCurrentQuote] = useState(0);
  const [heartTrail, setHeartTrail] = useState([]);
  const [glitchEffect, setGlitchEffect] = useState(false);

  const mysteryMessages = [
    "Alguien especial...",
    "Ha preparado algo para ti...",
    "¿Estás lista para descubrirlo?",
    "Pero primero...",
    "Debes resolver el misterio..."
  ];

  const sweetQuotes = [
    "Algunas personas hacen que el mundo sea más hermoso...esa eres tu 🌸",
    "Cada momento contigo es un regalo 🎁",
    "Eres una persona increíblemente especial ✨",
    "Eres la mujer mas hermosa del mundo 🌟"
  ];

  // Fase de misterio inicial
  useEffect(() => {
    if (phase === 'mystery') {
      let messageIndex = 0;
      const interval = setInterval(() => {
        if (messageIndex < mysteryMessages.length) {
          setMysteryText(mysteryMessages[messageIndex]);
          messageIndex++;
        } else {
          setPhase('riddle');
          clearInterval(interval);
        }
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [phase]);

  // Efectos para fase romántica
  useEffect(() => {
    if (phase !== 'romantic') return;

    const createFloatingHeart = () => {
      const heart = {
        id: Math.random(),
        x: Math.random() * window.innerWidth,
        y: window.innerHeight + 50,
        size: Math.random() * 20 + 15,
        speed: Math.random() * 2 + 1,
        opacity: Math.random() * 0.7 + 0.3,
        color: Math.random() > 0.5 ? 'text-pink-400' : 'text-red-400',
        rotation: Math.random() * 360,
        drift: (Math.random() - 0.5) * 2,
      };

      setFloatingHearts(prev => [...prev, heart]);

      setTimeout(() => {
        setFloatingHearts(prev => prev.filter(h => h.id !== heart.id));
      }, 8000);
    };

    const interval = setInterval(createFloatingHeart, 300);
    return () => clearInterval(interval);
  }, [phase]);

  useEffect(() => {
    if (phase !== 'romantic') return;

    const updateHearts = () => {
      setFloatingHearts(prev => prev.map(heart => ({
        ...heart,
        y: heart.y - heart.speed,
        x: heart.x + heart.drift,
        rotation: heart.rotation + 1,
      })).filter(heart => heart.y > -100));
    };

    const interval = setInterval(updateHearts, 50);
    return () => clearInterval(interval);
  }, [phase]);

  useEffect(() => {
    if (phase !== 'romantic') return;

    const interval = setInterval(() => {
      setCurrentQuote(prev => (prev + 1) % sweetQuotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [phase]);

  useEffect(() => {
    if (phase !== 'romantic') return;

    const handleMouseMove = (e) => {
      if (Math.random() > 0.8) {
        const trailHeart = {
          id: Date.now() + Math.random(),
          x: e.clientX,
          y: e.clientY,
        };
        setHeartTrail(prev => [...prev.slice(-10), trailHeart]);

        setTimeout(() => {
          setHeartTrail(prev => prev.filter(h => h.id !== trailHeart.id));
        }, 1000);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [phase]);

  const handleRiddleSubmit = () => {
    const answer = riddleInput.toLowerCase().trim();
    if (answer === 'daniela' || answer === 'yo' || answer === 'mi nombre') {
      setPhase('reveal');
      setGlitchEffect(true);
      setTimeout(() => {
        setGlitchEffect(false);
        setPhase('romantic');
      }, 2000);
    } else {
      setShowHint(true);
      setTimeout(() => setShowHint(false), 3000);
    }
  };

  const handleClick = (e) => {
    if (phase !== 'romantic') return;

    const heartsCount = 8;
    const newHearts = [];

    for (let i = 0; i < heartsCount; i++) {
      const angle = (i / heartsCount) * Math.PI * 2;
      const distance = 100;
      const heart = {
        id: Date.now() + i,
        x: e.clientX + Math.cos(angle) * distance,
        y: e.clientY + Math.sin(angle) * distance,
        targetX: e.clientX + Math.cos(angle) * distance,
        targetY: e.clientY + Math.sin(angle) * distance,
        size: Math.random() * 15 + 10,
        color: Math.random() > 0.5 ? 'text-pink-500' : 'text-red-500',
      };
      newHearts.push(heart);
    }

    setClickHearts(prev => [...prev, ...newHearts]);

    setTimeout(() => {
      setClickHearts(prev => prev.filter(h => !newHearts.includes(h)));
    }, 2000);
  };

  if (phase === 'mystery') {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
        {/* Partículas misteriosas */}
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white opacity-30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}

        {/* Ojo misterioso */}
        <div className="text-center">
          <p className="text-2xl text-purple-300 min-h-[3rem] animate-fade-in">
            {mysteryText}
          </p>
        </div>
      </div>
    );
  }

  if (phase === 'riddle') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 to-black flex items-center justify-center relative overflow-hidden">
        {/* Elementos misteriosos flotantes */}
        {[Key, Lock, Search].map((Icon, i) => (
          <Icon
            key={i}
            className="absolute text-purple-400 opacity-20 animate-float"
            style={{
              left: `${20 + i * 30}%`,
              top: `${20 + i * 20}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}

        <div className="text-center max-w-2xl mx-auto px-4">


          <h2 className="text-3xl md:text-5xl text-white font-bold mb-8">

          </h2>

          <div className="bg-purple-800/30 backdrop-blur-md rounded-2xl p-8 mb-8 border border-purple-500/30">
            <p className="text-xl md:text-2xl text-purple-100 leading-relaxed mb-6">
              &quot;Eres luz en días grises,<br />
              sonrisa que conquista,<br />
              de 7 letras tu nombre,<br />
              ¿quién eres jajaja?&quot;
            </p>

            <div className="space-y-4">
              <input
                type="text"
                value={riddleInput}
                onChange={(e) => setRiddleInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleRiddleSubmit()}
                placeholder="Escribe tu respuesta..."
                className="w-full px-6 py-3 bg-black/50 border border-purple-400 rounded-lg text-white text-center text-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
              />

              <button
                onClick={handleRiddleSubmit}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-lg font-bold text-lg transition-all transform hover:scale-105"
              >
                🔓 Revelar Misterio
              </button>
            </div>

            {showHint && (
              <p className="text-yellow-300 mt-4 animate-pulse">
                💡 Pista: ¡La respuesta eres TÚ! Escribe tu nombre...
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (phase === 'reveal') {
    return (
      <div className={`min-h-screen bg-black flex items-center justify-center ${glitchEffect ? 'animate-pulse' : ''}`}>
        <div className="text-center">
          <div className="text-6xl md:text-8xl font-bold mb-8 animate-bounce"
            style={{
              background: 'linear-gradient(45deg, #ff0080, #00ff80, #8000ff)',
              backgroundSize: '200% 200%',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              animation: 'gradient-shift 1s ease infinite',
            }}>
            ¡EXACTO!
          </div>
          <p className="text-3xl text-white animate-fade-in">
            Preparando tu sorpresa...
          </p>
          <div className="flex justify-center mt-8 space-x-2">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-4 h-4 bg-purple-400 rounded-full animate-bounce"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Fase romántica (igual que antes)
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 relative overflow-hidden"
      onClick={handleClick}
    >
      {/* Todos los corazones flotantes y efectos románticos */}
      {floatingHearts.map(heart => (
        <div
          key={heart.id}
          className={`absolute pointer-events-none ${heart.color}`}
          style={{
            left: heart.x,
            top: heart.y,
            opacity: heart.opacity,
            transform: `rotate(${heart.rotation}deg) scale(${heart.size / 20})`,
            transition: 'transform 0.3s ease',
          }}
        >
          <Heart className="w-6 h-6 fill-current" />
        </div>
      ))}

      {heartTrail.map((heart, index) => (
        <div
          key={heart.id}
          className="absolute pointer-events-none text-pink-300 animate-ping"
          style={{
            left: heart.x - 8,
            top: heart.y - 8,
            opacity: (index + 1) / heartTrail.length,
          }}
        >
          <Heart className="w-4 h-4 fill-current" />
        </div>
      ))}

      {clickHearts.map(heart => (
        <div
          key={heart.id}
          className={`absolute pointer-events-none ${heart.color} animate-bounce`}
          style={{
            left: heart.x,
            top: heart.y,
            animationDuration: '0.6s',
            transform: `scale(${heart.size / 15})`,
          }}
        >
          <Heart className="w-6 h-6 fill-current" />
        </div>
      ))}

      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-pulse text-yellow-300"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random()}s`,
          }}
        >
          <Star className="w-3 h-3 fill-current" />
        </div>
      ))}

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <div className="text-center mb-12">
          <h1
            className="text-6xl md:text-8xl font-script font-bold mb-6 animate-fade-in"
            style={{
              background: 'linear-gradient(45deg, #ec4899, #8b5cf6, #06b6d4)',
              backgroundSize: '200% 200%',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              animation: 'gradient-flow 4s ease infinite',
              textShadow: '0 0 30px rgba(236, 72, 153, 0.3)',
            }}
          >
            Daniela
          </h1>

          <div className="flex justify-center space-x-4 mb-8">
            {[Flower, Sparkles, Heart, Sparkles, Flower].map((Icon, index) => (
              <Icon
                key={index}
                className="w-8 h-8 text-pink-400 animate-bounce"
                style={{
                  animationDelay: `${index * 0.2}s`,
                  animationDuration: '2s',
                }}
              />
            ))}
          </div>
        </div>

        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="bg-white/40 backdrop-blur-md rounded-3xl p-8 border border-white/30 shadow-xl">
            <div className="min-h-[4rem] flex items-center justify-center">
              <p
                className="text-2xl md:text-3xl text-gray-700 font-light leading-relaxed"
                key={currentQuote}
                style={{ animation: 'fadeInScale 0.8s ease-out' }}
              >
                {sweetQuotes[currentQuote]}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-8 mb-12">
          {[
            { icon: Music, color: 'text-purple-400', delay: '0s' },
            { icon: Coffee, color: 'text-amber-400', delay: '0.5s' },
            { icon: Camera, color: 'text-blue-400', delay: '1s' },
            { icon: Sun, color: 'text-yellow-400', delay: '1.5s' },
          ].map(({ icon: Icon, color, delay }, index) => (
            <div
              key={index}
              className={`${color} animate-float`}
              style={{ animationDelay: delay }}
            >
              <Icon className="w-12 h-12 mx-auto hover:scale-125 transition-transform cursor-pointer" />
            </div>
          ))}
        </div>
        <div className="text-center mb-16">
          <p className="text-lg text-gray-600 font-light animate-pulse">
            Una pequeña sorpresa para alguien que hace que todo sea mejor ✨
          </p>
        </div>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
          <p className="text-gray-500 animate-bounce text-sm">
            💝 Haz click en cualquier lugar para más corazones 💝
          </p>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap');
        
        .font-script {
          font-family: 'Dancing Script', cursive;
        }
        
        @keyframes gradient-flow {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes fadeInScale {
          0% {
            opacity: 0;
            transform: scale(0.9) translateY(10px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-fade-in {
          animation: fadeInScale 1s ease-out;
        }
      `}</style>
    </div>
  );
};

export default MysteriousPage;