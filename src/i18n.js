import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import enTranslations from "./locales/en.json";
import bhTranslations from "./locales/bh.json";
import hiTranslations from "./locales/hi.json";
import maiTranslations from "./locales/mai.json";

const resources = {
  en: {
    translation: enTranslations,
  },
  hi: {
    translation: hiTranslations,
  },
  bh: {
    translation: bhTranslations,
  },
  mai: {
    translation: maiTranslations,
  },
};

i18n
  .use(Backend) // Load translations from JSON files
  .use(initReactI18next) // Pass i18n down to React components
  .init({
    resources,
    lng: "en", // Default language
    fallbackLng: "en", // Fallback language
    interpolation: {
      escapeValue: false, // Not needed for react as it escapes by default
    },
  });

export default i18n;
