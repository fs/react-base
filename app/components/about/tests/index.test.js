import React from 'react';
import { shallow, mount } from 'enzyme';
import { Link } from 'react-router';
import About from 'components/about';

describe('About', () => {
  it('renders About component with child components', () => {
    const aboutComponent = shallow(<About/>);

    expect(aboutComponent.find(Link).length).toEqual(1);
  });

  it('renders proper link inside Link component', () => {
    const aboutComponent = mount(<About/>);

    expect(aboutComponent.find(Link).text()).toContain('show details...');
  });

  it('renders about text', () => {
    const aboutComponent = mount(<About/>);
    const innerText = 'Kick-start your new web application based on React and Redux technologies.';

    expect(aboutComponent.find('p').text()).toContain(innerText);
  });
});
