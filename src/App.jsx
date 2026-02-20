import React from 'react';
import Hero from './component/Hero';
import Projects from './component/Projects';
import Skills from './component/Skills';
import Contact from './component/Contact';

const App = () => {
  return (
    <div className="min-h-screen bg-[#0a192f] text-[#ccd6f6] font-sans scroll-smooth">
      <main className="max-w-5xl mx-auto px-6 md:px-12 lg:px-24">
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
};

export default App;