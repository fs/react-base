import React from 'react';
import { mount } from 'enzyme';
import Detailed from 'components/about/detailed';

describe('Detailed', () => {
  it('renders text with id from params', () => {
    const params = { id: 1 };
    const detailedComponent = mount(<Detailed params={ params }/>);

    expect(detailedComponent.text()).toContain('article id: 1');
  });
});
