import React from 'react';
import { motion } from 'framer-motion';

const App = () => {
  return (
    <div className="min-h-screen bg-[#0a192f] text-[#ccd6f6] px-6 md:px-24 py-12 font-sans">
      {/* Header / Hero Section */}
      <header className="max-w-4xl mx-auto pt-20">
        <motion.p 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="text-[#64ffda] font-mono mb-5">
          Salut, moi c'est 
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-[#e6f1ff] mb-4">
          Maxime ETCHECOPAR.
        </motion.h1>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold text-[#8892b0] mb-6">
          En recherche active d'un stage
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          className="max-w-xl text-lg text-[#8892b0] mb-12">
          Étudiant en 3ème année de BUT Informatique à l'IUT d'Anglet. 
          Passionné par le développement Full-Stack et l'acquisition de nouvelles compétences.
        </motion.p>
      </header>

      {/* Experience Section */}
      <section className="max-w-4xl mx-auto py-20">
        <h3 className="text-2xl font-bold text-[#e6f1ff] mb-8 flex items-center">
          <span className="text-[#64ffda] font-mono mr-2 text-xl">01.</span> Expérience
        </h3>
        <div className="bg-[#112240] p-8 rounded shadow-xl border-l-4 border-[#64ffda]">
          <h4 className="text-xl font-bold text-[#e6f1ff]">Stagiaire Développeur Full-Stack</h4>
          <p className="text-[#64ffda] font-mono text-sm mb-4">CVA Group Engineering</p>
          <ul className="list-disc ml-5 text-[#8892b0] space-y-2">
            <li>Création d'une application web et d'un moteur de recherche en Python sur une base de CVs.</li>
            <li>Utilisation de Docker et des technologies Cloud pour l'indexation.</li>
          </ul>
        </div>
      </section>

      {/* Skills Section */}
      <section className="max-w-4xl mx-auto py-20">
        <h3 className="text-2xl font-bold text-[#e6f1ff] mb-8 flex items-center">
          <span className="text-[#64ffda] font-mono mr-2 text-xl">02.</span> Compétences
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 font-mono text-sm">
          {['Python', 'Laravel', 'Angular', 'TypeScrip', 'Docker', 'SQL/NoSQL'].map(skill => (
            <div key={skill} className="flex items-center space-x-2">
              <span className="text-[#64ffda]">▹</span>
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-4xl mx-auto py-20 text-center">
        <h3 className="text-[#64ffda] font-mono mb-4 text-sm">Et après ?</h3>
        <h2 className="text-4xl font-bold text-[#e6f1ff] mb-6">Me contacter</h2>
        <p className="text-[#8892b0] mb-10 max-w-md mx-auto">
          Basé à Bayonne, je suis actuellement disponible pour un stage de fin de BUT.
        </p>
        <a 
          href="mailto:metchecopar0@gmail.com" 
          className="inline-block px-8 py-4 border border-[#64ffda] text-[#64ffda] font-mono rounded hover:bg-[#64ffda]/10 transition-colors">
          Dire Bonjour
        </a>
      </section>
    </div>
  );
};

export default App;