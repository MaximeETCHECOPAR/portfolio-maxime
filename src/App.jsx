import React from 'react';
import Hero from './component/Hero';
import Projects from './component/Projects';
import Skills from './component/Skills';
import Contact from './component/Contact';

const App = () => {
  return (
    <div className="min-h-screen bg-[#0a192f] text-[#ccd6f6] px-6 md:px-24 py-12 font-sans">
      <main className="max-w-4xl mx-auto">
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
};

export default App;