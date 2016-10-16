export const SET_VALUE = 'SET_VALUE';

export const setValue = (name, value) => ({
  type: SET_VALUE,
  name,
  value
});
