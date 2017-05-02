import React from 'react';
import renderer from 'react-test-renderer';
import Home from 'components/home';

describe('Home', () => {
  const homeComponent = renderer.create(<Home/>).toJSON();

  it('renders correctly', () => {
    expect(homeComponent).toMatchSnapshot();
  });
});
