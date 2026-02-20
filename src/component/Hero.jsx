import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function Hero() {
  const [init, setInit] = useState(false);

  // 1. Initialisation du moteur de particules
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    // On ajoute 'relative' et on s'assure que la section prend toute la largeur
    <section className="relative min-h-[70vh] w-full flex flex-col justify-center overflow-hidden bg-slate-950 px-8">
      
      {/* 2. Le composant Particles avec des options simplifiées pour tester */}
      {init && (
        <Particles
          id="tsparticles"
          // Important : s'assurer que le canvas prend toute la place
          className="absolute inset-0 z-0" 
          options={{
            fpsLimit: 60,
            interactivity: {
              events: {
                onHover: { enable: true, mode: "repulse" }, // Effet au survol
              },
            },
            particles: {
              color: { value: "#60a5fa" },
              links: {
                enable: false, // Désactivé pour n'avoir que des points comme sur ta photo
              },
              move: {
                enable: true,
                speed: 0.8,
                direction: "none",
                random: true,
                straight: false,
                outModes: { default: "out" },
              },
              number: {
                density: { enable: true, area: 800 },
                value: 100, // Nombre de points
              },
              opacity: {
                value: { min: 0.1, max: 0.5 },
              },
              shape: { type: "circle" },
              size: {
                value: { min: 1, max: 3 },
              },
            },
            detectRetina: true,
          }}
        />
      )}

      {/* 3. Ton contenu avec un z-index supérieur pour passer devant */}
      <div className="relative z-10">
        <p className="text-blue-400 font-mono mb-4">Salut, je suis</p>
        <h1 className="text-6xl font-bold text-white mb-4">Maxime ETCHECOPAR.</h1>
        <h2 className="text-4xl font-semibold text-slate-400 mb-6">
          Développeur Full-Stack & Étudiant en BUT Informatique.
        </h2>
        <p className="max-w-xl text-lg text-slate-300 mb-8">
          Passionné d'informatique depuis petit, je crée des solutions web modernes 
          comme des moteurs de recherche en Python ou des applications avec Angular et Laravel.
        </p>
        <a href="#contact" className="inline-block px-8 py-4 border border-blue-400 text-blue-400 hover:bg-blue-400/10 transition-colors">
          Voir mes projets
        </a>
      </div>
    </section>
  );
}