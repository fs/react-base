import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import About from '../';

describe('About', () => {
  let props;
  const renderComponent = () => renderer.create(
    <MemoryRouter>
      <About { ...props } />
    </MemoryRouter>
  );

  beforeEach(() => {
    props = {
      match: {
        url: '/about'
      }
    };
  });

  it('renders correctly', () => {
    expect(renderComponent().toJSON()).toMatchSnapshot();
  });
});
