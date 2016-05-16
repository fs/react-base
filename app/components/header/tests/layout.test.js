import React from 'react';
import { shallow, mount } from 'enzyme';
import { Navbar } from 'react-bootstrap';
import Header from 'components/header/layout';
import NavigationLeft from 'components/navigation/left';
import NavigationRight from 'components/navigation/right';

describe('Header', () => {
  it('renders Header component with child components', () => {
    const headerComponent = shallow(<Header/>);

    expect(headerComponent.find(Navbar.Header).length).toEqual(1);
    expect(headerComponent.find(Navbar.Brand).length).toEqual(1);
    expect(headerComponent.find(NavigationLeft).length).toEqual(1);
    expect(headerComponent.contains(<NavigationRight/>)).toEqual(true);
  });

  it('renders text inside Navbar.Brand component', () => {
    const headerComponent = mount(<Header/>);

    expect(headerComponent.find(Navbar.Brand).text()).toContain('React-base');
  });
});
