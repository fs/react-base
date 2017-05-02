import React from 'react';
import renderer from 'react-test-renderer';
import About from 'components/about';

describe('About', () => {
  const aboutComponent = renderer.create(<About/>).toJSON();

  it('renders correctly', () => {
    expect(aboutComponent).toMatchSnapshot();
  });
});
