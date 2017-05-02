import React from 'react';
import renderer from 'react-test-renderer';
import Article from 'components/article';

describe('Article', () => {
  const params = { id: '1' };
  const articleComponent = renderer.create(<Article params={ params }/>);

  it('renders correctly', () => {
    expect(articleComponent).toMatchSnapshot();
  });
});
