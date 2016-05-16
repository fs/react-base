import React from 'react';
import { shallow } from 'enzyme';
import ApplicationLayout from 'components/application/layout';
import HeaderLayout from 'components/header/layout';
import TodoModal from 'components/todo_modal/view';
import SigninModal from 'components/signin_modal/view';
import SignupModal from 'components/signup_modal/view';
import Footer from 'components/footer/view';

describe('ApplicationLayout', () => {
  const applicationComponent = shallow(<ApplicationLayout/>);

  it('renders main container', () => {
    expect(applicationComponent.find('main').length).toEqual(1);
  });

  it('renders HeaderLayout component', () => {
    expect(applicationComponent.contains(<HeaderLayout/>)).toEqual(true);
  });

  it('renders TodoModal component', () => {
    expect(applicationComponent.contains(<TodoModal/>)).toEqual(true);
  });

  it('renders SigninModal component', () => {
    expect(applicationComponent.contains(<SigninModal/>)).toEqual(true);
  });

  it('renders SignupModal component', () => {
    expect(applicationComponent.contains(<SignupModal/>)).toEqual(true);
  });

  it('renders Footer component', () => {
    expect(applicationComponent.contains(<Footer/>)).toEqual(true);
  });
});
