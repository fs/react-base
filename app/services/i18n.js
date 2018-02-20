import i18n from 'i18next';
import languageDetector from 'i18next-browser-languagedetector';
import storage from 'lib/storage';
import config from 'config';

const { localizationKey } = config.storage;
const defaultLanguage = 'en';
const currentLanguage = storage.get(localizationKey);
const getResources = () => {
  const requireContext = require.context('../locales', true, /\.json$/);

  return requireContext.keys().reduce((acc, value) => {
    const fileName = value.match(/.+\/(.+).json$/)[1];
    const languageDomain = value.match(/^\.\/(.+?)\/.+/)[1];

    return {
      ...acc,
      [languageDomain]: {
        ...acc[languageDomain],
        [fileName]: requireContext(value),
      },
    };
  }, {});
};

i18n
  .use(languageDetector)
  .init({
    fallbackLng: defaultLanguage,

    interpolation: {
      escapeValue: false,
    },

    lookupLocalStorage: localizationKey,
    caches: ['localStorage'],

    resources: getResources(),
  });

if (!currentLanguage) {
  i18n.changeLanguage(defaultLanguage);
}

export default i18n;
