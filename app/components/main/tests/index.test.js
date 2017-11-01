import React from 'react';
import { shallow } from 'enzyme';
import Main from '../';

jest.mock('containers/todo', () => 'TodoContainer');

describe('Main', () => {
  let props;
  let component;
  const renderComponent = () => shallow(<Main { ...props } />);

  beforeEach(() => {
    props = {
      loggedIn: false
    };
  });

  it('renders Home component', () => {
    component = renderComponent();

    expect(component.find('Home')).toBePresent();
  });

  context('when user is logged in', () => {
    beforeEach(() => {
      props = {
        loggedIn: true
      };
    });

    it('renders TodoContainer component', () => {
      component = renderComponent();

      expect(component.find('TodoContainer')).toBePresent();
    });
  });
});
