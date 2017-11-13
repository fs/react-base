jest.mock('reducers', () => {
  const { combineReducers } = require('redux');
  const REDUCERS_FOLDER = 'app/reducers';

  const getReducers = () => {
    const fs = require('fs');

    return fs.readdirSync(REDUCERS_FOLDER).reduce((acc, value, key) => {
      if (key === 0) return acc;

      const reducer = require(`../../${REDUCERS_FOLDER}/${value}/index.js`);

      console.log(value, reducer);

      return {
        ...acc,
        [value]: reducer.default
      };
    }, {});
  };

  return combineReducers(
    getReducers()
  );
});
