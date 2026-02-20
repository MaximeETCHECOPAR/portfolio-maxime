import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Footer() {
  const [showTooltip, setShowTooltip] = useState(false);
  return (
    <footer className="w-full py-12 px-6 border-t border-white/5 bg-[#0a192f] mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Partie Gauche : Copyright */}
        <div className="text-left">
          <h2 className="text-xl font-bold text-white">Portfolio de Maxime ETCHECOPAR</h2>
          <p className="text-[#8892b0] text-sm mt-1">
            © {new Date().getFullYear()} Maxime ETCHECOPAR
          </p>
        </div>

        {/* Partie Centrale : Photo avec Info-bulle dynamique */}
        <div className="relative">
          {/* Photo de profil miniature */}
          <motion.div 
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            whileHover={{ scale: 1.05 }}
            className="w-14 h-14 rounded-xl overflow-hidden border-2 border-[#64ffda]/40 shadow-xl cursor-pointer transition-all hover:border-[#64ffda] hover:shadow-[0_0_20px_rgba(100,255,218,0.3)]"
          >
            <img 
              src="/portfolio-maxime/cv_maxime_photo.jpg" 
              alt="Maxime" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Partie Droite : Navigation Navigation */}
        <nav className="flex items-center gap-3">
          {[
            { name: 'Revenir en haut', href: '#' },
            { name: 'Mes projets', href: '#projects' },
            { name: 'Me contacter', href: '#contact' }
          ].map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="px-5 py-2 bg-[#112240] text-[#ccd6f6] text-sm font-medium rounded-full border border-white/5 hover:bg-[#233554] hover:text-[#64ffda] transition-all shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
            >
              {item.name}
            </a>
          ))}
        </nav>

      </div>
    </footer>
  );
}