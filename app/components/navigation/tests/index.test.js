import React from 'react';
import { mount } from 'enzyme';
import Navigation from 'components/navigation';
import { Link } from 'react-router';

describe('Navigation', () => {
  const item = { title: 'cool story1', route: '/1' };
  const navigationComponent = mount(<Navigation item={ item }/>);

  it('renders Link with Navigation item', () => {
    const linkNode = navigationComponent.find(Link);

    expect(linkNode.props().to).toEqual(item.route);
    expect(linkNode.text()).toEqual(item.title);
  });
});
