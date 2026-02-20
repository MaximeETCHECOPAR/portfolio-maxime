import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Skills() {
  const [openCategory, setOpenCategory] = useState(null);

  const categories = [
    {
      title: 'Frontend',
      slug: 'frontend',
      items: [
        { name: 'Angular', slug: 'angular' },
        { name: 'React', slug: 'react' },
        { name: 'HTML/CSS', slug: 'html5' },
        { name: 'Bootstrap', slug: 'bootstrap' },
        { name: 'TailwindCSS', slug: 'tailwindcss' },
      ],
    },
    {
      title: 'Backend / CMS',
      slug: 'backend',
      items: [
        { name: 'Laravel', slug: 'laravel' },
        { name: 'PHP', slug: 'php' },
        { name: 'WordPress', slug: 'wordpress' },
        { name: 'Python', slug: 'python' },
      ],
    },
    {
      title: 'Databases & Search',
      slug: 'databases',
      items: [
        { name: 'MySQL', slug: 'mysql' },
        { name: 'MongoDB', slug: 'mongodb' },
        { name: 'Elasticsearch', slug: 'elasticsearch' },
      ],
    },
    {
      title: 'DevOps / Tools',
      slug: 'devops',
      items: [
        { name: 'Docker', slug: 'docker' },
        { name: 'Git', slug: 'git' },
        { name: 'GitHub', slug: 'github' },
        { name: 'Jira', slug: 'jira' },
      ],
    },
    {
      title: 'Languages',
      slug: 'languages',
      items: [
        { name: 'TypeScript', slug: 'typescript' },
        { name: 'JavaScript', slug: 'javascript' },
        { name: 'Java', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg' },
        { name: 'C++', slug: 'cplusplus' },
      ],    
    },
  ];

  const toggleCategory = (title) => {
    setOpenCategory(openCategory === title ? null : title);
  };

  return (
    <section id="skills" className="py-20 max-w-4xl mx-auto px-4">
      <h3 className="text-2xl font-bold text-[#e6f1ff] mb-12 flex items-center">
        <span className="text-[#64ffda] font-mono mr-2 text-xl">02.</span> Compétences
      </h3>

      <div className="space-y-4">
        {categories.map((category) => (
          <div key={category.title} className="bg-[#112240] rounded-lg overflow-hidden border border-slate-800">
            {/* Bouton pour déplier */}
            <button
              onClick={() => toggleCategory(category.title)}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-[#1d2d50] transition-colors group"
            >
              <h4 className={`text-lg font-semibold transition-colors ${openCategory === category.title ? 'text-[#64ffda]' : 'text-[#e6f1ff]'}`}>
                {category.title}
              </h4>
              <span className={`text-[#64ffda] transition-transform duration-300 ${openCategory === category.title ? 'rotate-180' : ''}`}>
                ▼
              </span>
            </button>

            {/* Contenu dépliable avec Framer Motion */}
            <AnimatePresence>
              {openCategory === category.title && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <div className="px-6 pb-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 border-t border-slate-700/50 pt-6">
                    {category.items.map((item) => {
                      const src = item.icon || `https://cdn.simpleicons.org/${item.slug}`;
                      return (
                        <div
                          key={item.name}
                          className="bg-[#0a192f] p-4 rounded flex flex-col items-center justify-center space-y-3 border border-transparent hover:border-[#64ffda]/50 transition-all group"
                        >
                          <img 
                            src={src} 
                            alt={item.name} 
                            className="h-8 w-8 grayscale group-hover:grayscale-0 transition-all" 
                          />
                          <span className="text-xs font-mono text-[#ccd6f6]">{item.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}