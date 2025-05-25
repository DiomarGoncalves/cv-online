import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { MessageSquare } from 'lucide-react';

export const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  const whatsappLink = 'https://wa.me/5562996814937?text=Ol%C3%A1';

  return (
    <section
      id="contato"
      ref={sectionRef}
      className="py-20 bg-gray-900"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 transition-all duration-700 ${
            isInView 
              ? 'opacity-100 transform-none' 
              : 'opacity-0 translate-y-10'
          }`}>
            <span className="text-white">Vamos</span>
            <span className="text-green-500 ml-2">Conversar?</span>
          </h2>
          
          <p className={`text-gray-300 mb-10 text-lg transition-all duration-700 delay-100 ${
            isInView 
              ? 'opacity-100 transform-none' 
              : 'opacity-0 translate-y-10'
          }`}>
            Estou disponível para novos projetos e parcerias. Entre em contato e vamos transformar sua ideia em realidade!
          </p>
          
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-gray-900 font-semibold py-4 px-8 rounded-lg transition-all transform hover:scale-105 hover:shadow-lg text-lg transition-all duration-700 delay-200 ${
              isInView 
                ? 'opacity-100 transform-none' 
                : 'opacity-0 translate-y-10'
            }`}
          >
            <MessageSquare className="mr-2" size={24} />
            Fale comigo no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};