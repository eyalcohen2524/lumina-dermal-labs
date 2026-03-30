import React, { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';

export type Language = 'en' | 'nl' | 'de' | 'fr' | 'es';

export const languages: { code: Language; name: string; flag: string }[] = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'nl', name: 'Nederlands', flag: '🇳🇱' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
];

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

// Simple provider wrapper - i18next handles everything
export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

// Custom hook that wraps react-i18next's useTranslation
export const useLanguage = (): LanguageContextType => {
  const { t, i18n: i18nInstance } = useTranslation();

  const setLanguage = (lang: Language) => {
    i18nInstance.changeLanguage(lang);
  };

  return {
    language: i18nInstance.language as Language,
    setLanguage,
    t: (key: string) => t(key),
  };
};

export { i18n };
