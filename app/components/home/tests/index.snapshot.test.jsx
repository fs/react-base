import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../';

describe('Home', () => {
  const renderComponent = () => renderer.create(<Home />);

  it('renders correctly', () => {
    expect(renderComponent().toJSON()).toMatchSnapshot();
  });
});
