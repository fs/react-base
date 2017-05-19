import React from 'react';
import renderer from 'react-test-renderer';
import About from '../';

describe('About', () => {
  it('renders correctly', () => {
    const aboutComponent = renderer.create(<About/>).toJSON();

    expect(aboutComponent).toMatchSnapshot();
  });
});
