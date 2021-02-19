import Vue from 'vue'
import VueI18n, { LocaleMessages } from 'vue-i18n'

Vue.use(VueI18n)

function loadLocaleMessages(): LocaleMessages {
  const locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)

  const messages: LocaleMessages = {}
  locales.keys().forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i)
    if (matched && matched.length > 1) {
      const locale = matched[1]
      messages[locale] = locales(key)
    }
  })
  return messages
}

/**
 * Helper to get the browser locale
 */
function getBrowserLocale() {

  const navigatorLocale = navigator.languages !== undefined ? navigator.languages[0] : navigator.language;
  if (!navigatorLocale) {
    return undefined;
  }

  const trimmedLocale = navigatorLocale.trim().split(/-|_/)[0];
  return trimmedLocale;
}



export default new VueI18n({
  locale: getBrowserLocale(),
  fallbackLocale: 'en',
  messages: loadLocaleMessages()
})