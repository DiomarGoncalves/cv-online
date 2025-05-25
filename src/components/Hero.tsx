import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

export const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const button = buttonRef.current;

    if (title) {
      title.style.opacity = '0';
      title.style.transform = 'translateY(20px)';
      setTimeout(() => {
        title.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        title.style.opacity = '1';
        title.style.transform = 'translateY(0)';
      }, 300);
    }

    if (subtitle) {
      subtitle.style.opacity = '0';
      subtitle.style.transform = 'translateY(20px)';
      setTimeout(() => {
        subtitle.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        subtitle.style.opacity = '1';
        subtitle.style.transform = 'translateY(0)';
      }, 600);
    }

    if (button) {
      button.style.opacity = '0';
      button.style.transform = 'translateY(20px)';
      setTimeout(() => {
        button.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        button.style.opacity = '1';
        button.style.transform = 'translateY(0)';
      }, 900);
    }
  }, []);

  return (
    <section
      id="início"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-500/10 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-4 py-20 pt-32 text-center z-10">
        <h1 
          ref={titleRef}
          className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            Desenvolvedor Web
          </span>
          <br />
          <span className="text-green-500">Criativo & Inovador</span>
        </h1>
        
        <p 
          ref={subtitleRef}
          className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12"
        >
          Transformando ideias em experiências digitais memoráveis
          através de código limpo e design responsivo.
        </p>
        
        <a
          ref={buttonRef}
          href="#projetos"
          className="inline-flex items-center bg-green-500 hover:bg-green-600 text-gray-900 font-semibold py-3 px-8 rounded-lg transition-all transform hover:scale-105 hover:shadow-lg"
        >
          Ver Projetos
          <ArrowDown className="ml-2" size={20} />
        </a>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <a href="#sobre" aria-label="Rolar para baixo">
          <ArrowDown className="text-green-500" size={24} />
        </a>
      </div>
    </section>
  );
};