import React from 'react';
import renderer from 'react-test-renderer';
import Article from '../';

describe('Article', () => {
  let props;
  const renderComponent = () => renderer.create(<Article { ...props } />);

  beforeEach(() => {
    props = {
      match: {
        params: { id: '1' }
      }
    };
  });

  it('renders correctly', () => {
    expect(renderComponent().toJSON()).toMatchSnapshot();
  });
});
