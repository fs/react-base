import React from 'react';
import { mount } from 'enzyme';
import Main from 'components/main';
import TodoLayout from 'components/todo/layout';
import Home from 'components/home';
import session from 'services/session';

describe('Main', () => {
  it('renders Home component', () => {
    const mainComponent = mount(<Main/>);

    expect(mainComponent.contains(<Home/>)).toEqual(true);
  });

  describe('when session is created', () => {
    it('renders TodoLayout component', () => {
      spyOn(session, 'loggedIn').and.returnValue(true);
      const mainComponent = mount(<Main/>);

      expect(mainComponent.contains(<TodoLayout/>)).toEqual(true);
    });
  });
});
