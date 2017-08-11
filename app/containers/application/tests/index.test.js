import React from 'react';
import renderer from 'react-test-renderer';
import Application from 'containers/application';

describe('Application', () => {
  it('renders correctly', () => {
    const applicationComponent = renderer.create(<Application/>).toJSON();

    expect(applicationComponent).toMatchSnapshot();
  });
});
