import React from 'react';
import { mount } from 'enzyme';
import Home from 'components/home';

describe('Home', () => {
  const homeComponent = mount(<Home/>);

  it('renders title', () => {
    expect(homeComponent.find('h1').text()).toEqual('React-base');
  });

  it('renders description text', () => {
    const innerText = 'Kick-start your new web application based on React and Redux technologies.';

    expect(homeComponent.find('p').text()).toContain(innerText);
  });
});
