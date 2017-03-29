import React from 'react';
import { mount } from 'enzyme';
import Main from 'components/main';
import TodoLayout from 'components/todo/layout';
import Home from 'components/home';
import currentUser from 'services/currentUser';

describe('Main', () => {
  it('renders Home component', () => {
    const mainComponent = mount(<Main/>);

    expect(mainComponent.contains(<Home/>)).toEqual(true);
  });

  describe('when session is created', () => {
    it('renders TodoLayout component', () => {
      spyOn(currentUser, 'loggedIn').and.returnValue(true);
      const mainComponent = mount(<Main/>);

      expect(mainComponent.contains(<TodoLayout/>)).toEqual(true);
    });
  });
});
