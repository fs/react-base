import React from 'react';
import { shallow } from 'enzyme';
import NavigationLeft from 'components/navigation/left';
import NavigationItem from 'components/navigation';

describe('NavigationLeft', () => {
  it('renders NavigationLeft with collection of NavigationItem', () => {
    const items = [{ title: 'cool story1', route: '/1' }, { id: 'cool story2', route: '/2' }];
    const navigationLeftComponent = shallow(<NavigationLeft items={items} />);
    const navigationItemNodes = navigationLeftComponent.find(NavigationItem);

    expect(navigationItemNodes.length).toEqual(2);
  });
});
