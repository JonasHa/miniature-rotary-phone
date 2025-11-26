import { createI18n } from 'vue-i18n'
import en from './locales/en'
import es from './locales/es'
import fr from './locales/fr'
import sv from './locales/sv'

const messages = {
  en,
  es,
  fr,
  sv,
}

// Check for __wll in localStorage, fallback to 'en'
const getInitialLocale = () => {
  const wllValue = localStorage.getItem('__wll')
  if (wllValue) {
    const locale = wllValue.toLowerCase()
    if (['en', 'es', 'fr', 'sv'].includes(locale)) {
      return locale
    }
  }
  return 'en'
}

const i18n = createI18n({
  legacy: false,
  locale: getInitialLocale(),
  fallbackLocale: 'en',
  messages,
})

export default i18n
