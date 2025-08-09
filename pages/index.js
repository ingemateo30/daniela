import React, { useState, useEffect } from 'react';
import { Heart, Star, Sparkles } from 'lucide-react';

const SnoopyLovePage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showHearts, setShowHearts] = useState(false);

  const images = [
    {
      id: 1,
      src: "/amore.jpg",
      alt: "Snoopy I Love You",
      message: "Conocerte fue mi mejor decision",
      backgroundColor: "bg-pink-100"
    },
    {
      id: 2,
      src: "/snoopy.jpg",
      alt: "Snoopy con corazón",
      message: "Como Snoopy abraza este corazón, así quiero abrazarte siempre",
      backgroundColor: "bg-blue-100"
    },
    {
      id: 3,
      src: "/luna.jpg",
      alt: "Snoopy astronauta",
      message: "Eres mi luna, porque estrellas hay miles… pero tú eres única",
      backgroundColor: "bg-indigo-100"
    },
    {
      id: 4,
      src: "/nube.jpg",
      alt: "Snoopy piloto",
      message: "Quiero que tus sueños lleguen lejos, muy lejos. Y si alguna vez dudas, recuerda que yo estaré ahí para apoyarte",
      backgroundColor: "bg-purple-100"
    },
    {
      id: 5,
      src: "/amor.jpg",
      alt: "Snoopy pareja",
      message: "Así quiero estar contigo, unidos por el amor para siempre, te quiero",
      backgroundColor: "bg-rose-100"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    const heartTimer = setInterval(() => {
      setShowHearts(true);
      setTimeout(() => setShowHearts(false), 3000);
    }, 6000);

    return () => {
      clearInterval(timer);
      clearInterval(heartTimer);
    };
  }, []);

  const FloatingHearts = () => (
    <div className={`fixed inset-0 pointer-events-none transition-opacity duration-1000 ${showHearts ? 'opacity-100' : 'opacity-0'}`}>
      {[...Array(15)].map((_, i) => (
        <Heart
          key={i}
          className={`absolute text-red-400 animate-bounce`}
          size={Math.random() * 20 + 15}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${Math.random() * 2 + 1}s`
          }}
          fill="currentColor"
        />
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 relative overflow-hidden">
      <FloatingHearts />
      
      {/* Estrellas decorativas */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <Sparkles
            key={i}
            className="absolute text-yellow-300 animate-pulse"
            size={16}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Título principal elaborado */}
        <div className="text-center mb-12">
          <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-12 mx-auto max-w-4xl border border-pink-200 overflow-hidden">
            
            {/* Elementos decorativos de fondo */}
            <div className="absolute inset-0 bg-gradient-to-br from-pink-50/50 via-purple-50/30 to-blue-50/50"></div>
            <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-pink-200/20 to-transparent rounded-full -translate-x-20 -translate-y-20"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-purple-200/20 to-transparent rounded-full translate-x-16 translate-y-16"></div>
            
            <div className="relative z-10">
              {/* Pretítulo elegante */}
              <div className="mb-6">
              </div>
              
              {/* Título principal */}
              <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="block bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                  Para la Mujer
                </span>
                <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent mb-3">
                  Más Especial del Mundo
                </span>
              </h1>
              
              {/* Nombre destacado */}
              <div className="mb-8">
                <div className="inline-block relative">
                  <h2 className="text-5xl md:text-8xl font-bold bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 bg-clip-text text-transparent relative z-10">
                    Daniela
                  </h2>
                  {/* Sombra decorativa del nombre */}
                  <div className="absolute inset-0 text-5xl md:text-8xl font-bold text-pink-200/30 transform translate-x-1 translate-y-1 -z-10">
                    Daniela
                  </div>
                </div>
              </div>
              
              {/* Línea decorativa con corazones */}
              <div className="flex justify-center items-center gap-4 mb-4">
                <div className="h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent w-20"></div>
                <Heart className="text-pink-400" size={20} fill="currentColor" />
                <div className="w-3 h-3 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full"></div>
                <Heart className="text-purple-400" size={24} fill="currentColor" />
                <div className="w-3 h-3 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full"></div>
                <Heart className="text-blue-400" size={20} fill="currentColor" />
                <div className="h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent w-20"></div>
              </div>
              
              {/* Subtítulo romántico */}
              <p className="text-lg md:text-xl text-gray-600 font-medium max-w-2xl mx-auto leading-relaxed">
                Porque hay personas que iluminan el mundo simplemente existiendo, y tú eres una de ellas
              </p>
            </div>
          </div>
        </div>

        {/* Carrusel de imágenes */}
        <div className="max-w-4xl mx-auto">
          <div className={`${images[currentImageIndex].backgroundColor} rounded-3xl shadow-2xl p-8 transition-all duration-1000 ease-in-out transform hover:scale-105`}>
            
            {/* Contenedor elaborado para imagen */}
            <div className="relative bg-white rounded-2xl p-12 mb-8 shadow-inner min-h-96 overflow-hidden">
              {/* Patrón de fondo decorativo */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-4 left-4 w-8 h-8 border-2 border-pink-400 rounded-full"></div>
                <div className="absolute top-12 right-8 w-6 h-6 border-2 border-purple-400 rounded-full"></div>
                <div className="absolute bottom-8 left-12 w-10 h-10 border-2 border-blue-400 rounded-full"></div>
                <div className="absolute bottom-4 right-4 w-4 h-4 border-2 border-rose-400 rounded-full"></div>
              </div>
              
              {/* Marco elegante para la imagen */}
              <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 shadow-lg border-4 border-gradient-to-r from-pink-200 via-purple-200 to-blue-200">
                <div className="bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 rounded-lg p-6 min-h-64 flex flex-col items-center justify-center relative overflow-hidden">
                  
                  {/* Imagen real */}
                  <div className="w-full max-w-md mx-auto mb-4">
                    <img 
                      src={images[currentImageIndex].src}
                      alt={images[currentImageIndex].alt}
                      className="w-full h-auto max-h-80 object-contain rounded-lg shadow-lg"
                      onError={(e) => {
                        // Fallback si la imagen no carga
                        e.target.style.display = 'none';
                        e.target.nextElementSibling.style.display = 'flex';
                      }}
                    />
                    
                    {/* Fallback cuando la imagen no carga */}
                    <div className="hidden w-32 h-32 bg-gradient-to-br from-pink-300 via-purple-300 to-blue-300 rounded-full items-center justify-center shadow-xl mx-auto">
                      <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-inner">
                        <div className="w-16 h-16 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full flex items-center justify-center">
                          <div className="text-2xl font-bold text-purple-600">S</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Elementos decorativos en las esquinas */}
                  <div className="absolute top-2 left-2 w-3 h-3 bg-pink-300 rounded-full opacity-60"></div>
                  <div className="absolute top-2 right-2 w-2 h-2 bg-purple-300 rounded-full opacity-60"></div>
                  <div className="absolute bottom-2 left-2 w-2 h-2 bg-blue-300 rounded-full opacity-60"></div>
                  <div className="absolute bottom-2 right-2 w-3 h-3 bg-rose-300 rounded-full opacity-60"></div>
                </div>
              </div>
              
              {/* Borde brillante animado */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 opacity-0 hover:opacity-20 transition-opacity duration-500 pointer-events-none"></div>
            </div>

            {/* Mensaje romántico */}
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-semibold text-gray-800 leading-relaxed">
                {images[currentImageIndex].message}
              </p>
            </div>
          </div>

          {/* Indicadores */}
          <div className="flex justify-center mt-8 gap-3">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentImageIndex 
                    ? 'bg-pink-500 scale-125 shadow-lg' 
                    : 'bg-pink-200 hover:bg-pink-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SnoopyLovePage;