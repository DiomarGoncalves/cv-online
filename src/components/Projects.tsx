import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { ExternalLink } from 'lucide-react';

export const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  const projects = [
    {
      title: 'Prados Embalagens',
      description: 'E-commerce institucional simples e direto.',
      imageUrl: 'https://raw.githubusercontent.com/DiomarGoncalves/cv-online/refs/heads/main/src/assets/predos_embalagens.png', // imagem do print fornecida
      link: 'https://prados-embalagens.vercel.app',
    },
    {
      title: 'Lokar Veículos',
      description: 'Plataforma para locação e visualização de veículos.',
      imageUrl: 'https://raw.githubusercontent.com/DiomarGoncalves/cv-online/refs/heads/main/src/assets/lokar.png', // imagem do print fornecida
      link: 'https://www.lokarveiculos.com.br',
    },
    {
      title: 'FinancEasy',
      description: 'Sistema de controle financeiro pessoal moderno.',
      imageUrl: 'https://raw.githubusercontent.com/DiomarGoncalves/cv-online/refs/heads/main/src/assets/financEasy.png', // imagem do print fornecida
      link: 'https://financeasy.alphadevss.com.br',
    },
    {
      title: 'AlphaDevs',
      description: 'Website da startup de desenvolvimento digital que cofundei.',
      imageUrl: 'https://raw.githubusercontent.com/DiomarGoncalves/cv-online/refs/heads/main/src/assets/alphaDevss.png', // imagem do print fornecida
      link: 'http://alphadevss.com.br',
    },
    {
      title: 'SistemaRestaurant',
      description: 'Sistema Para grandes e pequenos restaurantes',
      imageUrl: 'https://raw.githubusercontent.com/DiomarGoncalves/cv-online/refs/heads/main/src/assets/sistemaRestaurant.png', // imagem do print fornecida
      link: 'https://sistema-restaurant-3iea.vercel.app',
    },
  ];

  return (
    <section
      id="projetos"
      ref={sectionRef}
      className="py-20 bg-gray-800"
    >
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-center transition-all duration-700 ${
          isInView 
            ? 'opacity-100 transform-none' 
            : 'opacity-0 translate-y-10'
        }`}>
          <span className="text-white">Meus</span>
          <span className="text-green-500 ml-2">Projetos</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-gray-900 rounded-xl overflow-hidden shadow-xl transition-all duration-700 delay-${index * 100} hover:shadow-2xl ${
                isInView 
                  ? 'opacity-100 transform-none' 
                  : 'opacity-0 translate-y-20'
              }`}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-green-500 hover:text-green-400 transition-colors font-medium"
                >
                  Visitar Projeto
                  <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};