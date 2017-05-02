import React from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Main from 'components/main';

describe('Main', () => {
  it('renders correctly', () => {
    const mainComponent = renderer.create(<Main/>).toJSON();

    expect(mainComponent).toMatchSnapshot();
  });

  describe('when session is created', () => {
    it('renders Todo container', () => {
      const middlewares = [thunk];
      const mockStore = configureStore(middlewares);
      const store = mockStore({ todos: { todos: [] }});
      const mainComponent = renderer.create(
        <Provider store={ store }>
          <Main loggedIn={ true }/>
        </Provider>
      ).toJSON();

      expect(mainComponent).toMatchSnapshot();
    });
  });
});
