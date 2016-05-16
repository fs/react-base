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

  it('renders ApplicationLayout component with child components', () => {
    expect(applicationComponent.find('main').length).toEqual(1);
    expect(applicationComponent.contains(<HeaderLayout/>)).toEqual(true);
    expect(applicationComponent.contains(<TodoModal/>)).toEqual(true);
    expect(applicationComponent.contains(<SigninModal/>)).toEqual(true);
    expect(applicationComponent.contains(<SignupModal/>)).toEqual(true);
    expect(applicationComponent.contains(<Footer/>)).toEqual(true);
  });
});
