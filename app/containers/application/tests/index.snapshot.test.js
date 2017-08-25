import React from 'react';
import renderer from 'react-test-renderer';
import withStore from 'helpers/store';
import Application from 'containers/application';

describe('Application', () => {
  it('renders correctly', () => {
    const component = (
      <Application>
        <div />
      </Application>
    );
    const state = {
      modal: {},
      session: {
        loggedIn: false,
        currentUser: {}
      }
    };
    const applicationComponent = renderer.create(withStore(component, state));

    expect(applicationComponent.toJSON()).toMatchSnapshot();
  });
});
