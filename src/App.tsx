import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Specialties } from './components/Specialties';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-['Poppins',sans-serif]">
      <Header />
      <Hero />
      <About />
      <Specialties />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;