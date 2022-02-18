import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Localization from 'expo-localization';

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: require('./lang/en.json')
        },
        'ru-RU': {
            translation: require('./lang/ru.json')
        }
    },
    lng: Localization.locale,
    fallbackLng: 'en',
    keySeparator: false,
    supportedLngs: ['en', 'ru-RU'],
    interpolation: {
        escapeValue: false
    }
});

export default i18n;
