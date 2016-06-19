import React from 'react';
import { shallow } from 'enzyme';
import Application from 'components/application';
import Header from 'components/header';
import TodoModal from 'components/todo_modal';
import SigninModal from 'components/signin_modal';
import SignupModal from 'components/signup_modal';
import Footer from 'components/footer';

describe('Application', () => {
  const applicationComponent = shallow(<Application/>);

  it('renders Application component with child components', () => {
    expect(applicationComponent.find('main').length).toEqual(1);
    expect(applicationComponent.contains(<Header/>)).toEqual(true);
    expect(applicationComponent.contains(<TodoModal/>)).toEqual(true);
    expect(applicationComponent.contains(<SigninModal/>)).toEqual(true);
    expect(applicationComponent.contains(<SignupModal/>)).toEqual(true);
    expect(applicationComponent.contains(<Footer/>)).toEqual(true);
  });
});
