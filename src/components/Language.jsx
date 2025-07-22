import React, { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

const translations = {
  uz: {
    about: "Men haqimda",
    projects: "Loyihalar",
    programs: "Dasturlar",
    contact: "Aloqa",
  },
  ru: {
    about: "Обо мне",
    projects: "Проекты",
    programs: "Программы",
    contact: "Контакт",
  },
  en: {
    about: "About",
    projects: "Projects",
    programs: "Programs",
    contact: "Contact",
  },
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("language") || "uz";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);