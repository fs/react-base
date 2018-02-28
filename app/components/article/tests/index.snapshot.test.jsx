import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter, Switch, Route } from 'react-router';
import { routes, paths } from 'helpers/routes';
import Article from '../';

describe('Article', () => {
  const renderComponent = () => renderer.create((
    <MemoryRouter initialEntries={[paths.aboutExtended({ id: '1' })]} >
      <Switch>
        <Route
          exact
          path={routes.aboutExtended}
          component={Article}
        />
      </Switch>
    </MemoryRouter>
  ));

  it('renders correctly', () => {
    expect(renderComponent().toJSON()).toMatchSnapshot();
  });
});
