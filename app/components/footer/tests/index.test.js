import React from 'react';
import { mount } from 'enzyme';
import Footer from 'components/footer';

describe('Footer', () => {
  const footerComponent = mount(<Footer />);

  it('renders text', () => {
    expect(footerComponent.find('p').text()).toEqual('React-base');
  });
});
