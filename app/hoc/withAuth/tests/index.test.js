import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter, Switch, Route } from 'react-router';
import { containerWithStore } from 'helpers/store';
import { fakeSession, fakeEmptySession } from 'mocks/fakeSession';
import paths from 'helpers/routes';
import withAuth from '../';

describe('withAuth HOC', () => {
  let state;

  const WrappedComponent = () => null;
  const Home = () => null;

  const renderComponent = () => {
    const EnhancedComponent = () => containerWithStore(withAuth(WrappedComponent), state);

    return mount(
      <MemoryRouter initialEntries={ ['/protected'] } >
        <Switch>
          <Route
            exact
            path={ paths.home() }
            component={ Home }
          />
          <Route path="/protected" component={ EnhancedComponent } />
        </Switch>
      </MemoryRouter>
    );
  };

  context('when authenticated', () => {
    beforeEach(() => {
      state = {
        session: fakeSession
      };
    });

    it('renders WrappedComponent', () => {
      const component = renderComponent().find(WrappedComponent);

      expect(component).toBePresent();
    });
  });

  context('when unauthenticated', () => {
    beforeEach(() => {
      state = {
        session: fakeEmptySession
      };
    });

    it('redirect to root', () => {
      const component = renderComponent().find(Home);

      expect(component).toBePresent();
    });
  });
});
