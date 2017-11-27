jest.mock('services/i18n', () => {
  const i18n = require('i18next');
  const LOCALE_FOLDER = 'app/locales/en';

  const getResources = () => {
    const fs = require('fs');

    return fs.readdirSync(LOCALE_FOLDER).reduce((acc, value, key) => {
      const fileName = value.match(/(.+).json$/)[1];

      return {
        'en': {
          ...acc['en'],
          [fileName]: require(`../../${LOCALE_FOLDER}/${value}`)
        }
      };
    }, {});
  };

  i18n.init({
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    resources: getResources()
  });

  return i18n;
});
