import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../';

describe('Home', () => {
  it('renders correctly', () => {
    const homeComponent = renderer.create(<Home/>).toJSON();

    expect(homeComponent).toMatchSnapshot();
  });
});
