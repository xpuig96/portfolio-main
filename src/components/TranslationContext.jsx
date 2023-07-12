import React, { useState, createContext } from 'react';
import en from './translations/en';
import es from './translations/es';
import esCt from './translations/es-ct';

export const TranslationContext = createContext();

export const TranslationProvider = ({ children }) => {
  const [language, setLanguage] = useState('es');

  const handleLanguageChange = (language) => {
    setLanguage(language);
  };

  const translations = {
    en,
    es,
    'es-ct': esCt,
  };

  const t = translations[language];

  return (
    <TranslationContext.Provider value={{ language, handleLanguageChange, t }}>
      {children}
    </TranslationContext.Provider>
  );
};
