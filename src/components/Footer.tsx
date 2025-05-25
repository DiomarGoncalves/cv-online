import React from 'react';
import { Code, Github, Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 flex items-center">
            <Code className="text-green-500 mr-2" size={24} />
            <span className="text-xl font-bold text-white">Diomar Gonçalves</span>
          </div>
          
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-500 transition-colors"
              aria-label="Github"
            >
              <Github size={22} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-500 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
            <a 
              href="mailto:contato@email.com" 
              className="text-gray-400 hover:text-green-500 transition-colors"
              aria-label="Email"
            >
              <Mail size={22} />
            </a>
          </div>
          
          <div className="text-gray-400 text-sm">
            &copy; {currentYear} Diomar Gonçalves. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};