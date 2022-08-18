import { boot } from 'quasar/wrappers'
import { createI18n } from 'vue-i18n'
import messages from 'src/i18n'

import locales from '../i18n'
const localeKeys = Object.keys(locales);

export default boot(({ app, urlPath }) => {
  let locale = urlPath.replace(/\/(#\/)?([^\/]+).*/i, '$2');
  if (!localeKeys.includes(locale)) locale = localeKeys[0];

  const i18n = createI18n({
    locale,
    fallbackLocale: localeKeys[0],
    globalInjection: true,
    legacy: false,
    messages
  })

  // Set i18n instance on app
  app.use(i18n)
})
