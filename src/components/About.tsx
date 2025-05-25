import React, { useEffect, useRef } from 'react';
import { useInView } from '../hooks/useInView';

export const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });
  
  return (
    <section 
      id="sobre" 
      ref={sectionRef}
      className="py-20 bg-gray-800"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-center transition-all duration-700 ${
            isInView 
              ? 'opacity-100 transform-none' 
              : 'opacity-0 translate-y-10'
          }`}>
            <span className="text-white">Sobre</span>
            <span className="text-green-500 ml-2">Mim</span>
          </h2>
          
          <div className={`bg-gray-900 p-8 md:p-12 rounded-xl shadow-2xl transition-all duration-1000 ${
            isInView 
              ? 'opacity-100 transform-none' 
              : 'opacity-0 translate-y-20'
          }`}>
            <p className="text-gray-300 leading-relaxed mb-6">
              Bem-vindo ao meu mundo digital! Meu nome é <span className="text-white font-medium">Diomar Gonçalves</span>, 
              sou estudante de Ciência da Computação, com certificações em desenvolvimento front-end, 
              habilidades sólidas com bancos de dados SQL e experiência em desenvolvimento de landing 
              pages, sistemas web e sites de catálogo.
            </p>
            
            <p className="text-gray-300 leading-relaxed">
              Atualmente, também sou <span className="text-green-500 font-medium">cofundador de uma startup de tecnologia</span>, 
              onde desenvolvemos soluções personalizadas e projetos digitais modernos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};