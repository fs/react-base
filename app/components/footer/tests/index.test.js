import React from 'react';
import renderer from 'react-test-renderer';
import Footer from 'components/footer';

describe('Footer', () => {
  const footerComponent = renderer.create(<Footer/>).toJSON();

  it('renders correctly', () => {
    expect(footerComponent).toMatchSnapshot();
  });
});
