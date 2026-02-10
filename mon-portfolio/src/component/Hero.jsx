export default function Hero() {
  return (
    <section className="min-h-[70vh] flex flex-col justify-center">
      <p className="text-blue-400 font-mono mb-4">Salut, je suis</p>
      <h1 className="text-6xl font-bold text-white mb-4">Maxime ETCHECOPAR.</h1>
      <h2 className="text-4xl font-semibold text-slate-400 mb-6">
        Développeur Full-Stack & Étudiant en BUT Informatique.
      </h2>
      <p className="max-w-xl text-lg mb-8">
        Passionné d'informatique depuis petit, je crée des solutions web modernes 
        comme des moteurs de recherche en Python ou des applications avec Angular et Laravel.
      </p>
      <a href="#contact" className="w-fit px-8 py-4 border border-blue-400 text-blue-400 hover:bg-blue-400/10 transition-colors">
        Voir mes projets
      </a>
    </section>
  );
}