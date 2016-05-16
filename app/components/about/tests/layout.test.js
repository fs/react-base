import React from 'react';
import { shallow, mount } from 'enzyme';
import { Link } from 'react-router';
import AboutLayout from 'components/about/layout';
import AboutText from 'components/about/view';

describe('AboutLayout', () => {
  it('renders AboutLayout component with child components', () => {
    const aboutLayoutComponent = shallow(<AboutLayout/>);

    expect(aboutLayoutComponent.contains(<AboutText/>)).toEqual(true);
    expect(aboutLayoutComponent.find(Link).length).toEqual(1);
  });

  it('renders proper link inside Link component', () => {
    const aboutLayoutComponent = mount(<AboutLayout/>);

    expect(aboutLayoutComponent.find(Link).text()).toContain('show details...');
  });
});
