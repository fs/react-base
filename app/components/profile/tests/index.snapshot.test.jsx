import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { fakeSession } from 'mocks/fakeSession';
import Profile from '../';

describe('Profile', () => {
  let props;
  const renderComponent = () => shallow(<Profile {...props} />);

  beforeEach(() => {
    props = fakeSession;
  });

  it('renders correctly', () => {
    expect(toJson(renderComponent())).toMatchSnapshot();
  });
});
