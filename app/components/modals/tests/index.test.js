import React from 'react';
import { mount } from 'enzyme';
import Modals from 'components/modals';

describe('Modals', () => {
  const modalsComponent = mount(<Modals />);

  it('renders wrapper', () => {
    expect(modalsComponent.find('div').length).toEqual(1);
  });
});
