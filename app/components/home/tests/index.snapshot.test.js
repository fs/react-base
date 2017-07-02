import React from 'react';
import renderer from 'react-test-renderer';
import withI18n from 'i18n-test';
import { Home } from '../';

describe('Home', () => {
  it('renders correctly', () => {
    const homeComponent = renderer.create(withI18n(<Home/>)).toJSON();

    expect(homeComponent).toMatchSnapshot();
  });
});
