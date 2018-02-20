import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import fakeSession from 'mocks/fakeSession';
import Application from '../';

describe('Application', () => {
  let props;
  const renderComponent = () => shallow(<Application {...props}>
    <div />
                                        </Application>);

  beforeEach(() => {
    props = {
      logout: () => {},
      session: fakeSession,
      signin: () => {},
      signup: () => {},
    };
  });

  it('renders correctly', () => {
    expect(toJson(renderComponent())).toMatchSnapshot();
  });
});
