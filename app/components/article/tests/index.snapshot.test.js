import React from 'react';
import renderer from 'react-test-renderer';
import withI18n from 'i18n-test';
import Article from '../';

describe('Article', () => {
  it('renders correctly', () => {
    const params = { id: '1' };
    const articleComponent = renderer.create(withI18n(<Article params={ params }/>));

    expect(articleComponent).toMatchSnapshot();
  });
});
