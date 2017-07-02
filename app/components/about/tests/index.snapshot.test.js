import React from 'react';
import renderer from 'react-test-renderer';
import withI18n from 'i18n-test';
import About from '../';

describe('About', () => {
  it('renders correctly', () => {
    const aboutComponent = renderer.create(withI18n(<About/>)).toJSON();

    expect(aboutComponent).toMatchSnapshot();
  });
});
