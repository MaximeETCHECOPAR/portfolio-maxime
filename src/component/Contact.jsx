import * as React from "react"
import { motion } from "framer-motion"
import { useContext, useState, useEffect } from "react"
import { LanguageContext } from "../context/LanguageContext"
import emailjs from "@emailjs/browser"

export default function Contact() {
  const { t } = useContext(LanguageContext)
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    objet: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  // Initialiser EmailJS avec votre clé publique
  useEffect(() => {
    emailjs.init("SNeKB4y79S83hQQwT") // Remplacez par votre clé publique EmailJS
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const templateParams = {
        to_email: "metchecopar0@gmail.com",
        from_name: `${formData.prenom} ${formData.nom}`,
        from_email: formData.email,
        subject: formData.objet,
        message: formData.message,
      }

      await emailjs.send(
        "service_4z8kyvm",
        "template_oiw5mim",
        templateParams
      )

      setSubmitMessage("✓ Message envoyé avec succès!")
      setFormData({
        nom: "",
        prenom: "",
        objet: "",
        email: "",
        message: "",
      })
      setTimeout(() => setSubmitMessage(""), 4000)
    } catch (error) {
      console.error("Erreur EmailJS:", error)
      setSubmitMessage("✗ Erreur lors de l'envoi. Veuillez réessayer.")
      setTimeout(() => setSubmitMessage(""), 4000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 flex flex-col items-center min-h-screen">
      <div className="flex items-center gap-4 mb-16 w-full justify-center">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 60 }}
          transition={{ duration: 0.8 }}
          className="h-1 bg-gradient-to-r from-transparent to-[#64ffda]"
        />
        <div className="text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-[#64ffda] font-mono text-sm tracking-widest"
          >
            {t('stayInTouch')}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold text-[#e6f1ff] mt-2"
          >
            {t('contactMe')}
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

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="w-full max-w-2xl px-4 md:px-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="nom" className="block text-[#e6f1ff] font-mono text-sm mb-2">
              Nom
            </label>
            <input
              type="text"
              id="nom"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-[#112240] border-2 border-[#64ffda] text-[#e6f1ff] placeholder-[#64ffda]/50 rounded-lg focus:outline-none focus:border-[#64ffda] focus:shadow-lg focus:shadow-[#64ffda]/30 transition-all duration-300"
              placeholder="Votre nom"
            />
          </div>

          <div>
            <label htmlFor="prenom" className="block text-[#e6f1ff] font-mono text-sm mb-2">
              Prénom
            </label>
            <input
              type="text"
              id="prenom"
              name="prenom"
              value={formData.prenom}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-[#112240] border-2 border-[#64ffda] text-[#e6f1ff] placeholder-[#64ffda]/50 rounded-lg focus:outline-none focus:border-[#64ffda] focus:shadow-lg focus:shadow-[#64ffda]/30 transition-all duration-300"
              placeholder="Votre prénom"
            />
          </div>
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="block text-[#e6f1ff] font-mono text-sm mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-[#112240] border-2 border-[#64ffda] text-[#e6f1ff] placeholder-[#64ffda]/50 rounded-lg focus:outline-none focus:border-[#64ffda] focus:shadow-lg focus:shadow-[#64ffda]/30 transition-all duration-300"
            placeholder="votre.email@exemple.com"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="objet" className="block text-[#e6f1ff] font-mono text-sm mb-2">
            Objet
          </label>
          <input
            type="text"
            id="objet"
            name="objet"
            value={formData.objet}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-[#112240] border-2 border-[#64ffda] text-[#e6f1ff] placeholder-[#64ffda]/50 rounded-lg focus:outline-none focus:border-[#64ffda] focus:shadow-lg focus:shadow-[#64ffda]/30 transition-all duration-300"
            placeholder="Sujet de votre message"
          />
        </div>

        <div className="mb-8">
          <label htmlFor="message" className="block text-[#e6f1ff] font-mono text-sm mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="6"
            className="w-full px-4 py-3 bg-[#112240] border-2 border-[#64ffda] text-[#e6f1ff] placeholder-[#64ffda]/50 rounded-lg focus:outline-none focus:border-[#64ffda] focus:shadow-lg focus:shadow-[#64ffda]/30 transition-all duration-300 resize-none"
            placeholder="Votre message..."
          />
        </div>

        {submitMessage && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mb-6 p-4 rounded-lg text-center font-mono ${
              submitMessage.includes("succès")
                ? "bg-[#64ffda]/10 text-[#64ffda] border border-[#64ffda]"
                : "bg-red-500/10 text-red-400 border border-red-500"
            }`}
          >
            {submitMessage}
          </motion.div>
        )}

        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full px-8 py-4 border-2 border-[#64ffda] text-[#64ffda] font-mono rounded-lg hover:bg-[#64ffda] hover:text-[#0a192f] transition-all duration-300 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Envoi en cours..." : "Envoyer"}
        </motion.button>
      </motion.form>
    </section>
  )
}