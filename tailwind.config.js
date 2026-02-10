/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0a192f', // Le bleu sombre du site de Mattin
        accent: '#64ffda',  // Le cyan pour les boutons/liens
      },
    },
  },
  plugins: [],
}