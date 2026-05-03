import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./locales/en.json";
import hi from "./locales/hi.json";
import ne from "./locales/ne.json";

export const SUPPORTED_LANGUAGES = [
  { code: "en", label: "EN", nativeLabel: "English" },
  { code: "hi", label: "हिं", nativeLabel: "हिन्दी" },
  { code: "ne", label: "ने", nativeLabel: "नेपाली" },
] as const;

export type LanguageCode = (typeof SUPPORTED_LANGUAGES)[number]["code"];

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      hi: { translation: hi },
      ne: { translation: ne },
    },
    fallbackLng: "en",
    supportedLngs: ["en", "hi", "ne"],
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
      lookupLocalStorage: "mssa.lang",
    },
  });

i18n.on("languageChanged", (lng) => {
  if (typeof document !== "undefined") {
    document.documentElement.lang = lng;
  }
});

if (typeof document !== "undefined") {
  document.documentElement.lang = i18n.language || "en";
}

export default i18n;
