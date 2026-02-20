import { Github, ExternalLink, Folder } from "lucide-react";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Moteur de recherche de CVs",
      tag: "Projet de Stage - CVA Group",
      desc: "Développement d'une application web et d'un moteur d'indexation en Python pour automatiser le tri de CVs.",
      tech: ["Python","Docker","Elastic","Streamlit"],
    },
    {
      title: "GureKultura",
      tag: "Projet de cours - BUT 2",
      desc: "Application web responsive qui promeut divers événements au sein de la région Basque.",
      tech: ["Twig","Tailwind CSS","HTML/CSS","JavaScript", "MySQL"],
      github: "https://github.com/LilouDUFAU/GureKultura"
    },
    {
      title: "Avizons",
      tag: "Projet de cours - BUT 3",
      desc: "L'application web de datavisualisation des données complexes (données massives de l'IFREMER) pour que n'importe quel utilisateur puisse comprendre les tendances de la pêche.",
      tech: ["Angular","Echarts","Leaflet", "FastAPI", "PostgreSQL", "PostGis"],
    },
    {
      title: "Mon portfolio",
      tag: "Projet personnel",
      desc: "Ce portfolio que vous consultez actuellement, développé avec React et Tailwind CSS, pour présenter mes projets et compétences de manière moderne et responsive.",
      tech: ["React","Tailwind CSS","JavaScript","Vite"],
      github: "https://github.com/MaximeETCHECOPAR/portfolio-maxime"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-[#0a192f]">
      <div className="flex items-center justify-center gap-4 mb-16">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 60 }}
          transition={{ duration: 0.8 }}
          className="h-1 bg-gradient-to-r from-transparent to-[#64ffda]"
        />
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold text-[#e6f1ff] mt-2"
          >
            Mes Projets
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

      <div className="mx-auto max-w-4xl px-4 flex flex-col gap-10">
        {projects.map((p, i) => (
          <article
            key={i}
            className="project-item sticky top-[15vh]"
            style={{ 
              zIndex: i,
              paddingTop: `${i * 20}px` 
            }}
          >
            <div className="w-full bg-[#112240] border border-slate-700/50 rounded-2xl p-8 shadow-2xl transition-all duration-300 hover:border-blue-400/30">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                
                {/* Image Placeholder */}
                <div className="w-full md:w-1/3 h-40 bg-slate-800 rounded-lg flex items-center justify-center text-slate-500 font-mono text-xs border border-slate-700">
                  IMAGE_PREVIEW
                </div>

                <div className="flex-1">
                  <div className="text-sm text-blue-400 font-mono mb-1">{p.tag}</div>
                  <h3 className="text-2xl font-bold text-white mb-2">{p.title}</h3>
                  <p className="text-slate-300 mb-6 leading-relaxed">{p.desc}</p>
                  
                  <div className="flex flex-wrap gap-3 mb-6">
                    {p.tech.map((t, idx) => (
                      <span key={idx} className="px-3 py-1 bg-blue-400/10 text-blue-400 text-xs font-medium rounded border border-blue-400/20">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 text-slate-400">
                    {p.github && (
                      <a 
                        href={p.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-blue-400 cursor-pointer transition-colors"
                      >
                        <Github size={20} />
                        {/*<ExternalLink size={20} className="hover:text-blue-400 cursor-pointer transition-colors" />*/}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="h-[8vh]"></div>
    </section>
  );
}