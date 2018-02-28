import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import About from '../';

describe('About', () => {
  const renderComponent = () => renderer.create((
    <MemoryRouter>
      <About />
    </MemoryRouter>
  ));

  it('renders correctly', () => {
    expect(renderComponent().toJSON()).toMatchSnapshot();
  });
});
