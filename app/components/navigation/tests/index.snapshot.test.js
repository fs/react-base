import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { NavItem } from 'react-bootstrap';
import Navigation from 'components/navigation';

describe('Navigation', () => {
  let data;
  const renderComponent = () => renderer.create(<Navigation { ...data } />).toJSON();

  beforeEach(() => {
    data = {
      loggedIn: false,
      currentUser: {},
      logout() {},
      signin() {},
      signup() {}
    };
  });

  it('renders correctly', () => {
    const navigationComponent = renderComponent();

    expect(navigationComponent).toMatchSnapshot();
  });

  context('when session is created', () => {
    beforeEach(() => {
      data = {
        ...data,
        loggedIn: true,
        currentUser: {
          id: 1,
          name: 'user',
          email: 'user@example.com'
        }
      };
    });

    it('renders user navigations', () => {
      const navigationComponent = renderComponent();

      expect(navigationComponent).toMatchSnapshot();
    });
  });
});
