import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Header from './component/Header';
import Hero from './component/Hero';
import Projects from './component/Projects';
import Skills from './component/Skills';
import Contact from './component/Contact';
import Footer from './component/Footer';

const App = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#0a192f] text-[#ccd6f6] font-sans scroll-smooth">
        <Header />
        <main className="max-w-5xl mx-auto px-6 md:px-12 lg:px-24">
          <Hero />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default App;