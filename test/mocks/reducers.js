jest.mock('reducers', () => {
  const { combineReducers } = require('redux');
  const LOCALE_FOLDER = 'app/reducers';

  const getReducers = () => {
    const fs = require('fs');

    return fs.readdirSync(LOCALE_FOLDER).reduce((acc, value, key) => {
      console.log(value);

      // if (key === 0) return acc;

      // const domain = value.match(/^\.\/(.+?)\/.+/)[1];

      // return {
      //   ...acc,
      //   [domain]: require(`../${LOCALE_FOLDER}/${value}`)
      // };
      return acc;
    }, {});
  }

  return combineReducers(
    getReducers()
  );
});
