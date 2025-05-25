import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { Layout, Code2, Database } from 'lucide-react';

export const Specialties = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  const specialties = [
    {
      title: 'Landing Pages modernas',
      description:
        'Desenvolvimento de páginas de conversão otimizadas e atrativas, com design moderno e foco em resultados.',
      icon: <Layout className="text-green-500" size={36} />,
    },
    {
      title: 'Sistemas Web personalizados',
      description:
        'Criação de sistemas web sob medida para atender necessidades específicas do seu negócio, com interfaces intuitivas.',
      icon: <Code2 className="text-green-500" size={36} />,
    },
    {
      title: 'Sites de Catálogo para empresas',
      description:
        'Desenvolvimento de sites institucionais e catálogos digitais para empresas que desejam uma presença online profissional.',
      icon: <Database className="text-green-500" size={36} />,
    },
  ];

  return (
    <section
      id="especialidades"
      ref={sectionRef}
      className="py-20 bg-gray-900"
    >
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-center transition-all duration-700 ${
            isInView 
              ? 'opacity-100 transform-none' 
              : 'opacity-0 translate-y-10'
          }`}>
          <span className="text-white">Minhas</span>
          <span className="text-green-500 ml-2">Especialidades</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specialties.map((specialty, index) => (
            <div
              key={index}
              className={`bg-gray-800 rounded-xl p-8 shadow-xl transition-all duration-700 delay-${index * 200} hover:transform hover:-translate-y-2 hover:shadow-2xl hover:bg-gray-800/90 ${
                isInView 
                  ? 'opacity-100 transform-none' 
                  : 'opacity-0 translate-y-20'
              }`}
            >
              <div className="mb-6">{specialty.icon}</div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                {specialty.title}
              </h3>
              <p className="text-gray-300">{specialty.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};