import i18n from 'i18next'
import { initReactI18next } from "react-i18next"
import LanguageDetector from 'i18next-browser-languagedetector'

import en from './locales/en.json'
import th from './locales/th.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      th: { translation: th }
    },
    fallbackLng: 'en', // English if detection fails
    supportedLngs: ['en', 'th'],
    detection: {
      order: ['localStorage', 'navigator'], // check saved choice first, then browser language
      caches: ['localStorage'] // persist manual switches
    },
    interpolation: {
      escapeValue: false // React already escapes, so i18next shouldn't double-escape
    }
  })

export default i18n