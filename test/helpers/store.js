import React from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

export function containerProps(component) {
  const componentProps = Object.keys(component.props());
  const rejectedProps = ['store', 'storeSubscription', 'dispatch'];

  return componentProps.filter(item => !rejectedProps.includes(item));
}

export function containerWithStore(Component, state = {}, props = {}) {
  const fakeStore = configureStore([thunk])(state);

  return <Component {...props} store={fakeStore} />;
}
