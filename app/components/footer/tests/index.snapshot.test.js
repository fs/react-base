import React from 'react';
import renderer from 'react-test-renderer';
import withI18n from 'i18n-test';
import Footer from '../';

describe('Footer', () => {
  it('renders correctly', () => {
    const footerComponent = renderer.create(withI18n(<Footer/>)).toJSON();

    expect(footerComponent).toMatchSnapshot();
  });
});
