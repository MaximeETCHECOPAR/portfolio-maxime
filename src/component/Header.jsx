import React, { useState, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { LanguageContext } from '../context/LanguageContext';

export default function Header() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useContext(LanguageContext);

  const navLinks = [
    { key: 'projects', href: '#projects' },
    { key: 'skills', href: '#skills' },
    { key: 'contact', href: '#contact' }
  ];

  return (
    <header className="sticky top-0 z-50 w-full py-4 px-6 border-b border-white/5 bg-[#0a192f]/95 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        
        {/* Partie Gauche : Logo/Branding */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3"
        >
          <div className="relative">
            {/* Info-bulle au survol */}
            <AnimatePresence>
              {showTooltip && (
                <motion.div 
                  initial={{ opacity: 0, y: 0, scale: 0.95 }}
                  animate={{ opacity: 1, y: 15, scale: 1 }}
                  exit={{ opacity: 0, y: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  className="absolute left-1/2 -translate-x-1/2 top-full mt-3 pointer-events-none"
                >
                  <div className="bg-gradient-to-br from-[#112240] to-[#0a192f] border border-[#64ffda]/40 rounded-xl p-4 shadow-2xl backdrop-blur-sm w-48">
                    <div className="text-center">
                      <h3 className="text-base font-bold text-white mb-1">Maxime ETCHECOPAR</h3>
                      <p className="text-[#64ffda] text-xs font-mono mb-2">{t('webDeveloper')}</p>
                      <p className="text-[#8892b0] text-xs">
                        IUT de Bayonne et du Pays Basque
                      </p>
                    </div>
                    {/* Triangle pointeur */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 -mb-1">
                      <div className="border-6 border-transparent border-b-[#112240]"></div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Logo miniature */}
            <motion.div 
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
                whileHover={{ scale: 1.1 }}
                className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#64ffda]/40 shadow-lg cursor-pointer transition-all hover:border-[#64ffda] hover:shadow-[0_0_15px_rgba(100,255,218,0.3)] bg-white" 
                >
                <img 
                    src="/portfolio-maxime/logo_ME.png" 
                    alt="Logo" 
                    className="w-full h-full object-cover scale-180"
                />
            </motion.div>
          </div>
        </motion.div>

        {/* Partie Centrale : Navigation (Desktop) */}
        <motion.nav 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="hidden md:flex items-center gap-2"
        >
          {navLinks.map((link, idx) => (
            <motion.a
              key={link.key}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + idx * 0.1 }}
              className="px-4 py-2 text-sm font-medium text-[#8892b0] hover:text-[#64ffda] transition-colors relative group"
            >
              {t(link.key)}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#64ffda] to-blue-400 group-hover:w-full transition-all duration-300"></span>
            </motion.a>
          ))}
        </motion.nav>

        {/* Partie Droite : Language Toggle + Menu Mobile Toggle */}
        <div className="flex items-center gap-3">
          {/* Language Toggle */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
            className="hidden sm:flex items-center gap-1 px-3 py-2 rounded-lg border border-[#64ffda]/40 hover:border-[#64ffda] hover:bg-[#64ffda]/10 transition-all text-[#64ffda] text-sm font-medium"
            title={language === 'fr' ? 'Passer en anglais' : 'Switch to French'}
          >
            <Globe size={16} />
            <span>{language.toUpperCase()}</span>
          </motion.button>

          {/* Menu Mobile Toggle */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="md:hidden p-2 hover:bg-[#112240] rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X size={24} className="text-[#64ffda]" />
            ) : (
              <Menu size={24} className="text-[#64ffda]" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Menu Mobile */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 border-t border-white/5 pt-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className="block px-4 py-2 text-sm font-medium text-[#8892b0] hover:text-[#64ffda] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t(link.key)}
              </a>
            ))}
            <button
              onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
              className="w-full text-left px-4 py-2 text-sm font-medium text-[#64ffda] hover:bg-[#112240] transition-colors flex items-center gap-2 rounded"
            >
              <Globe size={16} />
              {language === 'fr' ? 'English' : 'Français'}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
