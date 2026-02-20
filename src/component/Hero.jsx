import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Info, Lock } from "lucide-react";

export default function Hero() {
  const [init, setInit] = useState(false);
  const [showHash, setShowHash] = useState(false);
  const [fileHash, setFileHash] = useState("");

  const calculateFileHash = async () => {
    try {
      const response = await fetch("/portfolio-maxime/CV_ETCHECOPAR_Maxime.pdf");
      const buffer = await response.arrayBuffer();
      const hashBuffer = await crypto.subtle.digest("SHA-256", buffer);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      const hashHex = hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
      setFileHash(hashHex);
    } catch (error) {
      console.error("Erreur lors du calcul du hash:", error);
    }
  };

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
      calculateFileHash();

    });
  }, []);

  const data = {
    profil: "Étudiant en BUT Informatique, je développe des compétences solides en développement, algorithmique et gestion de projet. Curieux et rigoureux, je m'investis pleinement dans les projets qui me sont confiés.",
    formation: "Actuellement en BUT Informatique à l'IUT de Bayonne. J'y apprends les bases de l'ingénierie logicielle, les bases de données et le développement web moderne.",
    experiences: "Projets académiques en Java, développement d'interfaces en React, et participation à des hackathons locaux."
  };

  return (
    <section className="relative min-h-[90vh] w-full flex items-center justify-center overflow-hidden bg-[#0a192f] px-6 py-10">      
      {/* 1. Particules en arrière-plan */}
      {init && (
        <Particles
          id="tsparticles"
          className="absolute inset-0 z-0" 
          options={{
            fpsLimit: 60,
            interactivity: {
              events: { onHover: { enable: true, mode: "repulse" } },
            },
            particles: {
              color: { value: "#64ffda" },
              links: { enable: false },
              move: {
                enable: true,
                speed: 0.6,
                direction: "none",
                random: true,
                outModes: { default: "out" },
              },
              number: { density: { enable: true, area: 800 }, value: 80 },
              opacity: { value: { min: 0.1, max: 0.4 } },
              size: { value: { min: 1, max: 3 } },
            },
            detectRetina: true,
          }}
        />
      )}

      {/* 2. Contenu Fusionné */}
      <div className="relative z-10 max-w-6xl w-full flex flex-col md:flex-row items-center gap-12">
        
        {/* Gauche : Image & Intro Rapide */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-6 md:w-1/3"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-[#64ffda] rounded-full blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <img 
              src="/portfolio-maxime/cv_maxime_photo.jpg"
              alt="Maxime" 
              className="relative w-56 h-56 md:w-72 md:h-72 rounded-full object-cover border-2 border-[#64ffda]/30 shadow-2xl"
            />
          </div>
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Maxime ETCHECOPAR</h1>
            <div className="flex items-center justify-center gap-2">
              <a 
                href="/portfolio-maxime/CV_ETCHECOPAR_Maxime.pdf" 
                download="CV_ETCHECOPAR_Maxime.pdf"
                className="inline-block px-6 py-2 border border-[#64ffda] text-[#64ffda] font-mono text-sm rounded hover:bg-[#64ffda]/10 transition-all"
              >
                Télécharger mon CV
              </a>
              <div className="group relative cursor-help">
                <Info size={18} className="text-[#64ffda] hover:text-cyan-300 transition-colors" />
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-[#112240] border border-[#64ffda] text-[#64ffda] text-xs px-3 py-2 rounded whitespace-nowrap z-50">
                  Téléchargement sécurisé
                </div>
              </div>
              <button
                onClick={() => setShowHash(!showHash)}
                className="group relative cursor-pointer"
                title="Vérifier l'intégrité du fichier"
              >
                <Lock size={18} className="text-green-400 hover:text-green-300 transition-colors" />
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-[#112240] border border-green-400 text-green-400 text-xs px-3 py-2 rounded whitespace-nowrap z-50">
                  Vérifier l'intégrité
                </div>
              </button>
            </div>
            {showHash && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-4 bg-green-400/10 border border-green-400/30 rounded text-xs text-green-400 max-w-xs break-all"
              >
                <div className="font-mono font-bold mb-2">SHA-256:</div>
                <div className="font-mono text-green-300">{fileHash || "Calcul en cours..."}</div>
                <div className="text-green-400/70 text-xs mt-3">
                  Vous pouvez vérifier ce hash avec un outil externe pour confirmer l'authenticité du fichier.
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Droite : Tabs Dynamiques */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 w-full bg-[#112240]/60 backdrop-blur-sm p-8 rounded-xl border border-white/5 shadow-xl"
        >
          <h2 className="text-3xl font-bold text-white mb-6">À propos de moi</h2>
          
          <Tabs defaultValue="profil" className="w-full">

            {Object.entries(data).map(([key, content]) => (
              <TabsContent key={key} value={key} className="mt-0">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={key}
                  className="min-h-[120px] leading-relaxed text-[#8892b0] text-lg"
                >
                  {content}
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>

          <div className="mt-10 flex gap-4">
            <a href="#projects" className="text-[#64ffda] font-mono text-sm hover:underline">
              → Voir mes projets
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}