import { createI18n } from 'vue-i18n'

import en from './en/en.js'
import km from './km/km.js'
const languages = createI18n({
    locale: 'km',
    fallbackLocale: 'en',
    messages: {
        en,
        km
    }
})

export default languages;
