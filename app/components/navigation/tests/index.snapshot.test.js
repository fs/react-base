import React from 'react';
import renderer from 'react-test-renderer';
import Navigation from 'components/navigation';

describe('Navigation', () => {
  let props;
  const renderComponent = () => renderer.create(<Navigation { ...props } />);

  beforeEach(() => {
    props = {
      loggedIn: false,
      currentUser: {},
      logout() {},
      signin() {},
      signup() {}
    };
  });

  it('renders correctly', () => {
    const navigationComponent = renderComponent();

    expect(navigationComponent.toJSON()).toMatchSnapshot();
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

    it('renders user navigations', () => {
      const navigationComponent = renderComponent();

      expect(navigationComponent.toJSON()).toMatchSnapshot();
    });
  });
});
