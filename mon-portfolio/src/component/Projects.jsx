export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <h2 className="section-title">Expérience Marquante</h2>
      <div className="bg-[#112240] p-8 rounded-lg border border-slate-700 hover:-translate-y-2 transition-transform">
        <span className="text-blue-400 font-mono text-sm">Projet de Stage @ CVA Group</span>
        <h3 className="text-2xl font-bold text-white mt-2">Moteur de recherche de CVs</h3>
        <p className="my-4 text-slate-400">
          Développement d'une application web et d'un moteur d'indexation en Python pour automatiser 
          le tri de bases de données de CVs.
        </p>
        <div className="flex gap-4 font-mono text-xs text-blue-300">
          <span>Python</span> <span>Docker</span> <span>Cloud</span>
        </div>
      </div>
    </section>
  );
}