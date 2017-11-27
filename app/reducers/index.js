import { combineReducers } from 'redux';

const getReducers = requireContext => (
  requireContext.keys().reduce((acc, value, key) => {
    if (key === 0) return acc;

    const domain = value.match(/^\.\/(.+?)\/.+/)[1];

    return {
      ...acc,
      [domain]: requireContext(value).default
    };
  }, {})
);

export default combineReducers(
  getReducers(require.context('.', true, /.*^((?!\.test).)*\.js$/))
);
