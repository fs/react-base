import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import { containerWithStore, containerProps } from 'helpers/store';
import { fakeSession } from 'mocks/fakeSession';
import Navigation from '../';

describe('Navigation', () => {
  let state;
  let component;
  const renderComponent = () => mount((
    <MemoryRouter>
      {containerWithStore(Navigation, state)}
    </MemoryRouter>
  ));

  beforeEach(() => {
    state = {
      session: fakeSession,
    };
  });

  it('renders Navigation component', () => {
    component = renderComponent().find('Navigation');
    const navigationProps = containerProps(component);

    expect(component).toBePresent();
    expect(navigationProps).toEqual(expect.arrayContaining(['loggedIn', 'currentUser', 'logout', 'signin', 'signup']));
  });
});
