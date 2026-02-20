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
        { name: 'ECharts', slug: 'echarts' },
      ],
    },
    {
      title: 'Backend / CMS',
      slug: 'backend',
      items: [
        { name: 'Laravel', slug: 'laravel' },
        { name: 'PHP', slug: 'php' },
        { name: 'Twig', slug: 'twig' },
        { name: 'Streamlit', slug: 'streamlit' },
        { name: 'WordPress', slug: 'wordpress' },
        { name: 'Python', slug: 'python' },
        { name: 'Python (ETL)', slug: 'python' },
      ],
    },
    {
      title: 'Databases & Search',
      slug: 'databases',
      items: [
        { name: 'MySQL', slug: 'mysql' },
        { name: 'MongoDB', slug: 'mongodb' },
        { name: 'Elasticsearch', slug: 'elasticsearch' },
        { name: 'PostgreSQL', slug: 'postgresql' },
        { name: 'PostGIS', slug: 'postgis' },
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
      <div className="flex items-center gap-4 mb-16">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 60 }}
          transition={{ duration: 0.8 }}
          className="h-1 bg-gradient-to-r from-transparent to-[#64ffda]"
        />
        <div className="text-center flex-1">

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold text-[#e6f1ff] mt-2"
          >
            Compétences
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 120 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="h-1 bg-gradient-to-r from-[#64ffda] to-blue-400 mx-auto mt-4"
          />
        </div>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 60 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="h-1 bg-gradient-to-l from-transparent to-[#64ffda]"
        />
      </div>

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
                                  onError={(e) => {
                                    const initials = item.name
                                      .split(/\s+/)
                                      .map((s) => s[0])
                                      .slice(0, 2)
                                      .join("")
                                      .toUpperCase();
                                    const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='64' height='64'><rect width='100%' height='100%' fill='%23202a37'/><text x='50%' y='50%' font-size='28' fill='%23cbd5e1' font-family='Inter, system-ui, sans-serif' dominant-baseline='middle' text-anchor='middle'>${initials}</text></svg>`;
                                    e.currentTarget.src = `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
                                  }}
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