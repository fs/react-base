import React from 'react';
import { mount } from 'enzyme';
import Dashboard from 'components/dashboard/view';

describe('Dashboard', () => {
  const dashboardComponent = mount(<Dashboard/>);

  it('renders title', () => {
    expect(dashboardComponent.find('h1').text()).toEqual('React-base');
  });

  it('renders description text', () => {
    const innerText = 'Kick-start your new web application based on React and Flux technologies.';

    expect(dashboardComponent.find('p').text()).toContain(innerText);
  });
});
