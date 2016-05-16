import React from 'react';
import { shallow, mount } from 'enzyme';
import { Navbar } from 'react-bootstrap';
import Header from 'components/header/layout';
import NavigationLeft from 'components/navigation/left';
import NavigationRight from 'components/navigation/right';


describe('Header', () => {
  it('renders Navbar.Header component', () => {
    const headerComponent = shallow(<Header/>);

    expect(headerComponent.find(Navbar.Header).length).toEqual(1);
  });

  it('renders Navbar.Brand component', () => {
    const headerComponent = shallow(<Header/>);

    expect(headerComponent.find(Navbar.Brand).length).toEqual(1);
  });

  it('renders text inside Navbar.Brand component', () => {
    const headerComponent = mount(<Header/>);

    expect(headerComponent.find(Navbar.Brand).text()).toContain('React-base');
  });

  it('renders NavigationLeft component', () => {
    const headerComponent = shallow(<Header/>);

    expect(headerComponent.find(NavigationLeft).length).toEqual(1);
  });

  it('renders NavigationRight component', () => {
    const headerComponent = shallow(<Header/>);

    expect(headerComponent.contains(<NavigationRight/>)).toEqual(true);
  });
});
