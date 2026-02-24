import React, { useState, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LanguageContext } from '../context/LanguageContext';
import { ArrowUp } from 'lucide-react'; // Import de l'icône

export default function Footer() {
  const { t } = useContext(LanguageContext);
  const [showTooltip, setShowTooltip] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="w-full py-12 px-6 border-t border-white/5 bg-[#0a192f] mt-20 relative overflow-visible">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Partie Gauche : Copyright */}
        <div className="text-left">
          <h2 className="text-xl font-bold text-white">{t('portfolioOf')}</h2>
          <p className="text-[#8892b0] text-sm mt-1">
            © {new Date().getFullYear()} {t('copyright')}
          </p>
        </div>

        {/*Le bouton de retour en haut*/}
        <div className="flex items-center justify-right">
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -5, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="group relative flex flex-col items-center gap-2"
          >
            <div className="w-12 h-12 rounded-full bg-[#112240] border border-[#64ffda]/30 flex items-center justify-center text-[#64ffda] shadow-lg group-hover:border-[#64ffda] group-hover:shadow-[0_0_15px_rgba(100,255,218,0.2)] transition-all">
              <ArrowUp size={24} />
            </div>            
          </motion.button>
        </div>
      </div>
    </footer>
  );
}