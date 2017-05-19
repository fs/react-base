import React from 'react';
import renderer from 'react-test-renderer';
import Article from '../';

describe('Article', () => {
  it('renders correctly', () => {
    const params = { id: '1' };
    const articleComponent = renderer.create(<Article params={ params }/>);

    expect(articleComponent).toMatchSnapshot();
  });
});
