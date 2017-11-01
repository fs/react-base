import React from 'react';
import renderer from 'react-test-renderer';
import Footer from '../';

describe('Footer', () => {
  const renderComponent = () => renderer.create(<Footer />);

  it('renders correctly', () => {
    expect(renderComponent().toJSON()).toMatchSnapshot();
  });
});
