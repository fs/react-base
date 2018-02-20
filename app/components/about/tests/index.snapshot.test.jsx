import React from 'react';
import renderer from 'react-test-renderer';
import About from '../';

describe('About', () => {
  const renderComponent = () => renderer.create(<About />);

  it('renders correctly', () => {
    expect(renderComponent().toJSON()).toMatchSnapshot();
  });
});
