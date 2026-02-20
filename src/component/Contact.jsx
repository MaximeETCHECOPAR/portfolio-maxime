export default function Contact() {
  return (
    <section id="contact" className="py-20 text-center">
      <h3 className="text-[#64ffda] font-mono mb-4 text-sm">Et après ?</h3>
      <h2 className="text-4xl font-bold text-[#e6f1ff] mb-6">Me contacter</h2>
      <p className="text-[#8892b0] mb-10 max-w-md mx-auto">
        Basé à Bayonne.
      </p>
      <a
        href="mailto:metchecopar0@gmail.com"
        className="inline-block px-8 py-4 border border-[#64ffda] text-[#64ffda] font-mono rounded hover:bg-[#64ffda]/10 transition-colors"
      >
        Envoyer un mail ici
      </a>
    </section>
  );
}
