import i18n from 'i18next';
import languageDetector from 'i18next-browser-languagedetector';
import storage from 'lib/storage';
import config from 'config';

const currentLanguage = storage.get(config.storage.localizationKey);
const getResources = () => {
  const requireContext = require.context('../locales', true, /\.json$/);

  return requireContext.keys().reduce((acc, value, key) => {
    const fileName = value.match(/.+\/(.+).json$/)[1];
    const languageDomain = value.match(/^\.\/(.+?)\/.+/)[1];

    return {
      ...acc,
      [languageDomain]: {
        ...acc[languageDomain],
        [fileName]: requireContext(value)
      }
    };
  }, {});
};

i18n
  .use(languageDetector)
  .init({
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false
    },

    ns: ['common'],
    defaultNS: 'common',

    lookupLocalStorage: config.storage.localizationKey,
    caches: ['localStorage'],

    resources: getResources()
  });

if (!currentLanguage) {
  i18n.changeLanguage('en');
}

export default i18n;
