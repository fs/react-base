import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import Navigation from 'components/navigation';

describe('Navigation', () => {
  const signup = jest.fn();
  const signin = jest.fn();
  const logout = jest.fn();
  let props;
  const renderComponent = () => shallow(
    <MemoryRouter>
      <Navigation { ...props } />
    </MemoryRouter>
  )
    .find(Navigation)
    .dive();

  beforeEach(() => {
    props = {
      signin,
      signup,
      logout,
      loggedIn: false,
      currentUser: {}
    };
  });

  it('calls signup callback', () => {
    const navigationComponent = renderComponent();

    navigationComponent.find('NavItem').at(0).simulate('click');

    expect(signup).toHaveBeenCalled();
  });

  it('calls signin callback', () => {
    const navigationComponent = renderComponent();

    navigationComponent.find('NavItem').at(1).simulate('click');

    expect(signin).toHaveBeenCalled();
  });

  context('when user is logged in', () => {
    beforeEach(() => {
      props = {
        ...props,
        loggedIn: true,
        currentUser: {
          id: 1,
          name: 'user',
          email: 'user@example.com'
        }
      };
    });

    it('calls logout callback', () => {
      const navigationComponent = renderComponent();

      navigationComponent.find('NavItem').at(1).simulate('click');

      expect(logout).toHaveBeenCalled();
    });
  });
});
