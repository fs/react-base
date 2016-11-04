import React from 'react';
import { mount } from 'enzyme';
import Article from 'components/article';

describe('Article', () => {
  it('renders text with id from params', () => {
    const params = { id: '1' };
    const articleComponent = mount(<Article params={params} />);

    expect(articleComponent.text()).toContain('article id: 1');
  });
});
