import React from 'react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

export default (Component, state) => {
  const fakeStore = configureStore([])(state);

  return (
    <Provider store={ fakeStore }>
      { Component }
    </Provider>
  );
};
