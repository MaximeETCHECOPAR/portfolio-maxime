import React, { createContext, useState } from 'react';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('fr');

  const translations = {
    fr: {
      // Header
      home: 'Accueil',
      projects: 'Projets',
      skills: 'Compétences',
      contact: 'Contact',
      
      // Hero
      hi: 'Salut, je suis',
      basedIn: 'Basé à Bayonne',
      downloadCV: 'Télécharger CV',
      secure: 'Téléchargement sécurisé',
      checkIntegrity: 'Vérifier l\'intégrité',
      verifyHash: 'Vous pouvez vérifier ce hash avec un outil externe pour confirmer l\'authenticité du fichier.',
      aboutMe: 'À propos de moi',
      profile: 'Profil',
      formation: 'Formation',
      experiences: 'Expériences',
      profileText: 'Étudiant en BUT Informatique, je développe des compétences solides en développement, algorithmique et gestion de projet. Curieux et rigoureux, je m\'investis pleinement dans les projets qui me sont confiés.',
      formationText: 'Actuellement en BUT Informatique à l\'IUT de Bayonne. J\'y apprends les bases de l\'ingénierie logicielle, les bases de données et le développement web moderne.',
      experiencesText: 'Projets académiques en Java, développement d\'interfaces en React, et participation à des hackathons locaux.',
      
      // Projects
      myPortfolio: 'MON PORTFOLIO',
      myProjects: 'Mes Projets',
      seeMyProjects: '-> Voir mes projets',
      
      // Skills
      myExpertise: 'MON EXPERTISE',
      mySkills: 'Compétences',
      
      // Contact
      stayInTouch: 'RESTONS EN CONTACT',
      contactMe: 'Me Contacter',
      basedInContact: 'Basé à Bayonne',
      sendEmail: 'Envoyer un mail',
      
      // Footer
      portfolioOf: 'Portfolio de Maxime ETCHECOPAR',
      copyright: 'Maxime ETCHECOPAR',
      developer: 'Développeur Web',
      webDeveloper: 'Développeur informatique',
      footerHome: 'Accueil',
      footerAbout: 'À propos',
      footerProjects: 'Projets',
      footerContact: 'Contact',
      
      // Projects Details
      cvSearchEngine: 'Moteur de recherche de CVs',
      cvSearchTag: 'Projet de Stage - CVA Group',
      cvSearchDesc: 'Développement d\'une application web et d\'un moteur d\'indexation en Python pour automatiser le tri de CVs.',
      gureKultura: 'GureKultura',
      gureKulturaTag: 'Projet de cours - BUT 2',
      gureKulturaDesc: 'Application web responsive qui promeut divers événements au sein de la région Basque.',
      avizons: 'Avizons',
      avizonsTag: 'Projet de cours - BUT 3',
      avizonsDesc: 'L\'application web de datavisualisation des données complexes (données massives de l\'IFREMER) pour que n\'importe quel utilisateur puisse comprendre les tendances de la pêche.',
      myPortfolioTitle: 'Mon portfolio',
      myPortfolioTag: 'Projet personnel',
      myPortfolioDesc: 'Ce portfolio que vous consultez actuellement, développé avec React et Tailwind CSS, pour présenter mes projets et compétences de manière moderne et responsive.',
    },
    en: {
      // Header
      home: 'Home',
      projects: 'Projects',
      skills: 'Skills',
      contact: 'Contact',
      
      // Hero
      hi: 'Hi, I\'m',
      basedIn: 'Based in Bayonne',
      downloadCV: 'Download CV',
      secure: 'Secure Download',
      checkIntegrity: 'Check Integrity',
      verifyHash: 'You can verify this hash with an external tool to confirm the authenticity of the file.',
      aboutMe: 'About Me',
      profile: 'Profile',
      formation: 'Education',
      experiences: 'Experiences',
      profileText: 'Computer Science student, I am developing strong skills in development, algorithms and project management. Curious and rigorous, I fully invest myself in the projects entrusted to me.',
      formationText: 'Currently studying Computer Science at Bayonne IUT. I\'m learning the fundamentals of software engineering, databases and modern web development.',
      experiencesText: 'Academic projects in Java, interface development in React, and participation in local hackathons.',
      
      // Projects
      myPortfolio: 'MY PORTFOLIO',
      myProjects: 'My Projects',
      seeMyProjects: '-> Take a look at my projects',
      
      // Skills
      myExpertise: 'MY EXPERTISE',
      mySkills: 'Skills',
      
      // Contact
      stayInTouch: 'LET\'S STAY IN TOUCH',
      contactMe: 'Contact Me',
      basedInContact: 'Based in Bayonne',
      sendEmail: 'Send an Email',
      
      // Footer
      portfolioOf: 'Portfolio of Maxime ETCHECOPAR',
      copyright: 'Maxime ETCHECOPAR',
      developer: 'Web Developer',
      webDeveloper: 'Software Developer',
      footerHome: 'Home',
      footerAbout: 'About',
      footerProjects: 'Projects',
      footerContact: 'Contact',
      
      // Projects Details
      cvSearchEngine: 'CV Search Engine',
      cvSearchTag: 'Internship Project - CVA Group',
      cvSearchDesc: 'Development of a web application and a Python indexing engine to automate CV sorting.',
      gureKultura: 'GureKultura',
      gureKulturaTag: 'Course Project - BUT 2',
      gureKulturaDesc: 'Responsive web application that promotes various events in the Basque region.',
      avizons: 'Avizons',
      avizonsTag: 'Course Project - BUT 3',
      avizonsDesc: 'Web data visualization application for complex data (large IFREMER datasets) to help any user understand fishing trends.',
      myPortfolioTitle: 'My Portfolio',
      myPortfolioTag: 'Personal Project',
      myPortfolioDesc: 'This portfolio you are currently viewing, developed with React and Tailwind CSS, to showcase my projects and skills in a modern and responsive way.',
    }
  };

  const t = (key) => translations[language][key] || key;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
